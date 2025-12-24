import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/94ef899121d2e6fe0c4ab3e8f396a1abced48071.png';

export function Footer({ language, onNavigate }: { language: 'EN' | 'CN', onNavigate?: (page: any) => void }) {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const content = {
    EN: {
      signUpTitle: 'SIGN UP FOR UPDATES',
      placeholder: 'Enter email here',
      copyright: '© 2025 PLBG',
      privacy: 'Privacy Policy & Cookies'
    },
    CN: {
      signUpTitle: '订阅更新',
      placeholder: '在此输入电子邮件',
      copyright: '© 2025 PLBG',
      privacy: '隐私政策与 Cookies'
    }
  };

  const { signUpTitle, placeholder, copyright, privacy } = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer
      className="py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: '#e9e9e9' }}
    >
      <div className="px-6 md:px-12 lg:px-20" style={{ marginLeft: '50px' }}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 w-full" style={{ paddingRight: '300px' }}>
          {/* Left: Sign up */}
          <div className="lg:max-w-[40%]" style={{ marginRight: 0 }}>
            <h3
              className="mb-6"
              style={{ fontSize: '18px', fontFamily: 'Playfair Display', fontWeight: 400 }}
            >
              {signUpTitle}
            </h3>
            <form onSubmit={handleSubmit} className="relative max-w-xl">
              <div className="flex items-center gap-3 pb-2 border-b border-black" style={{ borderBottomWidth: '1.5px', borderColor: '#000000', width: '580px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent outline-none placeholder:text-black/40"
                  style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, color: '#000000' }}
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="transition-colors cursor-pointer text-black/60 hover:text-black"
                  aria-label="Submit email"
                >
                  <svg
                    width="40"
                    height="16"
                    viewBox="0 0 40 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black/60 group-hover:text-black group-active:text-black"
                  >
                    <path
                      d="M0 8H34M34 8L30 4M34 8L30 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Middle: Nav columns */}
          <div className="flex flex-row flex-wrap gap-12 lg:gap-20 items-start">
            <div style={{ marginRight: 0, marginLeft: '50px' }}>
              <h4
                onClick={(e) => handleNavClick(e, 'home')}
                className="mb-3 cursor-pointer hover:opacity-60 transition-opacity"
                style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '18px', letterSpacing: '1px' }}
              >
                PLBG
              </h4>
              <nav className="space-y-2">
                {[
                  { label: 'Group', page: 'group' },
                  { label: 'Portfolio', page: 'portfolio' },
                  { label: 'Media', page: 'media' },
                  { label: 'Careers', page: 'careers' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.page}`}
                    onClick={(e) => handleNavClick(e, item.page)}
                    className="block cursor-pointer transition-opacity hover:opacity-60"
                    style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px' }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4
                className="mb-3"
                style={{ fontFamily: 'Playfair Display', fontWeight: 400, fontSize: '18px', letterSpacing: '1px' }}
              >
                PORTFOLIO
              </h4>
              <nav className="space-y-2">
                <a
                  href="https://jwpei.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-60 cursor-pointer"
                  style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px' }}
                >
                  jwpei.com
                </a>
                <a
                  href="https://danselente.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-60 cursor-pointer"
                  style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px' }}
                >
                  danselente.com
                </a>
                <a
                  href="https://lomonte-international.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-60 cursor-pointer"
                  style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '16px' }}
                >
                  lomonte-international.com
                </a>
              </nav>
            </div>
          </div>
          {/* Right: empty to balance layout */}
          <div className="flex-1"></div>
        </div>

        <div className="flex items-end justify-between mt-4 md:mt-8 text-black/70">
          <div className="flex items-center gap-4">
            <p style={{ fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}>{copyright}</p>
            <button
              className="hover:opacity-100 transition-opacity underline cursor-pointer"
              style={{ fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}
            >
              {privacy}
            </button>
          </div>
          <img src={logoImage} alt="PLBG" style={{ width: '148.6656px', height: 'auto' }} />
        </div>
      </div>
    </footer>
  );
}
