// Helper functions for images
// Remove the getImageForProduct and addImagesToProductData functions.
// Directly assign a relevant Unsplash image URL to each product and alternative below:
export const productData = {
  homeCare: [
    {
      id: 31,
      name: "Coconut Coir Scrub Pad – Earth Essentials",
      emissions: 0.5,
      emissionsSplit: { farming: 0.2, transport: 0.2, packaging: 0.1 },
      price: 120,
      description: "Handwoven coir pad for scrubbing utensils; durable and compostable",
      category: "cleaning",
      image: "/images/products/home_and_cleaning/1.jpg", // local image
      alternatives: [
        {
          name: "Coconut Coir Scrub Pad – GoGreen Supply",
          emissions: 0.4,
          emissionsSplit: { farming: 0.15, transport: 0.15, packaging: 0.1 },
          price: 140,
          description: "Sun-dried coir fibers; packaged locally",
          image: "/images/products/home_and_cleaning/1.jpg"
        },
        {
          name: "Coconut & Loofah Mixed Scrub Pad – EcoWeave",
          emissions: 0.45,
          emissionsSplit: { farming: 0.18, transport: 0.17, packaging: 0.1 },
          price: 160,
          description: "Layered coir + loofah pad for gentle yet effective cleaning",
          image: "/images/products/home_and_cleaning/1.jpg"
        }
      ]
    },
    {
      id: 32,
      name: "Reusable Bamboo Kitchen Towels – Eco Threads",
      emissions: 0.9,
      emissionsSplit: { farming: 0.3, transport: 0.4, packaging: 0.2 },
      price: 250,
      description: "Absorbent bamboo towel replaces up to 60 paper towels; machine washable",
      category: "kitchen",
      image: "/images/products/home_and_cleaning/2.jpg", // local image
      alternatives: [
        {
          name: "Bamboo Towels – LeafTissue",
          emissions: 0.7,
          emissionsSplit: { farming: 0.25, transport: 0.3, packaging: 0.15 },
          price: 280,
          description: "Certified organic bamboo, softer with extra layers",
          image: "/images/products/home_and_cleaning/2.jpg"
        }
      ]
    },
    {
      id: 33,
      name: "Natural Floor Cleaner (Neem & Citronella) – HerbalHome",
      emissions: 0.8,
      emissionsSplit: { farming: 0.3, transport: 0.3, packaging: 0.2 },
      price: 180,
      description: "Neem and citronella-based floor cleaner; mild antiseptic, pleasant aroma",
      category: "cleaning",
      image: "/images/products/home_and_cleaning/3.jpg", // local image
      alternatives: [
        {
          name: "Natural Floor Cleaner – BioWipe",
          emissions: 0.6,
          emissionsSplit: { farming: 0.2, transport: 0.2, packaging: 0.2 },
          price: 220,
          description: "Herbal cleaner in reusable glass; produced in solar-run facility",
          image: "/images/products/home_and_cleaning/3.jpg"
        }
      ]
    },
    {
      id: 34,
      name: "Chemical Toilet Cleaner – CleanChem Co.",
      emissions: 4.2,
      emissionsSplit: { manufacturing: 2.0, transport: 1.5, packaging: 0.7 },
      price: 150,
      description: "Acidic cleaner removes limescale and stains quickly but uses petrochemical solvents",
      category: "cleaning",
      image: "/images/products/home_and_cleaning/4.jpg", // local image
      alternatives: [
        {
          name: "Bio-Enzyme Toilet Cleaner – EcoFlush",
          emissions: 1.8,
          emissionsSplit: { farming: 0.6, transport: 0.7, packaging: 0.5 },
          price: 199,
          description: "Uses natural bacterial enzymes to break down organic waste; PET-free packaging",
          image: "/images/products/home_and_cleaning/4.jpg"
        },
        {
          name: "Citrus-Enzyme Toilet Gel – GreenSanitize",
          emissions: 2.0,
          emissionsSplit: { farming: 0.7, transport: 0.6, packaging: 0.7 },
          price: 219,
          description: "Fermented citrus peel enzymes; pH-balanced, biodegradable",
          image: "/images/products/home_and_cleaning/4.jpg"
        }
      ]
    },
    {
      id: 35,
      name: "Steel Scrubber – ShineX",
      emissions: 1.4,
      emissionsSplit: { manufacturing: 0.8, transport: 0.4, packaging: 0.2 },
      price: 60,
      description: "Heavy-duty stainless-steel mesh pad for tough grime cleaning",
      category: "kitchen",
      image: "/images/products/home_and_cleaning/5.jpg", // local image
      alternatives: [
        {
          name: "Plant Fiber Scrubber – EarthScrub",
          emissions: 0.6,
          emissionsSplit: { farming: 0.3, transport: 0.2, packaging: 0.1 },
          price: 80,
          description: "Ban fiber mesh; tough on grease, compostable",
          image: "/images/products/home_and_cleaning/5.jpg"
        }
      ]
    },
    {
      id: 36,
      name: "Dishwashing Liquid (Standard) – FoamMax",
      emissions: 3.0,
      emissionsSplit: { manufacturing: 1.5, transport: 1.0, packaging: 0.5 },
      price: 120,
      description: "Standard detergent with degreasing enzymes, moderately foaming",
      category: "kitchen",
      image: "/images/products/home_and_cleaning/6.jpg", // local image
      alternatives: [
        {
          name: "Eco Dish Liquid (Coconut Extract) – SoapDrop",
          emissions: 1.2,
          emissionsSplit: { farming: 0.5, transport: 0.4, packaging: 0.3 },
          price: 180,
          description: "Coconut-derived surfactant, biodegradable, sold with refill pouches",
          image: "/images/products/home_and_cleaning/6.jpg"
        },
        {
          name: "Zero-Waste Dish Block – SoapCube",
          emissions: 0.8,
          emissionsSplit: { farming: 0.3, manufacturing: 0.3, packaging: 0.2 },
          price: 199,
          description: "Solid dish detergent block; plastic-free packaging and long-lasting",
          image: "/images/products/home_and_cleaning/6.jpg"
        }
      ]
    },
    {
      id: 37,
      name: "Paper Towels – WhiteWipe",
      emissions: 2.8,
      emissionsSplit: { manufacturing: 1.3, transport: 1.0, packaging: 0.5 },
      price: 60,
      description: "Standard single-ply paper towels for heavy duty cleaning",
      category: "kitchen",
      image: "/images/products/home_and_cleaning/7.jpg", // local image
      alternatives: [
        {
          name: "Bamboo Paper Towels – TreeFree Home",
          emissions: 1.4,
          emissionsSplit: { farming: 0.6, transport: 0.5, packaging: 0.3 },
          price: 120,
          description: "Tree-free bamboo fiber towels; soft and strong; compostable packaging",
          image: "/images/products/home_and_cleaning/7.jpg"
        }
      ]
    },
    {
      id: 38,
      name: "Room Freshener (Aerosol) – AirZest",
      emissions: 5.1,
      emissionsSplit: { manufacturing: 2.0, transport: 2.0, packaging: 1.1 },
      price: 150,
      description: "Pressurized spray with artificial fragrance; quick scent but uses propellants",
      category: "home",
      image: "/images/products/home_and_cleaning/8.jpg", // local image
      alternatives: [
        {
          name: "Essential Oil Diffuser (Glass) – AromaEarth",
          emissions: 1.2,
          emissionsSplit: { farming: 0.5, transport: 0.4, packaging: 0.3 },
          price: 899,
          description: "Reusable ceramic/glass diffuser; natural essential oils",
          image: "/images/products/home_and_cleaning/8.jpg"
        },
        {
          name: "Reed Diffuser (Ceramic Bottle) – PureScents",
          emissions: 0.8,
          emissionsSplit: { farming: 0.3, transport: 0.3, packaging: 0.2 },
          price: 799,
          description: "Passive reed scent with organic oil blend; refillable glass bottle",
          image: "/images/products/home_and_cleaning/8.jpg"
        }
      ]
    },
    {
      id: 39,
      name: "Plastic Mop – CleanPro Tools",
      emissions: 2.4,
      emissionsSplit: { manufacturing: 1.2, transport: 0.8, packaging: 0.4 },
      price: 499,
      description: "Plastic handle with microfiber disposable head; spin-action bucket included",
      category: "cleaning",
      image: "/images/products/home_and_cleaning/1.jpg", // local image
      alternatives: [
        {
          name: "Wooden Mop w/ Replaceable Head – SwachMop",
          emissions: 1.0,
          emissionsSplit: { farming: 0.4, transport: 0.4, packaging: 0.2 },
          price: 699,
          description: "Bamboo handle with replaceable cotton-fiber mop head; zero-waste packing",
          image: "/images/products/home_and_cleaning/1.jpg"
        }
      ]
    },
    {
      id: 40,
      name: "Glass Cleaner – BrightView",
      emissions: 2.2,
      emissionsSplit: { manufacturing: 1.0, transport: 0.7, packaging: 0.5 },
      price: 140,
      description: "Ammonia-based glass cleaner; streak-free finish",
      category: "cleaning",
      image: "/images/products/home_and_cleaning/2.jpg", // local image
      alternatives: [
        {
          name: "Refill Glass Cleaner (Lime-Vinegar Based) – NatureSpray",
          emissions: 1.2,
          emissionsSplit: { farming: 0.4, transport: 0.5, packaging: 0.3 },
          price: 199,
          description: "Vinegar-lime cleaner in glass; refill pouches reduce packaging",
          image: "/images/products/home_and_cleaning/2.jpg"
        }
      ]
    }
  ],

  groceries: [
    {
      id: 41,
      name: "Apple – Kashmir Valley (HimSagar Organics)",
      emissions: 1.1,
      emissionsSplit: { farming: 0.5, transport: 0.4, packaging: 0.2 },
      price: 250,
      description: "Crisp, sun-ripened Kashmiri apples, pesticide-free, hand-harvested",
      category: "fruits",
      image: "/images/products/fruits/apple.jpg", // local image
      alternatives: [
        {
          name: "Apple – Kashmir Valley (ZeroCarbon Fruits)",
          emissions: 0.9,
          emissionsSplit: { farming: 0.4, transport: 0.3, packaging: 0.2 },
          price: 275,
          description: "Shipped by eco-rail, reusable crates, shorter cold-chain",
          image: "/images/products/fruits/apple.jpg"
        },
        {
          name: "Apple – Himachal Local (GreenHill Orchards)",
          emissions: 0.95,
          emissionsSplit: { farming: 0.45, transport: 0.3, packaging: 0.2 },
          price: 240,
          description: "Grown in orchard with organic fertilizer, packed locally",
          image: "/images/products/fruits/apple.jpg"
        }
      ]
    },
    {
      id: 42,
      name: "Banana – Organic Local (Nature's Basket Kerala)",
      emissions: 0.4,
      emissionsSplit: { farming: 0.2, transport: 0.1, packaging: 0.1 },
      price: 90,
      description: "Locally harvested bananas, compostable bunch wrap",
      category: "fruits",
      image: "/images/products/fruits/banana.jpg", // local image
      alternatives: [
        {
          name: "Banana – Organic (FarmFresh Andhra)",
          emissions: 0.3,
          emissionsSplit: { farming: 0.15, transport: 0.05, packaging: 0.1 },
          price: 95,
          description: "Drip-irrigated plantations, solar-cooled storage, pesticide-free",
          image: "/images/products/fruits/banana.jpg"
        }
      ]
    },
    {
      id: 43,
      name: "Carrot – Ooty Organic Farms",
      emissions: 0.6,
      emissionsSplit: { farming: 0.3, transport: 0.2, packaging: 0.1 },
      price: 120,
      description: "Crisp, organically grown high-altitude carrots",
      category: "vegetables",
      image: "/images/products/vegetables/carrot.jpg", // local image
      alternatives: [
        {
          name: "Carrot – Vellore Organic Collective",
          emissions: 0.5,
          emissionsSplit: { farming: 0.25, transport: 0.15, packaging: 0.1 },
          price: 110,
          description: "Grown without synthetic fertilizer, packed within district",
          image: "/images/products/vegetables/carrot.jpg"
        }
      ]
    },
    {
      id: 44,
      name: "Tomato – Local Organic (GreenGrow Tamil Nadu)",
      emissions: 0.7,
      emissionsSplit: { farming: 0.3, transport: 0.2, packaging: 0.2 },
      price: 80,
      description: "Organic vine-ripened tomatoes, no wax coating",
      category: "vegetables",
      image: "/images/products/vegetables/tomato.jpg", // local image
      alternatives: [
        {
          name: "Tomato – Coimbatore SoilLess Farms",
          emissions: 0.6,
          emissionsSplit: { farming: 0.25, transport: 0.15, packaging: 0.2 },
          price: 95,
          description: "Hydroponically grown, shipped in bulk crates",
          image: "/images/products/vegetables/tomato.jpg"
        },
        {
          name: "Tomato – Bengaluru Greenhouse (Farm2Fork)",
          emissions: 0.55,
          emissionsSplit: { farming: 0.2, transport: 0.15, packaging: 0.2 },
          price: 105,
          description: "Year-round greenhouse tomatoes, drip irrigation, sourced regionally",
          image: "/images/products/vegetables/tomato.jpg"
        }
      ]
    },
    {
      id: 45,
      name: "Onion – Organic Tamil Nadu (AgroPure)",
      emissions: 0.9,
      emissionsSplit: { farming: 0.4, transport: 0.3, packaging: 0.2 },
      price: 60,
      description: "Organic red onions, sun cured, low-sodium storage",
      category: "vegetables",
      image: "/images/products/vegetables/onion.jpg", // local image
      alternatives: [
        {
          name: "Onion – Bhoomi TN Circle",
          emissions: 0.7,
          emissionsSplit: { farming: 0.3, transport: 0.2, packaging: 0.2 },
          price: 65,
          description: "Short-distance delivery, solar-powered packhouse",
          image: "/images/products/vegetables/onion.jpg"
        }
      ]
    },
    {
      id: 46,
      name: "Ponni Rice – Local (RiceTrust)",
      emissions: 1.2,
      emissionsSplit: { farming: 0.6, transport: 0.4, packaging: 0.2 },
      price: 55,
      description: "Locally milled Ponni rice, fragrant and hand-polished",
      category: "grains",
      image: "/images/products/grains/ponni-rice.jpg", // local image
      alternatives: [
        {
          name: "Ponni Rice – NativeHarvest Collective",
          emissions: 1.0,
          emissionsSplit: { farming: 0.5, transport: 0.3, packaging: 0.2 },
          price: 65,
          description: "SRI technique (reduced water), on-site storage",
          image: "/images/products/grains/ponni-rice.jpg"
        }
      ]
    },
    {
      id: 47,
      name: "Lettuce – Imported (EuroFresh Netherlands)",
      emissions: 2.8,
      emissionsSplit: { farming: 0.7, transport: 1.7, packaging: 0.4 },
      price: 300,
      description: "Hydroponic iceberg lettuce, air-shipped",
      category: "vegetables",
      image: "/images/products/vegetables/lettuce.jpg", // local image
      alternatives: [
        {
          name: "Lettuce – Chennai Hydroponics (LeafyGreen Farm)",
          emissions: 0.9,
          emissionsSplit: { farming: 0.4, transport: 0.3, packaging: 0.2 },
          price: 180,
          description: "Fresh hydroponic leaves grown 3 km from warehouse",
          image: "/images/products/vegetables/lettuce.jpg"
        }
      ]
    },
    {
      id: 48,
      name: "Avocado – Mexico (Avomex)",
      emissions: 3.0,
      emissionsSplit: { farming: 1.4, transport: 1.2, packaging: 0.4 },
      price: 350,
      description: "Hass avocados air-freighted; rich in healthy fats",
      category: "fruits",
      image: "/images/products/fruits/avocado.jpg", // local image
      alternatives: [
        {
          name: "Avocado – Coorg (Valley Organics)",
          emissions: 1.4,
          emissionsSplit: { farming: 0.8, transport: 0.4, packaging: 0.2 },
          price: 320,
          description: "Shade-grown regional Hass variety, reusable crates",
          image: "/images/products/fruits/avocado.jpg"
        },
        {
          name: "Avocado – Maharashtra Local (GreenHarvest)",
          emissions: 1.2,
          emissionsSplit: { farming: 0.7, transport: 0.3, packaging: 0.2 },
          price: 300,
          description: "Grown in local orchards, solar-powered sorting",
          image: "/images/products/fruits/avocado.jpg"
        }
      ]
    },
    {
      id: 49,
      name: "Apple – Imported USA (KiwiFresh)",
      emissions: 2.0,
      emissionsSplit: { farming: 0.7, transport: 1.0, packaging: 0.3 },
      price: 350,
      description: "Imported crisp varieties, air-freighted cold chain",
      category: "fruits",
      image: "/images/products/fruits/apple.jpg", // local image
      alternatives: [
        {
          name: "Apple – Kashmir (ZeroCarbon Fruits)",
          emissions: 0.9,
          emissionsSplit: { farming: 0.4, transport: 0.3, packaging: 0.2 },
          price: 275,
          description: "Rail-shipped local apple in reusable fiber crates",
          image: "/images/products/fruits/apple.jpg"
        },
        {
          name: "Apple – Himachal (GreenHill Orchards)",
          emissions: 0.95,
          emissionsSplit: { farming: 0.45, transport: 0.3, packaging: 0.2 },
          price: 240,
          description: "Grown in orchard with organic fertilizer, packed locally",
          image: "/images/products/fruits/apple.jpg"
        }
      ]
    },
    {
      id: 50,
      name: "Tomato – Maharashtra Hybrid (SuperAgri)",
      emissions: 1.9,
      emissionsSplit: { farming: 0.8, transport: 0.7, packaging: 0.4 },
      price: 70,
      description: "Hybrid field-grown tomato, year-round availability",
      category: "vegetables",
      image: "/images/products/vegetables/tomato.jpg", // local image
      alternatives: [
        {
          name: "Tomato – SoilLess Coimbatore",
          emissions: 1.1,
          emissionsSplit: { farming: 0.5, transport: 0.4, packaging: 0.2 },
          price: 95,
          description: "Proximal hydroponic greenhouse, recycled water use",
          image: "/images/products/vegetables/tomato.jpg"
        }
      ]
    }
  ],

  personalCare: [
    {
      id: 51,
      name: "Bamboo Toothbrush – BrushGreen",
      emissions: 0.4,
      emissionsSplit: { farming: 0.15, transport: 0.15, packaging: 0.1 },
      price: 120,
      description: "Biodegradable bamboo handle with soft nylon bristles",
      category: "oralCare",
      image: "/images/products/oral-care/bamboo-toothbrush.jpg", // local image
      alternatives: [
        {
          name: "Bamboo Toothbrush – TreeBrush Co.",
          emissions: 0.3,
          emissionsSplit: { farming: 0.1, transport: 0.1, packaging: 0.1 },
          price: 150,
          description: "Locally grown bamboo, no individual box",
          image: "/images/products/oral-care/bamboo-toothbrush.jpg"
        },
        {
          name: "Charcoal Bamboo Brush – CarbonSmile",
          emissions: 0.28,
          emissionsSplit: { farming: 0.1, transport: 0.1, packaging: 0.08 },
          price: 170,
          description: "Bamboo handle with charcoal-infused bristles for whitening",
          image: "/images/products/oral-care/bamboo-toothbrush.jpg"
        }
      ]
    },
    {
      id: 52,
      name: "Herbal Soap (Neem-Tulsi) – Ayura Naturals",
      emissions: 0.9,
      emissionsSplit: { farming: 0.3, transport: 0.3, packaging: 0.3 },
      price: 180,
      description: "Cold-processed bar with neem, tulsi, and mild foaming",
      category: "soap",
      image: "/images/products/soap/neem-tulsi-soap.jpg", // local image
      alternatives: [
        {
          name: "Herbal Soap – NatureCraft",
          emissions: 0.7,
          emissionsSplit: { farming: 0.25, transport: 0.25, packaging: 0.2 },
          price: 200,
          description: "Paper-wrapped bar with turmeric & coconut oil",
          image: "/images/products/soap/neem-tulsi-soap.jpg"
        }
      ]
    },
    {
      id: 53,
      name: "Reusable Menstrual Cup – SheCycle",
      emissions: 0.8,
      emissionsSplit: { manufacturing: 0.4, transport: 0.2, packaging: 0.2 },
      price: 499,
      description: "Medical-grade silicone, cotton pouch, lasts 5+ years",
      category: "feminineHygiene",
      image: "/images/products/feminine-hygiene/reusable-menstrual-cup.jpg", // local image
      alternatives: [
        {
          name: "Menstrual Cup – EcoFem",
          emissions: 0.6,
          emissionsSplit: { manufacturing: 0.3, transport: 0.1, packaging: 0.2 },
          price: 599,
          description: "Thin-rim design, upcycled pouch, BPA-free",
          image: "/images/products/feminine-hygiene/reusable-menstrual-cup.jpg"
        }
      ]
    },
    {
      id: 54,
      name: "Shampoo Bar – EarthSoap Co.",
      emissions: 1.2,
      emissionsSplit: { farming: 0.4, transport: 0.4, packaging: 0.4 },
      price: 250,
      description: "SLS-free herbal bar; lasts 60 washes",
      category: "hairCare",
      image: "/images/products/hair-care/shampoo-bar.jpg", // local image
      alternatives: [
        {
          name: "Shampoo Bar – NaturalNest",
          emissions: 1.0,
          emissionsSplit: { farming: 0.35, transport: 0.3, packaging: 0.35 },
          price: 300,
          description: "Locally extracted herbs, cardboard sleeve only",
          image: "/images/products/hair-care/shampoo-bar.jpg"
        },
        {
          name: "Zero-Waste Hair Bar – BareRoots",
          emissions: 0.9,
          emissionsSplit: { farming: 0.3, transport: 0.3, packaging: 0.3 },
          price: 320,
          description: "Clay & neem base, plastic-free, reusable tin",
          image: "/images/products/hair-care/shampoo-bar.jpg"
        }
      ]
    },
    {
      id: 55,
      name: "Safety Razor (Stainless Steel) – EcoEdge",
      emissions: 2.2,
      emissionsSplit: { manufacturing: 1.2, transport: 0.6, packaging: 0.4 },
      price: 999,
      description: "Reusable double-edge razor with bamboo handle",
      category: "shaving",
      image: "/images/products/shaving/safety-razor.jpg", // local image
      alternatives: [
        {
          name: "Razor – ReUse Razor Co.",
          emissions: 1.8,
          emissionsSplit: { manufacturing: 1.0, transport: 0.5, packaging: 0.3 },
          price: 1199,
          description: "Recycled steel and linen pouch; plastic-free packaging",
          image: "/images/products/shaving/safety-razor.jpg"
        }
      ]
    },
    {
      id: 56,
      name: "Liquid Handwash – CleanDrop",
      emissions: 3.0,
      emissionsSplit: { manufacturing: 1.3, transport: 1.0, packaging: 0.7 },
      price: 220,
      description: "Antibacterial formula in a PET bottle",
      category: "handWash",
      image: "/images/products/hand-wash/liquid-handwash.jpg", // local image
      alternatives: [
        {
          name: "Refill Pouch Handwash – DropLess",
          emissions: 1.2,
          emissionsSplit: { manufacturing: 0.6, transport: 0.4, packaging: 0.2 },
          price: 180,
          description: "Concentrated formula in biodegradable pouch",
          image: "/images/products/hand-wash/liquid-handwash.jpg"
        }
      ]
    },
    {
      id: 57,
      name: "Toothpaste Tube (Standard) – BrightSmile",
      emissions: 2.5,
      emissionsSplit: { manufacturing: 1.2, transport: 0.8, packaging: 0.5 },
      price: 150,
      description: "Fluoride gel for cavity protection",
      category: "oralCare",
      image: "/images/products/oral-care/toothpaste-tube.jpg", // local image
      alternatives: [
        {
          name: "Herbal Tooth Powder (Glass Jar) – HerbCura",
          emissions: 0.8,
          emissionsSplit: { farming: 0.4, transport: 0.2, packaging: 0.2 },
          price: 249,
          description: "Clove, neem, and baking-soda blend; reusable jar",
          image: "/images/products/oral-care/toothpaste-tube.jpg"
        }
      ]
    },
    {
      id: 58,
      name: "Cotton Swabs (Paper Stick) – SwabCo",
      emissions: 1.0,
      emissionsSplit: { manufacturing: 0.4, transport: 0.4, packaging: 0.2 },
      price: 99,
      description: "Paper-stick swabs with cotton tips",
      category: "personalCare",
      image: "/images/products/personal-care/cotton-swabs.jpg", // local image
      alternatives: [
        {
          name: "Cotton Swabs – LeafCotton",
          emissions: 0.7,
          emissionsSplit: { manufacturing: 0.3, transport: 0.3, packaging: 0.1 },
          price: 129,
          description: "Locally made, reduced packaging waste",
          image: "/images/products/personal-care/cotton-swabs.jpg"
        }
      ]
    },
    {
      id: 59,
      name: "Deodorant Spray (Aerosol) – FreshAir",
      emissions: 4.5,
      emissionsSplit: { manufacturing: 2.0, transport: 1.5, packaging: 1.0 },
      price: 240,
      description: "Aluminum aerosol can with synthetic fragrance",
      category: "deodorant",
      image: "/images/products/deodorant/deodorant-spray.jpg", // local image
      alternatives: [
        {
          name: "Deodorant Balm (Glass Jar) – LushRoots",
          emissions: 1.2,
          emissionsSplit: { farming: 0.4, transport: 0.4, packaging: 0.4 },
          price: 299,
          description: "Creamy balm with shea and essential oils; compostable jar",
          image: "/images/products/deodorant/deodorant-spray.jpg"
        },
        {
          name: "Roll-On Deodorant – PurePit",
          emissions: 1.0,
          emissionsSplit: { farming: 0.35, transport: 0.35, packaging: 0.3 },
          price: 199,
          description: "Botanical-based roll-on in glass bottle",
          image: "/images/products/deodorant/deodorant-spray.jpg"
        }
      ]
    },
    {
      id: 60,
      name: "Face Wash Tube – GlowMint",
      emissions: 3.2,
      emissionsSplit: { manufacturing: 1.5, transport: 1.0, packaging: 0.7 },
      price: 249,
      description: "Mint and salicylic gel cleanser in plastic tube",
      category: "skinCare",
      image: "/images/products/skin-care/face-wash-tube.jpg", // local image
      alternatives: [
        {
          name: "Herbal Face Cleanser Bar – ForestGlow",
          emissions: 1.0,
          emissionsSplit: { farming: 0.4, transport: 0.3, packaging: 0.3 },
          price: 299,
          description: "Oat & honey bar, zero plastic packaging",
          image: "/images/products/skin-care/face-wash-tube.jpg"
        },
        {
          name: "Refillable Foam Cleanser – ReFillFace",
          emissions: 1.3,
          emissionsSplit: { manufacturing: 0.5, transport: 0.5, packaging: 0.3 },
          price: 349,
          description: "Foam pump in glass with refill sachets",
          image: "/images/products/skin-care/face-wash-tube.jpg"
        }
      ]
    }
  ],
  babyProducts: [
    {
      id: 1,
      name: "Disposable Diaper – PureNappy",
      emissions: 0.089,
      emissionsSplit: {
        material: 0.062,
        manufactureTransport: 0.018,
        waste: 0.009
      },
      price: 25,
      description: "Premium plant-polymer core with night-time leakage protection",
      category: "diapers",
      image: "/images/products/baby_products/1.jpg", // local image
      alternatives: [
        {
          name: "Cloth Diaper Rental – ReDiaper",
          emissions: 0.05,
          emissionsSplit: {
            laundry: 0.03,
            logistics: 0.015,
            packaging: 0.005
          },
          price: 1500,
          description: "Stylish bamboo-cotton reusable set; weekly eco-washing pickup, compostable shipping",
          image: "/images/products/diapers/cloth-diaper-rental.jpg"
        },
        {
          name: "Biodegradable Disposable – EcoTots",
          emissions: 0.07,
          emissionsSplit: {
            material: 0.05,
            manufactureTransport: 0.012,
            composting: 0.008
          },
          price: 30,
          description: "100% plant-based core, chlorine-free, fully home-compostable bag",
          image: "/images/products/diapers/biodegradable-disposable.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Reusable Cloth Diaper – Little Tushies",
      emissions: 1.8,
      emissionsSplit: {
        rawMaterial: 0.9,
        washUse: 0.6,
        packaging: 0.3
      },
      price: 450,
      description: "Bamboo-cotton blend with waterproof snaps",
      category: "diapers",
      image: "/images/products/baby_products/2.jpeg", // local image
      alternatives: [
        {
          name: "Bamboo-Cotton Hybrid Diaper – Bamboonest",
          emissions: 1.3,
          emissionsSplit: {
            rawMaterial: 0.6,
            wash: 0.5,
            packaging: 0.2
          },
          price: 499,
          description: "Low-water dye, elastic waist, comes with compostable pouch",
          image: "/images/products/diapers/bamboo-cotton-hybrid-diaper.jpg"
        }
      ]
    },
    {
      id: 3,
      name: "Baby Wipes (Cotton) – FreshBuds",
      emissions: 0.2,
      emissionsSplit: {
        material: 0.1,
        transport: 0.07,
        packaging: 0.03
      },
      price: 199,
      description: "Soft, 100% cotton, gentle on skin",
      category: "wipes",
      image: "/images/products/wipes/baby-wipes.jpg", // local image
      alternatives: [
        {
          name: "Bamboo Reusable Wipes – PureSprout",
          emissions: 0.1,
          emissionsSplit: {
            material: 0.05,
            transport: 0.03,
            packaging: 0.02
          },
          price: 249,
          description: "Washable up to 100 times, bamboo from agro-certified farms, comes with laundry bag",
          image: "/images/products/wipes/bamboo-reusable-wipes.jpg"
        }
      ]
    },
    {
      id: 4,
      name: "Baby Lotion (Shea) – Softkins",
      emissions: 0.6,
      emissionsSplit: {
        ingredient: 0.3,
        processing: 0.2,
        packaging: 0.1
      },
      price: 550,
      description: "All-natural shea & almond, light moisturizing",
      category: "skincare",
      image: "/images/products/skincare/baby-lotion.jpg", // local image
      alternatives: [
        {
          name: "EarthBebe Baby Lotion",
          emissions: 0.4,
          emissionsSplit: {
            ingredient: 0.2,
            processing: 0.15,
            packaging: 0.05
          },
          price: 650,
          description: "Made in solar-powered plant, refillable pouch included, fragrance-free formula",
          image: "/images/products/skincare/earthbebe-baby-lotion.jpg"
        },
        {
          name: "GreenBabe Organic Aloe Lotion",
          emissions: 0.45,
          emissionsSplit: {
            ingredient: 0.25,
            processing: 0.15,
            packaging: 0.05
          },
          price: 699,
          description: "Aloe & coconut oil base, certified organic, comes in recyclable aluminum container",
          image: "/images/products/skincare/greenbabe-organic-aloe-lotion.jpg"
        }
      ]
    },
    {
      id: 5,
      name: "Silicone Teether – LittleChews",
      emissions: 1.0,
      emissionsSplit: {
        silicone: 0.6,
        manufacturing: 0.2,
        packagingTransport: 0.2
      },
      price: 450,
      description: "BPA-free textured teether, dishwasher & steriliser safe",
      category: "teethers",
      image: "/images/products/teethers/silicone-teether.jpg", // local image
      alternatives: [
        {
          name: "Natural Rubber Teether – EcoSoothe",
          emissions: 0.5,
          emissionsSplit: {
            rubber: 0.3,
            manufacturing: 0.1,
            packagingTransport: 0.1
          },
          price: 550,
          description: "FSC-certified natural rubber, biodegradable, plastic-free wrap",
          image: "/images/products/teethers/natural-rubber-teether.jpg"
        }
      ]
    },
    {
      id: 6,
      name: "Plastic Baby Bottle – SafeSip",
      emissions: 0.7,
      emissionsSplit: {
        resin: 0.4,
        assemblySterilization: 0.2,
        packaging: 0.1
      },
      price: 350,
      description: "Lightweight, anti-colic silicone nipple, easy-read markings",
      category: "bottles",
      image: "/images/products/bottles/plastic-baby-bottle.jpg", // local image
      alternatives: [
        {
          name: "Glass Baby Bottle – PureGlass",
          emissions: 0.5,
          emissionsSplit: {
            glassProduction: 0.3,
            assembly: 0.1,
            packaging: 0.1
          },
          price: 550,
          description: "Borosilicate glass, dishwasher & microwave safe, long-lasting",
          image: "/images/products/bottles/glass-baby-bottle.jpg"
        }
      ]
    },
    {
      id: 7,
      name: "Disposable Nursing Pad – MilkGuard",
      emissions: 0.05,
      emissionsSplit: {
        material: 0.03,
        manufactureTransport: 0.015,
        packaging: 0.005
      },
      price: 400,
      description: "Superabsorbent core, leak-proof breathable cover",
      category: "nursing",
      image: "/images/products/nursing/disposable-nursing-pad.jpg", // local image
      alternatives: [
        {
          name: "Cotton Nursing Pad – MotherEarth",
          emissions: 0.015,
          emissionsSplit: {
            cotton: 0.01,
            sewingPackaging: 0.005
          },
          price: 299,
          description: "Reusable cotton pads, machine wash 100+ times, comes in organic cotton bag",
          image: "/images/products/nursing/cotton-nursing-pad.jpg"
        }
      ]
    },
    {
      id: 8,
      name: "Baby Food Jar – YumPuree",
      emissions: 0.4,
      emissionsSplit: {
        ingredients: 0.25,
        processing: 0.10,
        jarPackage: 0.05
      },
      price: 120,
      description: "No-sugar vegetable purees in recyclable glass",
      category: "food",
      image: "/images/products/food/baby-food-jar.jpg", // local image
      alternatives: [
        {
          name: "HomeHarvest Reusable Pouch",
          emissions: 0.1,
          emissionsSplit: {
            ingredients: 0.05,
            pouchProduction: 0.03,
            washing: 0.02
          },
          price: 499,
          description: "Silicone pouch for homemade puree, dishwasher & freezer safe",
          image: "/images/products/food/homeharvest-reusable-pouch.jpg"
        }
      ]
    },
    {
      id: 9,
      name: "Silicone Pacifier – BabyCalm",
      emissions: 0.3,
      emissionsSplit: {
        silicone: 0.18,
        manufacturing: 0.08,
        packagingTransport: 0.04
      },
      price: 300,
      description: "Orthodontic pacifier, medical-grade, easy-grip shield",
      category: "pacifiers",
      image: "/images/products/pacifiers/silicone-pacifier.jpg", // local image
      alternatives: [
        {
          name: "Wooden Pacifier – WoodPads",
          emissions: 0.18,
          emissionsSplit: {
            woodMilling: 0.1,
            assembly: 0.05,
            packaging: 0.03
          },
          price: 600,
          description: "Sustainably-harvested beechwood, hand-finished, reusable cotton pouch",
          image: "/images/products/pacifiers/wooden-pacifier.jpg"
        }
      ]
    },
    {
      id: 10,
      name: "Plastic Toy – PlayFun",
      emissions: 1.5,
      emissionsSplit: {
        resin: 0.9,
        molding: 0.3,
        packagingTransport: 0.3
      },
      price: 799,
      description: "BPA-free colorful stacking blocks for toddlers",
      category: "toys",
      image: "/images/products/toys/plastic-toy.jpg", // local image
      alternatives: [
        {
          name: "Bamboo Toy – ForestPlay",
          emissions: 0.75,
          emissionsSplit: {
            bambooSourcing: 0.45,
            crafting: 0.15,
            packagingTransport: 0.15
          },
          price: 1099,
          description: "FSC-certified bamboo blocks, hand-finished, non-toxic paint, recyclable",
          image: "/images/products/toys/bamboo-toy.jpg"
        }
      ]
    }
  ],

  electronics: [
    {
      id: 11,
      name: "Smartphone – TechZone Z1",
      emissions: 38,
      emissionsSplit: {
        manufacture: 30,
        transport: 5,
        packaging: 3
      },
      price: 15999,
      description: "6.5″ FHD, 128 GB, Mediatek G85 chipset",
      category: "phones",
      image: "/images/products/phones/smartphone.jpg", // local image
      alternatives: [
        {
          name: "FairCell Eco Smartphone",
          emissions: 26,
          emissionsSplit: {
            manufacture: 20,
            transport: 4,
            packaging: 2
          },
          price: 18499,
          description: "Modular design, replaceable battery, recycled aluminum body",
          image: "/images/products/phones/faircell-eco-smartphone.jpg"
        },
        {
          name: "FutureFix Modular Phone",
          emissions: 28,
          emissionsSplit: {
            manufacture: 22,
            transport: 4,
            packaging: 2
          },
          price: 17999,
          description: "Fully upgradable modules, repair-friendly, vegan leather back",
          image: "/images/products/phones/futurefix-modular-phone.jpg"
        }
      ]
    },
    {
      id: 12,
      name: "LED Bulb 10W – BrightLite",
      emissions: 0.25,
      emissionsSplit: {
        components: 0.18,
        assembly: 0.05,
        packaging: 0.02
      },
      price: 150,
      description: "Warm white, 10000h lifespan, instant-on",
      category: "lighting",
      image: "/images/products/lighting/led-bulb.jpg", // local image
      alternatives: [
        {
          name: "EcoGlow LED Bulb",
          emissions: 0.18,
          emissionsSplit: {
            components: 0.13,
            assembly: 0.03,
            packaging: 0.02
          },
          price: 169,
          description: "Hydro-powered plant, minimal paper packaging, long life",
          image: "/images/products/lighting/ecoglow-led-bulb.jpg"
        }
      ]
    },
    {
      id: 13,
      name: "Washing Machine – WashPro (Top-Load)",
      emissions: 490,
      emissionsSplit: {
        rawMaterialMfg: 340,
        logistics: 100,
        packaging: 50
      },
      price: 24999,
      description: "7 kg capacity, quick-wash program, 5-year warranty",
      category: "appliances",
      image: "/images/products/appliances/washing-machine.jpg", // local image
      alternatives: [
        {
          name: "GreenSpin Washer",
          emissions: 400,
          emissionsSplit: {
            mfg: 280,
            logistics: 80,
            packaging: 40
          },
          price: 28499,
          description: "45% recycled steel drum, energy-efficient inverter motor, cardboard wrap only",
          image: "/images/products/appliances/greenspin-washer.jpg"
        }
      ]
    },
    {
      id: 14,
      name: "Refurbished LED TV 40″ – TVRenew",
      emissions: 150,
      emissionsSplit: {
        refurbish: 90,
        transport: 40,
        packaging: 20
      },
      price: 19999,
      description: "Tested refurbished TV, 4K HDR, 1-year warranty",
      category: "tvs",
      image: "/images/products/tvs/refurbished-led-tv.jpg", // local image
      alternatives: [
        {
          name: "SmartGreenTV – New LED (Energy-Star)",
          emissions: 200,
          emissionsSplit: {
            manufacture: 140,
            transport: 40,
            packaging: 20
          },
          price: 32999,
          description: "4K, HDR10, low-power standby, eco-mode",
          image: "/images/products/tvs/smartgreen-tv.jpg"
        },
        {
          name: "RenewView Certified OLED Renewed",
          emissions: 180,
          emissionsSplit: {
            refurbish: 110,
            transport: 40,
            packaging: 30
          },
          price: 24999,
          description: "OLED picture, certified refurbished, 2-year warranty",
          image: "/images/products/tvs/renewview-certified-oled.jpg"
        }
      ]
    },
    {
      id: 15,
      name: "Reconditioned Laptop – RenewTech",
      emissions: 70,
      emissionsSplit: {
        refurbish: 50,
        transport: 10,
        packaging: 10
      },
      price: 29999,
      description: "Grade-A refurbished laptop, 1-year warranty",
      category: "computers",
      image: "/images/products/computers/reconditioned-laptop.jpg", // local image
      alternatives: [
        {
          name: "EcoCompute ARM Laptop",
          emissions: 80,
          emissionsSplit: {
            manufacture: 60,
            transport: 12,
            packaging: 8
          },
          price: 35999,
          description: "Lightweight ARM design, efficient battery, aluminum chassis",
          image: "/images/products/computers/ecocompute-arm-laptop.jpg"
        }
      ]
    },
    {
      id: 16,
      name: "Microwave Oven – QuickHeat",
      emissions: 118,
      emissionsSplit: {
        manufacture: 70,
        transport: 30,
        packaging: 18
      },
      price: 7499,
      description: "20 L, dial controls, defrost function",
      category: "appliances",
      image: "/images/products/appliances/microwave-oven.jpg", // local image
      alternatives: [
        {
          name: "ConserveCook Convection Oven",
          emissions: 90,
          emissionsSplit: {
            manufacture: 55,
            transport: 20,
            packaging: 15
          },
          price: 11499,
          description: "Multi-function oven, even heat, energy-saving",
          image: "/images/products/appliances/conservecook-convection-oven.jpg"
        }
      ]
    },
    {
      id: 17,
      name: "Refrigerator 250L – ChillPlus",
      emissions: 382,
      emissionsSplit: {
        manufacture: 200,
        transport: 100,
        packaging: 82
      },
      price: 27999,
      description: "Single-door inverter fridge with stabilizer",
      category: "appliances",
      image: "/images/products/appliances/refrigerator.jpg", // local image
      alternatives: [
        {
          name: "EcoFridge Inverter Model",
          emissions: 300,
          emissionsSplit: {
            manufacture: 150,
            transport: 80,
            packaging: 70
          },
          price: 34999,
          description: "Low-GWP coolant, energy-star rated, 10-year warranty",
          image: "/images/products/appliances/ecofridge-inverter.jpg"
        }
      ]
    },
    {
      id: 18,
      name: "Laser Printer – PrintMaster",
      emissions: 191,
      emissionsSplit: {
        manufacture: 120,
        transport: 50,
        packaging: 21
      },
      price: 12999,
      description: "Monochrome laser, 25 ppm, duplex printing",
      category: "printers",
      image: "/images/products/printers/laser-printer.jpg", // local image
      alternatives: [
        {
          name: "PrintAgain Remanufactured Printer",
          emissions: 120,
          emissionsSplit: {
            refurbish: 80,
            transport: 25,
            packaging: 15
          },
          price: 10999,
          description: "Dual-tray refurbished laser, eco-toner ready",
          image: "/images/products/printers/printagain-remanufactured-printer.jpg"
        }
      ]
    },
    {
      id: 19,
      name: "Wi-Fi Router – NetHome",
      emissions: 115,
      emissionsSplit: {
        manufacture: 70,
        transport: 30,
        packaging: 15
      },
      price: 3499,
      description: "Dual-band AC1200, parental control app",
      category: "networking",
      image: "/images/products/networking/wi-fi-router.jpg", // local image
      alternatives: [
        {
          name: "GreenWave Energy-Star Router",
          emissions: 90,
          emissionsSplit: {
            manufacture: 55,
            transport: 25,
            packaging: 10
          },
          price: 4299,
          description: "Low-power design, mesh-ready, eco-pack",
          image: "/images/products/networking/greenwave-energy-star-router.jpg"
        }
      ]
    },
    {
      id: 20,
      name: "Split AC 1.5T – CoolBreeze",
      emissions: 500,
      emissionsSplit: {
        manufacture: 300,
        transport: 120,
        packaging: 80
      },
      price: 34999,
      description: "3-star inverter AC, eco-mode cooling",
      category: "appliances",
      image: "/images/products/appliances/split-ac.jpg", // local image
      alternatives: [
        {
          name: "SunCool Solar-Ready Inverter AC",
          emissions: 400,
          emissionsSplit: {
            manufacture: 240,
            transport: 100,
            packaging: 60
          },
          price: 42999,
          description: "Pre-charged low-GWP coolant, solar-compatible wiring",
          image: "/images/products/appliances/suncool-solar-ready-inverter-ac.jpg"
        }
      ]
    }
  ],

  clothing: [
    {
      id: 21,
      name: "Cotton T-Shirt – WearDaily",
      emissions: 5.2,
      emissionsSplit: {
        cultivation: 2.5,
        processing: 1.5,
        transportPackaging: 1.2
      },
      price: 750,
      description: "Relaxed crew-neck tee with soft cotton",
      category: "shirts",
      image: "/images/products/clothing_and_accessories/1.jpg",
      alternatives: [
        {
          name: "SattvaWear Organic Tee",
          emissions: 3.8,
          emissionsSplit: {
            cultivation: 1.5,
            processing: 1.2,
            logisticsPackaging: 1.1
          },
          price: 999,
          description: "GOTS-certified organic cotton, minimal water dye",
          image: "/images/products/shirts/sattvawear-organic-tee.jpg"
        },
        {
          name: "ReWeave Recycled Cotton Tee",
          emissions: 2.9,
          emissionsSplit: {
            yarnRecycling: 1.2,
            processing: 1.0,
            logisticsPackaging: 0.7
          },
          price: 1200,
          description: "Made from reclaimed textiles, natural dyes, zero-waste cut",
          image: "/images/products/shirts/reweave-recycled-cotton-tee.jpg"
        }
      ]
    },
    {
      id: 22,
      name: "Denim Jeans – UrbanFit",
      emissions: 30,
      emissionsSplit: {
        cultivation: 15,
        manufacturing: 10,
        logisticsPackaging: 5
      },
      price: 2499,
      description: "Slim-fit, stretch comfort, sturdy stitching",
      category: "pants",
      image: "/images/products/clothing_and_accessories/2.jpg",
      alternatives: [
        {
          name: "ReviveThreads Recycled Jeans",
          emissions: 21,
          emissionsSplit: {
            recycledCotton: 9,
            manufacturing: 7,
            logisticsPackaging: 5
          },
          price: 3299,
          description: "70% recycled denim, low-impact indigo dye",
          image: "/images/products/pants/revive-threads-recycled-jeans.jpg"
        }
      ]
    },
    {
      id: 23,
      name: "Polyester Athletic Shirt – ActivePro",
      emissions: 4,
      emissionsSplit: {
        fiber: 2.5,
        manufacturing: 1,
        logisticsPackaging: 0.5
      },
      price: 1299,
      description: "Quick-dry moisture-wicking athletic tee",
      category: "activewear",
      image: "/images/products/clothing_and_accessories/3.jpg",
      alternatives: [
        {
          name: "RePetActive Recycled PET Tee",
          emissions: 2.5,
          emissionsSplit: {
            recycledFiber: 1.5,
            manufacturing: 0.7,
            logistics: 0.3
          },
          price: 1499,
          description: "Made from plastic bottles, breathable, eco-print",
          image: "/images/products/activewear/repetactive-recycled-pet-tee.jpg"
        }
      ]
    },
    {
      id: 24,
      name: "Leather Belt – BeltCraft",
      emissions: 6,
      emissionsSplit: {
        leather: 3,
        tanning: 2,
        logistics: 1
      },
      price: 1599,
      description: "Full-grain leather with brass buckle",
      category: "accessories",
      image: "/images/products/clothing_and_accessories/4.jpg",
      alternatives: [
        {
          name: "CorkStyle Hybrid Belt",
          emissions: 3.5,
          emissionsSplit: {
            cork: 2,
            leather: 0.8,
            logistics: 0.7
          },
          price: 1399,
          description: "Cork + leather exterior, veg-tanned",
          image: "/images/products/accessories/corkstyle-hybrid-belt.jpg"
        },
        {
          name: "EthicCork All-Cork Belt",
          emissions: 2.8,
          emissionsSplit: {
            cork: 1.8,
            assembly: 0.5,
            logistics: 0.5
          },
          price: 1799,
          description: "Entirely cork-made, vegan, lightweight and durable",
          image: "/images/products/accessories/ethiccork-all-cork-belt.jpg"
        }
      ]
    },
    {
      id: 25,
      name: "Wool Sweater – WarmWool",
      emissions: 7,
      emissionsSplit: {
        animalFibre: 3.5,
        processing: 2,
        logisticsPackaging: 1.5
      },
      price: 3199,
      description: "Crew-neck merino wool, machine-washable",
      category: "sweaters",
      image: "/images/products/clothing_and_accessories/5.jpg",
      alternatives: [
        {
          name: "WoolAgain Recycled Jumper",
          emissions: 5,
          emissionsSplit: {
            reclaimedFibre: 2.5,
            processing: 1.5,
            logistics: 1
          },
          price: 3999,
          description: "Post-consumer wool, natural dye, loop-back recycling service",
          image: "/images/products/sweaters/woolagain-recycled-jumper.jpg"
        }
      ]
    },
    {
      id: 26,
      name: "Down Jacket – WinterWarmth",
      emissions: 20,
      emissionsSplit: {
        downFill: 10,
        shell: 6,
        logisticsPackaging: 4
      },
      price: 6499,
      description: "550 fill down, lightweight, pocket inner lining",
      category: "outerwear",
      image: "/images/products/clothing_and_accessories/6.jpg",
      alternatives: [
        {
          name: "EcoPuffer Recycled Insulation Jacket",
          emissions: 12,
          emissionsSplit: {
            recycledInsulation: 6,
            shell: 4,
            logistics: 2
          },
          price: 7499,
          description: "Bluesign fabrics, carbon-neutral shipping",
          image: "/images/products/outerwear/ecopuffer-recycled-insulation-jacket.jpg"
        }
      ]
    },
    {
      id: 27,
      name: "Sneakers – StepRight",
      emissions: 12,
      emissionsSplit: {
        sole: 4,
        fabric: 5,
        logistics: 2,
        packaging: 1
      },
      price: 2899,
      description: "Canvas upper, rubber sole, casual streetwear",
      category: "footwear",
      image: "/images/products/clothing_and_accessories/7.jpg",
      alternatives: [
        {
          name: "GreenKicks Hemp Sneakers",
          emissions: 8,
          emissionsSplit: {
            hempFabric: 3,
            rubberSole: 2.5,
            logistics: 1.5,
            packaging: 1
          },
          price: 3299,
          description: "Hemp grown regeneratively, zero-waste assembly",
          image: "/images/products/footwear/greenkicks-hemp-sneakers.jpg"
        }
      ]
    },
    {
      id: 28,
      name: "Swimwear – AquaFit",
      emissions: 2,
      emissionsSplit: {
        nylonFiber: 1.2,
        processing: 0.6,
        logisticsPackage: 0.2
      },
      price: 1199,
      description: "Chlorine-resistant nylon trunks with adjustable waist",
      category: "swimwear",
      image: "/images/products/clothing_and_accessories/8.jpg",
      alternatives: [
        {
          name: "ReSwim Econyl Trunks",
          emissions: 1,
          emissionsSplit: {
            recycledFiber: 0.6,
            manufacturing: 0.3,
            logistics: 0.1
          },
          price: 1499,
          description: "Made from upcycled fishing nets, certified recycled fabric, UV protection",
          image: "/images/products/swimwear/reswim-econyl-trunks.jpg"
        }
      ]
    },
    {
      id: 29,
      name: "Cotton Socks – ComfyToes",
      emissions: 0.6,
      emissionsSplit: {
        yarn: 0.3,
        knitting: 0.2,
        packaging: 0.1
      },
      price: 549,
      description: "Soft cotton blend, reinforced toe/heel",
      category: "socks",
      image: "/images/products/clothing_and_accessories/9.jpg",
      alternatives: [
        {
          name: "LeafFeet Bamboo Socks",
          emissions: 0.4,
          emissionsSplit: {
            bambooProcessing: 0.15,
            knitting: 0.15,
            packaging: 0.1
          },
          price: 249,
          description: "Moisture-wicking, bamboo viscose, anti-odor",
          image: "/images/products/socks/leaffeet-bamboo-socks.jpg"
        }
      ]
    },
    {
      id: 30,
      name: "Muslin Baby Wrap – BebeWrap",
      emissions: 0.8,
      emissionsSplit: {
        cotton: 0.5,
        weaving: 0.2,
        logisticsPack: 0.1
      },
      price: 1299,
      description: "Soft breathable muslin swaddle, generous size",
      category: "baby",
      image: "/images/products/baby/muslin-baby-wrap.jpg", // local image
      alternatives: [
        {
          name: "ReWrap Recycled Cotton Wrap",
          emissions: 0.5,
          emissionsSplit: {
            reclaimedFiber: 0.3,
            weaving: 0.15,
            logistics: 0.05
          },
          price: 1499,
          description: "Made from upcycled textile waste, naturally dyed, includes reusable pouch",
          image: "/images/products/baby/rewrap-recycled-cotton-wrap.jpg"
        }
      ]
    },
    {
      id: 31,
      name: "Cotton T-Shirt – WearDaily",
      emissions: 5.2,
      emissionsSplit: {
        cultivation: 2.5,
        processing: 1.5,
        transportPackaging: 1.2
      },
      price: 750,
      description: "Relaxed crew-neck tee with soft cotton",
      category: "shirts",
      image: "/images/products/clothing_and_accessories/1.jpg",
      alternatives: [
        {
          name: "SattvaWear Organic Tee",
          emissions: 3.8,
          emissionsSplit: {
            cultivation: 1.5,
            processing: 1.2,
            logisticsPackaging: 1.1
          },
          price: 999,
          description: "GOTS-certified organic cotton, minimal water dye",
          image: "/images/products/shirts/sattvawear-organic-tee.jpg"
        },
        {
          name: "ReWeave Recycled Cotton Tee",
          emissions: 2.9,
          emissionsSplit: {
            yarnRecycling: 1.2,
            processing: 1.0,
            logisticsPackaging: 0.7
          },
          price: 1200,
          description: "Made from reclaimed textiles, natural dyes, zero-waste cut",
          image: "/images/products/shirts/reweave-recycled-cotton-tee.jpg"
        }
      ]
    },
    {
      id: 32,
      name: "Denim Jeans – UrbanFit",
      emissions: 30,
      emissionsSplit: {
        cultivation: 15,
        manufacturing: 10,
        logisticsPackaging: 5
      },
      price: 2499,
      description: "Slim-fit, stretch comfort, sturdy stitching",
      category: "pants",
      image: "/images/products/clothing_and_accessories/2.jpg",
      alternatives: [
        {
          name: "ReviveThreads Recycled Jeans",
          emissions: 21,
          emissionsSplit: {
            recycledCotton: 9,
            manufacturing: 7,
            logisticsPackaging: 5
          },
          price: 3299,
          description: "70% recycled denim, low-impact indigo dye",
          image: "/images/products/pants/revive-threads-recycled-jeans.jpg"
        }
      ]
    },
    {
      id: 33,
      name: "Polyester Athletic Shirt – ActivePro",
      emissions: 4,
      emissionsSplit: {
        fiber: 2.5,
        manufacturing: 1,
        logisticsPackaging: 0.5
      },
      price: 1299,
      description: "Quick-dry moisture-wicking athletic tee",
      category: "activewear",
      image: "/images/products/clothing_and_accessories/3.jpg",
      alternatives: [
        {
          name: "RePetActive Recycled PET Tee",
          emissions: 2.5,
          emissionsSplit: {
            recycledFiber: 1.5,
            manufacturing: 0.7,
            logistics: 0.3
          },
          price: 1499,
          description: "Made from plastic bottles, breathable, eco-print",
          image: "/images/products/activewear/repetactive-recycled-pet-tee.jpg"
        }
      ]
    },
    {
      id: 34,
      name: "Leather Belt – BeltCraft",
      emissions: 6,
      emissionsSplit: {
        leather: 3,
        tanning: 2,
        logistics: 1
      },
      price: 1599,
      description: "Full-grain leather with brass buckle",
      category: "accessories",
      image: "/images/products/clothing_and_accessories/4.jpg",
      alternatives: [
        {
          name: "CorkStyle Hybrid Belt",
          emissions: 3.5,
          emissionsSplit: {
            cork: 2,
            leather: 0.8,
            logistics: 0.7
          },
          price: 1399,
          description: "Cork + leather exterior, veg-tanned",
          image: "/images/products/accessories/corkstyle-hybrid-belt.jpg"
        },
        {
          name: "EthicCork All-Cork Belt",
          emissions: 2.8,
          emissionsSplit: {
            cork: 1.8,
            assembly: 0.5,
            logistics: 0.5
          },
          price: 1799,
          description: "Entirely cork-made, vegan, lightweight and durable",
          image: "/images/products/accessories/ethiccork-all-cork-belt.jpg"
        }
      ]
    },
    {
      id: 35,
      name: "Wool Sweater – WarmWool",
      emissions: 7,
      emissionsSplit: {
        animalFibre: 3.5,
        processing: 2,
        logisticsPackaging: 1.5
      },
      price: 3199,
      description: "Crew-neck merino wool, machine-washable",
      category: "sweaters",
      image: "/images/products/clothing_and_accessories/5.jpg",
      alternatives: [
        {
          name: "WoolAgain Recycled Jumper",
          emissions: 5,
          emissionsSplit: {
            reclaimedFibre: 2.5,
            processing: 1.5,
            logistics: 1
          },
          price: 3999,
          description: "Post-consumer wool, natural dye, loop-back recycling service",
          image: "/images/products/sweaters/woolagain-recycled-jumper.jpg"
        }
      ]
    },
    {
      id: 36,
      name: "Down Jacket – WinterWarmth",
      emissions: 20,
      emissionsSplit: {
        downFill: 10,
        shell: 6,
        logisticsPackaging: 4
      },
      price: 6499,
      description: "550 fill down, lightweight, pocket inner lining",
      category: "outerwear",
      image: "/images/products/clothing_and_accessories/6.jpg",
      alternatives: [
        {
          name: "EcoPuffer Recycled Insulation Jacket",
          emissions: 12,
          emissionsSplit: {
            recycledInsulation: 6,
            shell: 4,
            logistics: 2
          },
          price: 7499,
          description: "Bluesign fabrics, carbon-neutral shipping",
          image: "/images/products/outerwear/ecopuffer-recycled-insulation-jacket.jpg"
        }
      ]
    },
    {
      id: 37,
      name: "Sneakers – StepRight",
      emissions: 12,
      emissionsSplit: {
        sole: 4,
        fabric: 5,
        logistics: 2,
        packaging: 1
      },
      price: 2899,
      description: "Canvas upper, rubber sole, casual streetwear",
      category: "footwear",
      image: "/images/products/clothing_and_accessories/7.jpg",
      alternatives: [
        {
          name: "GreenKicks Hemp Sneakers",
          emissions: 8,
          emissionsSplit: {
            hempFabric: 3,
            rubberSole: 2.5,
            logistics: 1.5,
            packaging: 1
          },
          price: 3299,
          description: "Hemp grown regeneratively, zero-waste assembly",
          image: "/images/products/footwear/greenkicks-hemp-sneakers.jpg"
        }
      ]
    },
    {
      id: 38,
      name: "Swimwear – AquaFit",
      emissions: 2,
      emissionsSplit: {
        nylonFiber: 1.2,
        processing: 0.6,
        logisticsPackage: 0.2
      },
      price: 1199,
      description: "Chlorine-resistant nylon trunks with adjustable waist",
      category: "swimwear",
      image: "/images/products/clothing_and_accessories/8.jpg",
      alternatives: [
        {
          name: "ReSwim Econyl Trunks",
          emissions: 1,
          emissionsSplit: {
            recycledFiber: 0.6,
            manufacturing: 0.3,
            logistics: 0.1
          },
          price: 1499,
          description: "Made from upcycled fishing nets, certified recycled fabric, UV protection",
          image: "/images/products/swimwear/reswim-econyl-trunks.jpg"
        }
      ]
    },
    {
      id: 39,
      name: "Cotton Socks – ComfyToes",
      emissions: 0.6,
      emissionsSplit: {
        yarn: 0.3,
        knitting: 0.2,
        packaging: 0.1
      },
      price: 549,
      description: "Soft cotton blend, reinforced toe/heel",
      category: "socks",
      image: "/images/products/clothing_and_accessories/9.jpg",
      alternatives: [
        {
          name: "LeafFeet Bamboo Socks",
          emissions: 0.4,
          emissionsSplit: {
            bambooProcessing: 0.15,
            knitting: 0.15,
            packaging: 0.1
          },
          price: 249,
          description: "Moisture-wicking, bamboo viscose, anti-odor",
          image: "/images/products/socks/leaffeet-bamboo-socks.jpg"
        }
      ]
    },
    {
      id: 40,
      name: "Muslin Baby Wrap – BebeWrap",
      emissions: 0.8,
      emissionsSplit: {
        cotton: 0.5,
        weaving: 0.2,
        logisticsPack: 0.1
      },
      price: 1299,
      description: "Soft breathable muslin swaddle, generous size",
      category: "baby",
      image: "/images/products/baby/muslin-baby-wrap.jpg", // local image
      alternatives: [
        {
          name: "ReWrap Recycled Cotton Wrap",
          emissions: 0.5,
          emissionsSplit: {
            reclaimedFiber: 0.3,
            weaving: 0.15,
            logistics: 0.05
          },
          price: 1499,
          description: "Made from upcycled textile waste, naturally dyed, includes reusable pouch",
          image: "/images/products/baby/rewrap-recycled-cotton-wrap.jpg"
        }
      ]
    }
  ]
};

export type Product = typeof productData.babyProducts[0];
export type ProductCategory = keyof typeof productData;