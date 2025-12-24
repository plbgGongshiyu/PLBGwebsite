import { useState, useRef } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { GroupDropdown } from './GroupDropdown';
import { PortfolioDropdown } from './PortfolioDropdown';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import logoImage from 'figma:asset/94ef899121d2e6fe0c4ab3e8f396a1abced48071.png';

export function Header({ language, setLanguage, onNavigate, currentPage, onBrandClick }: {
  language: 'EN' | 'CN',
  setLanguage: (lang: 'EN' | 'CN') => void,
  onNavigate?: (page: 'home' | 'group' | 'portfolio' | 'media' | 'careers' | 'jwpei' | 'danselente' | 'lomonte' | 'job-detail') => void,
  currentPage?: 'home' | 'group' | 'portfolio' | 'media' | 'careers' | 'jwpei' | 'danselente' | 'lomonte' | 'job-detail',
  onBrandClick?: (brand: string) => void
}) {
  const [activeDropdown, setActiveDropdown] = useState<'group' | 'portfolio' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<'group' | 'portfolio' | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (dropdown: 'group' | 'portfolio') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const menuItems = [
    { id: 'group', label: 'GROUP', hasDropdown: true, page: 'group' as const },
    { id: 'portfolio', label: 'PORTFOLIO', hasDropdown: true, page: 'portfolio' as const },
    { id: 'media', label: 'MEDIA', hasDropdown: false, page: 'media' as const },
    { id: 'careers', label: 'CAREERS', hasDropdown: false, page: 'careers' as const },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-black/10"
      onMouseLeave={handleMouseLeave}
    >
      <div className="md:px-12 lg:px-20 lg:px-[30px] lg:py-[22px] px-[20px] py-[30px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate?.('home')}
            className="hover:opacity-60 transition-opacity cursor-pointer -my-4"
          >
            <img src={logoImage} alt="PLBG" className="lg:h-[58.08px] h-[48.4px]" />
          </button>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.id as 'group' | 'portfolio')}
              >
                <button
                  onClick={() => {
                    if ('page' in item && item.page && onNavigate) {
                      onNavigate(item.page);
                      setActiveDropdown(null);
                    }
                  }}
                  className="relative py-2 tracking-wider transition-all text-black group cursor-pointer"
                  style={{ fontSize: '18px', fontFamily: 'Playfair Display', fontWeight: 500 }}
                  aria-expanded={activeDropdown === item.id}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            ))}
          </nav>

          {/* Right Side - Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('EN')}
                className={`text-xs tracking-wider transition-opacity cursor-pointer ${language === 'EN' ? 'opacity-100' : 'opacity-40'}`}
              >
                EN
              </button>
              <span className="text-xs opacity-40">/</span>
              <button
                onClick={() => setLanguage('CN')}
                className={`text-xs tracking-wider transition-opacity cursor-pointer ${language === 'CN' ? 'opacity-100' : 'opacity-40'}`}
              >
                CN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 hover:opacity-60 transition-opacity">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-black/10">
                    <img src={logoImage} alt="PLBG" className="h-10" />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto">
                    <div className="py-4">
                      {menuItems.map((item) => (
                        <div key={item.id}>
                          <div className="w-full flex items-center justify-between hover:bg-gray-50 transition-colors">
                            {/* Left: Label - Click to navigate */}
                            <button
                              onClick={() => {
                                onNavigate?.(item.page);
                                setMobileMenuOpen(false);
                                setMobileSubmenuOpen(null);
                              }}
                              className="flex-1 text-left px-6 py-4"
                              style={{ fontSize: '18px', fontFamily: 'Playfair Display', fontWeight: 500 }}
                            >
                              {item.label}
                            </button>

                            {/* Right: Arrow - Click to toggle submenu */}
                            {item.hasDropdown && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setMobileSubmenuOpen(mobileSubmenuOpen === item.id ? null : item.id as 'group' | 'portfolio');
                                }}
                                className="px-6 py-4 hover:opacity-60 transition-opacity"
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform ${mobileSubmenuOpen === item.id ? 'rotate-180' : ''}`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Mobile Submenu */}
                          {item.hasDropdown && mobileSubmenuOpen === item.id && (
                            <div className="bg-gray-50">
                              {item.id === 'group' ? (
                                <GroupDropdown language={language} isMobile />
                              ) : (
                                <PortfolioDropdown
                                  onBrandClick={(brand) => {
                                    onBrandClick?.(brand);
                                    setMobileMenuOpen(false);
                                    setMobileSubmenuOpen(null);
                                  }}
                                  isMobile
                                />
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Dropdown Panels - Absolute positioned to overlay content */}
      <div
        className="absolute left-0 right-0 top-full"
        onMouseEnter={() => closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current)}
      >
        {activeDropdown === 'group' && (
          <GroupDropdown key="group-dropdown" language={language} />
        )}
        {activeDropdown === 'portfolio' && (
          <PortfolioDropdown
            key="portfolio-dropdown"
            onBrandClick={(brand) => {
              onBrandClick?.(brand);
              setActiveDropdown(null);
            }}
          />
        )}
      </div>
    </header>
  );
}