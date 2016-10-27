require('dotenv').config({silent: true});

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION)

var Bottle = require('./models/waterbottle')




const bottles = [
  {
    brand:"AppSprings",
    phLevel: 5,
    cost: 3,
    imageName:"appSprings.jpg",
    statement:,
  },
  {
    brand:"Aquafina",
    phLevel: 4,
    cost: 1.00,
    imageName:"aquafina.jpg",
    statement:,
  },
  {
    brand: "Arrowhead",
    phLevel: 7,
    cost: 1.48,
    imageName:"arrowHead.jpg",
    statement:,
  },
  {
    brand: "Crystal Geyser",
    phLevel: 7,
    cost: 1.71,
    imageName: "crystalGeyser.jpg"
    statement:,,
  },
  {
    brand: "Dasani",
    phLevel: 4,
    cost: 1.48,
    imageName: "dasani.jpg"
    statement:,,
  },
  {
    brand: "Deep Rock",
    phLevel: 8,
    cost: 2,
    imageName: "deepRock.jpg",
    statement:,
  },
  {
    brand: "Deerpark",
    phLevel: 7,
    cost: 3,
    imageName: "Deerpark_logo.png",
  },
  {
    brand: "Eden",
    phLevel: 7.9,
    cost: 2,
    imageName: "eden.jpg",
    statement:,
  },
  {
    brand: "El Dorado",
    phLevel: 7,
    cost: 3,
    imageName: "eldorado.jpg",
    statement:,
  },
  {
    brand: "Essentia",
    phLevel: 9.5,
    cost: 1.50,
    imageName: "essentia.png",
  },
  {
    brand: "Evamor",
    phLevel: 8,
    cost: 1.79,
    imageName: "evamor.jpg",
    statement:,
  },
  {
    brand: "Evian",
    phLevel: 7.5,
    cost: 1.78,
    imageName: "evian.jpg",
    statement:,
  },
  {
    brand: "Fiji",
    phLevel: 7.5,
    cost: 2.18,
    imageName: "fiji.png",
  },
  {
    brand: "Glaceau Fruit Water",
    phLevel: 4,
    cost: 2,
    imageName: "glaceau.png",
  },
  {
    brand: "Le Bleu",
    phLevel: 4,
    cost: 3,
    imageName: "leBleu.jpg",
    statement:,
  },
  {
    brand: "The Mountain Valley",
    phLevel: 5,
    cost: 2.00,
    imageName: "mountainValley.png",
  },
  {
    brand: "Nestle",
    phLevel: 6.5,
    cost: 3,
    imageName: "nestle.jpg",
    statement:,
  },
  {
    brand: "Niagara",
    phLevel: 5,
    cost: 2,
    imageName: "niagara.jpg",
    statement:,
  },
  {
    brand: "Ozarka",
    phLevel: 5,
    cost: 0.99,
    imageName: "ozarka.jpg",
    statement:,
  },
  {
    brand: "Penta",
    phLevel: 6.7,
    cost: 2.39,
    imageName: "penta.png",
  },
  {
    brand: "Perrier",
    phLevel: 4,
    cost: 1.49,
    imageName: "perrier.png",
  },
  {
    brand: "Poland Spring",
    phLevel: 5,
    cost: 2,
    imageName: "polandSpring.jpg",
    statement:,
  },
  {
    brand: "Resource",
    phLevel: 6.6,
    cost: 3,
    imageName: "resource.jpg",
    statement:,
  },
  {
    brand: "Glaceau Smartwater",
    phLevel: 4,
    cost: 1.35,
    imageName: "smartWater.png",
  },
  {
    brand: "San Pellegrino",
    phLevel: 4,
    cost: 1.79,
    imageName: "sPellegrino.jpg",
    statement:,
  },
  {
    brand: "Austin Tap Water",
    phLevel: 9.6,
    cost:0,
    imageName: "tapWater.jpg",
    statement:,
  },
  {
    brand: "Glaceau Vitamin Water",
    phLevel: 4,
    cost: 0.95,
    imageName: "vitaminWater.jpg",
    statement:,
  },
  {
    brand: "Voss",
    phLevel: 5,
    cost: 2.49,
    imageName: "voss.jpg",
    statement:,
  },
  {
    brand: "Whole Foods 365",
    phLevel: 7.5,
    cost: 1.44,
    imageName: "wholeFoods.jpg",
    statement:,
  },
  {
    brand: "Zephyrhills",
    phLevel: 7.5,
    cost: 2,
    imageName: "zephyrhills.jpg",
    statement:,
  }
]

Bottle.collection.remove()

bottles.forEach(function (bottle) {
  console.log('bottle', bottle);
  const waterbottle= new Bottle(bottle)
  waterbottle.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  })
})
