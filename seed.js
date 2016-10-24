require('dotenv').config({silent: true});

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION)

var Bottle = require('./models/waterbottle')




const bottles = [
  {
    brand:"AppSprings",
    phLevel: 5,
    cost: 3,
    image:"appSprings.jpg",
  },
  {
    brand:"Aquafina",
    phLevel: 4,
    cost: 1.00,
    image:"aquafina.jpg",
  },
  {
    brand: "Arrowhead",
    phLevel: 7,
    cost: 1.48,
    image:"arrowHead.jpg",
  },
  {
    brand: "Crystal Geyser",
    phLevel: 7,
    cost: 1.71,
    image: "crystalGeyser.jpg" ,
  },
  {
    brand: "Dasani",
    phLevel: 4,
    cost: 1.48,
    image: "dasani.jpg" ,
  },
  {
    brand: "Deep Rock",
    phLevel: 8,
    cost: 2,
    image: "deepRock.jpg",
  },
  {
    brand: "Deerpark",
    phLevel: 7,
    cost: 3,
    image: "Deerpark_logo.png",
  },
  {
    brand: "Eden",
    phLevel: 7.9,
    cost: 2,
    image: "eden.jpg",
  },
  {
    brand: "El Dorado",
    phLevel: 7,
    cost: 3,
    image: "eldorado.jpg",
  },
  {
    brand: "Essentia",
    phLevel: 9.5,
    cost: 1.50,
    image: "essentia.png",
  },
  {
    brand: "Evamor",
    phLevel: 8,
    cost: 1.79,
    image: "evamor.jpg",
  },
  {
    brand: "Evian",
    phLevel: 7.5,
    cost: 1.78,
    image: "evian.jpg",
  },
  {
    brand: "Fiji",
    phLevel: 7.5,
    cost: 2.18,
    image: "fiji.png",
  },
  {
    brand: "Glaceau Fruit Water",
    phLevel: 4,
    cost: 2,
    image: "glaceau.png",
  },
  {
    brand: "Le Bleu",
    phLevel: 4,
    cost: 3,
    image: "leBleu.jpg",
  },
  {
    brand: "The Mountain Valley",
    phLevel: 5,
    cost: 2.00,
    image: "mountainValley.png",
  },
  {
    brand: "Nestle",
    phLevel: 6.5,
    cost: 3,
    image: "nestle.jpg",
  },
  {
    brand: "Niagara",
    phLevel: 5,
    cost: 2,
    image: "niagara.jpg",
  },
  {
    brand: "Ozarka",
    phLevel: 5,
    cost: 0.99,
    image: "ozarka.jpg",
  },
  {
    brand: "Penta",
    phLevel: 6.7,
    cost: 2.39,
    image: "penta.png",
  },
  {
    brand: "Perrier",
    phLevel: 4,
    cost: 1.49,
    image: "perrier.png",
  },
  {
    brand: "Poland Spring",
    phLevel: 5,
    cost: 2,
    image: "polandSpring.jpg",
  },
  {
    brand: "Resource",
    phLevel: 6.6,
    cost: 3,
    image: "resource.jpg",
  },
  {
    brand: "Glaceau Smartwater",
    phLevel: 4,
    cost: 1.35,
    image: "smartWater.png",
  },
  {
    brand: "San Pellegrino",
    phLevel: 4,
    cost: 1.79,
    image: "sPellegrino.jpg",
  },
  {
    brand: "Austin Tap Water",
    phLevel: 9.6,
    cost:0,
    image: "tapWater",
  },
  {
    brand: "Glaceau Vitamin Water",
    phLevel: 4,
    cost: 0.95,
    image: "vitaminWater.jpg",
  },
  {
    brand: "Voss",
    phLevel: 5,
    cost: 2.49,
    image: "voss.jpg",
  },
  {
    brand: "Whole Foods 365",
    phLevel: 7.5,
    cost: 1.44,
    image: "wholeFoods.jpg",
  },
  {
    brand: "Zephyrhills",
    phLevel: 7.5,
    cost: 2,
    image: "zephyrhills.jpg",
  }
]

Bottle.collection.remove()

bottles.forEach(function (bottle) {
  console.log('bottle', bottle);
  const waterbottle= new Bottle(bottle)
  waterbottle.save(function (err) {
    console.log('i am saving');
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  })
})