import { ImageWithFallback } from './figma/ImageWithFallback';
import jwPeiNewsImage from '../assets/JW PEI  (9).jpg';
import originalImage from '../assets/original.webp';

type NewsItem = {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  layout: 'image-left' | 'image-right';
  readMoreUrl?: string;
};

const newsItems: NewsItem[] = [
  {
    category: 'THE GROUP',
    date: '2024-08-20',
    title: 'JW PEI Makes New York City Debut With SoHo Pop-up and Ready-to-wear Launch',
    description: 'JW Pei, the Los Angeles-based fashion label known for its commitment to vegan design and accessible style, will throw open the doors of its first pop-up store Friday in New York City.',
    image: jwPeiNewsImage,
    layout: 'image-left',
    readMoreUrl: 'https://wwd.com/business-news/retail/jw-pei-soho-pop-up-ready-to-wear-launch-1237798139/'
  },
  {
    category: 'THE GROUP',
    date: '2024-07-15',
    title: 'Danse Lente Opens First Bricks-And-Mortar Store',
    description: 'Danse Lente handbags are an Instagrammer’s favourite owing to their angular shapes and clean lines inspired by modern architecture. Now, for the first time since the brand’s inception, it will have its own bricks-and-mortar store to show its accessories in.',
    image: originalImage,
    layout: 'image-right',
    readMoreUrl: 'https://www.vogue.co.uk/article/danse-lente-interview'
  }
];

const newsItemsCN: NewsItem[] = [
  {
    category: '集团动态',
    date: '2024-08-20',
    title: 'PLBG 扩大全球业务版图，进入新市场',
    description: 'PL Brands Group 宣布战略性扩张至亚洲市场，将新一代时尚品牌带给新的受众。',
    image: jwPeiNewsImage,
    layout: 'image-left'
  },
  {
    category: '集团动态',
    date: '2024-07-15',
    title: '可持续创新：PLBG 推出新倡议',
    description: '集团在所有投资组合品牌中推出全面的可持续发展计划，为负责任的时尚设定新的行业标准。',
    image: originalImage,
    layout: 'image-right',
    readMoreUrl: 'https://www.vogue.co.uk/article/danse-lente-interview'
  }
];

export function LatestNews({ language }: { language: 'EN' | 'CN' }) {
  const title = language === 'EN' ? 'LATEST NEWS' : '最新动态';
  const readMoreText = language === 'EN' ? 'read more' : '阅读更多';
  const items = language === 'EN' ? newsItems : newsItemsCN;

  return (
    <section className="px-[0px] pb-[60px] pt-[60px] lg:pb-[100px] lg:pt-[150px]">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="mb-6 text-center text-black opacity-90 text-[22px] lg:hidden"
          style={{ fontFamily: 'Playfair Display', fontWeight: 500, letterSpacing: '1px' }}
        >
          {title}
        </h2>
        <h2 
          className="hidden lg:block lg:mb-[80px] text-center text-black opacity-90 lg:text-[36px]"
          style={{ fontFamily: 'Playfair Display', fontWeight: 500, letterSpacing: '1px' }}
        >
          {title}
        </h2>

        <div className="space-y-24 md:space-y-32">
          {items.map((item, index) => {
            const readMoreUrl = item.readMoreUrl ?? (index === 0 ? 'https://wwd.com/business-news/retail/jw-pei-soho-pop-up-ready-to-wear-launch-1237798139/' : undefined);

            return (
              <article
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
                  item.layout === 'image-right' ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden aspect-[4/3] bg-gray-100 ${
                    item.layout === 'image-right' ? 'lg:col-start-2' : ''
                  }`}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={item.layout === 'image-right' ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="leading-snug" style={{ fontFamily: 'Roboto', fontSize: '24px', fontWeight: 400, hyphens: 'none' }}>
                      {item.title}
                    </h3>
                    
                    <p className="leading-relaxed" style={{ fontFamily: 'Roboto', fontWeight: 300, fontSize: '15px', color: '#000000', hyphens: 'none' }}>
                      {item.description}
                    </p>
                    
                    {readMoreUrl ? (
                      <a
                        href={readMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 cursor-pointer relative"
                        style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '14px' }}
                      >
                        <span className="flex items-center gap-2 text-[14px]">
                          {readMoreText}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : (
                      <button className="group inline-flex items-center gap-2 cursor-pointer relative" style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '14px' }}>
                        <span className="flex items-center gap-2 text-[14px]">
                          {readMoreText}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
