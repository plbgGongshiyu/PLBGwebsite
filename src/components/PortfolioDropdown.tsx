import jwpeiDropdownImage from '../assets/portfolio/jwpei-dropdown.png';
import danselenteDropdownImage from '../assets/portfolio/danselente-dropdown.png';
import lomonteDropdownImage from '../assets/portfolio/lomonte-dropdown.png';
import jwpeiLogo from '../assets/logos/jwpei-logo.png';
import danseLenteLogo from '../assets/logos/danse-lente-logo.png';
import loMonteLogo from '../assets/logos/lomonte-logo.png';

const brands = [
  {
    name: 'JW PEI',
    image: jwpeiDropdownImage,
    page: 'jwpei',
    labelImage: jwpeiLogo
  },
  {
    name: 'DANSE LENTE',
    image: danselenteDropdownImage,
    page: 'danselente',
    labelImage: danseLenteLogo
  },
  {
    name: 'LO MONTE INTERNATIONAL',
    image: lomonteDropdownImage,
    page: 'lomonte',
    labelImage: loMonteLogo
  }
];

interface PortfolioDropdownProps {
  onBrandClick: (brand: string) => void;
  isMobile?: boolean;
}

export function PortfolioDropdown({ onBrandClick, isMobile = false }: PortfolioDropdownProps) {
  if (isMobile) {
    return (
      <div className="px-4 py-4">
        {/* Mobile: Horizontal scrollable brands */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4 min-w-max pb-2">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                onClick={() => onBrandClick(brand.page)}
                className="cursor-pointer block w-[200px] flex-shrink-0 animate-fadeIn"
              >
                {/* Brand Name */}
                <div className="mb-3 flex justify-center">
                  {brand.labelImage ? (
                    <img
                      src={brand.labelImage}
                      alt={brand.name}
                      className="h-6 w-auto object-contain"
                    />
                  ) : (
                    <h3
                      className="tracking-wider text-center"
                      style={{ fontSize: '12px', fontFamily: 'Roboto', fontWeight: 400 }}
                    >
                      {brand.name}
                    </h3>
                  )}
                </div>

                {/* Brand Image */}
                <div className="aspect-[2/3] relative overflow-hidden bg-gray-100 rounded-lg">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-t border-black/10 bg-white shadow-lg animate-slideDown"
    >
      <div className="px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                onClick={() => onBrandClick(brand.page)}
                className="cursor-pointer block animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Brand Name */}
                <div className="mb-6 flex justify-center">
                  {brand.labelImage ? (
                    <img
                      src={brand.labelImage}
                      alt={brand.name}
                      className="h-6 w-auto object-contain"
                    />
                  ) : (
                    <h3 className="tracking-wider text-center" style={{ fontSize: '14px', fontFamily: 'Roboto', fontWeight: 400 }}>
                      {brand.name}
                    </h3>
                  )}
                </div>

                {/* Brand Image */}
                <div className="aspect-[2/3] relative overflow-hidden bg-gray-100">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
