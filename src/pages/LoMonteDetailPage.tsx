import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Footer } from '../components/Footer';

import loMonteHero from '../assets/brands/lomonte/hero.png';
import designCenterImg from '../assets/brands/lomonte/design-center.png';
import creativityImg from '../assets/brands/lomonte/creativity.jpg';
import gallery1 from '../assets/brands/lomonte/production-bags.png';
import gallery2 from '../assets/brands/lomonte/production-shoes.png';
import gallery3 from '../assets/brands/lomonte/production-clothing.png';
import gallery4 from '../assets/brands/lomonte/production-accessories.png';
import gallery5 from '../assets/brands/lomonte/production-jewelry.png';

interface LoMonteDetailPageProps {
  onBack: () => void;
  onNavigate?: (page: any) => void;
}

export function LoMonteDetailPage({ onBack, onNavigate }: LoMonteDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  useTransform(scrollY, [0, 200], [1, 0.4]);
  useTransform(scrollY, [0, 200], [0, -300]);
  useTransform(scrollY, [0, 150, 200], [1, 0.5, 0]);

  const [activeSection, setActiveSection] = useState('brand');
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const galleryItems = [
    {
      image: gallery1,
      title: 'BAGS',
      list: ['Crossbody Bag', 'Hobo', 'Shoulder Bag', 'Top Handle', 'Phone Bag', 'Tote', 'Wallet & Card Holder']
    },
    {
      image: gallery2,
      title: 'SHOES',
      list: ['Mules', 'Sandals', 'Clogs', 'Flats', 'Boots']
    },
    {
      image: gallery3,
      title: 'CLOTHING',
      list: ['Dresses', 'Jeans', 'Coats & Jackets', 'Outfit Sets', 'Shorts']
    },
    {
      image: gallery4,
      title: 'ACCESSORIES',
      list: ['Sunglasses', 'Phone Case', 'Strap', 'Key Holder', 'Twill Scarf', 'Bucket Hat']
    },
    {
      image: gallery5,
      title: 'FASHION JEWELRY',
      list: ['Necklace', 'Earrings', 'Bracelet']
    }
  ];

  const maxSlide = Math.max(galleryItems.length - slidesPerView, 0);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const sections = ['brand', 'design-development', 'creativity', 'production'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src={loMonteHero}
          alt="LO MONTE INTERNATIONAL Brand"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Navigation */}
      <nav
        className="sticky top-[70px] md:top-[58px] z-30 bg-white py-4 md:py-6 transition-all duration-300 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]"
      >
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-12 lg:gap-20 px-4 md:px-0 min-w-max md:min-w-0 pb-3">
            {[
              { id: 'brand', label: 'BRAND' },
              { id: 'design-development', label: 'DESIGN AND DEVELOPMENT CENTER' },
              { id: 'creativity', label: 'CREATIVITY' },
              { id: 'production', label: 'PRODUCTION' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`tracking-widest transition-all duration-300 relative whitespace-nowrap ${activeSection === item.id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
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

      {/* Brand Section */}
      <section id="brand" className="py-12 md:py-20 lg:py-32">
        <div className="px-4 md:px-12 lg:px-20">
          <div className="max-w-5xl text-center mx-auto">
            <p
              style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '1.8',
                textAlign: 'center'
              }}
            >
              Lo Monte International is a design and development company specializing in the creation of high-quality fashion products, including handbags, footwear, apparel, and accessories. With strong capabilities in design innovation, material research, and craftsmanship, the company transforms creative concepts into refined products that embody both brand vision and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Design and Development Center */}
      <section id="design-development" className="bg-white py-12 md:py-20 lg:py-32">
        <div className="px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-3 md:space-y-4 pt-4 md:pt-8">
              <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '30px', letterSpacing: '1px', color: '#000000' }}>
                DESIGN AND DEVELOPMENT CENTER
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8' }}
              >
                Design and Development Center serves as the creative base where ideas take form and innovation meets craftsmanship.
                Our design and technical teams work together to create prototypes, test materials, and perfect every detail before production.
                From sketch to sample, each piece is carefully developed through a process that balances aesthetic vision and technical precision.
                The center supports seasonal collections as well as special projects, ensuring design integrity across everything we make.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={designCenterImg}
                alt="Design and Development Center"
                className="w-[80%] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creativity */}
      <section id="creativity" className="bg-white py-12 md:py-20 lg:py-32">
        <div className="px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="flex justify-center items-center order-2 md:order-1">
              <img
                src={creativityImg}
                alt="Creativity"
                className="w-[80%] h-auto object-contain"
              />
            </div>

            <div className="space-y-3 md:space-y-4 order-1 md:order-2 pt-4 md:pt-8">
              <h2 style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '30px', letterSpacing: '1px', color: '#000000' }}>
                CREATIVITY
              </h2>
              <p
                className="leading-relaxed"
                style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8' }}
              >
                Lo Monte International&apos;s design team is a powerhouse of talents, with designers
                who graduated from leading fashion institutions worldwide and possess extensive
                industry experience. They have profound insights into the fashion industry and
                a keen sense of trend forecasting. Our dedicated fabric research and development
                team, along with advanced manufacturing techniques, further enhance our
                end-to-end production capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section id="production" className="py-12 md:py-20 lg:py-28">
        <div className="px-4 md:px-12 lg:px-20">
          <div className="mb-6 md:mb-8 lg:mb-10 flex items-center justify-between gap-4">
            <h2
              style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '30px', letterSpacing: '1px', color: '#000000' }}
              className="text-left"
            >
              PRODUCTION
            </h2>

            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
                aria-label="Previous slide"
              >
                <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
                  <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
                aria-label="Next slide"
              >
                <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
                  <path d="M32 1L39 8M39 8L32 15M39 8H1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative mt-12 md:mt-16 lg:mt-20">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 md:gap-20"
                animate={{
                  x: `calc(-${currentSlide * (100 / slidesPerView)}% - ${currentSlide * (slidesPerView === 1 ? 0 : slidesPerView === 2 ? 12 : 40)}px)`
                }}
                transition={isTransitioning ? { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }}
              >
                {galleryItems.map((item, index) => (
                  <div
                    key={`gallery-${index}`}
                    className="flex-shrink-0"
                    style={{
                      width: slidesPerView === 1
                        ? '100%'
                        : slidesPerView === 2
                          ? `calc((100% - 1.5rem) / 2)`
                          : `calc((100% - 3rem) / 3)`
                    }}
                  >
                    <div className="space-y-6 md:space-y-8 flex flex-col h-full">
                      <div
                        className="space-y-6"
                        style={{ borderLeft: '1.5px solid #000', paddingLeft: '18px', minHeight: '220px' }}
                      >
                        <h3
                          style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '22px', letterSpacing: '1px', color: '#000000' }}
                        >
                          {item.title}
                        </h3>
                        <ul className="space-y-2">
                          {item.list.map((text, idx) => (
                            <li
                              key={idx}
                              style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px', lineHeight: '1', color: '#000000' }}
                            >
                              {text}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="aspect-[4/5] overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language="EN" onNavigate={onNavigate} />
    </div>
  );
}
