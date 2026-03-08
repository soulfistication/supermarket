// Seed data for the local Rohlik backend.
// This does NOT come from the live Rohlik.cz API (there is no public one);
// it is a hand-curated dataset inspired by typical supermarket assortments.

const categories = {
  '1': { id: 1, name: 'Fruit & Vegetables', parent_id: null },
  '2': { id: 2, name: 'Dairy & Eggs', parent_id: null },
  '3': { id: 3, name: 'Bakery', parent_id: null },
  '4': { id: 4, name: 'Meat & Fish', parent_id: null },
  '5': { id: 5, name: 'Pantry', parent_id: null },
  '6': { id: 6, name: 'Drinks', parent_id: null },
  '7': { id: 7, name: 'Snacks & Sweets', parent_id: null },
  '8': { id: 8, name: 'Frozen', parent_id: null },
  '9': { id: 9, name: 'Household', parent_id: null },
  '10': { id: 10, name: 'Personal Care', parent_id: null }
};

function catRef(id) {
  const c = categories[String(id)];
  return { id: c.id, name: c.name, parent_id: c.parent_id };
}

// We generate ~200 products across the categories above.
const products = [
  // Fruit & Vegetables (1–20)
  {
    id: 1001,
    name: 'Bananas',
    amount: 1,
    image: '/images/fruit/bananas.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1002,
    name: 'Gala Apples 1kg',
    amount: 1,
    image: '/images/fruit/apples-gala.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1003,
    name: 'Granny Smith Apples 1kg',
    amount: 1,
    image: '/images/fruit/apples-granny.png',
    price: { amount: 42.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1004,
    name: 'Lemons 500g',
    amount: 1,
    image: '/images/fruit/lemons.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1005,
    name: 'Oranges 1kg',
    amount: 1,
    image: '/images/fruit/oranges.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1006,
    name: 'Seedless Grapes 500g',
    amount: 1,
    image: '/images/fruit/grapes.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1007,
    name: 'Cherry Tomatoes 250g',
    amount: 1,
    image: '/images/veg/cherry-tomatoes.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1008,
    name: 'Tomatoes 1kg',
    amount: 1,
    image: '/images/veg/tomatoes.png',
    price: { amount: 44.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1009,
    name: 'Cucumbers',
    amount: 1,
    image: '/images/veg/cucumbers.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1010,
    name: 'Red Bell Peppers 500g',
    amount: 1,
    image: '/images/veg/red-peppers.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1011,
    name: 'Carrots 1kg',
    amount: 1,
    image: '/images/veg/carrots.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1012,
    name: 'Potatoes 2kg',
    amount: 1,
    image: '/images/veg/potatoes.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1013,
    name: 'Onions 1kg',
    amount: 1,
    image: '/images/veg/onions.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1014,
    name: 'Garlic 200g',
    amount: 1,
    image: '/images/veg/garlic.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1015,
    name: 'Iceberg Lettuce',
    amount: 1,
    image: '/images/veg/iceberg-lettuce.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1016,
    name: 'Mixed Salad Leaves 150g',
    amount: 1,
    image: '/images/veg/mixed-salad.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1017,
    name: 'Broccoli',
    amount: 1,
    image: '/images/veg/broccoli.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1018,
    name: 'Cauliflower',
    amount: 1,
    image: '/images/veg/cauliflower.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1019,
    name: 'Zucchini 500g',
    amount: 1,
    image: '/images/veg/zucchini.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(1)]
  },
  {
    id: 1020,
    name: 'White Mushrooms 250g',
    amount: 1,
    image: '/images/veg/mushrooms.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(1)]
  },

  // Dairy & Eggs (21–40)
  {
    id: 1021,
    name: 'Whole Milk 1l',
    amount: 1,
    image: '/images/dairy/whole-milk-1l.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1022,
    name: 'Semi-Skimmed Milk 1l',
    amount: 1,
    image: '/images/dairy/semi-milk-1l.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1023,
    name: 'Skimmed Milk 1l',
    amount: 1,
    image: '/images/dairy/skim-milk-1l.png',
    price: { amount: 18.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1024,
    name: 'Fresh Cream 200ml',
    amount: 1,
    image: '/images/dairy/cream-200ml.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1025,
    name: 'Butter 250g',
    amount: 1,
    image: '/images/dairy/butter-250g.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1026,
    name: 'Salted Butter 250g',
    amount: 1,
    image: '/images/dairy/butter-salted-250g.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1027,
    name: 'Natural Yogurt 150g',
    amount: 1,
    image: '/images/dairy/yogurt-natural-150g.png',
    price: { amount: 9.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1028,
    name: 'Strawberry Yogurt 150g',
    amount: 1,
    image: '/images/dairy/yogurt-strawberry-150g.png',
    price: { amount: 11.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1029,
    name: 'Greek Yogurt 150g',
    amount: 1,
    image: '/images/dairy/yogurt-greek-150g.png',
    price: { amount: 14.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1030,
    name: 'Hard Cheese Block 250g',
    amount: 1,
    image: '/images/dairy/hard-cheese-250g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1031,
    name: 'Sliced Cheese 150g',
    amount: 1,
    image: '/images/dairy/sliced-cheese-150g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1032,
    name: 'Cottage Cheese 200g',
    amount: 1,
    image: '/images/dairy/cottage-cheese-200g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1033,
    name: 'Cream Cheese 150g',
    amount: 1,
    image: '/images/dairy/cream-cheese-150g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1034,
    name: 'Eggs M 10pcs',
    amount: 1,
    image: '/images/dairy/eggs-m-10.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1035,
    name: 'Eggs L 10pcs',
    amount: 1,
    image: '/images/dairy/eggs-l-10.png',
    price: { amount: 44.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1036,
    name: 'Lactose-Free Milk 1l',
    amount: 1,
    image: '/images/dairy/lactose-free-milk-1l.png',
    price: { amount: 26.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1037,
    name: 'Almond Drink 1l',
    amount: 1,
    image: '/images/dairy/almond-drink-1l.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1038,
    name: 'Soy Drink 1l',
    amount: 1,
    image: '/images/dairy/soy-drink-1l.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1039,
    name: 'Whipping Cream 250ml',
    amount: 1,
    image: '/images/dairy/whipping-cream-250ml.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(2)]
  },
  {
    id: 1040,
    name: 'Mozzarella Ball 125g',
    amount: 1,
    image: '/images/dairy/mozzarella-125g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(2)]
  },

  // Bakery (41–60)
  {
    id: 1041,
    name: 'White Bread Loaf',
    amount: 1,
    image: '/images/bakery/white-bread.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1042,
    name: 'Wholegrain Bread Loaf',
    amount: 1,
    image: '/images/bakery/wholegrain-bread.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1043,
    name: 'Rye Bread Loaf',
    amount: 1,
    image: '/images/bakery/rye-bread.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1044,
    name: 'Bread Rolls 6pcs',
    amount: 1,
    image: '/images/bakery/bread-rolls-6.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1045,
    name: 'Croissant Butter',
    amount: 1,
    image: '/images/bakery/croissant-butter.png',
    price: { amount: 14.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1046,
    name: 'Chocolate Croissant',
    amount: 1,
    image: '/images/bakery/croissant-chocolate.png',
    price: { amount: 16.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1047,
    name: 'Baguette White',
    amount: 1,
    image: '/images/bakery/baguette-white.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1048,
    name: 'Baguette Wholegrain',
    amount: 1,
    image: '/images/bakery/baguette-wholegrain.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1049,
    name: 'Toast Bread White',
    amount: 1,
    image: '/images/bakery/toast-white.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1050,
    name: 'Toast Bread Wholegrain',
    amount: 1,
    image: '/images/bakery/toast-wholegrain.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1051,
    name: 'Kaiser Roll',
    amount: 1,
    image: '/images/bakery/kaiser-roll.png',
    price: { amount: 5.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1052,
    name: 'Seeded Roll',
    amount: 1,
    image: '/images/bakery/seeded-roll.png',
    price: { amount: 6.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1053,
    name: 'Poppy Seed Roll',
    amount: 1,
    image: '/images/bakery/poppy-roll.png',
    price: { amount: 6.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1054,
    name: 'Donut Chocolate',
    amount: 1,
    image: '/images/bakery/donut-chocolate.png',
    price: { amount: 14.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1055,
    name: 'Donut Sugar',
    amount: 1,
    image: '/images/bakery/donut-sugar.png',
    price: { amount: 12.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1056,
    name: 'Muffin Chocolate',
    amount: 1,
    image: '/images/bakery/muffin-chocolate.png',
    price: { amount: 16.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1057,
    name: 'Muffin Blueberry',
    amount: 1,
    image: '/images/bakery/muffin-blueberry.png',
    price: { amount: 16.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1058,
    name: 'Hamburger Bun 4pcs',
    amount: 1,
    image: '/images/bakery/hamburger-buns.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1059,
    name: 'Hot Dog Buns 6pcs',
    amount: 1,
    image: '/images/bakery/hotdog-buns.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(3)]
  },
  {
    id: 1060,
    name: 'Sweet Roll Cinnamon',
    amount: 1,
    image: '/images/bakery/cinnamon-roll.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(3)]
  },

  // Meat & Fish (61–80)
  {
    id: 1061,
    name: 'Chicken Breast Fillet 500g',
    amount: 1,
    image: '/images/meat/chicken-breast-500g.png',
    price: { amount: 89.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1062,
    name: 'Chicken Thighs 1kg',
    amount: 1,
    image: '/images/meat/chicken-thighs-1kg.png',
    price: { amount: 99.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1063,
    name: 'Pork Neck 1kg',
    amount: 1,
    image: '/images/meat/pork-neck-1kg.png',
    price: { amount: 129.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1064,
    name: 'Pork Chops 500g',
    amount: 1,
    image: '/images/meat/pork-chops-500g.png',
    price: { amount: 79.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1065,
    name: 'Beef Mince 500g',
    amount: 1,
    image: '/images/meat/beef-mince-500g.png',
    price: { amount: 99.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1066,
    name: 'Beef Steak 300g',
    amount: 1,
    image: '/images/meat/beef-steak-300g.png',
    price: { amount: 139.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1067,
    name: 'Smoked Ham 200g',
    amount: 1,
    image: '/images/meat/smoked-ham-200g.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1068,
    name: 'Salami Slices 100g',
    amount: 1,
    image: '/images/meat/salami-100g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1069,
    name: 'Bacon Strips 150g',
    amount: 1,
    image: '/images/meat/bacon-150g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1070,
    name: 'Frankfurter Sausages 300g',
    amount: 1,
    image: '/images/meat/frankfurter-300g.png',
    price: { amount: 44.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1071,
    name: 'Fresh Salmon Fillet 300g',
    amount: 1,
    image: '/images/fish/salmon-fillet-300g.png',
    price: { amount: 119.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1072,
    name: 'Frozen Fish Fingers 300g',
    amount: 1,
    image: '/images/fish/fish-fingers-300g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1073,
    name: 'Smoked Salmon 100g',
    amount: 1,
    image: '/images/fish/smoked-salmon-100g.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1074,
    name: 'Chicken Sausages 250g',
    amount: 1,
    image: '/images/meat/chicken-sausages-250g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1075,
    name: 'Turkey Breast Slices 150g',
    amount: 1,
    image: '/images/meat/turkey-slices-150g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1076,
    name: 'Beef Goulash Cubes 500g',
    amount: 1,
    image: '/images/meat/beef-goulash-500g.png',
    price: { amount: 109.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1077,
    name: 'Pork Sausages 300g',
    amount: 1,
    image: '/images/meat/pork-sausages-300g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1078,
    name: 'Chicken Wings 1kg',
    amount: 1,
    image: '/images/meat/chicken-wings-1kg.png',
    price: { amount: 89.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1079,
    name: 'Fresh Trout 400g',
    amount: 1,
    image: '/images/fish/trout-400g.png',
    price: { amount: 89.9, currency: 'CZK' },
    categories: [catRef(4)]
  },
  {
    id: 1080,
    name: 'Marinated Chicken Drumsticks 800g',
    amount: 1,
    image: '/images/meat/marinated-drumsticks-800g.png',
    price: { amount: 99.9, currency: 'CZK' },
    categories: [catRef(4)]
  },

  // Pantry (81–100)
  {
    id: 1081,
    name: 'Spaghetti 500g',
    amount: 1,
    image: '/images/pantry/spaghetti-500g.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1082,
    name: 'Penne 500g',
    amount: 1,
    image: '/images/pantry/penne-500g.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1083,
    name: 'Rice Long Grain 1kg',
    amount: 1,
    image: '/images/pantry/rice-long-1kg.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1084,
    name: 'Basmati Rice 1kg',
    amount: 1,
    image: '/images/pantry/rice-basmati-1kg.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1085,
    name: 'Flour Plain 1kg',
    amount: 1,
    image: '/images/pantry/flour-plain-1kg.png',
    price: { amount: 17.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1086,
    name: 'Flour Self-Raising 1kg',
    amount: 1,
    image: '/images/pantry/flour-self-1kg.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1087,
    name: 'Sugar White 1kg',
    amount: 1,
    image: '/images/pantry/sugar-white-1kg.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1088,
    name: 'Sugar Brown 500g',
    amount: 1,
    image: '/images/pantry/sugar-brown-500g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1089,
    name: 'Sunflower Oil 1l',
    amount: 1,
    image: '/images/pantry/oil-sunflower-1l.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1090,
    name: 'Olive Oil 500ml',
    amount: 1,
    image: '/images/pantry/oil-olive-500ml.png',
    price: { amount: 89.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1091,
    name: 'Tomato Passata 500ml',
    amount: 1,
    image: '/images/pantry/passata-500ml.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1092,
    name: 'Tomato Paste 140g',
    amount: 1,
    image: '/images/pantry/tomato-paste-140g.png',
    price: { amount: 14.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1093,
    name: 'Canned Corn 340g',
    amount: 1,
    image: '/images/pantry/corn-340g.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1094,
    name: 'Canned Peas 400g',
    amount: 1,
    image: '/images/pantry/peas-400g.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1095,
    name: 'Canned Beans 400g',
    amount: 1,
    image: '/images/pantry/beans-400g.png',
    price: { amount: 22.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1096,
    name: 'Ketchup 500g',
    amount: 1,
    image: '/images/pantry/ketchup-500g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1097,
    name: 'Mayonnaise 400g',
    amount: 1,
    image: '/images/pantry/mayonnaise-400g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1098,
    name: 'Mustard 250g',
    amount: 1,
    image: '/images/pantry/mustard-250g.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1099,
    name: 'Salt Fine 500g',
    amount: 1,
    image: '/images/pantry/salt-fine-500g.png',
    price: { amount: 9.9, currency: 'CZK' },
    categories: [catRef(5)]
  },
  {
    id: 1100,
    name: 'Pepper Ground 50g',
    amount: 1,
    image: '/images/pantry/pepper-50g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(5)]
  },

  // Drinks (101–120)
  {
    id: 1101,
    name: 'Still Water 1.5l',
    amount: 1,
    image: '/images/drinks/water-still-1_5l.png',
    price: { amount: 9.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1102,
    name: 'Sparkling Water 1.5l',
    amount: 1,
    image: '/images/drinks/water-sparkling-1_5l.png',
    price: { amount: 9.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1103,
    name: 'Orange Juice 1l',
    amount: 1,
    image: '/images/drinks/juice-orange-1l.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1104,
    name: 'Apple Juice 1l',
    amount: 1,
    image: '/images/drinks/juice-apple-1l.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1105,
    name: 'Cola 2l',
    amount: 1,
    image: '/images/drinks/cola-2l.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1106,
    name: 'Lemonade 2l',
    amount: 1,
    image: '/images/drinks/lemonade-2l.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1107,
    name: 'Iced Tea Peach 1.5l',
    amount: 1,
    image: '/images/drinks/iced-tea-peach-1_5l.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1108,
    name: 'Iced Tea Lemon 1.5l',
    amount: 1,
    image: '/images/drinks/iced-tea-lemon-1_5l.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1109,
    name: 'Energy Drink 250ml',
    amount: 1,
    image: '/images/drinks/energy-250ml.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1110,
    name: 'Isotonic Drink 500ml',
    amount: 1,
    image: '/images/drinks/isotonic-500ml.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1111,
    name: 'Coffee Beans 500g',
    amount: 1,
    image: '/images/drinks/coffee-beans-500g.png',
    price: { amount: 149.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1112,
    name: 'Ground Coffee 250g',
    amount: 1,
    image: '/images/drinks/coffee-ground-250g.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1113,
    name: 'Black Tea Bags 20pcs',
    amount: 1,
    image: '/images/drinks/tea-black-20.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1114,
    name: 'Green Tea Bags 20pcs',
    amount: 1,
    image: '/images/drinks/tea-green-20.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1115,
    name: 'Herbal Tea Mix 20pcs',
    amount: 1,
    image: '/images/drinks/tea-herbal-20.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1116,
    name: 'Beer Lager 0.5l Can',
    amount: 1,
    image: '/images/drinks/beer-lager-0_5l.png',
    price: { amount: 16.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1117,
    name: 'Beer Non-Alcoholic 0.5l',
    amount: 1,
    image: '/images/drinks/beer-nonalc-0_5l.png',
    price: { amount: 16.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1118,
    name: 'White Wine 0.75l',
    amount: 1,
    image: '/images/drinks/wine-white-0_75l.png',
    price: { amount: 119.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1119,
    name: 'Red Wine 0.75l',
    amount: 1,
    image: '/images/drinks/wine-red-0_75l.png',
    price: { amount: 119.9, currency: 'CZK' },
    categories: [catRef(6)]
  },
  {
    id: 1120,
    name: 'Sparkling Wine 0.75l',
    amount: 1,
    image: '/images/drinks/wine-sparkling-0_75l.png',
    price: { amount: 149.9, currency: 'CZK' },
    categories: [catRef(6)]
  },

  // Snacks & Sweets (121–140)
  {
    id: 1121,
    name: 'Potato Chips Salted 150g',
    amount: 1,
    image: '/images/snacks/chips-salted-150g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1122,
    name: 'Potato Chips Paprika 150g',
    amount: 1,
    image: '/images/snacks/chips-paprika-150g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1123,
    name: 'Tortilla Chips 200g',
    amount: 1,
    image: '/images/snacks/tortilla-chips-200g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1124,
    name: 'Salted Peanuts 200g',
    amount: 1,
    image: '/images/snacks/peanuts-salted-200g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1125,
    name: 'Mixed Nuts 200g',
    amount: 1,
    image: '/images/snacks/nuts-mix-200g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1126,
    name: 'Chocolate Bar Milk 100g',
    amount: 1,
    image: '/images/snacks/chocolate-milk-100g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1127,
    name: 'Chocolate Bar Dark 100g',
    amount: 1,
    image: '/images/snacks/chocolate-dark-100g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1128,
    name: 'Chocolate Bar Hazelnut 100g',
    amount: 1,
    image: '/images/snacks/chocolate-hazelnut-100g.png',
    price: { amount: 26.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1129,
    name: 'Biscuits Butter 200g',
    amount: 1,
    image: '/images/snacks/biscuits-butter-200g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1130,
    name: 'Biscuits Chocolate 200g',
    amount: 1,
    image: '/images/snacks/biscuits-chocolate-200g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1131,
    name: 'Wafers Vanilla 150g',
    amount: 1,
    image: '/images/snacks/wafers-vanilla-150g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1132,
    name: 'Wafers Hazelnut 150g',
    amount: 1,
    image: '/images/snacks/wafers-hazelnut-150g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1133,
    name: 'Gummy Candies 200g',
    amount: 1,
    image: '/images/snacks/gummy-200g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1134,
    name: 'Hard Candies Mix 200g',
    amount: 1,
    image: '/images/snacks/hard-candies-200g.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1135,
    name: 'Chocolate Spread 400g',
    amount: 1,
    image: '/images/snacks/choco-spread-400g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1136,
    name: 'Jam Strawberry 340g',
    amount: 1,
    image: '/images/snacks/jam-strawberry-340g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1137,
    name: 'Jam Apricot 340g',
    amount: 1,
    image: '/images/snacks/jam-apricot-340g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1138,
    name: 'Breakfast Cereal Corn Flakes 500g',
    amount: 1,
    image: '/images/snacks/cereal-cornflakes-500g.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1139,
    name: 'Breakfast Cereal Chocolate 500g',
    amount: 1,
    image: '/images/snacks/cereal-choco-500g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(7)]
  },
  {
    id: 1140,
    name: 'Muesli Fruit 500g',
    amount: 1,
    image: '/images/snacks/muesli-fruit-500g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(7)]
  },

  // Frozen (141–160)
  {
    id: 1141,
    name: 'Frozen Pizza Margherita 350g',
    amount: 1,
    image: '/images/frozen/pizza-margherita-350g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1142,
    name: 'Frozen Pizza Salami 350g',
    amount: 1,
    image: '/images/frozen/pizza-salami-350g.png',
    price: { amount: 64.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1143,
    name: 'Frozen Vegetables Mix 450g',
    amount: 1,
    image: '/images/frozen/veg-mix-450g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1144,
    name: 'Frozen Peas 450g',
    amount: 1,
    image: '/images/frozen/peas-450g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1145,
    name: 'Frozen French Fries 1kg',
    amount: 1,
    image: '/images/frozen/fries-1kg.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1146,
    name: 'Frozen Chicken Nuggets 500g',
    amount: 1,
    image: '/images/frozen/chicken-nuggets-500g.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1147,
    name: 'Frozen Fish Fillets 400g',
    amount: 1,
    image: '/images/frozen/fish-fillets-400g.png',
    price: { amount: 79.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1148,
    name: 'Ice Cream Vanilla 1l',
    amount: 1,
    image: '/images/frozen/icecream-vanilla-1l.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1149,
    name: 'Ice Cream Chocolate 1l',
    amount: 1,
    image: '/images/frozen/icecream-chocolate-1l.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1150,
    name: 'Ice Cream Sticks 6pcs',
    amount: 1,
    image: '/images/frozen/icecream-sticks-6.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1151,
    name: 'Frozen Berries Mix 300g',
    amount: 1,
    image: '/images/frozen/berries-mix-300g.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1152,
    name: 'Frozen Spinach 450g',
    amount: 1,
    image: '/images/frozen/spinach-450g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1153,
    name: 'Frozen Dumplings 600g',
    amount: 1,
    image: '/images/frozen/dumplings-600g.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1154,
    name: 'Frozen Lasagne 400g',
    amount: 1,
    image: '/images/frozen/lasagne-400g.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1155,
    name: 'Frozen Bread Rolls 6pcs',
    amount: 1,
    image: '/images/frozen/bread-rolls-6.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1156,
    name: 'Frozen Pancakes 400g',
    amount: 1,
    image: '/images/frozen/pancakes-400g.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1157,
    name: 'Frozen Garlic Bread 200g',
    amount: 1,
    image: '/images/frozen/garlic-bread-200g.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1158,
    name: 'Frozen Soup Mix 450g',
    amount: 1,
    image: '/images/frozen/soup-mix-450g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1159,
    name: 'Frozen Broccoli 450g',
    amount: 1,
    image: '/images/frozen/broccoli-450g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(8)]
  },
  {
    id: 1160,
    name: 'Frozen Cauliflower 450g',
    amount: 1,
    image: '/images/frozen/cauliflower-450g.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(8)]
  },

  // Household (161–180)
  {
    id: 1161,
    name: 'Toilet Paper 8 Rolls',
    amount: 1,
    image: '/images/household/toilet-paper-8.png',
    price: { amount: 79.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1162,
    name: 'Kitchen Towels 2 Rolls',
    amount: 1,
    image: '/images/household/kitchen-towels-2.png',
    price: { amount: 34.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1163,
    name: 'Dishwashing Liquid 500ml',
    amount: 1,
    image: '/images/household/dishwashing-500ml.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1164,
    name: 'Laundry Detergent 2.4kg',
    amount: 1,
    image: '/images/household/detergent-2_4kg.png',
    price: { amount: 199.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1165,
    name: 'Fabric Softener 1l',
    amount: 1,
    image: '/images/household/fabric-softener-1l.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1166,
    name: 'Glass Cleaner 500ml',
    amount: 1,
    image: '/images/household/glass-cleaner-500ml.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1167,
    name: 'Surface Cleaner 1l',
    amount: 1,
    image: '/images/household/surface-cleaner-1l.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1168,
    name: 'Sponges 5pcs',
    amount: 1,
    image: '/images/household/sponges-5.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1169,
    name: 'Trash Bags 35l 20pcs',
    amount: 1,
    image: '/images/household/trash-bags-35l.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1170,
    name: 'Trash Bags 60l 15pcs',
    amount: 1,
    image: '/images/household/trash-bags-60l.png',
    price: { amount: 44.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1171,
    name: 'Aluminium Foil 10m',
    amount: 1,
    image: '/images/household/aluminium-10m.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1172,
    name: 'Cling Film 20m',
    amount: 1,
    image: '/images/household/clingfilm-20m.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1173,
    name: 'Paper Baking Sheets 20pcs',
    amount: 1,
    image: '/images/household/baking-sheets-20.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1174,
    name: 'Toilet Cleaner 750ml',
    amount: 1,
    image: '/images/household/toilet-cleaner-750ml.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1175,
    name: 'Bleach 1l',
    amount: 1,
    image: '/images/household/bleach-1l.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1176,
    name: 'Air Freshener Spray 300ml',
    amount: 1,
    image: '/images/household/air-freshener-300ml.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1177,
    name: 'Dishwasher Tablets 30pcs',
    amount: 1,
    image: '/images/household/dishwasher-tabs-30.png',
    price: { amount: 199.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1178,
    name: 'Rubber Gloves M',
    amount: 1,
    image: '/images/household/gloves-m.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1179,
    name: 'Rubber Gloves L',
    amount: 1,
    image: '/images/household/gloves-l.png',
    price: { amount: 24.9, currency: 'CZK' },
    categories: [catRef(9)]
  },
  {
    id: 1180,
    name: 'Matches 10 Boxes',
    amount: 1,
    image: '/images/household/matches-10.png',
    price: { amount: 19.9, currency: 'CZK' },
    categories: [catRef(9)]
  },

  // Personal Care (181–200)
  {
    id: 1181,
    name: 'Toothpaste Mint 100ml',
    amount: 1,
    image: '/images/personal/toothpaste-mint-100ml.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1182,
    name: 'Toothbrush Soft',
    amount: 1,
    image: '/images/personal/toothbrush-soft.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1183,
    name: 'Toothbrush Medium',
    amount: 1,
    image: '/images/personal/toothbrush-medium.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1184,
    name: 'Mouthwash 500ml',
    amount: 1,
    image: '/images/personal/mouthwash-500ml.png',
    price: { amount: 79.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1185,
    name: 'Shampoo Normal Hair 400ml',
    amount: 1,
    image: '/images/personal/shampoo-normal-400ml.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1186,
    name: 'Shampoo Dry Hair 400ml',
    amount: 1,
    image: '/images/personal/shampoo-dry-400ml.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1187,
    name: 'Conditioner 400ml',
    amount: 1,
    image: '/images/personal/conditioner-400ml.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1188,
    name: 'Shower Gel 400ml',
    amount: 1,
    image: '/images/personal/showergel-400ml.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1189,
    name: 'Soap Bar 100g',
    amount: 1,
    image: '/images/personal/soapbar-100g.png',
    price: { amount: 14.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1190,
    name: 'Liquid Soap 500ml',
    amount: 1,
    image: '/images/personal/liquid-soap-500ml.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1191,
    name: 'Deodorant Spray 150ml',
    amount: 1,
    image: '/images/personal/deo-spray-150ml.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1192,
    name: 'Deodorant Roll-On 50ml',
    amount: 1,
    image: '/images/personal/deo-rollon-50ml.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1193,
    name: 'Hand Cream 75ml',
    amount: 1,
    image: '/images/personal/hand-cream-75ml.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1194,
    name: 'Body Lotion 400ml',
    amount: 1,
    image: '/images/personal/body-lotion-400ml.png',
    price: { amount: 79.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1195,
    name: 'Cotton Pads 120pcs',
    amount: 1,
    image: '/images/personal/cotton-pads-120.png',
    price: { amount: 39.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1196,
    name: 'Cotton Buds 200pcs',
    amount: 1,
    image: '/images/personal/cotton-buds-200.png',
    price: { amount: 29.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1197,
    name: 'Razor Disposable 3pcs',
    amount: 1,
    image: '/images/personal/razor-disposable-3.png',
    price: { amount: 59.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1198,
    name: 'Shaving Foam 200ml',
    amount: 1,
    image: '/images/personal/shaving-foam-200ml.png',
    price: { amount: 69.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1199,
    name: 'Sanitary Pads Normal 20pcs',
    amount: 1,
    image: '/images/personal/pads-normal-20.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(10)]
  },
  {
    id: 1200,
    name: 'Sanitary Pads Night 14pcs',
    amount: 1,
    image: '/images/personal/pads-night-14.png',
    price: { amount: 49.9, currency: 'CZK' },
    categories: [catRef(10)]
  }
];

module.exports = {
  categories,
  products
};

