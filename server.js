const express = require('express');
const { products, categories } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// --- Basic auth matching the iOS app (username: veka, password: nenitohotovy)
function basicAuth(req, res, next) {
  const header = req.headers['authorization'] || '';
  if (!header.startsWith('Basic ')) {
    res.set('WWW-Authenticate', 'Basic realm="Rohlik API"');
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const base64 = header.slice('Basic '.length);
  let decoded = '';
  try {
    decoded = Buffer.from(base64, 'base64').toString('utf8');
  } catch (e) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const [username, password] = decoded.split(':');
  if (username === 'veka' && password === 'nenitohotovy') {
    return next();
  }

  res.set('WWW-Authenticate', 'Basic realm="Rohlik API"');
  return res.status(401).json({ error: 'Unauthorized' });
}

app.use(basicAuth);

// --- In-memory users --------------------------------------------------------

// Seed user so the hardcoded credentials in the iOS app work out of the box.
const users = [
  {
    id: 1,
    email: 'martin.stekl@gmail.com',
    password: 'thebestpasswordever',
    name: 'Martin Štekl',
    phone: '+420728778677'
  }
];

let nextUserId = 2;

// --- Helpers ----------------------------------------------------------------

function normalizeUserFromBody(body) {
  if (!body || typeof body !== 'object') return null;
  const user = body.user || {};
  if (!user.email || typeof user.email !== 'string') return null;
  return {
    email: user.email,
    password: typeof user.password === 'string' ? user.password : '',
    name: typeof user.name === 'string' ? user.name : '',
    phone: typeof user.phone === 'string' ? user.phone : '',
    fb: user.fb || null
  };
}

// --- Routes -----------------------------------------------------------------

// Registration endpoint used by the original API design.
app.post('/api/v1/users', (req, res) => {
  const incoming = normalizeUserFromBody(req.body);
  if (!incoming) {
    return res.status(400).json({ error: 'Invalid user payload' });
  }

  let existing = users.find(u => u.email === incoming.email);

  // If user already exists, behave as if registration succeeded to keep
  // the client happy for demo purposes.
  if (!existing) {
    existing = {
      id: nextUserId++,
      email: incoming.email,
      password: incoming.password,
      name: incoming.name,
      phone: incoming.phone
    };
    users.push(existing);
  }

  return res.status(201).json({ user: existing });
});

// Login / access token endpoint.
// NOTE: The iOS app also (incorrectly) uses this URL for registration.
app.post('/api/v1/login/access_token', (req, res) => {
  const incoming = normalizeUserFromBody(req.body);
  if (!incoming) {
    return res.status(400).json({ error: 'Invalid user payload' });
  }

  // Heuristic: if name / phone / fb are present, treat as registration.
  const looksLikeRegistration =
    incoming.name || incoming.phone || (incoming.fb && (incoming.fb.uid || incoming.fb.token));

  if (looksLikeRegistration) {
    let existing = users.find(u => u.email === incoming.email);
    if (!existing) {
      existing = {
        id: nextUserId++,
        email: incoming.email,
        password: incoming.password,
        name: incoming.name,
        phone: incoming.phone
      };
      users.push(existing);
    }
    return res.status(201).json({ user: existing });
  }

  const user = users.find(u => u.email === incoming.email && u.password === incoming.password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // The client only checks for HTTP 201; it ignores the body,
  // but we return a token-like payload for completeness.
  return res.status(201).json({
    access_token: 'dummy-token',
    token_type: 'bearer',
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  });
});

// Resolve product image to a loadable URL (placeholder service so UICollectionView has images).
function productImageUrl(product) {
  const path = product.image || '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // Deterministic placeholder per product (300x300 for list/cell thumbnails).
  return `https://picsum.photos/seed/${product.id}/300/300`;
}

// Products list: shape matches what RHParser+products.m expects.
app.get('/api/v1/products', (req, res) => {
  const payload = products.map((p) => ({
    ...p,
    image: productImageUrl(p)
  }));
  res.json({ products: payload });
});

// Categories list: dictionary-of-objects format that RHParser+categories.m expects.
app.get('/api/v1/categories', (req, res) => {
  res.json({ categories });
});

app.listen(PORT, '0.0.0.0', () => {
  // eslint-disable-next-line no-console
  console.log(`Rohlik backend listening on http://169.254.208.40:${PORT}`);
});

