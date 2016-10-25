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
  },
  {
    brand:"Aquafina",
    phLevel: 4,
    cost: 1.00,
    imageName:"aquafina.jpg",
  },
  {
    brand: "Arrowhead",
    phLevel: 7,
    cost: 1.48,
    imageName:"arrowHead.jpg",
  },
  {
    brand: "Crystal Geyser",
    phLevel: 7,
    cost: 1.71,
    imageName: "crystalGeyser.jpg" ,
  },
  {
    brand: "Dasani",
    phLevel: 4,
    cost: 1.48,
    imageName: "dasani.jpg" ,
  },
  {
    brand: "Deep Rock",
    phLevel: 8,
    cost: 2,
    imageName: "deepRock.jpg",
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
  },
  {
    brand: "El Dorado",
    phLevel: 7,
    cost: 3,
    imageName: "eldorado.jpg",
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
  },
  {
    brand: "Evian",
    phLevel: 7.5,
    cost: 1.78,
    imageName: "evian.jpg",
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
  },
  {
    brand: "Niagara",
    phLevel: 5,
    cost: 2,
    imageName: "niagara.jpg",
  },
  {
    brand: "Ozarka",
    phLevel: 5,
    cost: 0.99,
    imageName: "ozarka.jpg",
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
    imageName: "perrier.jpg",
  },
  {
    brand: "Poland Spring",
    phLevel: 5,
    cost: 2,
    imageName: "polandSpring.jpg",
  },
  {
    brand: "Resource",
    phLevel: 6.6,
    cost: 3,
    imageName: "resource.jpg",
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
  },
  {
    brand: "Austin Tap Water",
    phLevel: 9.6,
    cost:0,
    imageName: "tapWater.jpg",
  },
  {
    brand: "Glaceau Vitamin Water",
    phLevel: 4,
    cost: 0.95,
    imageName: "vitaminWater.jpg",
  },
  {
    brand: "Voss",
    phLevel: 5,
    cost: 2.49,
    imageName: "voss.jpg",
  },
  {
    brand: "Whole Foods 365",
    phLevel: 7.5,
    cost: 1.44,
    imageName: "wholeFoods.jpg",
  },
  {
    brand: "Zephyrhills",
    phLevel: 7.5,
    cost: 2,
    imageName: "zephyrhills.jpg",
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
