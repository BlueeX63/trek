export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: 'the-art-of-acclimatization',
    title: 'The Art of Acclimatization',
    excerpt: 'Understanding how your body adapts to high altitudes is the first step towards a successful and safe Himalayan expedition.',
    category: 'Health & Safety',
    readTime: '6 min read',
    author: 'Dr. Rohan Sharma',
    date: 'August 12, 2024',
    image: '/images/uttarakhand/pangarchulla-peak.png',
    content: [
      'High altitude trekking is as much a mental game as it is a physical one. However, the most critical factor that determines the success of your expedition is often something entirely out of your conscious control: acclimatization.',
      'When you ascend above 8,000 feet, the barometric pressure drops, and with it, the number of oxygen molecules in the air you breathe. Your body immediately begins to compensate. Your heart rate increases, your breathing deepens, and over a few days, your kidneys secrete a hormone called erythropoietin, which stimulates the production of more red blood cells.',
      'The golden rule of acclimatization is "Climb High, Sleep Low." This means during the day, you push your body to higher elevations to trigger these physiological changes, but you return to a lower altitude to sleep, allowing your body to recover and consolidate its adaptations.',
      'Never ignore the symptoms of Acute Mountain Sickness (AMS). A mild headache, nausea, or dizziness are your body\'s early warning system. Pushing through these symptoms is not a sign of strength; it is a recipe for disaster. The only cure for severe AMS is immediate descent.',
      'By understanding and respecting the process of acclimatization, you transform the high mountains from a hostile environment into a challenging but welcoming playground.'
    ]
  },
  {
    slug: 'gear-guide-layering',
    title: 'Mastering the Layering System',
    excerpt: 'A comprehensive guide to staying warm, dry, and comfortable in unpredictable mountain weather through the science of layering.',
    category: 'Gear Guide',
    readTime: '5 min read',
    author: 'Vikram Singh',
    date: 'July 28, 2024',
    image: '/images/ladakh/chadar-trek.jpg',
    content: [
      'The weather in the Himalayas is notoriously fickle. You can start your morning in freezing temperatures, sweat under a scorching midday sun, and be caught in a violent snowstorm by afternoon. The secret to managing these extremes is the layering system.',
      'The system consists of three main components: the base layer, the mid-layer, and the outer shell. Each has a specific and crucial function.',
      '**The Base Layer (Moisture Management)**: This layer sits directly against your skin. Its primary job is not to warm you, but to wick sweat away. Moisture is your worst enemy in the cold; if your sweat cools against your skin, you will freeze. Opt for merino wool or synthetic fabrics. Never wear cotton.',
      '**The Mid-Layer (Insulation)**: This is your warmth layer. It works by trapping the heat your body generates in small air pockets. Fleece jackets and down sweaters are the gold standard here. The beauty of the mid-layer is its modularity; you can wear multiple thin mid-layers and shed them as you heat up.',
      '**The Outer Shell (Weather Protection)**: This layer must be windproof and waterproof, yet breathable. It protects you from rain, snow, and biting winds that can strip away your body heat in seconds. A high-quality Gore-Tex jacket is an investment that can literally save your life.',
      'By mastering these three layers, you create a personalized micro-climate that you can adjust on the fly, ensuring comfort regardless of what the mountain throws at you.'
    ]
  },
  {
    slug: 'finding-solitude-in-zanskar',
    title: 'Finding Solitude in Zanskar',
    excerpt: 'A photo essay and narrative detailing a journey through one of the most isolated and starkly beautiful regions on Earth.',
    category: 'Expeditions',
    readTime: '8 min read',
    author: 'Ananya Desai',
    date: 'September 05, 2024',
    image: '/images/ladakh/ladakh-bike-tour.jpg',
    content: [
      'Zanskar is not a place you simply visit; it is a place you endure, and in return, it strips away the noise of modern life until all that remains is silence and scale.',
      'Cut off from the rest of the world for nearly six months a year by deep snows on the high passes, the Zanskar valley maintains a raw, primordial energy. The landscape is a study in contrasts: arid, jagged peaks of ochre and purple plunge into the raging, silt-laden waters of the Zanskar river.',
      'Trekking through this region feels like walking on the moon. The villages are few and far between, oasis of green barley fields clinging to the sides of barren mountains. The resilience of the Zanskari people, who have thrived in this harsh environment for centuries, is profoundly humbling.',
      'One of the most striking aspects of Zanskar is the light. Unfiltered by pollution or humidity, the sun casts razor-sharp shadows, and at dawn and dusk, the mountains seem to glow from within.',
      'In Zanskar, the silence is heavy. It is not just the absence of noise, but a physical presence. It forces you inward, making an expedition here as much a journey of self-discovery as it is a physical challenge.'
    ]
  },
  {
    slug: 'leave-no-trace-himalayas',
    title: 'Leave No Trace: The Himalayan Context',
    excerpt: 'With increasing footfall on popular trails, preserving the fragile high-altitude ecosystem is no longer optional; it is our collective duty.',
    category: 'Conservation',
    readTime: '4 min read',
    author: 'EcoTrek Initiative',
    date: 'June 18, 2024',
    image: '/images/uttarakhand/valley-of-flowers.jpg',
    content: [
      'The Himalayas are vast, giving the illusion of invulnerability. However, the high-altitude ecosystem is incredibly fragile. Soil formation takes centuries, and vegetation grows at a glacial pace. A single piece of litter can persist for decades, and a trampled alpine meadow might not recover in our lifetime.',
      'The core principle of Leave No Trace (LNT) is simple: leave the place exactly as you found it, or better. But applying this in the Himalayas requires specific knowledge.',
      '**Waste Management**: In sub-zero temperatures, human waste does not decompose quickly. We must adopt the practice of carrying out solid waste using specialized bags (like WAG bags) or utilizing deep, properly managed cat holes far away from water sources.',
      '**Campfire Etiquette**: The tree line in the Himalayas is relatively low. Harvesting dead wood for campfires in alpine zones deprives the soil of necessary nutrients. We must rely entirely on camping stoves for cooking and warmth, completely eliminating the romantic but destructive notion of the mountain campfire.',
      '**Respecting Local Culture**: LNT isn\'t just about the environment; it\'s about the people. Respecting local customs, avoiding the distribution of sweets/plastic to children, and supporting the local economy sustainably are crucial pillars of responsible trekking.'
    ]
  },
  {
    slug: 'the-myth-of-the-yeti',
    title: 'Echoes in the Snow: The Myth of the Yeti',
    excerpt: 'Exploring the cultural significance and enduring mystery of the Abominable Snowman in Himalayan folklore.',
    category: 'Culture & History',
    readTime: '7 min read',
    author: 'Karma Tenzin',
    date: 'October 30, 2024',
    image: '/images/uttarakhand/adi-kailash-om-parvat.png',
    content: [
      'To the Western world, the Yeti or "Abominable Snowman" is a cryptid, a monster of pop culture, fodder for sensationalist documentaries. But to the indigenous people of the Himalayas, the Yeti is deeply woven into the fabric of their spiritual and cultural worldview.',
      'In Tibetan and Sherpa folklore, the Yeti is not necessarily a flesh-and-blood beast, but a spiritual entity, a guardian of the high peaks, or sometimes, a manifestation of the wild, untamed forces of nature itself.',
      'Monasteries in the Khumbu region hold relics—scalps and skeletal hands—attributed to the Yeti. While scientific analysis often attributes these to local bears or goats, the belief remains steadfast. The Yeti serves a crucial cultural function: it enforces respect for the mountains.',
      'The stories of the Yeti tell children not to wander too far into the treacherous snows, and they remind adults that humanity is not the absolute master of the high Himalayas. There are realms that belong to the wild, realms where we are merely transient, vulnerable guests.',
      'Whether a relic population of an undiscovered hominid or a powerful psychological archetype born from the isolation of the mountains, the Yeti endures because it represents the enduring mystery and terror of the high altitude wilderness.'
    ]
  }
];
