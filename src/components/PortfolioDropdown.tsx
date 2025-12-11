import jwpeiDropdownImage from 'figma:asset/5830a4ea4168decb0972cd1fc235720bba8369b7.png';
import danselenteDropdownImage from 'figma:asset/9e80a3c1eb06eec8a49dd0b0d171ce70755201be.png';
import lomonteDropdownImage from 'figma:asset/fa9dc742d96b47dc3de4d94271eef8c06eaed1e5.png';
import jwpeiLogo from '../assets/JWPEI-logo1.png';

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
    page: 'danselente'
  },
  {
    name: 'LO MONTE INTERNATIONAL',
    image: lomonteDropdownImage,
    page: 'lomonte'
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
                      className="h-[5px] w-auto"
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
                      className="h-[5px] w-auto"
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
