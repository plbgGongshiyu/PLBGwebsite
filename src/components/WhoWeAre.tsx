export function WhoWeAre({ language }: { language: 'EN' | 'CN' }) {
  const content = {
    EN: {
      title: 'WHO WE ARE',
      text1: 'PL Brands Group (PLBG) is a global brand investment and management company dedicated to accelerating the growth and international expansion of next-generation fashion brands.',
      text2: 'PLBG leverages capital and global resources to build an integrated ecosystem connecting design, supply chain, and brand operations. The group\'s portfolio includes Los Angeles-based JW PEI, London fashion label Danse Lente, and design and development firm Lo Monte.'
    },
    CN: {
      title: '关于我们',
      text1: 'PL Brands Group（PLBG）是一家全球品牌投资和管理公司，致力于加速新一代时尚品牌的增长和国际扩张。',
      text2: 'PLBG 利用资本和全球资源构建连接设计、供应链和品牌运营的综合生态系统。集团旗下品牌包括总部位于洛杉矶的 JW PEI、伦敦时尚品牌 Danse Lente 以及设计开发公司 Lo Monte。'
    }
  };

  const { title, text1, text2 } = content[language];

  return (
    <section className="px-[0px] py-[60px] lg:py-[150px] flex justify-center">
      <div className="w-[95%] lg:w-[40%] text-center" style={{ hyphens: 'none' }}>
        <h2 className="mb-6 lg:mb-12 opacity-90 text-[22px] lg:hidden" style={{ fontFamily: 'Playfair Display', fontWeight: 500, letterSpacing: '1px' }}>
          {title}
        </h2>
        <h2 className="hidden lg:block mb-6 lg:mb-12 opacity-90 lg:text-[36px]" style={{ fontFamily: 'Playfair Display', fontWeight: 500, letterSpacing: '1px' }}>
          {title}
        </h2>
        <div className="space-y-6">
          <p className="text-[16px] lg:text-[18px]" style={{ fontFamily: 'Roboto', fontWeight: 400, color: '#000000', lineHeight: '1.8' }}>
            {text1}
          </p>
          <p className="text-[16px] lg:text-[18px]" style={{ fontFamily: 'Roboto', fontWeight: 400, color: '#000000', lineHeight: '1.8' }}>
            {text2}
          </p>
        </div>
      </div>
    </section>
  );
}
