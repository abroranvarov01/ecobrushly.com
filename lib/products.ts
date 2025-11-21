export interface Product {
  slug: string
  id: string
  name: string
  rating: number
  reviews: number
  image: string
  description: string
  category: string
  price: string
  ecoScore: number
  fullDescription?: string
  features?: string[]
  pros?: string[]
  cons?: string[]
  amazonLink?: string
}

export const products: Product[] = [
  {
    id: 'multi-purpose-scrub-brush',
    slug: 'multi-purpose-scrub-brush',
    name: 'Multi-Purpose Scrub Brush Set (4-Pack)',
    rating: 4.6,
    reviews: 3421,
    image: 'https://m.media-amazon.com/images/I/51o5XhgsXzL._AC_SX679_.jpg',
    description: 'Ergonomic scrub brushes with stiff bristles for kitchen, bathroom, and outdoor cleaning.',
    category: 'All-Purpose',
    price: '$15.99',
    ecoScore: 82,
    amazonLink: 'https://www.amazon.com/Multi-Purpose-Scrub-Brush-Set-Ergonomic/dp/B07TV5HL9Y/'
  },
  {
    id: 'eco-bamboo-replacement-heads',
    slug: 'eco-bamboo-replacement-heads',
    name: 'Eco-Friendly Bamboo Replacement Brush Heads (4-Pack)',
    rating: 4.7,
    reviews: 1856,
    image: 'https://m.media-amazon.com/images/I/51DCpPeX+2L._AC_SX679_.jpg',
    description: '100% biodegradable bamboo and sisal bristle replacement heads.',
    category: 'Kitchen',
    price: '$12.99',
    ecoScore: 96,
    amazonLink: 'https://www.amazon.com/KUYYFDS-Eco-Friendly-Replacement-Scrubbing-Cleaning/dp/B0C3M8D43C/'
  },
  {
    id: 'ecos-all-purpose',
    slug: 'ecos-all-purpose',
    name: 'ECOS Earth Friendly All-Purpose Cleaner Orange Plus',
    rating: 4.8,
    reviews: 5234,
    image: 'https://m.media-amazon.com/images/I/51htcYja-jL._AC_SY879_PIbundle-4,TopRight,0,0_SH20_.jpg',
    description: 'Plant-powered orange oil cleaner. Safer Choice certified.',
    category: 'All-Purpose',
    price: '$5.99',
    ecoScore: 94,
    amazonLink: 'https://www.amazon.com/Friendly-Products-FamilyValue-22-Ounce-Vdg-Earth/dp/B079KJ5H67/'
  },
  {
    id: 'attitude-multi-surface',
    slug: 'attitude-multi-surface',
    name: 'ATTITUDE Multi-Surface Cleaner Citrus Zest',
    rating: 4.7,
    reviews: 2876,
    image: 'https://m.media-amazon.com/images/I/61xbrVeq60L._AC_SX679_.jpg',
    description: 'EWG Verified, hypoallergenic, vegan & cruelty-free cleaner.',
    category: 'All-Purpose',
    price: '$7.99',
    ecoScore: 97,
    amazonLink: 'https://www.amazon.com/ATTITUDE-Multipurpose-Multi-Surface-Mineral-based-Cruelty-Free/dp/B00MNW4LW6/'
  },
  {
    id: 'ecojeannie-sponges',
    slug: 'ecojeannie-sponges',
    name: 'EcoJeannie 100% Natural Cellulose & Coconut Sponges',
    rating: 4.6,
    reviews: 1987,
    image: 'https://m.media-amazon.com/images/I/81PFc-+c+lL._AC_SX679_.jpg',
    description: 'Fully compostable heavy-duty sponges made from plants.',
    category: 'Kitchen',
    price: '$13.99',
    ecoScore: 98,
    amazonLink: 'https://www.amazon.com/EcoJeannie-Eco-Friendly-Cleaning-Biodegradable-Cellulose/dp/B078529HL3/'
  },
  {
    id: 'cotton-dishcloths',
    slug: 'cotton-dishcloths',
    name: 'Old Fashioned 100% Cotton Terry Dishcloths (12-Pack)',
    rating: 4.8,
    reviews: 6543,
    image: 'https://m.media-amazon.com/images/I/61w1vkeT76L._AC_SX679_.jpg',
    description: 'Highly absorbent, machine-washable classic cotton dishcloths.',
    category: 'Kitchen',
    price: '$16.99',
    ecoScore: 93,
    amazonLink: 'https://www.amazon.com/Old-Fashion-100-Cotton-Dishcloths/dp/B00TQ01UW2/'
  },
  {
    id: 'simple-green-concentrate',
    slug: 'simple-green-concentrate',
    name: 'Simple Green All-Purpose Cleaner Concentrate',
    rating: 4.8,
    reviews: 12876,
    image: 'https://m.media-amazon.com/images/I/61Ymfn-WD+L._AC_SX679_.jpg',
    description: 'Biodegradable concentrated degreaser – makes over 30 spray bottles.',
    category: 'All-Purpose',
    price: '$18.99',
    ecoScore: 91,
    amazonLink: 'https://www.amazon.com/SPG13006-Concentrated-All-Purpose-Cleaner-Degreaser/dp/B004E3L13O'
  },
  {
    id: 'method-hardwood-cleaner',
    slug: 'method-hardwood-cleaner',
    name: 'Method Squirt + Mop Hardwood Floor Cleaner',
    rating: 4.7,
    reviews: 4321,
    image: 'https://m.media-amazon.com/images/I/7144kf9XI8L._AC_SX679_.jpg',
    description: 'Plant-based, no-rinse formula safe for sealed wood floors.',
    category: 'Floors',
    price: '$7.99',
    ecoScore: 95,
    amazonLink: 'https://www.amazon.com/Method-Hardwood-Cleaner-Laminate-Packaging/dp/B00X1INBQS/'
  },
  {
    id: 'better-life-cleaner',
    slug: 'better-life-cleaner',
    name: 'Better Life Natural All-Purpose Cleaner',
    rating: 4.8,
    reviews: 3210,
    image: 'https://m.media-amazon.com/images/I/71bVUeyvh-L._AC_SX679_.jpg',
    description: 'Plant-derived cleaner with cedar & bergamot essential oils.',
    category: 'All-Purpose',
    price: '$8.99',
    ecoScore: 96,
    amazonLink: 'https://www.amazon.com/Cedar-Cleaner-Lavender-Naturally-Derived-Ingredients/dp/B0BW4WV7KD/'
  },
  {
    id: 're-scrubber',
    slug: 're-scrubber',
    name: 'rE-Scrubb Eco Walnut Scrubbers (10-Pack)',
    rating: 4.7,
    reviews: 2431,
    image: 'https://m.media-amazon.com/images/I/91rf3fNSzGL._AC_SX679_.jpg',
    description: 'Compostable scrub pads made from walnut shell and cellulose.',
    category: 'Kitchen',
    price: '$14.99',
    ecoScore: 97,
    amazonLink: 'https://www.amazon.com/rE-Scrubber-Eco-Friendly-Biodegradable-Unbleached/dp/B08BWM6H7R/'
  },
  {
    id: 'novokeep-sponge-cloth',
    slug: 'novokeep-sponge-cloth',
    name: 'Novokeep Swedish Dishcloths (10-Pack)',
    rating: 4.8,
    reviews: 3890,
    image: 'https://m.media-amazon.com/images/I/91wxXj1ll3L._AC_SX679_.jpg',
    description: 'Reusable cellulose-cotton cloths – replace 15 rolls of paper towels.',
    category: 'Kitchen',
    price: '$18.99',
    ecoScore: 95,
    amazonLink: 'https://www.amazon.com/Novokeep-Sponge-Cloth-pack-Biodegradable/dp/B08BWBJ897'
  },
  {
    id: 'bona-hardwood-concentrate',
    slug: 'bona-hardwood-concentrate',
    name: 'Bona Premium Hardwood Floor Cleaner Concentrate',
    rating: 4.7,
    reviews: 2109,
    image: 'https://m.media-amazon.com/images/I/71rKrkLRRbL._AC_SX679_.jpg',
    description: 'Plant-based concentrate – makes 8 ready-to-use bottles.',
    category: 'Floors',
    price: '$21.99',
    ecoScore: 92,
    amazonLink: 'https://www.amazon.com/Bona-Premium-Hardwood-Cleaner-Concentrate/dp/B09WGDP4WC/'
  },
  {
    id: 'fabuloso-microfiber',
    slug: 'fabuloso-microfiber',
    name: 'Fabuloso Reusable Microfiber Cleaning Cloths',
    rating: 4.6,
    reviews: 876,
    image: 'https://m.media-amazon.com/images/I/81hw1wCqzHL._SX522_.jpg',
    description: 'Lint-free, scratch-free microfiber towels.',
    category: 'All-Purpose',
    price: '$12.99',
    ecoScore: 88,
    amazonLink: 'https://www.amazon.com/Fabuloso-Microfiber-Lint-Free-Scratch-Free-Experience/dp/B0DB8JP6D6/'
  },
  {
    id: 'scrub-daddy-powerpaste',
    slug: 'scrub-daddy-powerpaste',
    name: 'Scrub Daddy PowerPaste + Scrub Mommy Kit',
    rating: 4.8,
    reviews: 15432,
    image: 'https://m.media-amazon.com/images/I/61sbpcDaFFL._AC_SY879_.jpg',
    description: 'Natural cleaning paste with dual-sided sponge.',
    category: 'Kitchen',
    price: '$14.99',
    ecoScore: 87,
    amazonLink: 'https://www.amazon.com/Scrub-Daddy-PowerPaste-Cleaning-Kit/dp/B087QQRGRS/'
  },
  {
    id: 'mrs-meyers-concentrate',
    slug: 'mrs-meyers-concentrate',
    name: 'Mrs. Meyer’s Clean Day Multi-Surface Concentrate',
    rating: 4.8,
    reviews: 9876,
    image: 'https://m.media-amazon.com/images/I/718mxgBdiPS._SX522_.jpg',
    description: 'Garden-inspired concentrated cleaner – cruelty-free.',
    category: 'All-Purpose',
    price: '$11.99',
    ecoScore: 93,
    amazonLink: 'https://www.amazon.com/Original-Concentrated-Multi-Use-Finished-US05480A/dp/B0794T5M13/'
  },
  {
    id: 'clorox-toiletwand',
    slug: 'clorox-toiletwand',
    name: 'Clorox ToiletWand Disposable Cleaning System',
    rating: 4.7,
    reviews: 23456,
    image: 'https://m.media-amazon.com/images/I/71cehmKnajL._AC_SX679_.jpg',
    description: 'Disposable heads with built-in cleaner – hygienic toilet cleaning.',
    category: 'Bathroom',
    price: '$12.97',
    ecoScore: 78,
    amazonLink: 'https://www.amazon.com/Clorox-ToiletWand-Disposable-Toilet-Cleaning/dp/B07ZGHZVRY/'
  },
  {
    id: 'dawn-powerwash',
    slug: 'dawn-powerwash',
    name: 'Dawn Platinum Powerwash Dish Spray Starter Kit + Refills',
    rating: 4.9,
    reviews: 45678,
    image: 'https://m.media-amazon.com/images/I/71uMHkRly8L._AC_SX679_.jpg',
    description: '5× faster grease cleaning – spray, wipe, rinse.',
    category: 'Kitchen',
    price: '$18.94',
    ecoScore: 84,
    amazonLink: 'https://www.amazon.com/Dawn-Platinum-Powerwash-Starter-Refills/dp/B0F92P82LP/'
  },
  {
    id: 'simplehuman-hand-soap',
    slug: 'simplehuman-hand-soap',
    name: 'simplehuman Moisturizing Liquid Hand Soap Mandarin Orange',
    rating: 4.7,
    reviews: 3210,
    image: 'https://m.media-amazon.com/images/I/61XKvB239ZL._SX466_.jpg',
    description: 'Vitamin E enriched, biodegradable formula.',
    category: 'Bathroom',
    price: '$24.99',
    ecoScore: 89,
    amazonLink: 'https://www.amazon.com/simplehuman-Moisturizing-Liquid-Mandarin-Vitamin/dp/B01AX09U4S/'
  },
  {
    id: 'windex-original',
    slug: 'windex-original',
    name: 'Windex Glass Cleaner Original Blue (67.6 fl oz Twin Pack)',
    rating: 4.8,
    reviews: 18900,
    image: 'https://m.media-amazon.com/images/I/61bUEjQWN3L._AC_SX679_PIbundle-8,TopRight,0,0_SH20_.jpg',
    description: 'Streak-free shine on glass, mirrors, and more.',
    category: 'Windows',
    price: '$14.96',
    ecoScore: 80,
    amazonLink: 'https://www.amazon.com/Windex-Glass-Cleaner-Original-67-6/dp/B0BYKWXVC6/'
  },
  {
    id: 'full-circle-bottle-brush',
    slug: 'full-circle-bottle-brush',
    name: 'Full Circle Little Sipper Bottle Cleaning Set',
    rating: 4.6,
    reviews: 1678,
    image: 'https://m.media-amazon.com/images/I/51phPwnwngL._AC_SX679_.jpg',
    description: 'Recycled plastic brushes with bamboo handles.',
    category: 'Kitchen',
    price: '$12.99',
    ecoScore: 91,
    amazonLink: 'https://www.amazon.com/Full-Circle-Little-Sipper-Cleaning/dp/B08KL8BJBN/'
  },
  {
    id: 'vigar-dish-brush',
    slug: 'vigar-dish-brush',
    name: 'Vigar Florganic Dish Brush with Holder',
    rating: 4.5,
    reviews: 987,
    image: 'https://m.media-amazon.com/images/I/61QQKC9K7gL._AC_SX679_.jpg',
    description: 'Eco-friendly brush made with plant-based plastics.',
    category: 'Kitchen',
    price: '$14.99',
    ecoScore: 88,
    amazonLink: 'https://www.amazon.com/Vigar-Florganic-Eco-Friendly-Daisy-Shaped-Holder/dp/B095Z5HPCJ/'
  },
  {
    id: 'swedish-dishcloths',
    slug: 'swedish-dishcloths',
    name: 'Swedish Wholesale Swedish Dishcloths (10-Pack)',
    rating: 4.8,
    reviews: 12345,
    image: 'https://m.media-amazon.com/images/I/81vVIKX1a0L._AC_SX679_.jpg',
    description: 'Reusable, biodegradable cellulose sponge cloths.',
    category: 'Kitchen',
    price: '$19.99',
    ecoScore: 96,
    amazonLink: 'https://www.amazon.com/Dishcloths-Reusable-Absorbent-Cleaning-Oeko-Tex/dp/B07Z8H2CG4/'
  },
  {
    id: 'scrubbing-bubbles-dropins',
    slug: 'scrubbing-bubbles-dropins',
    name: 'Scrubbing Bubbles Drop-Ins Toilet Cleaning Tablets',
    rating: 4.6,
    reviews: 8900,
    image: 'https://m.media-amazon.com/images/I/81W5AC7oQeL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg',
    description: 'Continuous clean with every flush.',
    category: 'Bathroom',
    price: '$9.97',
    ecoScore: 75,
    amazonLink: 'https://www.amazon.com/Scrubbing-Bubbles-Continuous-Drop-Ins-Limescale/dp/B07YD16Y5L/'
  },
  {
    id: 'cif-cream',
    slug: 'cif-cream',
    name: 'Cif Cream Cleaner Lemon (500ml)',
    rating: 4.7,
    reviews: 5432,
    image: 'https://m.media-amazon.com/images/I/51NEJJI3jnS._SX679_.jpg',
    description: 'Micro-crystals for powerful cleaning with natural scent.',
    category: 'All-Purpose',
    price: '$8.99',
    ecoScore: 83,
    amazonLink: 'https://www.amazon.com/Cif-Cream-Lemon-500-ml/dp/B01N4IHSX3/'
  },
  {
    id: 'prendere-bathroom-cleaner',
    slug: 'prendere-bathroom-cleaner',
    name: 'PRENDERE Bathroom Cleaner with Bleach Kit',
    rating: 4.5,
    reviews: 1234,
    image: 'https://m.media-amazon.com/images/I/81kwgdHDTDL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg',
    description: 'Foaming bleach cleaner with reusable bottle system.',
    category: 'Bathroom',
    price: '$16.99',
    ecoScore: 79,
    amazonLink: 'https://www.amazon.com/PRENDERE-Bathroom-Cleaner-Bleach-Kit/dp/B0CZDTYYKV/'
  },
  {
    id: 'care-sponge-cloths',
    slug: 'care-sponge-cloths',
    name: 'CARE Natural Sponge Cloths (12-Pack)',
    rating: 4.8,
    reviews: 4567,
    image: 'https://m.media-amazon.com/images/I/81PJhFaSTeL._AC_SX679_.jpg',
    description: 'Eco-friendly reusable Swedish dishcloths.',
    category: 'Kitchen',
    price: '$17.99',
    ecoScore: 95,
    amazonLink: 'https://www.amazon.com/CARE-Natural-Sponge-Cloths-Count/dp/B0078DQXQC/'
  },
  {
    id: 'lemi-shine-dishwasher',
    slug: 'lemi-shine-dishwasher',
    name: 'Lemi Shine Dishwasher Cleaner (4-Pack)',
    rating: 4.7,
    reviews: 6789,
    image: 'https://m.media-amazon.com/images/I/81xOEO8SxJL._AC_SX679_.jpg',
    description: 'Natural citric acid removes limescale and buildup.',
    category: 'Kitchen',
    price: '$12.99',
    ecoScore: 92,
    amazonLink: 'https://www.amazon.com/Lemi-Shine-Dishwasher-Cleaner-Ounce/dp/B00LH8PMYI/'
  },
  {
    id: 'fabuloso-furniture-cloths',
    slug: 'fabuloso-furniture-cloths',
    name: 'Fabuloso Microfiber Cloths for Furniture',
    rating: 4.6,
    reviews: 987,
    image: 'https://m.media-amazon.com/images/I/81OHOj8G-JL._AC_SX679_.jpg',
    description: 'Lint-free microfiber for dusting and polishing.',
    category: 'All-Purpose',
    price: '$14.99',
    ecoScore: 88,
    amazonLink: 'https://www.amazon.com/Fabuloso-Microfiber-Lint-Free-Scratch-Free-Furniture/dp/B0DLX11KNL/'
  },
  {
    id: 'sauberkugel-bag-cleaner',
    slug: 'sauberkugel-bag-cleaner',
    name: 'Sauberkugel Cleaning Ball for Bags',
    rating: 4.5,
    reviews: 2100,
    image: 'https://m.media-amazon.com/images/I/716sTIza5CL._AC_SX466_.jpg',
    description: 'Reusable sticky ball collects dust and crumbs from bags.',
    category: 'All-Purpose',
    price: '$12.99',
    ecoScore: 90,
    amazonLink: 'https://www.amazon.com/Sauberkugel-cleaning-backpacks-Summerfield-Collection/dp/B0CKTL3P5Q/'
  },
  {
    id: 'oxiclean-washer-cleaner',
    slug: 'oxiclean-washer-cleaner',
    name: 'OxiClean Washing Machine Cleaner (4-Pack)',
    rating: 4.7,
    reviews: 9876,
    image: 'https://m.media-amazon.com/images/I/81EDHLZUFnL._AC_SX466_.jpg',
    description: 'Removes odor-causing residue from washers.',
    category: 'Laundry',
    price: '$11.97',
    ecoScore: 85,
    amazonLink: 'https://www.amazon.com/OxiClean-Washing-Machine-Cleaner-Blasters/dp/B00UASJMG0/'
  },
  {
    id: 'full-circle-dustpan',
    slug: 'full-circle-dustpan',
    name: 'Full Circle Tiny Team Mini Brush & Dustpan Set',
    rating: 4.6,
    reviews: 2109,
    image: 'https://m.media-amazon.com/images/I/61GBfIZVZrL._SX522_.jpg',
    description: 'Bamboo + recycled plastic mini cleaning set.',
    category: 'All-Purpose',
    price: '$12.99',
    ecoScore: 90,
    amazonLink: 'https://www.amazon.com/Full-Circle-Brush-Dustpan-Green/dp/B00KLSOP8E/'
  },
  {
    id: 'dovety-spin-scrubber',
    slug: 'dovety-spin-scrubber',
    name: 'Dovety Electric Spin Scrubber with 8 Heads',
    rating: 4.5,
    reviews: 5678,
    image: 'https://m.media-amazon.com/images/I/71jrXJeT3WL._AC_SX679_.jpg',
    description: 'Cordless power scrubber with extension handle.',
    category: 'Bathroom',
    price: '$39.99',
    ecoScore: 80,
    amazonLink: 'https://www.amazon.com/Dovety-Electric-Replaceable-Extension-Adjustable/dp/B0DDXCCXPC/'
  },
  {
    id: 'rubbermaid-scrubber',
    slug: 'rubbermaid-scrubber',
    name: 'Rubbermaid Commercial Scrub Brush',
    rating: 4.6,
    reviews: 3456,
    image: 'https://m.media-amazon.com/images/I/71Pm-y2pC8L._AC_SX679_.jpg',
    description: 'Heavy-duty scrub brush for tough cleaning jobs.',
    category: 'All-Purpose',
    price: '$9.99',
    ecoScore: 78,
    amazonLink: 'https://www.amazon.com/Rubbermaid-Scrubber-General-Cleaning-1839685/dp/B00BEUDWJQ/'
  },
  {
    id: 'sigg-bottle-brush',
    slug: 'sigg-bottle-brush',
    name: 'Sigg Bottle Cleaning Brush',
    rating: 4.5,
    reviews: 1234,
    image: 'https://m.media-amazon.com/images/I/61g21pLGulL._AC_SY879_.jpg',
    description: 'Flexible brush designed for narrow bottles.',
    category: 'Kitchen',
    price: '$11.99',
    ecoScore: 85,
    amazonLink: 'https://www.amazon.com/Sigg-Cleaning-Designed-Dishwasher-Lightweight/dp/B09ZMYJWKW/'
  },
  {
    id: 'clorox-ecoclean',
    slug: 'clorox-ecoclean',
    name: 'CloroxPro EcoClean All-Purpose Cleaner',
    rating: 4.7,
    reviews: 2100,
    image: 'https://m.media-amazon.com/images/I/81nVPT+pj3L._SX522_.jpg',
    description: 'EPA Safer Choice certified plant-based cleaner.',
    category: 'All-Purpose',
    price: '$15.99',
    ecoScore: 93,
    amazonLink: 'https://www.amazon.com/CloroxPro-Clorox-EcoClean-All-Purpose-Cleaner/dp/B0BJ149CGJ/'
  },
  {
    id: 'seventh-generation-disinfectant',
    slug: 'seventh-generation-disinfectant',
    name: 'Seventh Generation Disinfecting Multi-Surface Cleaner',
    rating: 4.7,
    reviews: 8765,
    image: 'https://m.media-amazon.com/images/I/81zxoWyo5nL._AC_SX466_PIbundle-6,TopRight,0,0_SH20_.jpg',
    description: 'Botanical disinfectant – kills 99.9% of germs.',
    category: 'All-Purpose',
    price: '$6.99',
    ecoScore: 95,
    amazonLink: 'https://www.amazon.com/Seventh-Generation-Disinfecting-Multi-Surface-Lemongrass/dp/B0033WT4ZO/'
  },
  {
    id: 'meyers-rosemary-cleaner',
    slug: 'meyers-rosemary-cleaner',
    name: "Mrs. Meyer's Clean Day All-Purpose Cleaner Rosemary",
    rating: 4.8,
    reviews: 6543,
    image: 'https://m.media-amazon.com/images/I/61DX293WiqL._AC_SX679_.jpg',
    description: 'Garden-fresh rosemary scent, plant-derived ingredients.',
    category: 'All-Purpose',
    price: '$5.99',
    ecoScore: 94,
    amazonLink: 'https://www.amazon.com/Meyers-All-Purpose-Cleaner-Spray-Rosemary/dp/B00NJYHI8G/'
  },
  {
    id: 'full-circle-bottle-scrubber',
    slug: 'full-circle-bottle-scrubber',
    name: 'Full Circle Tenacious C Bottle Brush',
    rating: 4.6,
    reviews: 2345,
    image: 'https://m.media-amazon.com/images/I/51lYaAy9FdL._AC_SX679_.jpg',
    description: 'Recycled plastic bristle bottle brush with bamboo handle.',
    category: 'Kitchen',
    price: '$11.99',
    ecoScore: 91,
    amazonLink: 'https://www.amazon.com/Full-Circle-Bottle-Replaceable-Bristle/dp/B01LWUJJ0L/'
  },
  {
    id: 'bona-stone-cleaner',
    slug: 'bona-stone-cleaner',
    name: 'Bona Stone, Tile & Laminate Floor Cleaner',
    rating: 4.8,
    reviews: 9876,
    image: 'https://m.media-amazon.com/images/I/71uuB-Q1k4L._AC_SX679_.jpg',
    description: 'Residue-free cleaner safe for stone and tile floors.',
    category: 'Floors',
    price: '$18.97',
    ecoScore: 93,
    amazonLink: 'https://www.amazon.com/Bona-Stone-Laminate-Floor-Cleaner/dp/B000CNRVP2/'
  },
  {
    id: 'auromere-soap',
    slug: 'auromere-soap',
    name: 'Auromere Ayurvedic Tulsi-Neem Bar Soap',
    rating: 4.7,
    reviews: 3210,
    image: 'https://m.media-amazon.com/images/I/91HC8C1tOyL._SY741_.jpg',
    description: 'Handmade, vegan, cruelty-free Ayurvedic soap.',
    category: 'Bathroom',
    price: '$6.95',
    ecoScore: 96,
    amazonLink: 'https://www.amazon.com/Ayurvedic-Bar-Soap-Tulsi-Neem-Auromere/dp/B00008O2XJ/'
  },
  {
    id: 'delonghi-ecodecalk',
    slug: 'delonghi-ecodecalk',
    name: 'De’Longhi EcoDecalk Descaler',
    rating: 4.8,
    reviews: 12345,
    image: 'https://m.media-amazon.com/images/I/81XTvcbFtYL._AC_SX679_.jpg',
    description: '100% eco-friendly descaling solution for coffee machines.',
    category: 'Kitchen',
    price: '$19.95',
    ecoScore: 94,
    amazonLink: 'https://www.amazon.com/DeLonghi-EcoDecalk-Eco-Friendly-Universal-Descaling/dp/B0021IOTTW/'
  },
  {
    id: 'pine-sol-multi',
    slug: 'pine-sol-multi',
    name: 'Pine-Sol Multi-Surface Cleaner Concentrate',
    rating: 4.7,
    reviews: 23456,
    image: 'https://m.media-amazon.com/images/I/71+quUgbvAL._SX522_.jpg',
    description: 'Concentrated cleaner with pine scent of pine.',
    category: 'All-Purpose',
    price: '$16.99',
    ecoScore: 82,
    amazonLink: 'https://www.amazon.com/Pine-Sol-Multi-Surface-CloroxPro-Concentrated-All-Purpose/dp/B0CQKP7YLJ/'
  },
  {
    id: 'full-circle-dish-brush',
    slug: 'full-circle-dish-brush',
    name: 'Full Circle Laid Back 2.0 Dish Brush',
    rating: 4.6,
    reviews: 3456,
    image: 'https://m.media-amazon.com/images/I/61oiWj5CeLL._AC_SX679_.jpg',
    description: 'Bamboo handle, recycled plastic bristles, replaceable head.',
    category: 'Kitchen',
    price: '$11.99',
    ecoScore: 92,
    amazonLink: 'https://www.amazon.com/Full-Circle-Kitchen-Bamboo-Handle/dp/B016RZF24A/'
  },
  {
    id: 'method-dish-soap',
    slug: 'method-dish-soap',
    name: 'Method Dish Soap Pump Sea Minerals',
    rating: 4.8,
    reviews: 9876,
    image: 'https://m.media-amazon.com/images/I/61Rf4OmQnzS._SX466_.jpg',
    description: 'Biodegradable, plant-based dish soap.',
    category: 'Kitchen',
    price: '$5.99',
    ecoScore: 95,
    amazonLink: 'https://www.amazon.com/Method-Minerals-Dish-Soap-Bottles/dp/B08648K2FX/'
  },
  {
    id: 'bon-ami-powder',
    slug: 'bon-ami-powder',
    name: 'Bon Ami Powder Cleanser',
    rating: 4.8,
    reviews: 5678,
    image: 'https://m.media-amazon.com/images/I/619njMuRnbL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg',
    description: 'Classic non-scratch powder cleanser since 1886.',
    category: 'All-Purpose',
    price: '$6.99',
    ecoScore: 95,
    amazonLink: 'https://www.amazon.com/Bon-Ami-Cleanser-Countertop-Bathroom/dp/B01A1HAWPE/'
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getAllProducts(): Product[] {
  return products
}

export function getTopRatedProducts(limit = 3): Product[] {
  return products.sort((a, b) => b.rating - a.rating).slice(0, limit)
}
