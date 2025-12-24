import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import plbgLogoWall from 'figma:asset/553ae4da5474969683995a4d9ee50ad26bed9ab3.png';
import plbgOfficeImage from 'figma:asset/c2d00458c2f444ddc0648e8fbc7e1c8d7a8a8168.png';
import jwpeiProductImage from 'figma:asset/64c39c56c346caa9fd41ccbb16e822c2488af25f.png';
import handbagImage from 'figma:asset/5dd18d68e3884dcb7a44dc301bceb02ce358fc09.png';
import distributionMap from 'figma:asset/b9556fd41c78eef0db0722bd084eee4bf483ff16.png';
import galeriesLafayette from 'figma:asset/4e4408c0e86f60e26f54fc8bd33f1c57160229a1.png';
import selfridges from 'figma:asset/4dedb40e0fa6129dd8874e7ccb113737d46ec853.png';
import departmentStore from 'figma:asset/a75165943e241a8325b7a5ef1717a346fad264a4.png';
import tryano from 'figma:asset/a0255712c7b6dde8847fe54776ca817f24765668.png';
import laRinascente from 'figma:asset/ccf8aa2b0c7ff7ee698a8b5ccb07cbb2d0a25aa0.png';
import deBijenkorf from 'figma:asset/15a2f6e3024db448c4166400af844ffb9816a0bf.png';

interface GroupPageProps {
  language: 'EN' | 'CN';
}

export function GroupPage({ language }: GroupPageProps) {
  const [activeSection, setActiveSection] = useState('group');
  const groupRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const responsibilityRef = useRef<HTMLDivElement>(null);
  const figuresRef = useRef<HTMLDivElement>(null);
  const distributionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, sectionId: string) => {
    if (!ref.current) return;

    setActiveSection(sectionId);
    const headerOffset = 150; // Height of fixed header + nav
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1200; // Duration in milliseconds
    let startTime: number | null = null;

    // Easing function for smooth animation (ease-in-out cubic)
    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = [
        { id: 'group', ref: groupRef },
        { id: 'vision', ref: visionRef },
        { id: 'responsibility', ref: responsibilityRef },
        { id: 'figures', ref: figuresRef },
        { id: 'distribution', ref: distributionRef },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          // Check if section is in the viewport (with offset for sticky nav)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: string; label: string; ref: React.RefObject<HTMLDivElement | null> }[] = [
    { id: 'group', label: 'GROUP', ref: groupRef },
    { id: 'vision', label: 'VISION', ref: visionRef },
    { id: 'responsibility', label: 'CORPORATE RESPONSIBILITY', ref: responsibilityRef },
    { id: 'figures', label: 'KEY FIGURES', ref: figuresRef },
    { id: 'distribution', label: 'GLOBAL DISTRIBUTION', ref: distributionRef },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="px-4 md:px-12 lg:px-20 pb-12 md:pb-16"
        style={{ paddingTop: '64px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed" style={{ fontFamily: 'Playfair Display' }}>
            Advancing the co-existence of boundless
            creativity, purpose-driven responsibility and
            sustainable growth
          </h1>
        </div>
      </motion.section>

      {/* Sticky Navigation Menu */}
      <nav
        className="sticky top-[70px] md:top-[58px] z-30 bg-white py-4 md:py-6 transition-all duration-300 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]"
        style={{ hyphens: 'none' }}
      >
        <div className="container mx-auto overflow-x-auto scrollbar-hide">
          <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-12 lg:gap-20 px-4 md:px-0 min-w-max md:min-w-0 pb-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.ref, item.id)}
                  className={`tracking-widest transition-all duration-300 relative whitespace-nowrap ${activeSection === item.id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                  style={{ fontFamily: 'Playfair Display', fontSize: '16px', letterSpacing: '1px' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* GROUP Section */}
      <section ref={groupRef} className="py-12 md:py-16 lg:py-24">
        <div className="px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <img
                  src={plbgLogoWall}
                  alt="PLBG Office"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="tracking-widest" style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '30px', color: '#000000', letterSpacing: '1px' }}>GROUP</h2>
              <div className="space-y-4 opacity-80" style={{ hyphens: 'none', fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8' }}>
                <p>
                  PL Brands Group (PLBG) is a global brand investment and management company that accelerates the growth and international expansion of next-generation fashion brands.
                </p>
                <p>
                  Guided by the core philosophy of "brand-driven, creativity-first, and global vision," PLBG empowers its portfolio through strategic investment, creative incubation, and cross-industry collaboration. The group has built a complete ecosystem that connects product design, supply chain integration, and brand operations — providing end-to-end support for fashion brands worldwide.
                </p>
                <p>
                  PLBG currently manages a diverse portfolio including Los Angeles–based designer brand JW PEI, London fashion leather goods brand Danse Lente, multi-brand operator Wisco, and design & manufacturing firm Lo Monte, among others. Through global operations and deep incubation, PLBG is committed to building an influential and sustainable family of international fashion brands.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION Section */}
      <section
        ref={visionRef}
        className="py-12 md:py-16 lg:py-24"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
      >
        <div className="px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <img
                  src={plbgOfficeImage}
                  alt="Vision"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="tracking-widest" style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '30px', color: '#000000', letterSpacing: '1px' }}>VISION</h2>
              <p className="opacity-80" style={{ hyphens: 'none', fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000' }}>
                PLBG is a contemporary fashion group specializing in accessories, powered by data-driven marketing and a vertically integrated model that connects brand creation, product development, and manufacturing to deliver innovation with speed and precision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORPORATE RESPONSIBILITY Section */}
      <section ref={responsibilityRef} className="py-12 md:py-16 lg:py-24">
        <div className="px-4 md:px-12 lg:px-20">
          {/* Title */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="tracking-widest" style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '30px', color: '#000000', letterSpacing: '1px' }}>CORPORATE RESPONSIBILITY</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left - 2x2 Grid of Values */}
            <motion.div
              className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ width: '80%' }}
            >
              {/* Item 1 */}
              <div className="space-y-2 md:space-y-3">
                <div className="w-full bg-black mb-4 md:mb-6" style={{ height: '0.75px' }}></div>
                <h3
                  className="tracking-wide"
                  style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '20px', color: '#000000' }}
                >
                  A. Deliver Best-in-Class Value
                </h3>
                <p style={{ hyphens: 'none', fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000', opacity: 0.5 }}>
                  PLBG drives sustainability by transforming how materials are sourced, developed, and used. Our commitment begins with what we create, from plant-based leathers and recycled textiles to bio-based fibers and low-impact hardware.
                </p>
              </div>

              {/* Item 3 */}
              <div className="space-y-2 md:space-y-3 mt-12 md:mt-16 lg:mt-20">
                <div className="w-full bg-black mb-4 md:mb-6" style={{ height: '0.75px' }}></div>
                <h3
                  className="tracking-wide"
                  style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '20px', color: '#000000' }}
                >
                  C. Champion Innovation
                </h3>
                <p style={{ hyphens: 'none', fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000', opacity: 0.5 }}>
                  We believe true progress comes from continuous experimentation and improvement, as we work toward a fully circular and cruelty-free future.
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <img
                  src={jwpeiProductImage}
                  alt="Corporate Responsibility"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY FIGURES Section */}
      <section ref={figuresRef} className="relative w-full">
        <img
          src={handbagImage}
          alt="Key Figures"
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 px-4 md:px-12 lg:px-20 py-12 md:py-16">
          <motion.div
            className="max-w-3xl text-white flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2
                className="tracking-widest"
                style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '15px', color: '#ffffff', letterSpacing: '1px' }}
              >
                KEY FIGURES
              </h2>
              <p className="text-xs md:text-sm leading-relaxed" style={{ hyphens: 'none', maxWidth: '320%', color: '#ffffff' }}>
                <div style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: 'clamp(14px, 4vw, 22.5px)', lineHeight: 1.2, color: '#ffffff' }}>
                  PLBG is a global brand group focused on Investment, Brand Management, Creative Development, and Sustainable Growth in Fashion.
                </div>
              </p>
            </div>
            {/* Statistics */}
            <div className="flex w-full flex-row gap-x-24 md:gap-x-32 lg:gap-x-48 mt-4 md:mt-6">
              <div
                className="flex flex-col gap-y-12 md:gap-y-32 lg:gap-y-48"
                style={{ marginLeft: '0px', marginRight: '0px' }}
              >
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '65px' }}>
                    <div style={{ fontFamily: 'Roboto', fontSize: 'clamp(16px, 3vw, 30px)', lineHeight: 1, color: '#ffffff' }}>200+</div>
                    <div className="tracking-wide" style={{ fontFamily: 'Roboto', fontSize: 'clamp(6px, 1vw, 8px)', fontWeight: 400, lineHeight: 1.4, color: '#ffffff' }}>Countries</div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '65px' }}>
                    <div style={{ fontFamily: 'Roboto', fontSize: 'clamp(16px, 3vw, 30px)', lineHeight: 1, color: '#ffffff' }}>2M+</div>
                    <div className="tracking-wide" style={{ fontFamily: 'Roboto', fontSize: 'clamp(6px, 1vw, 8px)', fontWeight: 400, lineHeight: 1.4, color: '#ffffff' }}>Social Media Followers</div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col gap-y-12 md:gap-y-32 lg:gap-y-48"
                style={{ marginLeft: '65px', marginRight: '0px' }}
              >
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '65px' }}>
                    <div style={{ fontFamily: 'Roboto', fontSize: 'clamp(16px, 3vw, 30px)', lineHeight: 1, color: '#ffffff' }}>300+</div>
                    <div className="tracking-wide" style={{ fontFamily: 'Roboto', fontSize: 'clamp(6px, 1vw, 8px)', fontWeight: 400, lineHeight: 1.4, color: '#ffffff' }}>Point of Sale</div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '65px' }}>
                    <div style={{ fontFamily: 'Roboto', fontSize: 'clamp(16px, 3vw, 30px)', lineHeight: 1, color: '#ffffff' }}>$150M+</div>
                    <div className="tracking-wide" style={{ fontFamily: 'Roboto', fontSize: 'clamp(6px, 1vw, 8px)', fontWeight: 400, lineHeight: 1.4, color: '#ffffff' }}>Global Annual Retail Sales</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* GLOBAL DISTRIBUTION Section */}
      <section
        ref={distributionRef}
        className="pb-12 md:pb-16 lg:pb-24"
        style={{ paddingTop: '200px' }}
      >
        <div>
          <motion.div
            className="w-[95%] lg:w-[40%] mx-auto space-y-6 md:space-y-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="tracking-widest"
              style={{ fontFamily: 'Playfair Display', fontWeight: 500, fontSize: '30px', color: '#000000', letterSpacing: '1px' }}
            >
              GLOBAL DISTRIBUTION
            </h2>
            <p
              className="text-sm leading-relaxed mx-auto"
              style={{ hyphens: 'none', fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000', maxWidth: '100%' }}
            >
              Over the years, PLBG has cultivated a comprehensive global distribution network encompassing both wholesale and retail channels. Through enduring partnerships with many of the world's most prestigious retailers, including Le Bon Marché, Galeries Lafayette, Selfridges, La Rinascente and others, the group has built a robust foundation for international expansion and brand influence across key markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pt-0 pb-12 md:pb-16 lg:pb-24">
        <div className="px-6 md:px-16 lg:px-24">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full aspect-[16/9] relative overflow-hidden">
              <img
                src={distributionMap}
                alt="Global Distribution Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full mt-8 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            galeriesLafayette,
            selfridges,
            departmentStore,
            tryano,
            laRinascente,
            deBijenkorf,
          ].map((image, index) => (
            <motion.div
              key={index}
              className="aspect-[4/3] relative overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Brand Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
