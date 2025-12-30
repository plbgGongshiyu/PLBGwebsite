import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { Footer } from '../components/Footer';

const danseLenteHero = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/hero.png';
const danseLenteLogo = 'https://storage.googleapis.com/plbg/assets/logos/danse-lente-logo.png';
const danseLenteGif1 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/gif-1.png';
const danseLenteGif2 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/gif-2.png';
const danseLenteGif3 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/gif-3.png';
const danseLenteStatic1 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/static-1.png';
const danseLenteStatic2 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/static-2.png';
const danseLenteStatic3 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/static-3.png';
const popup1 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/popups/press-day-copenhagen.png';
const popup2 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/popups/forty-five-ten-dallas.png';
const popup3 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/popups/corso-como-nyc.png';
const popup4 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/popups/los-angeles.png';
const popup5 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/popups/covent-garden-london.png';
const popup6 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/popups/dsm-london.png';
const specialProject1 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/special-projects/noah-lyon.png';
const specialProject2 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/special-projects/galeries-lafayette.png';
const specialProject3 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/special-projects/maison-trouvaille.png';
const specialProject4 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/special-projects/maisie-wilen.png';
const collab1 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/collaborations/ig-filter.png';
const collab2 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/collaborations/misty-project.png';
const collab3 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/collaborations/mini-johnny-snake.jpg';
const collab4 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/collaborations/dead-hungry.png';
const collab5 = 'https://storage.googleapis.com/plbg/assets/brands/danse-lente/collaborations/sojinails.png';

interface DanseLenteDetailPageProps {
  onBack: () => void;
}

export function DanseLenteDetailPage({ onBack }: DanseLenteDetailPageProps) {
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.4]);
  const logoY = useTransform(scrollY, [0, 200], [0, -300]);
  const logoOpacity = useTransform(scrollY, [0, 150, 200], [1, 0.5, 0]);

  const gifGallery = [
    {
      staticImage: danseLenteStatic1,
      gifImage: danseLenteGif1
    },
    {
      staticImage: danseLenteStatic2,
      gifImage: danseLenteGif2
    },
    {
      staticImage: danseLenteStatic3,
      gifImage: danseLenteGif3
    }
  ];

  // Special Projects data
  const specialProjects = [
    {
      title: 'Danse Lente x Noah Lyon Customization',
      image: specialProject1,
      description: "Danse Lente launched its first online customization service in November of 2018 through a collaboration with artist Noah Lyon. A series of hand-drawn personified plants, animals and foods have been created in Noah's famous style that is spontaneous, intimate and intuitively playful. Customers can choose from 4 designs which are available exclusively on the brand's official website."
    },
    {
      title: 'Danse Lente x Galeries Lafayette',
      image: specialProject2,
      description: 'Lente looks back to the 90s classic handbag silhouette, reimagined to create a contemporary staple for today. The Mini Baguette is the scaleddown sister of the original Danse Lente Baguette.Crafted from supple leather and rendered in two exclusive colorways for Galleries Lafayette. Choose from Camel body accentuated by a blue leather magnetic clasp or in dark Sienna contrasted with a light French beige leather magnetic clasp'
    },
    {
      title: 'Home Project with Maison Trouvaille',
      image: specialProject3,
      description: "The Danse Lente Home Project is a home wear collaboration with the Los Angeles-based interior designer Erick Garcia of Maison Trouvaille.Inspired by the warm and inviting atmosphere of Erick's spaces, we decided to create a line of unisex leisure wear that can be worn comfortably in the home, or out and about in the city."
    },
    {
      title: 'SS22 Bag Collaboration with Maisie Wilen',
      image: specialProject4,
      description: "We are collaborating with the designer Maisie Wilen to work on a collection of bags for her SS22 collection. Details are still yet to be confirmed, but it is likely that the bags will be showcased in her runway show and will be carried by Maisie Wilen, Danse Lente and other select retailers. Maisie Wilen is the first designer to be backed by Kanye West's incubator program for young talent in the design world. She has launched four collections so far and is being represented by Karla Otto."
    }
  ];

  // Collaborations data
  const collaborations = [
    {
      title: 'SS21 IG Filter',
      image: collab1,
      description: 'For the release of our upcoming SS21 collection, we teamed up with AR artist Helena Dong to create an Instagram filter.',
      size: 'large'
    },
    {
      title: 'Misty Project',
      image: collab2,
      description: 'The aim of the Danse Lente Misty Project is to bring together creative women from all around the world to raise donations for the Global Fund for Women.',
      size: 'small'
    },
    {
      title: 'Mini Johnny Snake with DAISUKE',
      image: collab3,
      size: 'medium'
    },
    {
      title: 'Christmas Collaboration with Dead Hungry',
      image: collab4,
      size: 'small'
    },
    {
      title: 'Danse Lente with sojinails',
      image: collab5,
      size: 'medium'
    }
  ];

  const firstRowPopups = [
    { name: 'SS20 Press Day with Mørch & Rohde, Copenhagen, DK', image: popup1 },
    { name: 'At Forty Five Ten, Dallas', image: popup2 }
  ];

  const popups = [
    { name: 'At Corso Como, NYC', images: [popup3] },
    { name: 'In Los Angeles, CA', images: [popup4] },
    { name: 'In Covent Garden, London', images: [popup5] },
    { name: 'In Dover Street Market, London', images: [popup6] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowHeader(scrollPosition > 100);

      // Update active section
      const sections = ['brand-story', 'pop-ups', 'special-projects', 'collaborations'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % specialProjects.length);
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + specialProjects.length) % specialProjects.length);
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Fixed Return Button - Always visible */}
      {/* <motion.button
        onClick={onBack}
        className={`fixed top-4 left-4 md:left-8 z-50 flex items-center gap-2 px-3 md:px-4 py-2 transition-all duration-300 ${
          showHeader 
            ? 'bg-black text-white' 
            : 'bg-transparent text-white border border-white/50 hover:bg-white/10'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={18} className="md:w-5 md:h-5" />
        <span className="text-xs md:text-sm tracking-wider">BACK</span>
      </motion.button> */}

      {/* Animated Header */}
      {/* <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-black/10 py-4"
          >
            <div className="container mx-auto flex items-center justify-center">
              <img src={danseLenteLogo} alt="DANSE LENTE" className="h-8" />
            </div>
          </motion.header>
        )}
      </AnimatePresence> */}

      {/* Hero Section with Brand Image */}
      <section className="relative w-full overflow-hidden">
        <img
          src={danseLenteHero}
          alt="DANSE LENTE Brand"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Navigation Menu */}
      <nav
        className="sticky top-[70px] md:top-[58px] z-30 bg-white py-4 md:py-6 transition-all duration-300 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]"
      >
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <ul className="flex items-center justify-start md:justify-center gap-4 md:gap-8 lg:gap-16 px-4 md:px-0 min-w-max md:min-w-0 pb-3">
            {[
              { id: 'brand-story', label: 'BRAND STORY' },
              { id: 'pop-ups', label: 'POP-UPS' },
              { id: 'special-projects', label: 'SPECIAL PROJECTS' },
              { id: 'collaborations', label: 'COLLABORATIONS' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs md:text-sm tracking-widest transition-all duration-300 relative whitespace-nowrap ${activeSection === item.id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                  style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '16px', letterSpacing: '1px' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Brand Story Section */}
      <section id="brand-story" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-16 lg:gap-24 max-w-6xl mx-auto">
            {/* Left: Story Text */}
            <div className="space-y-4 md:space-y-6 md:-ml-12">
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8' }}>
                Danse Lente, which means Slow Dance in French, focuses on high
                quality leather goods inspired by contemporary aesthetics and modern
                architecture.
              </p>
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8' }}>
                The philosophy of the brand focuses on timelessness in design.
                Attention to construction and finished are very strong foundations for
                the brand. From the beginning of sampling to final product, we work with
                skilled craftsmen, tanneries and metal smith artisans both in Italy and
                from further afield to create impeccably crafted products.
              </p>
            </div>

            {/* Right: Media Links */}
            <div className="space-y-6 md:space-y-8">
              <a
                href="https://danselente.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
                style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: '14px' }}
              >
                <span className="tracking-wider">danselente.com</span>
                <svg
                  width="40"
                  height="16"
                  viewBox="0 0 40 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-2"
                >
                  <path
                    d="M32 1L39 8M39 8L32 15M39 8H1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="space-y-4">
                <p style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '16px', color: '#000000' }}>FOLLOW US</p>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/danselente_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity"
                  >
                    <Instagram size={24} color="#000000" />
                  </a>
                  <a href="#" className="hover:opacity-60 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GIF Gallery Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {gifGallery.map((item, index) => {
            const src = index === 1 ? item.gifImage : item.staticImage;
            return (
              <div
                key={index}
                className="aspect-[4/5] overflow-hidden relative"
              >
                <img
                  src={src}
                  alt={`Fashion ${index === 1 ? 'Animation' : 'Image'} ${index + 1}`}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Pop-ups Section */}
      <section id="pop-ups" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2
            className="text-center mb-10 md:mb-16 lg:mb-24"
            style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
          >
            POP-UPS
          </h2>

          <div className="space-y-8 md:space-y-12">
            {/* First row - Two separate pop-ups with individual titles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {firstRowPopups.map((popup, idx) => (
                <div key={idx} className="space-y-3 md:space-y-4">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={popup.image}
                      alt={popup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-center tracking-wider"
                    style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px', color: '#000000' }}
                  >
                    {popup.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Remaining pop-ups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {popups.map((popup, index) => (
                <div key={index} className="space-y-3 md:space-y-4">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={popup.images[0]}
                      alt={popup.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-center tracking-wider"
                    style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px', color: '#000000' }}
                  >
                    {popup.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Projects Section */}
      <section
        id="special-projects"
        className="py-12 md:py-20 lg:py-32"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
          <h2
            className="text-center"
            style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
          >
            SPECIAL PROJECTS
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden px-4 md:px-8 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-6xl mx-auto"
              >
                {/* Left: Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <ImageWithFallback
                    src={specialProjects[currentProjectSlide].image}
                    alt={specialProjects[currentProjectSlide].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="space-y-4 md:space-y-6">
                  <h3 className="uppercase tracking-wider" style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '18px' }}>
                    {specialProjects[currentProjectSlide].title}
                  </h3>
                  <p className="leading-relaxed opacity-80" style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '15px' }}>
                    {specialProjects[currentProjectSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProjectSlide}
            className="absolute left-4 md:left-8 lg:left-16 xl:left-20 2xl:left-24 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60 z-10"
          >
            <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
              <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={nextProjectSlide}
            className="absolute right-4 md:right-8 lg:right-16 xl:right-20 2xl:right-24 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60 z-10"
          >
            <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
              <path d="M32 1L39 8M39 8L32 15M39 8H1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {specialProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentProjectSlide === index ? 'bg-black w-8' : 'bg-black/30'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2
            className="text-center mb-10 md:mb-16 lg:mb-24"
            style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
          >
            COLLABORATIONS
          </h2>

          {/* Irregular Grid Layout */}
          <div className="space-y-10 md:space-y-16 lg:space-y-24">
            {/* Row 1: Image left + Text right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={collaborations[0].image}
                  alt={collaborations[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 md:space-y-6 md:pl-2 lg:pl-6">
                <h3 className="tracking-wider text-xs md:text-sm" style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '18px' }}>{collaborations[0].title}</h3>
                {collaborations[0].description && (
                  <p className="leading-relaxed text-xs md:text-sm" style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '15px', color: '#000000' }}>{collaborations[0].description}</p>
                )}
              </div>
            </div>

            {/* Misty Project moved below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={collaborations[1].image}
                  alt={collaborations[1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 md:space-y-6 md:pl-2 lg:pl-6">
                <h3 className="tracking-wider text-xs md:text-sm" style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '18px' }}>{collaborations[1].title}</h3>
                {collaborations[1].description && (
                  <p className="leading-relaxed text-xs md:text-sm" style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '15px', color: '#000000' }}>{collaborations[1].description}</p>
                )}
              </div>
            </div>

            {/* Row 2: Three columns aligned */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
              {[collaborations[2], collaborations[3], collaborations[4]].map((item, idx) => (
                <div key={idx} className="space-y-4 md:space-y-6 flex flex-col">
                  <div className="overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="tracking-wider text-xs md:text-sm" style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '18px' }}>{item.title}</h3>
                    {item.description && (
                      <p className="leading-relaxed opacity-70 text-xs md:text-sm" style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '18px' }}>{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language="EN" />
    </div>
  );
}
