import jwpeiImage from 'figma:asset/f67f8ceb27cd9b0289456f867d3425cbe95e2751.png';
import danselenteImage from 'figma:asset/739c63a2f1a520233de4f609a055f49e86fa79bc.png';
import lomonteImage from 'figma:asset/97ed2e971596acc00d0e99c1c2884cffbd92a654.png';

const brands = [
  {
    name: 'JW PEI',
    image: jwpeiImage,
    page: 'jwpei' as const
  },
  {
    name: 'DANSE LENTE',
    image: danselenteImage,
    page: 'danselente' as const
  },
  {
    name: 'LO MONTE INTERNATIONAL',
    image: lomonteImage,
    page: 'lomonte' as const
  }
];

export function PortfolioSection({ 
  language, 
  onBrandClick 
}: { 
  language: 'EN' | 'CN',
  onBrandClick: (page: 'jwpei' | 'danselente' | 'lomonte') => void
}) {
  return (
    <section className="p-[0px]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {brands.map((brand) => (
          <div 
            key={brand.name} 
            onClick={() => onBrandClick(brand.page)}
            className="cursor-pointer block"
          >
            {/* Image */}
            <div className="aspect-[2/3] relative overflow-hidden">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}