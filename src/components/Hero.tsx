import heroImage from 'figma:asset/25766536a5333e65b42b8482ec64f8d2862a726f.png';

export function Hero({ language }: { language: 'EN' | 'CN' }) {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden aspect-video lg:h-screen lg:aspect-auto">
      {/* Background Image/GIF */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="PLBG Hero"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="relative z-10 text-center px-6">
        <h1 
          className="text-white text-[26px] lg:text-[60px]"
          style={{ 
            fontFamily: 'Playfair Display', 
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '1px'
          }}
        >
          Vanguards leads where luxury goes next
        </h1>
      </div>
    </section>
  );
}