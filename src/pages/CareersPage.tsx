import { useState } from 'react';

import thriveImg from '../assets/careers/thrive.png';
import communicationImg from '../assets/careers/communication.png';
import inclusionImg from '../assets/careers/inclusion.png';
import flexibilityImg from '../assets/careers/flexibility.png';
import creativityImg from '../assets/careers/creativity.png';

interface ValueSlide {
  title: string;
  description: string;
  image: string;
}

function ValuesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: ValueSlide[] = [
    {
      title: 'Thrive',
      description:
        "At PL Group we treasure our colleagues and we grow together. We offer the resources and opportunities that allow every employee to be inspired, motivated, and thrived to their fullest potential. As a group, everyone's contribution is assured to be rewarded.",
      image: thriveImg,
    },
    {
      title: 'Communication',
      description:
        'With a flat hierarchical structure, PL Group encourages open communication within the organization. We value various initiatives, collaborative work and commitment to empowering every individual at every level to play a part in our collective success. Your voice matters.',
      image: communicationImg,
    },
    {
      title: 'Inclusion',
      description:
        'We promote a culture where everyone is free to express ideas and truly be themselves. Our teams consist of talents from different identities, cultures and experiences. We keep growing the diverse communities to continuously fuel the energy of PL Group.',
      image: inclusionImg,
    },
    {
      title: 'Flexibility',
      description:
        'PL Group has a flexible framework to elevate your work performance, along with dynamic working schedules and office spaces around the world. We foster a community that centralizes the key to maintaining a healthy life-work balance, in order to attain personal and professional fulfillment.',
      image: flexibilityImg,
    },
    {
      title: 'Creativity',
      description:
        'At PL Group we nurture creative thinking and ensure you bring new ideas to remain one step ahead. Our innovative vision will lead and empower all our employees to exceed expectations.',
      image: creativityImg,
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen md:h-screen">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#F5F3F0] flex items-center justify-center px-6 py-8 md:px-12 lg:px-16">
                <div className="max-w-xl text-center">
                  <p
                    className="text-[10px] md:text-xs tracking-[0.2em] opacity-60 mb-4 md:mb-6"
                    style={{ fontFamily: 'Barlow' }}
                  >
                    OUR VALUES
                  </p>
                  <h2
                    className="mb-4 md:mb-8 leading-tight uppercase"
                    style={{ fontFamily: 'Barlow', fontWeight: 700, fontSize: '16px' }}
                  >
                    {slide.title}
                  </h2>
                  <p className="text-xs md:text-sm leading-relaxed opacity-80" style={{ fontFamily: 'Barlow' }}>
                    {slide.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-1/2 md:h-full">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-8 top-1/4 md:top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60 z-10"
        aria-label="Previous slide"
        type="button"
      >
        <svg width="24" height="12" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
          <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-8 top-1/4 md:top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60 z-10"
        aria-label="Next slide"
        type="button"
      >
        <svg width="24" height="12" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
          <path d="M32 1L39 8M39 8L32 15M39 8H1" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-black w-6 md:w-8' : 'bg-black/40 hover:bg-black/60 w-2'
              }`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

export function CareersPage({ language, onNavigate }: { language: 'EN' | 'CN'; onNavigate?: (page: any) => void }) {

  const jobOpenings = [
    { position: 'Sales Associate', brand: 'JW PEI', location: 'New York', link: '#' },
    { position: 'Wholesale Coordinator', brand: 'DANSE LENTE', location: 'Budapest', link: '#' },
    { position: 'Sustainability Intern', brand: 'LO MONTE INTERNATIONAL', location: 'Budapest', link: '#' },
    { position: 'Senior Process Analyst - Production', brand: 'DANSE LENTE', location: 'Budapest', link: '#' },
    { position: 'Senior Knitwear Designer', brand: 'JW PEI', location: 'Budapest', link: '#' },
    { position: 'Senior Ecommerce Manager', brand: 'JW PEI', location: 'Budapest', link: '#' },
    { position: 'Sales Manager', brand: 'DANSE LENTE', location: 'Budapest', link: '#' },
    { position: 'Sales Manager', brand: 'JW PEI', location: 'Budapest', link: '#' },
    { position: 'Sales Associate', brand: 'JW PEI', location: 'Budapest', link: '#' },
    { position: 'Online Fulfillment Coordinator', brand: 'LO MONTE INTERNATIONAL', location: 'Budapest', link: '#' },
    { position: 'Junior Accounts Payable Specialist', brand: 'DANSE LENTE', location: 'Budapest', link: '#' }
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 150;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Intro Text copied from Group page hero */}
        <section
          className="px-4 md:px-12 lg:px-20 pb-12 md:pb-16"
          style={{ paddingTop: '64px' }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1
              className="text-2xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed"
              style={{ fontFamily: 'Playfair Display' }}
            >
              We are always on the lookout for exceptional talent to work with - explore all career offerings or get in touch
            </h1>
          </div>
        </section>

        {/* Sticky Navigation Tabs */}
        <nav className="sticky top-[70px] md:top-[58px] z-30 bg-white py-4 md:py-6 transition-all duration-300 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]">
          <div className="container mx-auto overflow-x-auto scrollbar-hide">
            <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-12 lg:gap-20 px-4 md:px-0 min-w-max md:min-w-0">
              {[
                { id: 'people', label: 'PEOPLE' },
                { id: 'values', label: 'OUR VALUES' },
                { id: 'opportunities', label: 'JOB OPPORTUNITIES' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="tracking-widest transition-all duration-300 relative whitespace-nowrap opacity-50 hover:opacity-100"
                    style={{ fontFamily: 'Playfair Display', fontSize: '16px', letterSpacing: '1px' }}
                    type="button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Intro block copied from Lo Monte International */}
        <section
          id="people"
          className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="mb-6"
              style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '36px', letterSpacing: '1px', color: '#000000' }}
            >
              PEOPLE
            </h2>
            <p
              style={{
                fontFamily: 'Roboto',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '1.8',
                textAlign: 'center'
              }}
            >
              Through innovative digitization, PL Group swiftly recognizes and adapts to global trends. We champion a people-driven approach and strive to foster a responsible and ethical fashion industry and to create a talented and multi-skilling workforce.
            </p>
          </div>
        </section>

        {/* Our Values Slider */}
        <section id="values" className="w-full">
          <ValuesCarousel />
        </section>

        {/* Job Opportunities Section */}
        <section id="opportunities" className="px-4 md:px-12 lg:px-20 py-12 md:py-24 lg:py-32">
          <h2
            className="text-center mb-[20px]"
            style={{
              fontFamily: 'Playfair Display',
              fontWeight: 400,
              fontSize: '36px',
              letterSpacing: '1px',
              color: '#000000'
            }}
          >
            JOB OPPORTUNITIES
          </h2>

          <div className="w-full overflow-x-auto mt-16 md:mt-20">
            {/* Table Header - Hidden on mobile, card style instead */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-black/20">
              <div className="col-span-5">
                <p
                  className="uppercase"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Playfair Display',
                    fontWeight: 400,
                    color: '#000000',
                    letterSpacing: '1px'
                  }}
                >
                  Open Positions
                </p>
              </div>
              <div className="col-span-2">
                <p
                  className="uppercase"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Playfair Display',
                    fontWeight: 400,
                    color: '#000000',
                    letterSpacing: '1px'
                  }}
                >
                  Brands
                </p>
              </div>
              <div className="col-span-3">
                <p
                  className="uppercase"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Playfair Display',
                    fontWeight: 400,
                    color: '#000000',
                    letterSpacing: '1px'
                  }}
                >
                  Place
                </p>
              </div>
              <div className="col-span-2">
                <p
                  className="uppercase"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Playfair Display',
                    fontWeight: 400,
                    color: '#000000',
                    letterSpacing: '1px'
                  }}
                >
                  Details
                </p>
              </div>
            </div>
            {/* Table Rows - Card style on mobile */}
            <div className="divide-y divide-black/50">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="py-4 md:py-6 hover:bg-black/5 transition-colors duration-300 cursor-pointer"
                >
                  {/* Mobile Card Layout */}
                  <div className="md:hidden space-y-2">
                    <p className="text-sm opacity-80" style={{ fontFamily: 'Roboto', fontWeight: 500 }}>{job.position}</p>
                    <div className="flex items-center gap-3 text-xs opacity-60">
                      <span style={{ fontFamily: 'Roboto' }}>{job.brand}</span>
                      <span>·</span>
                      <span style={{ fontFamily: 'Roboto' }}>{job.location}</span>
                    </div>
                    <button
                      onClick={() => onNavigate?.('job-detail')}
                      className="flex items-center gap-2 text-[10px] tracking-wider opacity-60 hover:opacity-100 transition-opacity mt-2"
                      style={{ fontFamily: 'Roboto' }}
                    >
                      View Details
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-60"
                      >
                        <path
                          d="M0 6H18M18 6L13 1M18 6L13 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>

                  </div>

                  {/* Desktop Table Layout */}
                  <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-5">
                      <p className="text-base" style={{ fontFamily: 'Roboto', fontWeight: 400 }}>{job.position}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm opacity-70" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>{job.brand.replace('JWPEI', 'JW PEI')}</p>
                    </div>
                    <div className="col-span-3">
                      <p className="text-sm opacity-70" style={{ fontFamily: 'Roboto', fontSize: '16px' }}>{job.location}</p>
                    </div>
                    <div className="col-span-2">
                      <button
                        onClick={() => onNavigate?.('job-detail')}
                        className="text-sm tracking-wider opacity-70 hover:opacity-100 transition-opacity inline-flex items-center gap-2"
                        style={{ fontFamily: 'Roboto', fontSize: '16px', textTransform: 'capitalize' }}
                      >
                        View
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 20 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-80"
                        >
                          <path
                            d="M0 6H18M18 6L13 1M18 6L13 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </div>
    </>
  );
}
