import React, { useState, useEffect, useRef } from 'react';

// --- ICONS ---
const IconBase = ({ children, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);
const Phone = ({ className }) => <IconBase className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></IconBase>;
const Send = ({ className }) => <IconBase className={className}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></IconBase>;
const Facebook = ({ className }) => <IconBase className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></IconBase>;
const Instagram = ({ className }) => <IconBase className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></IconBase>;
const Film = ({ className }) => <IconBase className={className}><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></IconBase>;
const ChevronDown = ({ className }) => <IconBase className={className}><polyline points="6 9 12 15 18 9"/></IconBase>;
const ChevronLeft = ({ className }) => <IconBase className={className}><polyline points="15 18 9 12 15 6" /></IconBase>;
const ChevronRight = ({ className }) => <IconBase className={className}><polyline points="9 18 15 12 9 6" /></IconBase>;
const X = ({ className }) => <IconBase className={className}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></IconBase>;
const Menu = ({ className }) => <IconBase className={className}><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></IconBase>;
const ArrowRight = ({ className }) => <IconBase className={className}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></IconBase>;
const Maximize2 = ({ className }) => <IconBase className={className}><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></IconBase>;
const RotateCw = ({ className }) => <IconBase className={className}><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></IconBase>;
const BedDouble = ({ className }) => <IconBase className={className}><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></IconBase>;
const Bath = ({ className }) => <IconBase className={className}><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></IconBase>;
const MapPin = ({ className }) => <IconBase className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconBase>;
const ExternalLink = ({ className }) => <IconBase className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></IconBase>;

// --- DATA ---
const L1_GALLERY = [
  "./images/L1/DSC01278.jpg",
  "./images/L1/DSC01282.jpg",
  "./images/L1/DSC01291.jpg",
  "./images/L1/DSC01296.jpg",
  "./images/L1/DSC01304.jpg",
  "./images/L1/DSC01314.jpg",
  "./images/L1/DSC01331.jpg",
  "./images/L1/DSC01342.jpg",
  "./images/L1/DSC01356.jpg",
  "./images/L1/DSC01371.jpg"
];

const L2_GALLERY = [
  "./images/L2/IMG_7818.jpg",
  "./images/L2/IMG_7821.jpg",
  "./images/L2/IMG_7822.jpg",
  "./images/L2/IMG_7828.jpg",
  "./images/L2/IMG_7829.jpg",
  "./images/L2/IMG_7833.jpg",
  "./images/L2/IMG_7835.jpg",
  "./images/L2/IMG_7838.jpg",
  "./images/L2/IMG_7841.jpg",
  "./images/L2/IMG_7842.jpg"
];

const L3_GALLERY = [
  "./images/L3/IMG_8294.jpg",
  "./images/L3/IMG_8295.jpg",
  "./images/L3/IMG_8296.jpg",
  "./images/L3/IMG_8297.jpg",
  "./images/L3/IMG_8298.jpg",
  "./images/L3/IMG_8300.jpg",
  "./images/L3/IMG_8301.jpg",
  "./images/L3/IMG_8302.jpg",
  "./images/L3/IMG_8303.jpg",
  "./images/L3/IMG_8304.jpg",
  "./images/L3/IMG_8305.jpg",
  "./images/L3/IMG_8947.jpg",
  "./images/L3/IMG_8948.jpg",
  "./images/L3/IMG_8949.jpg",
  "./images/L3/IMG_8950.jpg",
  "./images/L3/IMG_8951.jpg",
  "./images/L3/IMG_8952.jpg",
  "./images/L3/IMG_8953.jpg",
  "./images/L3/IMG_8954.jpg",
  "./images/L3/IMG_8955.jpg",
  "./images/L3/IMG_8956.jpg",
  "./images/L3/IMG_8957.jpg",
  "./images/L3/IMG_8958.jpg",
  "./images/L3/IMG_8959.jpg"
];

// specific unit images
const TYPE_F_IMAGES = [
  "./images/L3_NEW/Type F/IMG_3024.jpg",
  "./images/L3_NEW/Type F/IMG_3026.jpg",
  "./images/L3_NEW/Type F/IMG_3027.jpg",
  "./images/L3_NEW/Type F/IMG_3031.jpg",
  "./images/L3_NEW/Type F/IMG_3032.jpg",
  "./images/L3_NEW/Type F/IMG_3033.jpg",
  "./images/L3_NEW/Type F/IMG_3034.jpg",
  "./images/L3_NEW/Type F/IMG_3035.jpg",
  "./images/L3_NEW/Type F/IMG_3036.jpg",
  "./images/L3_NEW/Type F/IMG_3037.jpg",
  "./images/L3_NEW/Type F/IMG_3038.jpg"
];

const TYPE_LT_IMAGES = [
  "./images/L3_NEW/Type LT/IMG_3007.jpg",
  "./images/L3_NEW/Type LT/IMG_3009.jpg",
  "./images/L3_NEW/Type LT/IMG_3010.jpg",
  "./images/L3_NEW/Type LT/IMG_3012.jpg",
  "./images/L3_NEW/Type LT/IMG_3015.jpg",
  "./images/L3_NEW/Type LT/IMG_3016.jpg",
  "./images/L3_NEW/Type LT/IMG_3017.jpg",
  "./images/L3_NEW/Type LT/IMG_3018.jpg",
  "./images/L3_NEW/Type LT/IMG_3019.jpg",
  "./images/L3_NEW/Type LT/IMG_3020.jpg",
  "./images/L3_NEW/Type LT/IMG_3021.jpg",
  "./images/L3_NEW/Type LT/IMG_3022.jpg",
  "./images/L3_NEW/Type LT/IMG_3023.jpg"
];

const TYPE_V2_IMAGES = [
  "./images/L3_NEW/Type V2/IMG_3075.jpg",
  "./images/L3_NEW/Type V2/IMG_3076.jpg",
  "./images/L3_NEW/Type V2/IMG_3083.jpg",
  "./images/L3_NEW/Type V2/IMG_3084.jpg",
  "./images/L3_NEW/Type V2/IMG_3085.jpg",
  "./images/L3_NEW/Type V2/IMG_3086.jpg",
  "./images/L3_NEW/Type V2/IMG_3087.jpg",
  "./images/L3_NEW/Type V2/IMG_3088.jpg",
  "./images/L3_NEW/Type V2/IMG_3089.jpg",
  "./images/L3_NEW/Type V2/IMG_3090.jpg"
];

const TYPE_X_IMAGES = [
  "./images/L3_NEW/Type X/IMG_2975.jpg",
  "./images/L3_NEW/Type X/IMG_2977.jpg",
  "./images/L3_NEW/Type X/IMG_2980.jpg",
  "./images/L3_NEW/Type X/IMG_2982.jpg",
  "./images/L3_NEW/Type X/IMG_2986.jpg",
  "./images/L3_NEW/Type X/IMG_2987.jpg",
  "./images/L3_NEW/Type X/IMG_2988.jpg",
  "./images/L3_NEW/Type X/IMG_2989.jpg",
  "./images/L3_NEW/Type X/IMG_2990.jpg",
  "./images/L3_NEW/Type X/IMG_2991.jpg",
  "./images/L3_NEW/Type X/IMG_2992.jpg",
  "./images/L3_NEW/Type X/IMG_2993.jpg"
];

const TYPE_Z_IMAGES = [
  "./images/L3_NEW/Type Z/IMG_2949.jpg",
  "./images/L3_NEW/Type Z/IMG_2952.jpg",
  "./images/L3_NEW/Type Z/IMG_2958.jpg",
  "./images/L3_NEW/Type Z/IMG_2959.jpg",
  "./images/L3_NEW/Type Z/IMG_2960.jpg",
  "./images/L3_NEW/Type Z/IMG_2961.jpg",
  "./images/L3_NEW/Type Z/IMG_2962.jpg",
  "./images/L3_NEW/Type Z/IMG_2963.jpg",
  "./images/L3_NEW/Type Z/IMG_2964.jpg",
  "./images/L3_NEW/Type Z/IMG_2965.jpg",
  "./images/L3_NEW/Type Z/IMG_2966.jpg",
  "./images/L3_NEW/Type Z/IMG_2967.jpg",
  "./images/L3_NEW/Type Z/IMG_2969.jpg",
  "./images/L3_NEW/Type Z/IMG_2971.jpg",
  "./images/L3_NEW/Type Z/IMG_2972.jpg",
  "./images/L3_NEW/Type Z/IMG_2973.jpg"
];

const MONIVONG2_GALLERY = [
  ...TYPE_F_IMAGES,
  ...TYPE_LT_IMAGES,
  ...TYPE_V2_IMAGES,
  ...TYPE_X_IMAGES,
  ...TYPE_Z_IMAGES
];

const PROJECT_HISTORY = [
  {
    id: 1,
    title: "L Tower 1: គម្រោង 271",
    year: "2021",
    status: "Sold Out",
    image: "./images/LTOWER1.jpg",
    link: "#ltower-1",
    location: "Street 271, Phnom Penh",
    mapQuery: "L Tower 1, Phnom Penh", 
    description: "Our inaugural luxury high-rise project setting the standard for urban living. A masterpiece of engineering and design, L Tower 1 introduced a new era of sophisticated living to the Street 271 area, featuring robust construction and timeless aesthetics.",
    mapLink: "https://maps.app.goo.gl/8LMrrHk8ppDvenGZ9",
    gallery: L1_GALLERY
  },
  {
    id: 2,
    title: "L Tower 2: គម្រោង ទួលទំពូង",
    year: "2024",
    status: "Sold Out",
    image: "./images/LTOWER2.jpg",
    link: "#ltower-2",
    location: "Toul Tom Poung, Phnom Penh",
    mapQuery: "L Tower 2, Phnom Penh", 
    description: "An architectural marvel blending modern design with unparalleled amenities. Located in the vibrant Toul Tom Poung district, this project offers residents immediate access to the city's best markets, cafes, and culture while maintaining a private sanctuary above.",
    mapLink: "https://maps.app.goo.gl/ALik7CWzr7yKcv458",
    gallery: L2_GALLERY
  },
  {
    id: 3,
    title: "L Tower 3: គម្រោង ព្រះមុនីវង្ស",
    year: "2025",
    status: "Sold Out",
    image: "./images/LTOWER3.jpg",
    link: "#ltower-3",
    location: "Monivong Boulevard, Phnom Penh",
    mapQuery: "L Tower 3, Phnom Penh", 
    description: "A landmark development offering premium urban lifestyle and convenience. Standing tall on Monivong Boulevard, L Tower 3 is synonymous with prestige, offering panoramic views of the city skyline and Mekong river.",
    mapLink: "https://maps.app.goo.gl/QeCcmqzLXcf56hNs8",
    gallery: L3_GALLERY
  },
  {
    id: 4,
    title: "គម្រោង ព្រះមុនីវង្សថ្មី",
    year: "2026",
    status: "Now Selling",
    image: "./images/cover.jpg",
    link: "#ltower-3-new",
    location: "Monivong Boulevard, Phnom Penh",
    mapQuery: "L Tower 3, Phnom Penh",
    description: "The pinnacle of our vision, featuring exclusive 2-floor duplex units. Designed for those who demand the extraordinary, this project redefines luxury with double-height ceilings, private terraces, and world-class facilities.",
    mapLink: "https://maps.app.goo.gl/QeCcmqzLXcf56hNs8",
    gallery: MONIVONG2_GALLERY
  }
];

const UNIT_TYPES = [
  { 
    id: 'F', 
    name: "ប្រភេទ F", 
    beds: 2, 
    baths: 2, 
    size: "88.50 sqm", 
    images: ["./images/F.jpg"], 
    roomImages: TYPE_F_IMAGES,
    vrLink: "https://yun.kujiale.com/design/3FO3CM9M1CWB/show",
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ F 88.50ម៉ែត្រការ៉េ (77,50 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង2",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'LT', 
    name: "ប្រភេទ LT", 
    beds: 3, 
    baths: 3, 
    size: "101 sqm", 
    images: ["./images/LT.jpg"], 
    roomImages: TYPE_LT_IMAGES,
    vrLink: "https://yun.kujiale.com/design/3FO3CM9HWAN8/show",
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ LT 101ម៉ែត្រការ៉េ (88 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង3",
      "បន្ទប់ទឹក3",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'S1_T2', 
    name: "ប្រភេទ S1,T2", 
    beds: 2, 
    baths: 2, 
    size: "77 sqm", 
    images: ["./images/S1,T2.jpg"], 
    roomImages: ["./images/S1,T2.jpg"],
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ S1,T2 77ម៉ែត្រការ៉េ (67 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង2",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'T_T3_T1', 
    name: "ប្រភេទ T,T3,T1", 
    beds: 2, 
    baths: 2, 
    size: "77 sqm", 
    images: ["./images/T,T3.jpg", "./images/T1.jpg"], 
    roomImages: ["./images/T,T3.jpg", "./images/T1.jpg"],
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ T,T3,T1 77ម៉ែត្រការ៉េ (67 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង2",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'U', 
    name: "ប្រភេទ U", 
    beds: 2, 
    baths: 1, 
    size: "70 sqm", 
    images: ["./images/U.jpg"], 
    roomImages: ["./images/U.jpg"],
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ U 70ម៉ែត្រការ៉េ (61 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង2",
      "បន្ទប់ទឹក1",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'V1_V2', 
    name: "ប្រភេទ V1,V2", 
    beds: 2, 
    baths: 2, 
    size: "77 sqm", 
    images: ["./images/V1.jpg", "./images/V2.jpg"], 
    roomImages: TYPE_V2_IMAGES,
    vrLink: "https://yun.kujiale.com/design/3FO3CM8HCUY2/show",
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ V1,V2 77ម៉ែត្រការ៉េ (67 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង2",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'W', 
    name: "ប្រភេទ W", 
    beds: 3, 
    baths: 2, 
    size: "82 sqm", 
    images: ["./images/W.jpg"], 
    roomImages: ["./images/W.jpg"],
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ W 82ម៉ែត្រការ៉េ (71.50 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង3",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'X', 
    name: "ប្រភេទ X", 
    beds: 3, 
    baths: 2, 
    size: "91 sqm", 
    images: ["./images/X.jpg"], 
    roomImages: TYPE_X_IMAGES,
    vrLink: "https://yun.kujiale.com/design/3FO3BXGLJBCE/show",
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ X 91ម៉ែត្រការ៉េ (79.50 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង3",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'Y', 
    name: "ប្រភេទ Y", 
    beds: 3, 
    baths: 2, 
    size: "93.50 sqm", 
    images: ["./images/Y.jpg"], 
    roomImages: ["./images/Y.jpg"],
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ Y 93.50ម៉ែត្រការ៉េ (81.50 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង3",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  },
  { 
    id: 'Z', 
    name: "ប្រភេទ Z", 
    beds: 2, 
    baths: 2, 
    size: "74.50 sqm", 
    images: ["./images/Z.jpg"], 
    roomImages: TYPE_Z_IMAGES,
    vrLink: "https://yun.kujiale.com/design/3FO3CM1OA2DX/show",
    features: [
      "ជាន់ទី9ដល់24",
      "ខុនដូ2ជាន់",
      "ផ្នែកខាងក្នុង ខុនដូ អិលថៅវើ",
      "ប្រភេទ Z 74.50ម៉ែត្រការ៉េ (65 ម៉ែត្រការ៉េ)",
      "បន្ទប់គេង2",
      "បន្ទប់ទឹក2",
      "កន្លែងទទួលភ្ញៀវធំទូលាយ",
      "ចង្រ្កានបាយ និងតុបាយ",
      "វ៉េរ៉ង់ដា ផ្ទាល់ខ្លួន"
    ] 
  }
];

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'ltower-1', label: 'LTOWER 1' },
  { id: 'ltower-2', label: 'LTOWER 2' },
  { id: 'ltower-3', label: 'LTOWER 3' },
  { id: 'ltower-3-new', label: 'LTOWER 3(NEW)' },
  { id: 'about-us', label: 'About Us' }
];

export default function App() {
  const getInitialTab = () => {
    if (typeof window !== 'undefined' && window.location) {
      const hash = window.location.hash.replace('#', '');
      return TABS.some(tab => tab.id === hash) ? hash : 'home';
    }
    return 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getInitialTab());
      setIsMobileMenuOpen(false);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const handleNextUnit = () => {
    if (!selectedUnit) return;
    const currentIndex = UNIT_TYPES.findIndex(u => u.id === selectedUnit.id);
    const nextIndex = (currentIndex + 1) % UNIT_TYPES.length;
    setSelectedUnit(UNIT_TYPES[nextIndex]);
  };

  const handlePrevUnit = () => {
    if (!selectedUnit) return;
    const currentIndex = UNIT_TYPES.findIndex(u => u.id === selectedUnit.id);
    const prevIndex = (currentIndex - 1 + UNIT_TYPES.length) % UNIT_TYPES.length;
    setSelectedUnit(UNIT_TYPES[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200" style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center cursor-pointer whitespace-nowrap">
            <img 
              src="./images/logo.png" 
              alt="L Tower Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          
          <div className="hidden md:flex space-x-4 lg:space-x-8 pr-4">
            {TABS.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tab.id ? 'text-[#FF9644] border-b-2 border-[#FF9644]' : 'text-gray-400 hover:text-white'
                } pb-1`}
              >
                {tab.label}
              </a>
            ))}
          </div>

          <div className="flex md:hidden items-center space-x-4">
             <a href="#home" className={`text-xs font-semibold uppercase tracking-widest ${activeTab === 'home' ? 'text-[#FF9644]' : 'text-gray-400'}`}>Home</a>
             <a href="#ltower-3-new" className={`text-xs font-semibold uppercase tracking-widest ${activeTab === 'ltower-3-new' ? 'text-[#FF9644]' : 'text-gray-400'}`}>LTOWER 3(NEW)</a>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#FF9644] transition-colors ml-2">
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            {TABS.filter(t => t.id !== 'home' && t.id !== 'ltower-3-new').map(tab => (
               <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest py-3 border-b border-white/5 ${
                    activeTab === tab.id ? 'text-[#FF9644]' : 'text-gray-400 hover:text-white'
                  }`}
               >
                 {tab.label}
               </a>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-20">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'ltower-1' && <ProjectTab project={PROJECT_HISTORY[0]} />}
        {activeTab === 'ltower-2' && <ProjectTab project={PROJECT_HISTORY[1]} />}
        {activeTab === 'ltower-3' && <ProjectTab project={PROJECT_HISTORY[2]} />}
        {activeTab === 'ltower-3-new' && (
          <ProjectTab project={PROJECT_HISTORY[3]}>
            <TypeSection setSelectedUnit={setSelectedUnit} />
          </ProjectTab>
        )}
        {activeTab === 'about-us' && <AboutTab />}
      </main>

      {selectedUnit && (
        <UnitModal 
           unit={selectedUnit} 
           onClose={() => setSelectedUnit(null)} 
           onNextUnit={handleNextUnit}
           onPrevUnit={handlePrevUnit}
        />
      )}

      <footer className="bg-[#34220a] py-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} L Tower Condo. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function HomeTab() {
  const scrollToHistory = () => {
    document.getElementById('history-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('./images/cover.jpg')",
            transform: "scale(1.05)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#FF9644] tracking-[0.3em] uppercase text-sm mb-6">Exclusive 2-Floor Residences</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            គម្រោង ព្រះមុនីវង្សថ្មី
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-12">
            សូមស្វាគមន៍
          </h2>
          <button 
            onClick={scrollToHistory}
            className="group inline-flex flex-col items-center text-gray-400 hover:text-[#FF9644] transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest mb-3">Discover Our Legacy</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
          </button>
        </div>
      </section>

      <section id="history-section" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-[#FF9644] uppercase tracking-widest text-sm mb-4">Development History</h3>
          <h4 className="text-4xl font-light text-white">Our Projects</h4>
          <div className="w-16 h-[1px] bg-[#FF9644] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECT_HISTORY.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              className={`group block relative overflow-hidden bg-[#34220a] rounded-sm border hover:border-[#FF9644]/50 transition-colors duration-500 ${project.status === 'Sold Out' ? 'border-white/5 opacity-80' : 'border-[#FF9644]/40 shadow-[0_0_20px_rgba(255,150,68,0.1)]'}`}
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute top-4 left-4 z-30 flex gap-2">
                  {project.status === "Sold Out" && <span className="bg-[#0a0a0a]/80 backdrop-blur-sm text-gray-300 text-[10px] px-2 py-1 rounded-sm uppercase tracking-widest border border-white/10">Sold Out</span>}
                  {project.status === "Now Selling" && <span className="bg-[#FF9644] text-[#0a0a0a] font-bold text-[10px] px-2 py-1 rounded-sm uppercase tracking-widest shadow-lg">Now Selling</span>}
                </div>
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20">
                <p className="text-[#FF9644] text-sm mb-2">{project.year}</p>
                <h5 className="text-2xl text-white mb-3 font-medium">{project.title}</h5>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <span className="inline-flex items-center text-xs uppercase tracking-wider text-white group-hover:text-[#FF9644] transition-colors">
                  Explore Project <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectTab({ project, children }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Gallery Pagination State
  const IMAGES_PER_PAGE = 6;
  const [galleryPage, setGalleryPage] = useState(0);
  const totalPages = Math.ceil(project.gallery.length / IMAGES_PER_PAGE);

  const handleGalleryNext = () => {
    setGalleryPage((prev) => (prev + 1) % totalPages);
  };

  const handleGalleryPrev = () => {
    setGalleryPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentGalleryImages = project.gallery.slice(
    galleryPage * IMAGES_PER_PAGE, 
    (galleryPage + 1) * IMAGES_PER_PAGE
  );

  // Use mapQuery if available, otherwise fallback to location. 
  // Increased zoom (z=15) to focus on the pin.
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(project.mapQuery || project.location)}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project.gallery.length]);

  return (
    <div className="animate-in fade-in duration-700 min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Split Layout Container */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3">
        
        {/* LEFT SIDE: Visuals (DESKTOP ONLY) - Image & Title Overlay (1/3 Width) */}
        <div className="hidden lg:flex relative h-auto min-h-screen bg-[#0a0a0a] flex-col border-r border-[#34220a]/20 lg:col-span-1">
           {/* Top Image */}
           <div className="relative flex-grow w-full overflow-hidden">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
             />
             {/* Gradient to blend image */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]"></div>
             
             {/* Title Overlay on Left/Top (Desktop) */}
             <div className="absolute top-0 left-0 w-full p-8 bg-gradient-to-b from-[#0a0a0a]/90 to-transparent z-10">
               <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight">{project.title}</h1>
               <p className="text-[#FF9644] uppercase tracking-widest text-sm font-bold">Est. {project.year}</p>
             </div>
           </div>
        </div>

        {/* RIGHT SIDE: Info (Mobile Container + Desktop Right) (2/3 Width on Desktop) */}
        <div className="relative bg-[#0a0a0a] p-8 lg:p-16 flex flex-col justify-center overflow-hidden lg:col-span-2">

           {/* 2. Big Image (MOBILE ONLY) */}
           <div className="block lg:hidden w-full h-64 mb-8 rounded-sm overflow-hidden relative shadow-2xl border border-[#34220a]/30">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover"
             />
           </div>

           {/* 3. Description (Title is on Left for Desktop, here for Mobile) */}
           <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight block lg:hidden">{project.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Meta info shown here for both mobile and desktop */}
                <span className={`uppercase tracking-widest text-sm px-3 py-1 rounded-sm border ${project.status === 'Now Selling' ? 'text-[#0a0a0a] bg-[#FF9644] border-[#FF9644] font-bold' : 'text-gray-400 border-white/10'}`}>
                   {project.status}
                </span>
                <span className="flex items-center text-gray-400 text-sm">
                   <MapPin className="w-4 h-4 mr-2 text-[#FF9644]" /> {project.location}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-2 border-[#34220a] pl-6">
                {project.description}
              </p>
           </div>

           {/* 4. Gallery (Desktop & Mobile) */}
           <div className="relative w-full mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-sm uppercase tracking-widest flex items-center">
                   <span className="w-8 h-[1px] bg-[#FF9644] mr-4"></span>
                   Showroom Gallery
                </h3>
                {/* Navigation Arrows for Desktop Grid */}
                <div className="hidden lg:flex items-center gap-2">
                   <button onClick={handleGalleryPrev} className="p-1 hover:text-[#FF9644] transition-colors"><ChevronLeft className="w-5 h-5"/></button>
                   <button onClick={handleGalleryNext} className="p-1 hover:text-[#FF9644] transition-colors"><ChevronRight className="w-5 h-5"/></button>
                </div>
              </div>
              
              {/* Desktop Grid Gallery - 3 Cols, 2 Rows (6 Images), Smaller Size */}
              <div className="hidden lg:grid grid-cols-3 gap-3">
                 {currentGalleryImages.map((img, idx) => {
                    // Calculate actual index in full gallery for lightbox
                    const realIndex = (galleryPage * IMAGES_PER_PAGE) + idx;
                    return (
                      <div 
                        key={idx} 
                        onClick={() => setLightboxIndex(realIndex)}
                        className="h-32 rounded-sm overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF9644] transition-all duration-300 relative group"
                      >
                         <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                      </div>
                    );
                 })}
              </div>

              {/* Mobile Auto-scrolling Gallery (Unchanged for Mobile) */}
              <div className="block lg:hidden overflow-hidden whitespace-nowrap mask-gradient relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                 <div 
                   className="inline-block animate-marquee hover:pause-animation"
                   style={{ animationDuration: `${Math.max(project.gallery.length * 4, 40)}s` }}
                 >
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setLightboxIndex(idx)}
                        className="inline-block w-48 h-32 mr-4 rounded-sm overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF9644] transition-all duration-300"
                      >
                         <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={`dup-${idx}`} 
                        onClick={() => setLightboxIndex(idx)}
                        className="inline-block w-48 h-32 mr-4 rounded-sm overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF9644] transition-all duration-300"
                      >
                         <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                 </div>
                 <p className="text-xs text-gray-600 mt-2 text-right italic">Click image to expand</p>
              </div>
           </div>

           {/* 5. Map */}
           <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden border border-[#34220a]/50 relative shadow-2xl">
               <iframe
                 title="Google Map"
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 src={mapSrc}
                 allowFullScreen
                 className="transition-all duration-500 opacity-90 hover:opacity-100 grayscale-[20%] hover:grayscale-0"
               ></iframe>
               <a 
                 href={project.mapLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="absolute bottom-4 right-4 bg-[#FF9644] hover:bg-white text-[#0a0a0a] font-bold py-2 px-4 rounded-sm shadow-xl flex items-center transition-colors duration-300 uppercase tracking-widest text-xs z-20"
               >
                 Open Maps <ExternalLink className="w-3 h-3 ml-2" />
               </a>
           </div>
           
           {/* Lightbox Modal */}
           {lightboxIndex !== null && (
             <div 
               className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
               onClick={() => setLightboxIndex(null)}
             >
               <button className="absolute top-6 right-6 text-white hover:text-[#FF9644] z-50">
                 <X className="w-8 h-8" />
               </button>

               {/* Navigation Buttons */}
               <button 
                 onClick={handlePrev}
                 className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#FF9644] bg-black/50 p-2 rounded-full transition-colors z-50"
               >
                 <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
               </button>
               
               <button 
                 onClick={handleNext}
                 className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#FF9644] bg-black/50 p-2 rounded-full transition-colors z-50"
               >
                 <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
               </button>

               <img 
                 src={project.gallery[lightboxIndex]} 
                 alt={`Gallery image ${lightboxIndex + 1}`} 
                 className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm border border-[#34220a]"
                 onClick={(e) => e.stopPropagation()} 
               />
               
               {/* Counter */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
                 {lightboxIndex + 1} / {project.gallery.length}
               </div>
             </div>
           )}

        </div>
      </div>
      
      {/* If there are children (like the TypeSection for Monivong 2), render them here */}
      {children && (
        <div className="bg-[#0a0a0a] border-t border-[#34220a]">
          {children}
        </div>
      )}

      <style>{`
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function TypeSection({ setSelectedUnit }) {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-light text-white mb-4">Available Units</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our exclusive collection of 10 distinct 2-floor luxury unit types. Each residence is meticulously crafted to elevate your living experience.
        </p>
        <div className="w-16 h-[1px] bg-[#FF9644] mx-auto mt-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {UNIT_TYPES.map((unit) => (
          <div 
            key={unit.id}
            onClick={() => setSelectedUnit(unit)}
            className="group cursor-pointer bg-[#34220a] border border-white/5 hover:border-[#FF9644]/40 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,150,68,0.15)]"
          >
            <div className="h-64 overflow-hidden relative">
              <img 
                src={unit.images[0]} 
                alt={unit.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs text-[#FF9644]">
                2 Floors
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg text-white mb-2 font-medium">{unit.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                <span className="flex items-center"><BedDouble className="w-4 h-4 mr-1 text-[#FF9644]" /> {unit.beds}</span>
                <span className="flex items-center"><Bath className="w-4 h-4 mr-1 text-[#FF9644]" /> {unit.baths}</span>
                <span className="flex items-center"><Maximize2 className="w-4 h-4 mr-1 text-[#FF9644]" /> {unit.size.split(' ')[0]}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF9644] group-hover:underline underline-offset-4">
                View Details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutTab() {
  const SOCIAL_LINKS = [
    { icon: Phone, label: "Phone", value: "076 63 333 36", href: "tel:0766333336" },
    { icon: Send, label: "Telegram", value: "@lsaleservice", href: "https://t.me/lsaleservice" },
    { icon: Facebook, label: "Facebook", value: "L Tower Condo", href: "https://www.facebook.com/ltowercondo/" },
    { icon: Instagram, label: "Instagram", value: "@l_tower_condo", href: "https://www.instagram.com/l_tower_condo/" },
    { icon: Film, label: "TikTok", value: "@ltowercondo", href: "https://www.tiktok.com/@ltowercondo" },
  ];

  const LOCATIONS_360 = [
    { id: 'l1', name: 'L Tower 1', image: './360_photo/360_LTOWER_1.jpg', thumb: './images/LTOWER1.jpg' },
    { id: 'l2', name: 'L Tower 2', image: './360_photo/360_LTOWER_2.jpg', thumb: './images/LTOWER2.jpg' },
    { id: 'l3', name: 'L Tower 3', image: './360_photo/360_LTOWER_3.jpg', thumb: './images/LTOWER3.jpg' }
  ];
  
  const [activeLoc, setActiveLoc] = useState(LOCATIONS_360[0]);
  const [is360Active, setIs360Active] = useState(false);

  return (
    <div className="animate-in fade-in duration-700 min-h-[calc(100vh-10rem)] flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Info */}
        <div>
          <h2 className="text-4xl font-light text-white mb-4">Connect With Us</h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Ready to experience luxury living? Reach out to our dedicated team today. Whether you have questions about our properties, want to discuss pricing, or are ready to schedule a private viewing of our exclusive units, we're here to assist you every step of the way.
          </p>
          
          <div className="space-y-6">
            {SOCIAL_LINKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#34220a] border border-white/10 flex items-center justify-center group-hover:border-[#FF9644] group-hover:bg-[#FF9644]/10 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF9644] transition-colors" />
                  </div>
                  <div className="ml-6">
                    <p className="text-sm text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg text-white group-hover:text-[#FF9644] transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: 360 Visual */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-xl font-light text-white flex items-center">
             <span className="w-6 h-[1px] bg-[#FF9644] mr-3"></span>
             Virtual 360° Tour
          </h3>
          
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
            {!is360Active ? (
              <>
                <img 
                  src={activeLoc.thumb} 
                  alt={activeLoc.name} 
                  className="w-full h-full object-cover opacity-50 transition-opacity duration-500 hover:opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <button 
                     onClick={() => setIs360Active(true)}
                     className="flex flex-col items-center group"
                   >
                     <div className="w-16 h-16 rounded-full bg-[#FF9644] text-[#0a0a0a] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3 shadow-[0_0_30px_rgba(255,150,68,0.5)]">
                       <RotateCw className="w-8 h-8" />
                     </div>
                     <span className="text-white uppercase tracking-widest text-sm font-bold drop-shadow-lg bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">Click to Load 360°</span>
                   </button>
                </div>
              </>
            ) : (
              <PanoramaViewer image={activeLoc.image} />
            )}
            
            {/* Location Overlay Label */}
            <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
               <p className="text-[#FF9644] text-xs font-bold uppercase tracking-widest">{activeLoc.name}</p>
            </div>
          </div>

          {/* Location Selectors */}
          <div className="grid grid-cols-3 gap-3">
             {LOCATIONS_360.map((loc) => (
               <button
                 key={loc.id}
                 onClick={() => {
                    setActiveLoc(loc);
                    setIs360Active(false); // Reset 360 view to save performance when switching
                 }}
                 className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border transition-all duration-300 group ${activeLoc.id === loc.id ? 'border-[#FF9644] shadow-[0_0_15px_rgba(255,150,68,0.2)] scale-100' : 'border-white/10 opacity-60 hover:opacity-100 scale-95 hover:scale-100'}`}
               >
                 <img src={loc.thumb} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={loc.name} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                 <span className="absolute bottom-2 w-full text-center text-[10px] sm:text-xs font-semibold text-white uppercase tracking-widest drop-shadow-md">
                   {loc.name}
                 </span>
               </button>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function PanoramaViewer({ image }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    let viewer;
    let timeout;

    const loadScript = () => {
      if (!document.getElementById('pannellum-script')) {
        const script = document.createElement('script');
        script.id = 'pannellum-script';
        script.src = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js';
        document.body.appendChild(script);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css';
        document.head.appendChild(link);
      }
    };

    const initViewer = () => {
      if (window.pannellum && viewerRef.current) {
        viewerRef.current.innerHTML = '';
        viewer = window.pannellum.viewer(viewerRef.current, {
          type: 'equirectangular',
          panorama: image,
          autoLoad: true,
          compass: false,
          showControls: true,
          mouseZoom: false, // Prevents unintended zooming when scrolling page
        });
      } else {
        timeout = setTimeout(initViewer, 200);
      }
    };

    loadScript();
    initViewer();

    return () => {
      clearTimeout(timeout);
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [image]);

  // Strictly prevent native browser touch behaviors (like swipe-to-exit or pull-to-refresh) inside the 360 viewer
  useEffect(() => {
    const el = viewerRef.current;
    const preventNativeSwipe = (e) => {
      // Allow Pannellum to handle the touch event for 360 panning, but stop the browser from swiping the page
      e.preventDefault();
    };

    if (el) {
      el.addEventListener('touchmove', preventNativeSwipe, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener('touchmove', preventNativeSwipe);
      }
    };
  }, []);

  return (
    <div 
       ref={viewerRef} 
       className="w-full h-full cursor-grab active:cursor-grabbing bg-black" 
       style={{ touchAction: 'none', overscrollBehavior: 'none' }} // Prevents mobile page scroll when panning
    />
  );
}

function UnitModal({ unit, onClose, onNextUnit, onPrevUnit }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [roomImgIdx, setRoomImgIdx] = useState(0);
  
  // fullScreenType can be 'none', 'floorplan', or 'room'
  const [fullScreenType, setFullScreenType] = useState('none');
  const scrollRef = useRef(null);

  // Reset indices when opening a new unit
  useEffect(() => {
    setImgIdx(0);
    setRoomImgIdx(0);
    setFullScreenType('none');
  }, [unit]);

  const isFullScreen = fullScreenType !== 'none';
  const fsImages = fullScreenType === 'room' ? unit.roomImages : unit.images;
  const fsImgIdx = fullScreenType === 'room' ? roomImgIdx : imgIdx;

  const nextImg = (e) => {
    e.stopPropagation();
    setImgIdx((prev) => (prev + 1) % unit.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setImgIdx((prev) => (prev - 1 + unit.images.length) % unit.images.length);
  };

  const nextRoomImg = (e) => {
    e.stopPropagation();
    setRoomImgIdx((prev) => (prev + 1) % (unit.roomImages?.length || 1));
  };

  const prevRoomImg = (e) => {
    e.stopPropagation();
    setRoomImgIdx((prev) => (prev - 1 + (unit.roomImages?.length || 1)) % (unit.roomImages?.length || 1));
  };

  const handleNextFS = (e) => {
    if (fullScreenType === 'room') nextRoomImg(e);
    else nextImg(e);
  };

  const handlePrevFS = (e) => {
    if (fullScreenType === 'room') prevRoomImg(e);
    else prevImg(e);
  };
  
  const scrollRoomImages = (dir) => {
    if (scrollRef.current) {
      const amount = 240; 
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <style>{`
        .animate-marquee-reverse {
          animation-name: marquee-reverse;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div 
        className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#34220a] border border-white/10 w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden rounded-sm flex flex-col md:flex-row shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#0a0a0a]/50 hover:bg-[#FF9644] rounded-full flex items-center justify-center text-white transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side Image Section with Click to Expand */}
        <div 
          className="w-full md:w-1/2 h-64 sm:h-[350px] md:h-auto md:min-h-full relative group bg-black cursor-pointer shrink-0"
          onClick={() => setFullScreenType('floorplan')}
        >
          <img src={unit.images[imgIdx]} alt={unit.name} className="w-full h-full object-contain md:object-cover group-hover:opacity-80 transition-opacity" />
          
          {/* Overlay text to hint clicking */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/20">
             <div className="bg-black/60 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-[#FF9644]" /> 
                <span className="text-sm uppercase tracking-widest">ពង្រីករូបភាពប្លង់</span>
             </div>
          </div>

          {unit.images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImg(e); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#FF9644] text-white p-2 rounded-full transition-colors z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImg(e); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#FF9644] text-white p-2 rounded-full transition-colors z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-xs text-white z-20">
                {imgIdx + 1} / {unit.images.length}
              </div>
            </>
          )}
        </div>
        
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col md:overflow-y-auto shrink-0">
          <span className="inline-block px-3 py-1 bg-[#FF9644]/10 text-[#FF9644] font-semibold border border-[#FF9644]/30 text-xs uppercase tracking-widest w-fit mb-6 shrink-0">
            Premium 2-Floor Unit
          </span>
          
          {/* Unit Title and Navigation */}
          <div className="flex items-start sm:items-center justify-between mb-6 flex-col sm:flex-row gap-4 sm:gap-0 shrink-0">
            <h2 className="text-2xl sm:text-3xl font-medium text-white">{unit.name}</h2>
            <div className="flex gap-2 shrink-0 sm:ml-4">
              <button 
                onClick={onPrevUnit}
                className="p-2 bg-[#0a0a0a]/50 hover:bg-[#FF9644] text-white rounded-full transition-colors"
                title="ប្រភេទមុន (Previous Type)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={onNextUnit}
                className="p-2 bg-[#0a0a0a]/50 hover:bg-[#FF9644] text-white rounded-full transition-colors"
                title="ប្រភេទបន្ទាប់ (Next Type)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 border-y border-white/10 py-6 shrink-0">
            <div>
              <p className="text-sm text-gray-400 mb-1">ទំហំសរុប (Total Area)</p>
              <p className="text-xl text-white font-medium flex items-center"><Maximize2 className="w-5 h-5 mr-2 text-[#FF9644]"/> {unit.size}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">បន្ទប់គេង (Bedrooms)</p>
              <p className="text-xl text-white font-medium flex items-center"><BedDouble className="w-5 h-5 mr-2 text-[#FF9644]"/> {unit.beds} បន្ទប់</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">បន្ទប់ទឹក (Bathrooms)</p>
              <p className="text-xl text-white font-medium flex items-center"><Bath className="w-5 h-5 mr-2 text-[#FF9644]"/> {unit.baths} បន្ទប់</p>
            </div>
          </div>

          <div className="mb-8 shrink-0">
            <h3 className="text-lg font-semibold text-white mb-3">លក្ខណៈពិសេស (Features)</h3>
            <ul className="text-gray-300 leading-relaxed space-y-2 list-disc pl-5 marker:text-[#FF9644]">
              {unit.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Right Side Room Images Gallery (Auto-scrolling Left to Right) */}
          {unit.roomImages && unit.roomImages.length > 0 && (
            <div className="mb-8 w-full max-w-full overflow-hidden shrink-0">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                 <span className="w-6 h-[1px] bg-[#FF9644] mr-3"></span>
                 រូបភាពបន្ទប់ (Room Images)
              </h3>
              
              <div className="overflow-hidden whitespace-nowrap relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                 <div 
                   className="inline-block animate-marquee-reverse hover:pause-animation"
                   style={{ animationDuration: `${Math.max(unit.roomImages.length * 4, 30)}s` }}
                 >
                    {unit.roomImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="inline-block w-48 md:w-56 h-32 md:h-40 mr-3 relative rounded-2xl overflow-hidden cursor-pointer border border-[#34220a] hover:border-[#FF9644]/80 transition-all duration-300 shadow-lg group"
                        onClick={() => {
                          setRoomImgIdx(idx);
                          setFullScreenType('room');
                        }}
                      >
                        <img
                          src={img}
                          alt={`Room view ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                           <div className="bg-black/60 text-white px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2 shadow-xl">
                              <Maximize2 className="w-3 h-3 text-[#FF9644]" />
                              <span className="text-xs uppercase tracking-widest">ពង្រីក</span>
                           </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {unit.roomImages.map((img, idx) => (
                      <div
                        key={`dup-${idx}`}
                        className="inline-block w-48 md:w-56 h-32 md:h-40 mr-3 relative rounded-2xl overflow-hidden cursor-pointer border border-[#34220a] hover:border-[#FF9644]/80 transition-all duration-300 shadow-lg group"
                        onClick={() => {
                          setRoomImgIdx(idx);
                          setFullScreenType('room');
                        }}
                      >
                        <img
                          src={img}
                          alt={`Room view ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                           <div className="bg-black/60 text-white px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-2 shadow-xl">
                              <Maximize2 className="w-3 h-3 text-[#FF9644]" />
                              <span className="text-xs uppercase tracking-widest">ពង្រីក</span>
                           </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3 mt-4 shrink-0">
            <a 
              href="https://t.me/lsaleservice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#FF9644] hover:bg-white text-[#0a0a0a] font-bold py-4 transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              សាកសួរព័ត៌មានបន្ថែម (Inquire)
            </a>
            
            {unit.vrLink && (
              <a 
                href={unit.vrLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-transparent border-2 border-[#FF9644] text-[#FF9644] hover:bg-[#FF9644] hover:text-[#0a0a0a] font-bold py-4 transition-colors duration-300 uppercase tracking-widest text-sm flex justify-center items-center gap-2"
              >
                <Film className="w-5 h-5" /> 3D Showroom
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isFullScreen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setFullScreenType('none')}
        >
          <button className="absolute top-6 right-6 text-white hover:text-[#FF9644] z-50">
            <X className="w-8 h-8" />
          </button>

          {fsImages && fsImages.length > 1 && (
            <>
              <button 
                onClick={handlePrevFS}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#FF9644] bg-black/50 p-2 rounded-full transition-colors z-50"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>
              
              <button 
                onClick={handleNextFS}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#FF9644] bg-black/50 p-2 rounded-full transition-colors z-50"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </>
          )}

          <img 
            src={fsImages[fsImgIdx]} 
            alt="Full screen preview" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm border border-[#34220a]"
            onClick={(e) => e.stopPropagation()} 
          />
          
          {fsImages && fsImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              {fsImgIdx + 1} / {fsImages.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}