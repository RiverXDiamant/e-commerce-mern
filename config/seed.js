require("dotenv").config();
require("./database");

const Category = require("../models/category");
const Item = require("../models/item");

// TODO: Update seed file with hosted images so they can be retrieved from backend

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Shirt and Sneakers", sortOrder: 10 },
    { name: "Sneakers", sortOrder: 20 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // ========= SHIRTS AND SNEAKERS ========
    {
      name: "Local Green Atlanta",
      img: "https://i.imgur.com/x9R5321.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Eubie Blake Cultural Center",
      img: "https://i.imgur.com/jiB0r8U.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Zabars",
      img: "https://i.imgur.com/niXij6j.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Nom Wah",
      img: "https://i.imgur.com/OBKB0aS.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Milk + T",
      img: "https://i.imgur.com/rVOVRZx.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Minds Eye Comics",
      img: "https://i.imgur.com/AviwMth.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Portrait Coffee",
      img: "https://i.imgur.com/XreZIcB.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Black Genius Art SHow",
      img: "https://i.imgur.com/riJgphs.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Grog Shop",
      img: "https://i.imgur.com/0pEDCCE.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "606 Records",
      img: "https://i.imgur.com/T3m8C7O.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Alibi Lounge",
      img: "https://i.imgur.com/as4usL7.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Mama Nature's Juice Bar",
      img: "https://i.imgur.com/9XPkIVn.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Jensens Guitar and Music",
      img: "https://i.imgur.com/46hDR6w.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "Spacy Cloud",
      img: "https://i.imgur.com/yIrCOA9.png",
      category: categories[0],
      price: 129.99,
    },
    {
      name: "M.A.D.D",
      img: "https://i.imgur.com/s0QJPGk.png",
      category: categories[0],
      price: 129.99,
    },

    // ========== SHOES ==========
    {
      name: "Local Green Atlanta",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-local-green-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Eubie Blake Cultural Center",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-eubie-blake-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Zabars",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-zabars-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Nom Wah",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-nom-wah-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 129.99,
    },
    {
      name: "Milk + T",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-milk-t-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Minds Eye Comics",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-minds-eye-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Portrait Coffee",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-portrait-coffee-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Black Genius Art SHow",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-the-black-genius-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Grog Shop",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-grog-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "606 Records",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-606-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Alibi Lounge",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-alibi-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Mama Nature's Juice Bar",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-mama-natures-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Jensens Guitar and Music",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-jensens-guitar-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "Spacy Cloud",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-spacy-cloud-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 74.99,
    },
    {
      name: "M.A.D.D",
      img: "https://images.vans.com/is/image/VansBrand/ftb-business-madd-rhythms-shoe?wid=500&fmt=png-alpha",
      category: categories[1],
      price: 129.99,
    },
  ]);

  console.log(items);

  process.exit();
})();

// add rest of items at a later date
