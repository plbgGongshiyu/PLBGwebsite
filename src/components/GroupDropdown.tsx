import { useState } from 'react';
import groupImage from '../assets/group/dropdown-group.png';
import plbgOfficeImage from '../assets/group/plbg-office.png';
import jwpeiProductImage from '../assets/group/jwpei-product.png';
import danselenteProductImage from '../assets/group/dropdown-figures.png';

type Section = 'group' | 'vision' | 'responsibility' | 'figures';

const groupContent = {
  EN: {
    group: {
      title: 'GROUP',
      text: 'PLBG is a leading global platform for emerging fashion brands, providing comprehensive support from capital to operations, and establishing a sustainable ecosystem that connects creativity with commerce.',
      image: groupImage
    },
    vision: {
      title: 'VISION',
      text: 'PLBG envisions becoming a leading global platform for emerging fashion brands, providing comprehensive support from capital to operations, and establishing a sustainable ecosystem that connects creativity with commerce.',
      image: plbgOfficeImage
    },
    responsibility: {
      title: 'CORPORATE RESPONSIBILITY',
      text: 'We are committed to sustainable practices across our portfolio, ensuring ethical manufacturing, responsible sourcing, and positive social impact. Our brands prioritize transparency and accountability in every aspect of their operations.',
      image: jwpeiProductImage
    },
    figures: {
      title: 'KEY FIGURES',
      text: 'With a growing portfolio of international brands, PLBG operates across 50+ markets worldwide. Our strategic investments and operational excellence have driven consistent year-over-year growth and market expansion.',
      image: danselenteProductImage
    }
  },
  CN: {
    group: {
      title: '集团',
      text: 'PLBG 是全球新兴时尚品牌的领先 platform，从资本到运营提供全面支持，建立连接创意与商业的可持续生态系统。',
      image: groupImage
    },
    vision: {
      title: '愿景',
      text: 'PLBG 致力于成为全球新兴时尚品牌的领先 platform，从资本到运营提供全面支持，建立连接创意与商业的可持续生态系统。',
      image: plbgOfficeImage
    },
    responsibility: {
      title: '企业责任',
      text: '我们致力于在整个投资组合中实施可持续实践，确保道德制造、负责任的采购和积极的社会影响。我们的品牌在运营的各个方面都优先考虑透明度和问责制。',
      image: jwpeiProductImage
    },
    figures: {
      title: '关键数据',
      text: 'PLBG 拥有不断增长的国际品牌组合，业务遍及全球 50 多个市场。我们的战略投资和卓越运营推动了持续的同比增长和市场扩张。',
      image: danselenteProductImage
    }
  }
};

export function GroupDropdown({ language, isMobile = false }: { language: 'EN' | 'CN', isMobile?: boolean }) {
  const [activeSection, setActiveSection] = useState<Section>('group');

  const sections: { id: Section; labelEN: string; labelCN: string }[] = [
    { id: 'group', labelEN: 'GROUP', labelCN: '集团' },
    { id: 'vision', labelEN: 'VISION', labelCN: '愿景' },
    { id: 'responsibility', labelEN: 'CORPORATE RESPONSIBILITY', labelCN: '企业责任' },
    { id: 'figures', labelEN: 'KEY FIGURES', labelCN: '关键数据' }
  ];

  const content = groupContent[language][activeSection];

  if (isMobile) {
    return (
      <div className="px-4 py-4">
        {/* Mobile: Horizontal scrollable tabs */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${activeSection === section.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                style={{
                  fontSize: '12px',
                  fontFamily: 'Playfair Display',
                  fontWeight: 400
                }}
              >
                {language === 'EN' ? section.labelEN : section.labelCN}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Content */}
        <div
          key={activeSection}
          className="mt-4 animate-fadeIn"
        >
          <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 rounded-lg mb-4">
            <img
              src={content.image}
              alt={content.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3
            className="mb-2"
            style={{
              fontSize: '14px',
              fontFamily: 'Roboto',
              fontWeight: 400
            }}
          >
            {content.title}
          </h3>
          <p
            className="text-gray-600"
            style={{
              fontSize: '12px',
              fontFamily: 'Roboto',
              lineHeight: '1.6'
            }}
          >
            {content.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="border-t border-black/10 bg-white shadow-lg animate-slideDown"
    >
      <div className="px-6 md:px-12 lg:px-20 py-10">
        <div className="flex items-start justify-center gap-12 lg:gap-16">
          {/* Left Menu */}
          <div>
            <nav className="space-y-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`block text-left tracking-wide transition-colors ${activeSection === section.id ? 'text-black' : ''
                    } hover:text-black`}
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Playfair Display',
                    fontWeight: 400,
                    color: activeSection === section.id ? '#000000' : '#898889'
                  }}
                >
                  {language === 'EN' ? section.labelEN : section.labelCN}
                </button>
              ))}
            </nav>
          </div>

          {/* Image Area */}
          <div
            className="w-full max-w-md"
            key={`${activeSection}-image`}
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100 transition-opacity duration-400">
              <img
                src={content.image}
                alt={content.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}