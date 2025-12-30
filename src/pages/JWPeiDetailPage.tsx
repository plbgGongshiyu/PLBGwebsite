import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { Footer } from '../components/Footer';

const jwpeiHero = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/hero.png';
const jwpeiGif1 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/gif-1.png';
const jwpeiGif2 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/gif-2.png';
const jwpeiGif3 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/gif-3.png';
const jwpeiStatic1 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/static-1.png';
const jwpeiStatic2 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/static-2.png';
const jwpeiStatic3 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/static-3.png';
const sohoStore1 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/ny-soho-1.png';
const sohoStore2 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/ny-soho-2.png';
const galeriesLafayetteStore = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/galeries-lafayette.png';
const harveyNicholsStore = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/harvey-nichols.png';
const deBijenkorfStore = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/de-bijenkorf.png';
const laRinascenteStore = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/la-rinascente.png';
const levelShoesStore = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/level-shoes.png';
const tryanoStore = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/stores/tryano.png';
const jwpeiLogo = 'https://storage.googleapis.com/plbg/assets/logos/jwpei-logo.png';

const celeb1 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/celeb_1.jpg';
const celeb2 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/celeb_2.jpg';
const celeb3 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/celeb_3.jpg';
const celeb4 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/4Gigi Hadid.jpg';
const celeb5 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/5Hailey Bieber.jpg';
const celeb6 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/6Anne Hathaway.jpg';
const celeb7 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/7Emily Ratajkowski.jpg';
const celeb8 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/8Emily Ratajkowski.jpg';
const celeb9 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/9Emily Ratajkowski.jpg';
const celeb10 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/10Doja Cat.jpg';
const celeb11 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/11Joey King.jpg';
const celeb12 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/12Irina Shayk.jpg';
const celeb13 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/13Tinashe.jpg';
const celeb14 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/14Lucy Hale.jpg';
const celeb15 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/15Shay Mitchell.jpg';
const celeb16 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/16Saweetie.jpg';
const celeb17 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/17Nina Dobrev.jpg';
const celeb18 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/celeb_18.jpg';
const celeb19 = 'https://storage.googleapis.com/plbg/assets/brands/jwpei/celebrities/19Ali Wong.jpg';

interface JWPeiDetailPageProps {
  onBack: () => void;
  onNavigate?: (page: any) => void;
}

export function JWPeiDetailPage({ onBack, onNavigate }: JWPeiDetailPageProps) {
  const [showHeader, setShowHeader] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSlideInfluencers, setCurrentSlideInfluencers] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isTransitioningInfluencers, setIsTransitioningInfluencers] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.4]);
  const logoY = useTransform(scrollY, [0, 200], [0, -300]);
  const logoOpacity = useTransform(scrollY, [0, 150, 200], [1, 0.5, 0]);

  // Celebrity carousel data
  const celebrities = [
    { name: 'Jennie Ruby Jane', image: celeb1 },
    { name: 'Jennie Ruby Jane', image: celeb2 },
    { name: 'Selena Gomez', image: celeb3 },
    { name: 'Gigi Hadid', image: celeb4 },
    { name: 'Hailey Bieber', image: celeb5 },
    { name: 'Anne Hathaway', image: celeb6 },
    { name: 'Emily Ratajkowski', image: celeb7 },
    { name: 'Emily Ratajkowski', image: celeb8 },
    { name: 'Emily Ratajkowski', image: celeb9 },
    { name: 'Doja Cat', image: celeb10 },
    { name: 'Joey King', image: celeb11 },
    { name: 'Irina Shayk', image: celeb12 },
    { name: 'Tinashe', image: celeb13 },
    { name: 'Lucy Hale', image: celeb14 },
    { name: 'Shay Mitchell', image: celeb15 },
    { name: 'Saweetie', image: celeb16 },
    { name: 'Nina Dobrev', image: celeb17 },
    { name: 'Anitta', image: celeb18 },
    { name: 'Ali Wong', image: celeb19 },
  ];

  // Influencers carousel data (20 entries)
  const influencers = [
    { name: 'Sophia Culpo', image: 'https://images.unsplash.com/photo-1671454264961-98e81937dc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Ella Karbaerg', image: 'https://images.unsplash.com/photo-1654945959377-09e02acd5ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Alyssa Coscarelli', image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c3763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: "Charli D'Amelio", image: 'https://images.unsplash.com/photo-1614172745174-d76736beb78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Marta Pozzan', image: 'https://images.unsplash.com/photo-1759563871373-2a7f13ae4b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Lauren Wolfe', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Candace Marie', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Babba C Rivera', image: 'https://images.unsplash.com/photo-1717944097660-352ec0dc5c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Bregje Heinen', image: 'https://images.unsplash.com/photo-1654945959377-09e02acd5ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Vanessa Borelli', image: 'https://images.unsplash.com/photo-1717944097660-352ec0dc5c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Aimee Song', image: 'https://images.unsplash.com/photo-1671454264961-98e81937dc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Tamu Mcpherson', image: 'https://images.unsplash.com/photo-1654945959377-09e02acd5ff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Pritika Swarup', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mary Lawless Lee', image: 'https://images.unsplash.com/photo-1717944097660-352ec0dc5c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Marina Ingvarsson', image: 'https://images.unsplash.com/photo-1614172745174-d76736beb78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Emma Fridsell', image: 'https://images.unsplash.com/photo-1759563871373-2a7f13ae4b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Desi Perkins', image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Isabel Goulart', image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c3763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Maria Bernad', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Camille Charriere', image: 'https://images.unsplash.com/photo-1717944097660-352ec0dc5c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080' },
  ];


  const gifGallery = [
    {
      staticImage: jwpeiStatic1,
      gifImage: jwpeiGif1
    },
    {
      staticImage: jwpeiStatic2,
      gifImage: jwpeiGif2
    },
    {
      staticImage: jwpeiStatic3,
      gifImage: jwpeiGif3
    }
  ];

  const stores = [
    {
      name: 'New York Soho Store', images: [
        sohoStore1,
        sohoStore2
      ]
    },
    { name: 'Galeries Lafayette Champs-Elysees', images: [galeriesLafayetteStore] },
    { name: 'Harvey Nichols Doha', images: [harveyNicholsStore] },
    { name: 'De Bijenkorf', images: [deBijenkorfStore] },
    { name: 'LaRinascente', images: [laRinascenteStore] },
    { name: 'Level Shoes', images: [levelShoesStore] },
    { name: 'Tryano - Chalhowub Group', images: [tryanoStore] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowHeader(scrollPosition > 100);

      // Update active section
      const sections = ['brand-story', 'celebrities', 'influencers', 'retail-store'];
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

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Extended arrays for carousel looping
  const extendedCelebrities = [...celebrities, ...celebrities, ...celebrities];
  const extendedInfluencers = [...influencers, ...influencers, ...influencers];
  const totalSlides = Math.ceil(celebrities.length / slidesPerView);
  const totalSlidesInfluencers = Math.ceil(influencers.length / slidesPerView);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentSlide >= totalSlides * 2) {
      setIsTransitioning(false);
      setCurrentSlide(totalSlides);
    } else if (currentSlide <= 0) {
      setIsTransitioning(false);
      setCurrentSlide(totalSlides);
    }
  };

  const nextSlideInfluencers = () => {
    setIsTransitioningInfluencers(true);
    setCurrentSlideInfluencers((prev) => prev + 1);
  };

  const prevSlideInfluencers = () => {
    setIsTransitioningInfluencers(true);
    setCurrentSlideInfluencers((prev) => prev - 1);
  };

  const handleTransitionEndInfluencers = () => {
    if (currentSlideInfluencers >= totalSlidesInfluencers * 2) {
      setIsTransitioningInfluencers(false);
      setCurrentSlideInfluencers(totalSlidesInfluencers);
    } else if (currentSlideInfluencers <= 0) {
      setIsTransitioningInfluencers(false);
      setCurrentSlideInfluencers(totalSlidesInfluencers);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(totalSlides + index);
  };

  const getCurrentDot = () => {
    return ((currentSlide - totalSlides) % totalSlides + totalSlides) % totalSlides;
  };

  const goToSlideInfluencers = (index: number) => {
    setIsTransitioningInfluencers(true);
    setCurrentSlideInfluencers(totalSlidesInfluencers + index);
  };

  const getCurrentDotInfluencers = () => {
    return ((currentSlideInfluencers - totalSlidesInfluencers) % totalSlidesInfluencers + totalSlidesInfluencers) % totalSlidesInfluencers;
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
            className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-black/10 py-3"
          >
            <div className="container mx-auto flex items-center justify-center">
              <img src={jwpeiLogo} alt="JW PEI" className="h-8" />
            </div>
          </motion.header>
        )}
      </AnimatePresence> */}

      {/* Hero Section with Brand Image */}
      <section className="relative w-full overflow-hidden">
        <img
          src={jwpeiHero}
          alt="JW PEI Brand"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Navigation Menu */}
      <nav
        className="sticky top-[70px] md:top-[58px] z-30 bg-white py-4 md:py-6 transition-all duration-300 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]"
      >
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-12 lg:gap-20 px-4 md:px-0 min-w-max md:min-w-0 pb-3">
            {[
              { id: 'brand-story', label: 'BRAND STORY' },
              { id: 'retail-store', label: 'RETAIL STORE' },
              { id: 'celebrities', label: 'CELEBRITIES' },
              { id: 'influencers', label: 'INFLUENCERS' }
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
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000' }}>
                Established in 2018, JW PEI is a Los Angeles–based fashion label dedicated to creating cutting-edge designs for modern woman.
                Inspired by the belief that fashion should be effortless, inclusive, and empowering, JW PEI brings a refined, modern sensibility to contemporary style.
              </p>
              <p style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000' }}>
                JW PEI stands out for the distinctive design philosophy and unwavering commitment to vegan materials, striving to minimize environmental impact while fostering a genuine sense of environmental responsibility.
              </p>
            </div>

            {/* Right: Media Links */}
            <div className="space-y-6 md:space-y-8 md:mx-[50px] md:my-[0px]">
              <a
                href="https://jwpei.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
                style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: '14px' }}
              >
                <span className="tracking-wider">jwpei.com</span>
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
                    href="https://www.instagram.com/jwpei_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity"
                  >
                    <Instagram size={24} color="#000000" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@jwpeiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-60 transition-opacity"
                  >
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

      {/* Retail Store Section */}
      <section
        id="retail-store"
        className="pt-[200px] pb-12 md:pb-20 lg:pb-32"
        style={{ marginTop: '200px' }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2
            className="text-center mb-10 md:mb-16 lg:mb-24"
            style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
          >
            RETAIL STORE
          </h2>

          <div className="space-y-8 md:space-y-12">
            {/* First row - New York Soho with 2 images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {stores[0].images.map((image, idx) => (
                <div key={idx} className="space-y-3 md:space-y-4">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image}
                      alt={`${stores[0].name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-center tracking-wider"
                    style={{ fontFamily: 'Roboto', fontSize: '16px', color: '#000000' }}
                  >
                    {stores[0].name}
                  </p>
                </div>
              ))}
            </div>

            {/* Remaining stores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {stores.slice(1).map((store, index) => (
                <div key={index} className="space-y-3 md:space-y-4">
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={store.images[0]}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-center tracking-wider"
                    style={{ fontFamily: 'Roboto', fontSize: '16px', color: '#000000' }}
                  >
                    {store.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Celebrities Carousel Section */}
      <section id="celebrities" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
          <h2
            className="text-center"
            style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
          >
            CELEBRITIES
          </h2>
        </div>

        <div className="relative px-12 md:px-20">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: `calc(-${currentSlide * 100}% - ${currentSlide * (slidesPerView < 3 ? 16 : 24)}px)`
              }}
              transition={isTransitioning ? { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }}
              onAnimationComplete={handleTransitionEnd}
            >
              {extendedCelebrities.map((celebrity, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: slidesPerView === 1
                      ? '100%'
                      : slidesPerView === 2
                        ? `calc((100% - 1rem) / 2)`
                        : slidesPerView === 3
                          ? `calc((100% - 2rem) / 3)`
                          : `calc((100% - 4rem) / 5)`
                  }}
                >
                  <div className="space-y-3 md:space-y-4">
                    <div className="aspect-[4/5] overflow-hidden">
                      <ImageWithFallback
                        src={celebrity.image}
                        alt={celebrity.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p
                      className="text-center tracking-wider"
                      style={{ fontFamily: 'Roboto', fontSize: '16px' }}
                    >
                      {celebrity.name}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-[40%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
            aria-label="Previous slide"
          >
            <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
              <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-[40%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
            aria-label="Next slide"
          >
            <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
              <path d="M32 1L39 8M39 8L32 15M39 8H1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-2 md:h-2 rounded-full transition-all duration-300 ${getCurrentDot() === index ? 'bg-black w-4 md:w-8' : 'bg-black/30'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Influencers Carousel Section */}
      <section id="influencers" className="py-12 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-12">
          <h2
            className="text-center"
            style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
          >
            INFLUENCERS
          </h2>
        </div>

        <div className="relative px-12 md:px-20">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: `calc(-${currentSlideInfluencers * 100}% - ${currentSlideInfluencers * (slidesPerView < 3 ? 16 : 24)}px)`
              }}
              transition={isTransitioningInfluencers ? { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }}
              onAnimationComplete={handleTransitionEndInfluencers}
            >
              {extendedInfluencers.map((celebrity, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: slidesPerView === 1
                      ? '100%'
                      : slidesPerView === 2
                        ? `calc((100% - 1rem) / 2)`
                        : slidesPerView === 3
                          ? `calc((100% - 2rem) / 3)`
                          : `calc((100% - 4rem) / 5)`
                  }}
                >
                  <div className="space-y-3 md:space-y-4">
                    <div className="aspect-[4/5] overflow-hidden">
                      <ImageWithFallback
                        src={celebrity.image}
                        alt={celebrity.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p
                      className="text-center tracking-wider"
                      style={{ fontFamily: 'Roboto', fontSize: '16px' }}
                    >
                      {celebrity.name}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlideInfluencers}
            className="absolute left-2 md:left-6 top-[40%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
            aria-label="Previous slide"
          >
            <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
              <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={nextSlideInfluencers}
            className="absolute right-2 md:right-6 top-[40%] -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
            aria-label="Next slide"
          >
            <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
              <path d="M32 1L39 8M39 8L32 15M39 8H1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {Array.from({ length: totalSlidesInfluencers }).map((_, index) => (
              <button
                key={`dup-dot-${index}`}
                onClick={() => goToSlideInfluencers(index)}
                className={`w-2 h-2 md:w-2 md:h-2 rounded-full transition-all duration-300 ${getCurrentDotInfluencers() === index ? 'bg-black w-4 md:w-8' : 'bg-black/30'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language="EN" />
    </div>
  );
}
