// Utility functions for handling Unsplash images

// Function to get a direct Unsplash image URL
export const getUnsplashImage = (id: string) => {
  // Now returns a direct URL from our predefined list
  return unsplashDirectUrls[id] || unsplashDirectUrls.default;
};

// Function to get a random Unsplash image by search term (using direct URLs now)
export const getRandomUnsplashImage = (query: string) => {
  // This now returns a direct URL from our predefined list based on query
  if (query.includes('tech') || query.includes('technology')) {
    return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop';
  } else if (query.includes('business')) {
    return 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1200&auto=format&fit=crop';
  } else if (query.includes('team')) {
    return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop';
  } else {
    // Default image
    return 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop';
  }
};

// Function to get a team member image based on name
export const getTeamMemberImage = (name: string) => {
  // Convert name to lowercase for case-insensitive matching
  name = name.toLowerCase();

  if (name.includes('pritish')) {
    return getUnsplashImage(unsplashImages.teamMembers.ceo);
  } else if (name.includes('vaishnavi')) {
    return getUnsplashImage(unsplashImages.teamMembers.cto);
  } else if (name.includes('sweta')) {
    return getUnsplashImage(unsplashImages.teamMembers.sales);
  } else if (name.includes('samrita')) {
    return getUnsplashImage(unsplashImages.teamMembers.technical);
  } else if (name.includes('pritam')) {
    return getUnsplashImage(unsplashImages.teamMembers.cdo);
  } else {
    // Default image if no match
    return getUnsplashImage(unsplashImages.teamMembers.ceo);
  }
};

// Direct URLs for Unsplash images (to avoid API rate limits)
const unsplashDirectUrls: { [key: string]: string } = {
  // Default fallback image
  default: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop',

  // Hero section images
  'smgTvepind4': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
  'QBpZGqEMsKg': 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1200&auto=format&fit=crop',
  'g1Kr4Ozfoac': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  'FPt10LXK0cg': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop',
  'hpjSkU2UYSU': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
  'bzdhc5b3Bxs': 'https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=1200&auto=format&fit=crop',
  'sxiSod44n8Q': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
  '5fNmWej4tAA': 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop',
  'oZuBNC-6PRs': 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?q=80&w=1200&auto=format&fit=crop',
  'Ua9oUyh2-XM': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
  'I5iDhDIEGJA': 'https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=1200&auto=format&fit=crop',
  'UT4GJ7sHa_o': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  'Oalh2MojUuk': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  'ILip77SbmOE': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
  'sibVwORYqs0': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
  'QXevDflbl8A': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop',
  'mEZ3PoFGs_k': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop',
  'C9DCGIlz-AE': 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1200&auto=format&fit=crop',
  'Y9kOsyoWyaU': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
  'FWVMhUa_wbY': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
  'p0j-mE6mGo4': 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop',
  'nLBAxdacPU0': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
  'vB5qeABuVQk': 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop',
  'rxpThOwuVgE': 'https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1200&auto=format&fit=crop',
  'Hpaq-kBcYHk': 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1200&auto=format&fit=crop',
  '8bghKxNU1j0': 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1200&auto=format&fit=crop',
  'JrjhtBJ-pGU': 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200&auto=format&fit=crop',
  'pJadQetzTkI': 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop',
  'n4KewLKFOZw': 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop',
  'OQMZwNd3ThU': 'https://images.unsplash.com/photo-1639322537138-5e98fcb34734?q=80&w=1200&auto=format&fit=crop',
  'phIFdC6lA4E': 'https://images.unsplash.com/photo-1639322537776-12b7e441e8c9?q=80&w=1200&auto=format&fit=crop',
  'ETRPjvb0KM0': 'https://images.unsplash.com/photo-1639322537964-5e5ed4025a0c?q=80&w=1200&auto=format&fit=crop',
};

// Video URLs for hero backgrounds
export const unsplashVideos = {
  tech: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-in-black-and-white-34714-large.mp4',
  business: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-businessman-working-on-a-computer-32256-large.mp4',
  abstract: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-30371-large.mp4',
  data: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-31280-large.mp4',
};

// Curated Unsplash image IDs for different sections
export const unsplashImages = {
  // Hero section images
  hero: {
    tech: 'smgTvepind4', // Tech-related image
    business: 'QBpZGqEMsKg', // Business-related image
    team: 'UT4GJ7sHa_o', // Team meeting
    main: 'smgTvepind4', // Main hero image
  },

  // Service images
  services: {
    webDev: 'FPt10LXK0cg', // Web development
    mobileDev: 'hpjSkU2UYSU', // Mobile development
    uiUx: 'bzdhc5b3Bxs', // UI/UX design
    crm: 'sxiSod44n8Q', // CRM solutions
    erp: '5fNmWej4tAA', // ERP systems
    cloud: 'oZuBNC-6PRs', // Cloud solutions
    ecommerce: 'Ua9oUyh2-XM', // E-commerce
    marketing: 'I5iDhDIEGJA', // Digital marketing

    // Web Development Service Page
    webDev1: 'FPt10LXK0cg', // Custom web applications
    webDev2: 'hpjSkU2UYSU', // Responsive websites
    webDev3: 'Ua9oUyh2-XM', // E-commerce solutions
    webDev4: 'sxiSod44n8Q', // Web portals
    webDev5: 'bzdhc5b3Bxs', // Progressive web apps
    webDev6: '5fNmWej4tAA', // Website optimization

    // Game Development Service Page
    gameDev1: 'p0j-mE6mGo4', // Mobile games
    gameDev2: 'nLBAxdacPU0', // PC & console games
    gameDev3: 'vB5qeABuVQk', // VR/AR games
    gameDev4: 'rxpThOwuVgE', // Game design
    gameDev5: 'Hpaq-kBcYHk', // Game porting
    gameDev6: '8bghKxNU1j0', // Game backend

    // Blockchain Development Service Page
    blockchain1: 'JrjhtBJ-pGU', // Smart contracts
    blockchain2: 'pJadQetzTkI', // dApp development
    blockchain3: 'n4KewLKFOZw', // Private blockchain
    blockchain4: 'OQMZwNd3ThU', // Cryptocurrency
    blockchain5: 'phIFdC6lA4E', // Blockchain security
    blockchain6: 'ETRPjvb0KM0', // Blockchain integration
  },

  // About page images
  about: {
    story: 'smgTvepind4', // Company story
    mission: 'QBpZGqEMsKg', // Mission
    vision: 'g1Kr4Ozfoac', // Vision
    teamImage: 'Oalh2MojUuk', // Team image
  },

  // Team member images
  teamMembers: {
    // Role-specific images
    ceo: 'ILip77SbmOE', // CEO image
    cto: 'sibVwORYqs0', // CTO image
    sales: 'QXevDflbl8A', // Sales Director image
    technical: 'mEZ3PoFGs_k', // Technical Lead image
    cdo: 'C9DCGIlz-AE', // CDO image
    leader1: 'ILip77SbmOE', // Professional male
    leader2: 'sibVwORYqs0', // Professional female
    member1: 'QXevDflbl8A', // Professional female
    member2: 'mEZ3PoFGs_k', // Professional female
    member3: 'C9DCGIlz-AE', // Professional male
    member4: 'ILip77SbmOE', // Professional male
    member5: 'sibVwORYqs0', // Professional female
    member6: 'QXevDflbl8A', // Professional female
  },

  // Culture images
  culture: {
    image1: 'Oalh2MojUuk', // Team collaboration
    image2: 'Y9kOsyoWyaU', // Office environment
    image3: 'smgTvepind4', // Team building
    image4: 'QBpZGqEMsKg', // Knowledge sharing
    image5: 'g1Kr4Ozfoac', // Work-life balance
    image6: 'FWVMhUa_wbY', // Company events
  },

  // Process images
  process: {
    discovery: 'QBpZGqEMsKg', // Discovery phase
    planning: 'g1Kr4Ozfoac', // Planning phase
    development: 'FPt10LXK0cg', // Development phase
    testing: 'hpjSkU2UYSU', // Testing phase
    deployment: 'bzdhc5b3Bxs', // Deployment phase
    support: 'sxiSod44n8Q', // Support phase
  },

  // Portfolio images
  portfolio: {
    project1: 'FPt10LXK0cg', // Web project
    project2: 'hpjSkU2UYSU', // Mobile project
    project3: 'bzdhc5b3Bxs', // UI/UX project
    project4: 'sxiSod44n8Q', // CRM project
    project5: '5fNmWej4tAA', // ERP project
    project6: 'oZuBNC-6PRs', // Cloud project
  },

  // Project images by industry
  projects: {
    healthcare: 'FPt10LXK0cg', // Healthcare project
    banking: 'hpjSkU2UYSU', // Banking/Finance project
    education: 'bzdhc5b3Bxs', // Education project
    retail: 'sxiSod44n8Q', // Retail/E-commerce project
    travel: '5fNmWej4tAA', // Travel/Tourism project
    logistics: 'oZuBNC-6PRs', // Logistics/Supply Chain project
  },

  // Testimonial images
  testimonials: {
    client1: 'ILip77SbmOE', // Client 1
    client2: 'sibVwORYqs0', // Client 2
    client3: 'QXevDflbl8A', // Client 3
    client4: 'mEZ3PoFGs_k', // Client 4
    client5: 'C9DCGIlz-AE', // Client 5
  },

  // Background patterns and textures
  backgrounds: {
    pattern1: 'smgTvepind4', // Abstract pattern
    pattern2: 'QBpZGqEMsKg', // Geometric pattern
    texture1: 'g1Kr4Ozfoac', // Subtle texture
    texture2: 'FPt10LXK0cg', // Gradient texture
  },
};
