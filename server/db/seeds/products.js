const faker = require("faker");

const makeFakeProduct = () => {
  return {
    name: faker.commerce.productName(),
    unitCost: faker.commerce.price(),
    description: faker.lorem.paragraph(),
    material: faker.commerce.productMaterial(),
    imageName: faker.image.imageUrl(400,400,"fashion",true),
    stock: faker.random.boolean()

  };
};

const products = [
  {
    name: "Trinity Ring",
    material: "White Gold, Yellow Gold, Pink Gold",
    description:
      "Designed by Louis Cartier in 1924, the Trinity ring is a signature design of the Cartier Maison. The three interlaced bands in pink, yellow and white gold symbolize love, fidelity and friendship. The ring has inspired the full Trinity collection, a timeless testament to life's most memorable loves.",
    imageName: "trinity_ring.jpg",
    unitCost: 1140,
    stock:0
  },
  {
    name: "Butterfly Ring",
    material: "Sterling Silver, Rose Gold, Blue Topaz",
    description:
      "Drawing inspiration from an urban garden, the Return to Tiffany® Love Bugs collection transforms an icon into something unexpected and modern. A radiant blue topaz adds a pop of color of this striking butterfly ring.",
    imageName: "butterfly_ring.jpg",
    unitCost: 1400,
    stock:0
  },
  {
    name: "JUSTE UN CLOU Bracelet",
    material: "Pink Gold, Diamonds",
    description:
      "A nail becomes jewelry. Designed in 1970s New York, the first Juste un Clou bracelet reflected a wild, freewheeling era. Bold, modern, and innovative, Juste un Clou is a creative twist on a familiar object. This jewelry collection transcends the everyday, making the ordinary exquisite, for him and for her.",
    imageName: "juste-un-clou-bracelet.jpg",
    unitCost: 43600,
    stock:0
  },
  {
    name: "Daisy Chain Bracelet",
    material: "Sterling Silver, Yellow Gold",
    description:
      "Drawing inspiration from an urban garden, the Return to Tiffany® Love Bugs collection transforms an icon into something unexpected and modern. Designed in 18k gold and sterling silver, this daisy chain bracelet is playful and contemporary.",
    imageName: "daisy-bracelet.jpg",
    unitCost: 1050,
    stock:1
  },
  {
    name: "Caresse d'Orchidées Par Cartier Earrings",
    material: "White Gold, Diamonds",
    description:
      "A popular flower at Cartier, the orchid demonstrates a delicate, feminine appeal. The fragility of this queen of flowers is meticulously rendered by Cartier's skillful craftsmanship, its delicate petals sculpted from the finest precious materials. First used by the jeweler in 1925, the orchid is now a classic motif in Cartier jewelry.",
    imageName: "caresse-dorchidees-earrings.jpg",
    unitCost: 11100,
    stock:1
  },
  {
    name: "Lynn Earrings",
    material: "Yellow Gold, Rubies",
    description:
      "Jean Schlumberger’s visionary creations have captivated the world's most fashionable women. Rich rubies make a strong statement in these iconic earrings.",
    imageName: "lynn-earrings.jpg",
    unitCost: 2650,
    stock:1
  },
  {
    name: "Panthère de Cartier Necklace",
    material:
      "Yellow Gold, Black Lacquer, Citrine, Tsavorite Garnets, Diamonds",
    description:
      "The panther, the symbolic animal of Cartier, made its first appearance in the Maison's collections in 1914. Louis Cartier was the first to tame the mythic animal, and his colleague Jeanne Toussaint turned it into a legend. The panther can be fierce, playful, or lovable, displaying all the facets of its liberated personality from one collection to the next.",
    imageName: "panthere-de-cartier-necklace.jpg",
    unitCost: 28200,
    stock:1
  },
  {
    name: "Wrap Necklace",
    material: "Rose Gold",
    description:
      "Tiffany HardWear is elegantly subversive and captures the spirit of the women of New York City. This necklace is both refined and rebellious.",
    imageName: "wrap-necklace.jpg",
    unitCost: 14700,
    stock:1
  }
];

for (let i = products.length; i < 400; i++) {
  products.push(makeFakeProduct());
}

module.exports = products;
