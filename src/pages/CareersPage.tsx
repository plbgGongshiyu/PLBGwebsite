import { useState } from 'react';
import { Footer } from '../components/Footer';

export function CareersPage({ language }: { language: 'EN' | 'CN' }) {
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

  const values = [
    {
      title: 'CREATIVITY',
      description: 'We champion ideas-first thinking and invite every teammate to contribute bold perspectives that move fashion forward.'
    },
    {
      title: 'INTEGRITY',
      description: 'We lead with transparency, act with respect, and hold ourselves accountable to the highest standards in every decision.'
    },
    {
      title: 'COLLABORATION',
      description: 'We build together—across brands, functions, and regions—because shared success is the foundation of lasting growth.'
    },
    {
      title: 'SUSTAINABILITY',
      description: 'We are committed to responsible fashion, minimizing impact through thoughtful materials, processes, and partnerships.'
    }
  ];
  const [activeValue, setActiveValue] = useState(0);

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
        <section className="px-4 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 md:pb-16">
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
        <section
          id="values"
          className="py-16 md:py-24 lg:py-28 px-6 md:px-12 lg:px-20"
        >
          <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
            <h2
              style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '30px', letterSpacing: '1px', color: '#000000' }}
            >
              OUR VALUES
            </h2>

            <div className="relative border border-black/10 bg-white">
              <div className="px-6 md:px-10 py-10 md:py-12">
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '24px', letterSpacing: '0.5px', color: '#000000' }}
                >
                  {values[activeValue].title}
                </h3>
                <p
                  style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '18px', lineHeight: '1.8', color: '#000000' }}
                >
                  {values[activeValue].description}
                </p>
              </div>

              <div className="absolute left-0 right-0 -bottom-14 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={() => setActiveValue((prev) => (prev - 1 + values.length) % values.length)}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
                  aria-label="Previous value"
                >
                  <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
                    <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveValue((prev) => (prev + 1) % values.length)}
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 hover:opacity-60"
                  aria-label="Next value"
                >
                  <svg width="32" height="14" viewBox="0 0 40 16" fill="none" className="md:w-10 md:h-4">
                    <path d="M32 1L39 8M39 8L32 15M39 8H1" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 pt-12">
              {values.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveValue(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeValue === idx ? 'bg-black w-6' : 'bg-black/30'}`}
                  aria-label={`Go to value ${idx + 1}`}
                />
              ))}
            </div>
          </div>
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
                    <button className="flex items-center gap-2 text-[10px] tracking-wider opacity-60 hover:opacity-100 transition-opacity mt-2" style={{ fontFamily: 'Roboto' }}>
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
                      <a 
                        href={job.link}
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
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer language={language} />
      </div>
    </>
  );
}
