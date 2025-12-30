const jwpeiImage = 'https://storage.googleapis.com/plbg/assets/portfolio/jwpei-main.png';
const danselenteImage = 'https://storage.googleapis.com/plbg/assets/portfolio/danselente-main.png';
const lomonteImage = 'https://storage.googleapis.com/plbg/assets/portfolio/lomonte-cover.png';

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