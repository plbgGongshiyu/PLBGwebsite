import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const jwPeiStatic = 'https://storage.googleapis.com/plbg/assets/portfolio/jwpei-cover.png';
const danseLenteStatic = 'https://storage.googleapis.com/plbg/assets/portfolio/danselente-cover.png';
const loMonteStatic = 'https://storage.googleapis.com/plbg/assets/portfolio/lomonte-cover.png';

interface PortfolioPageProps {
  language: 'EN' | 'CN';
  onBrandClick?: (brand: 'jwpei' | 'danselente' | 'lomonte') => void;
}

export function PortfolioPage({ language, onBrandClick }: PortfolioPageProps) {
  const brands = [
    {
      id: 'jwpei' as const,
      name: 'JW PEI',
      staticImage: jwPeiStatic,
    },
    {
      id: 'danselente' as const,
      name: 'DANSE LENTE',
      staticImage: danseLenteStatic,
    },
    {
      id: 'lomonte' as const,
      name: 'LO MONTE INTERNATIONAL',
      staticImage: loMonteStatic,
    }
  ];

  return (
    <div className="w-full">
      {/* Brands Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 p-0 m-0">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="cursor-pointer p-0 m-0 leading-[0]"
              onClick={() => onBrandClick?.(brand.id)}
            >
              <ImageWithFallback
                src={brand.staticImage}
                alt={brand.name}
                className="w-full h-auto block p-0 m-0"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
