require("dotenv").config();
require("./database");

const Category = require("../models/category");
const Item = require("../models/item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Shirt and Sneakers", sortOrder: 10 },
    { name: "Sneakers", sortOrder: 20 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Local Green Atlanta",
      img: "../src/img/ftb-atlanta-local-green.png",
      category: categories[0],
      price: 74.99,
    },
    {
      name: "Eubie Blake Cultural Center",
      img: "../src/img/ftb-baltimore-eubie-blake-culturalcenter.png",
      category: categories[0],
      price: 74.99,
    },
    {
      name: "Zabars",
      img: "../src/img/ftb-newyork-zabars.png",
      category: categories[0],
      price: 74.99,
    },
    {
      name: "Milk + T",
      img: "../src/img/ftb-portland-milkt.png",
      category: categories[0],
      price: 74.99,
    },
    {
      name: "Local Green Atlanta",
      img: "../src/img/ftb-atlanta-local-green-shoe.webp",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Eubie Blake Cultural Center",
      img: "../src/img/ftb-baltimore-eubie-blake-shoe.webp",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Zabars",
      img: "../src/img/ftb-ny-zabars-shoe.webp",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Milk + T",
      img: "../src/img/ftb-portland-milk-t-shoe.webp",
      category: categories[1],
      price: 74.99,
    },
  ]);

  console.log(items);

  process.exit();
})();

// add rest of items at a later date
