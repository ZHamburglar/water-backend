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
    statement: "Appalachian Springs serves Charleston, SC as a chief provider of bottled water, coffee services, and water filtration coolers."
  },
  {
    brand:"Aquafina",
    phLevel: 4,
    cost: 1.00,
    imageName:"aquafina.jpg",
    statement: "Aquafina is a brand of purified bottled water products produced by PepsiCo, consisting of both unflavored and flavored water. The Aquafina brand name is also licensed for use on multiple skin care products, including lip balm and wrinkle cream."
  },
  {
    brand: "Arrowhead",
    phLevel: 7,
    cost: 1.48,
    imageName:"arrowHead.jpg",
    statement: "Arrowhead Water, also known as Arrowhead Mountain Spring Water, is a brand of drinking water that is sold in the western United States, particularly in Arizona, Utah, the Northwest, and in California."
  },
  {
    brand: "Crystal Geyser",
    phLevel: 7,
    cost: 1.71,
    imageName: "crystalGeyser.jpg",
    statement: "Crystal Geyser Water Company is a private company based in California that produces sparkling mineral water and other beverage products. It is a wholly owned subsidiary of Japanese pharmaceutical company, Otsuka Holdings."
  },
  {
    brand: "Dasani",
    phLevel: 4,
    cost: 1.48,
    imageName: "dasani.jpg",
    statement: "Dasani is a brand of bottled water from the Coca-Cola company, launched in 1999, after the success of Aquafina (produced by Coca-Cola-rival PepsiCo). It is one of many brands of Coca-Cola bottled water sold around the world."
  },
  {
    brand: "Deep Rock",
    phLevel: 8,
    cost: 2,
    imageName: "deepRock.jpg",
    statement: "Deep Rock®Water has been serving Colorado customers since 1896. Deep Rock proudly provides great-tasting bottled water delivery service."
  },
  {
    brand: "Deerpark",
    phLevel: 7,
    cost: 3,
    imageName: "Deerpark_logo.png",
    statement: "Deer Park is a brand of bottled water from the Nestlé company, produced and marketed primarily in the Mid-Atlantic region of the United States."
  },
  {
    brand: "Eden",
    phLevel: 7.9,
    cost: 2,
    imageName: "eden.jpg",
    statement: "Eden Springs International is a provider of water and coffee solutions to workplaces for their employees and customers. Eden's office coffee solutions include coffee machines, coffee, tea and other beverage accessories."
  },
  {
    brand: "El Dorado",
    phLevel: 7,
    cost: 3,
    imageName: "eldorado.jpg",
    statement: "El Dorado Springs, Colorado  emanate from one of the most unique water sources in the world. This spring water originates as rain and snow just east of the Continental Divide. From there, it enters an aquifer that passes deep beneath Eldorado Springs."
  },
  {
    brand: "Essentia",
    phLevel: 9.5,
    cost: 1.50,
    imageName: "essentia.png",
    statement: "We created Essentia ionized alkaline water because we believe hydration makes us all a little better, inside and out. When you're properly hydrated, you think, feel, move, work and play more effectively.
    And that feeling, that confidence, is contagious."
  },
  {
    brand: "Evamor",
    phLevel: 8,
    cost: 1.79,
    imageName: "evamor.jpg",
    statement: "At Evamor, we believe a better you starts with a better water. When you start with something so right, like water from a rare artesian aquifer, perfected by nature over thousands of years for a great taste that’s rich in natural alkaline and mineral goodness, our job is easy. We simply bottle it."
  },
  {
    brand: "Evian",
    phLevel: 7.5,
    cost: 1.78,
    imageName: "evian.jpg",
    statement: "Evian is owned by Danone, a French multinational corporation. In addition to the mineral water, Danone Group uses the Evian name for a line of organic skin care products as well as a luxury resort in France."
  },
  {
    brand: "Fiji",
    phLevel: 7.5,
    cost: 2.18,
    imageName: "fiji.png",
    statement: "Fiji Water is a brand of bottled water derived, bottled, and shipped from Fiji. According to marketing materials, the water comes from an artesian aquifer in Viti Levu. Fiji Water is headquartered in Los Angeles, California."
  },
  {
    brand: "Glaceau Fruit Water",
    phLevel: 4,
    cost: 2,
    imageName: "glaceau.png",
    statement: "Fruitwater is a less sweetened version of Vitaminwater but is a sparkling water drink. It consists of the same ingredients only with a light fruit flavor and less crystalline fructose. Aside from “natural flavor,” fruitwater does not contain any actual fruit juice."
  },
  {
    brand: "Le Bleu",
    phLevel: 4,
    cost: 3,
    imageName: "leBleu.jpg",
    statement: "Le Bleu Corporation was formed in 1990. The first in the world to bottle vapor compression distilled water making pure h20 taste better than spring or other purified water through our purification process."
  },
  {
    brand: "The Mountain Valley",
    phLevel: 5,
    cost: 2.00,
    imageName: "mountainValley.png",
    statement: "Mountain Valley Spring Water is an American brand of spring water bottled in Hot Springs, Arkansas. It has been bottled continuously since 1871 and is currently owned by Clear Mountain Spring Water Company of Little Rock, Arkansas."
  },
  {
    brand: "Nestle Pure Life",
    phLevel: 6.5,
    cost: 3,
    imageName: "nestle.jpg",
    statement: "The brand has been sold as Nestlé Pure Life since 2002. Prior to that it was known as Aberfoyle Springs and had been produced by the Aberfoyle Springs company since 1993."
  },
  {
    brand: "Niagara",
    phLevel: 5,
    cost: 2,
    imageName: "niagara.jpg",
    statement: "In the early ‘90’s, Niagara expanded into offering single-serve private label bottled water for grocery, club store, convenience and wholesale customers with the same focus on offering an unmatched combination of quality, price and service."
  },
  {
    brand: "Ozarka",
    phLevel: 5,
    cost: 0.99,
    imageName: "ozarka.jpg",
    statement: "The Ozarka Spring Water Company was founded in Eureka Springs, Arkansas, in 1905, but is now a division of Nestlé Waters North America Inc. Ozarka's slogan is Born Better."
  },
  {
    brand: "Penta",
    phLevel: 6.7,
    cost: 2.39,
    imageName: "penta.png",
    statement: "Penta Water is a brand of bottled water produced by United Beverage, formerly United Packaging Group, LLC., based in Colton, California in San Bernardino County. Penta Water claims to produce its water through a patented physics process."
  },
  {
    brand: "Perrier",
    phLevel: 4,
    cost: 1.49,
    imageName: "perrier.png",
    statement: "Perrier is a French brand of natural bottled mineral water captured at the source in Vergèze. Perrier is best known for its naturally occurring carbonation, distinctive green bottle, and higher levels of carbonation than its peers."
  },
  {
    brand: "Poland Spring",
    phLevel: 5,
    cost: 2,
    imageName: "polandSpring.jpg",
    statement: "Poland Spring is a brand of bottled water manufactured in Poland, in the U.S. state ofMaine. It is a subsidiary of Nestlé and sold in the United States. The spring was founded in 1845 by Hiram Ricker in the town of Alfred, Maine."
  },
  {
    brand: "Resource",
    phLevel: 6.6,
    cost: 3,
    imageName: "resource.jpg",
    statement: "Resource comes from carefully-selected and consistently-monitored natural springs in California and Pennsylvania. It’s the unique mix of minerals in our water that delivers its clean, refreshing taste."
  },
  {
    brand: "Glaceau Smartwater",
    phLevel: 4,
    cost: 1.35,
    imageName: "smartWater.png",
    statement: "Smart Water is a vapor-distilled beverage.The product is intended to be consumed throughout the day. The slim bottle is easy to take anywhere."
  },
  {
    brand: "San Pellegrino",
    phLevel: 4,
    cost: 1.79,
    imageName: "sPellegrino.jpg",
    statement: "San Pellegrino is an Italian brand of mineral water and assorted real-fruit sodas made in the Province of Bergamo, Lombardy, Italy. Outside of Italy, San Pellegrino is marketed as somewhat of a luxury. Owned by Nestlé since 1997."
  },
  {
    brand: "Austin Tap Water",
    phLevel: 9.6,
    cost:0,
    imageName: "tapWater.jpg",
    statement: "The healthiest water in the best city"
  },
  {
    brand: "Glaceau Vitamin Water",
    phLevel: 4,
    cost: 0.95,
    imageName: "vitaminWater.jpg",
    statement: "Vitaminwater was launched, adding vitamins and natural flavors with Smartwater. Designed to "fill the gap" between soft drinks andwater for people who knew they should be drinking more water but weren’t."
  },
  {
    brand: "Voss",
    phLevel: 5,
    cost: 2.49,
    imageName: "voss.jpg",
    statement: "Voss is a Norwegian brand of bottled water from the village of Vatnestrøm in Ivelandmunicipality, Aust-Agder county. Contrary to popular belief, the water is not bottled in the municipality of Voss, which is more than 400 kilometres (250 mi) away from the actual bottling site."
  },
  {
    brand: "Whole Foods 365",
    phLevel: 7.5,
    cost: 1.44,
    imageName: "wholeFoods.jpg",
    statement: "Proper hydration is crucial to overall wellness. Stay balanced with our 365 Everyday Value Electrolyte Enhanced Water! Made with deionized water and added electrolytes for optimum hydration - it's clear, simple, zero-calori refreshment."
  },
  {
    brand: "Zephyrhills",
    phLevel: 7.5,
    cost: 2,
    imageName: "zephyrhills.jpg",
    statement: "Zephyrhills is a brand of spring water sold regionally in the United States by Nestlé Waters North America. It is sourced from Crystal Springs, located near Crystal Springs and Zephyrhills, Florida, as well as Cypress Springs, Blue Springs, White Springs, and Spring of Life in Lake County."
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
