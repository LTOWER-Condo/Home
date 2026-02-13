import React, { useState, useEffect } from 'react';

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
const BedDouble = ({ className }) => <IconBase className={className}><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></IconBase>;
const Bath = ({ className }) => <IconBase className={className}><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></IconBase>;
const MapPin = ({ className }) => <IconBase className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></IconBase>;
const ExternalLink = ({ className }) => <IconBase className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></IconBase>;

// --- DATA ---
const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600"
];

const PROJECT_HISTORY = [
  {
    id: 1,
    title: "L Tower 1: គម្រោង 271",
    year: "2021",
    status: "Sold Out",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    link: "#ltower-1",
    location: "Street 271, Phnom Penh",
    mapQuery: "L Tower 1, Phnom Penh", 
    description: "Our inaugural luxury high-rise project setting the standard for urban living. A masterpiece of engineering and design, L Tower 1 introduced a new era of sophisticated living to the Street 271 area, featuring robust construction and timeless aesthetics.",
    mapLink: "https://maps.app.goo.gl/8LMrrHk8ppDvenGZ9",
    gallery: GALLERY_IMAGES
  },
  {
    id: 2,
    title: "L Tower 2: គម្រោង ទួលទំពូង",
    year: "2024",
    status: "Sold Out",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800",
    link: "#ltower-2",
    location: "Toul Tom Poung, Phnom Penh",
    mapQuery: "L Tower 2, Phnom Penh", 
    description: "An architectural marvel blending modern design with unparalleled amenities. Located in the vibrant Toul Tom Poung district, this project offers residents immediate access to the city's best markets, cafes, and culture while maintaining a private sanctuary above.",
    mapLink: "https://maps.app.goo.gl/ALik7CWzr7yKcv458",
    gallery: [...GALLERY_IMAGES].reverse()
  },
  {
    id: 3,
    title: "L Tower 3: គម្រោង ព្រះមុនីវង្ស",
    year: "2025",
    status: "Sold Out",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    link: "#ltower-3",
    location: "Monivong Boulevard, Phnom Penh",
    mapQuery: "L Tower 3, Phnom Penh", 
    description: "A landmark development offering premium urban lifestyle and convenience. Standing tall on Monivong Boulevard, L Tower 3 is synonymous with prestige, offering panoramic views of the city skyline and Mekong river.",
    mapLink: "https://maps.app.goo.gl/QeCcmqzLXcf56hNs8",
    gallery: GALLERY_IMAGES
  },
  {
    id: 4,
    title: "គម្រោង ព្រះមុនីវង្ស 2",
    year: "2026",
    status: "Now Selling",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    link: "#monivong-2",
    location: "Monivong Boulevard, Phnom Penh",
    mapQuery: "L Tower 3, Phnom Penh",
    description: "The pinnacle of our vision, featuring exclusive 2-floor duplex units. Designed for those who demand the extraordinary, this project redefines luxury with double-height ceilings, private terraces, and world-class facilities.",
    mapLink: "https://maps.app.goo.gl/QeCcmqzLXcf56hNs8",
    gallery: GALLERY_IMAGES
  }
];

const UNIT_TYPES = [
  { id: 1, name: "Type A - Royal Duplex", beds: 3, baths: 3, size: "185 sqm", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000", desc: "A majestic 2-floor unit with sweeping city views, double-height living areas, and premium finishes." },
  { id: 2, name: "Type B - Grand Duplex", beds: 3, baths: 2, size: "160 sqm", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000", desc: "Elegant layout featuring a floating staircase, expansive master suite, and an open-concept kitchen." },
  { id: 3, name: "Type C - Premier Duplex", beds: 2, baths: 2, size: "140 sqm", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000", desc: "Perfectly balanced living space with floor-to-ceiling windows and a private balcony on the second level." },
  { id: 4, name: "Type D - Executive Duplex", beds: 2, baths: 2, size: "135 sqm", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000", desc: "Designed for the modern executive, featuring a dedicated home office space and luxury master bath." },
  { id: 5, name: "Type E - Luxury Loft", beds: 1, baths: 2, size: "110 sqm", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000", desc: "A spacious 1-bedroom loft with double-height ceilings, perfect for entertaining guests." },
  { id: 6, name: "Type F - Signature Loft", beds: 1, baths: 1, size: "95 sqm", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000", desc: "Intimate yet open, offering a serene escape above the bustling city with premium imported fixtures." },
  { id: 7, name: "Type G - Elite Penthouse", beds: 4, baths: 4, size: "250 sqm", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000", desc: "The crown jewel. A massive 2-floor penthouse with a private terrace and unobstructed 360-degree views." },
  { id: 8, name: "Type H - Crown Penthouse", beds: 3, baths: 3, size: "220 sqm", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000", desc: "Ultra-luxury penthouse living with a private elevator entrance and custom marble interiors." },
  { id: 9, name: "Type I - Urban Duplex", beds: 2, baths: 2, size: "125 sqm", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000", desc: "Chic and contemporary 2-floor unit designed for the ultimate urban lifestyle." },
  { id: 10, name: "Type J - Horizon Duplex", beds: 2, baths: 2, size: "130 sqm", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000", desc: "Experience the horizon with expansive eastern-facing windows to catch the morning sunrise." }
];

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'ltower-1', label: 'LTOWER 1' },
  { id: 'ltower-2', label: 'LTOWER 2' },
  { id: 'ltower-3', label: 'LTOWER 3' },
  { id: 'monivong-2', label: 'Monivong 2' },
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
             <a href="#monivong-2" className={`text-xs font-semibold uppercase tracking-widest ${activeTab === 'monivong-2' ? 'text-[#FF9644]' : 'text-gray-400'}`}>Monivong-2</a>
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-[#FF9644] transition-colors ml-2">
               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            {TABS.filter(t => t.id !== 'home' && t.id !== 'monivong-2').map(tab => (
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
        {activeTab === 'monivong-2' && (
          <ProjectTab project={PROJECT_HISTORY[3]}>
            <TypeSection setSelectedUnit={setSelectedUnit} />
          </ProjectTab>
        )}
        {activeTab === 'about-us' && <AboutTab />}
      </main>

      {selectedUnit && (
        <UnitModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} />
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
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000')",
            transform: "scale(1.05)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#FF9644] tracking-[0.3em] uppercase text-sm mb-6">Exclusive 2-Floor Residences</p>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            គម្រោង ព្រះមុនីវង្ស 2
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
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE: Visuals (DESKTOP ONLY) - Image & Gallery */}
        <div className="hidden lg:flex relative h-auto min-h-screen bg-[#0a0a0a] flex-col border-r border-[#34220a]/20">
           {/* Top Image */}
           <div className="relative flex-grow w-full overflow-hidden">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
             />
             {/* Gradient to blend image */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]"></div>
           </div>
           
           {/* Bottom Gallery (Moved from Right) */}
           <div className="relative w-full p-4 bg-[#0a0a0a] border-t border-[#34220a]/20">
              <h3 className="text-white text-xs uppercase tracking-widest mb-4 flex items-center">
                 <span className="w-8 h-[1px] bg-[#FF9644] mr-4"></span>
                 Showroom Gallery
              </h3>
              <div className="overflow-hidden whitespace-nowrap mask-gradient relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
                 <div className="inline-block animate-marquee hover:pause-animation">
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setLightboxIndex(idx)}
                        className="inline-block w-40 h-28 mr-4 rounded-sm overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF9644] transition-all duration-300"
                      >
                         <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                    {project.gallery.map((img, idx) => (
                      <div 
                        key={`dup-${idx}`} 
                        onClick={() => setLightboxIndex(idx)}
                        className="inline-block w-40 h-28 mr-4 rounded-sm overflow-hidden cursor-pointer border border-white/10 hover:border-[#FF9644] transition-all duration-300"
                      >
                         <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* RIGHT SIDE: Info (Mobile Container + Desktop Right) */}
        <div className="relative bg-[#0a0a0a] p-8 lg:p-16 flex flex-col justify-center overflow-hidden">
           
           {/* 1. Logo (Visible on Mobile Only, removed on Desktop per request) */}
           <div className="mb-8 block lg:hidden">
              <img src="./images/logo.png" alt="L Tower" className="h-16 w-auto object-contain opacity-90" />
           </div>

           {/* 2. Big Image (MOBILE ONLY) */}
           <div className="block lg:hidden w-full h-64 mb-8 rounded-sm overflow-hidden relative shadow-2xl border border-[#34220a]/30">
             <img 
               src={project.image} 
               alt={project.title} 
               className="w-full h-full object-cover"
             />
           </div>

           {/* 3. Description */}
           <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">{project.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-[#FF9644] uppercase tracking-widest text-sm bg-[#34220a]/50 px-3 py-1 rounded-sm border border-[#34220a]">
                   Est. {project.year}
                </span>
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

           {/* 4. Auto-scrolling Gallery (MOBILE ONLY) */}
           <div className="relative w-full block lg:hidden mb-12">
              <h3 className="text-white text-sm uppercase tracking-widest mb-6 flex items-center">
                 <span className="w-8 h-[1px] bg-[#FF9644] mr-4"></span>
                 Showroom Gallery
              </h3>
              
              <div className="overflow-hidden whitespace-nowrap mask-gradient relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                 <div className="inline-block animate-marquee hover:pause-animation">
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
              </div>
              <p className="text-xs text-gray-600 mt-2 text-right italic">Click image to expand</p>
           </div>

           {/* 5. Map (Now on Right for Desktop, and Bottom for Mobile) */}
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
          animation: marquee 40s linear infinite;
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