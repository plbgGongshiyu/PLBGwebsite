import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import jwPeiStatic from 'figma:asset/33ec45393dee8f50ecc5b0ad708392876e3196ea.png';
import danseLenteStatic from 'figma:asset/71d58701661e9d23388cc6ec384c36a9746f7f32.png';
import loMonteStatic from 'figma:asset/97ed2e971596acc00d0e99c1c2884cffbd92a654.png';
import jwPeiGif from 'figma:asset/9de5e729134dbda4fd7981ff2773169f92fbf3d8.png';
import danseLenteGif from 'figma:asset/87bce36bd648a3e86a98b34a6ce6e530ba61e7bc.png';

interface BrandData {
  name: string;
  description: string;
  staticImage: string;
  gifImage: string;
}

interface PortfolioPageProps {
  onBrandClick: (brand: string) => void;
}

export function PortfolioPage({ onBrandClick }: PortfolioPageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const brands: BrandData[] = [
    {
      name: 'JW PEI',
      description: 'JW PEI seamlessly blends the timelessness of traditional craftsmanship with tail-of-the-art design technologies, always filtered through the lens of a modern woman\'s day-to-day.',
      staticImage: jwPeiStatic,
      gifImage: jwPeiGif
    },
    {
      name: 'DANSE LENTE',
      description: 'DANSE LENTE represents the pinnacle of contemporary fashion, merging innovative design with sustainable practices to create timeless pieces for the modern wardrobe.',
      staticImage: danseLenteStatic,
      gifImage: danseLenteGif
    },
    {
      name: 'LO MONTE INTERNATIONAL',
      description: 'LO MONTE INTERNATIONAL brings bold creativity and vibrant energy to the fashion world, crafting statement pieces that celebrate individuality and self-expression.',
      staticImage: loMonteStatic,
      gifImage: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwY3Jvd2QlMjBldmVudHxlbnwxfHx8fDE3NjExMDQzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row lg:h-screen">
      {brands.map((brand, index) => (
        <motion.div
          key={brand.name}
          className="relative flex-1 overflow-hidden cursor-pointer h-screen lg:h-auto"
          // onMouseEnter={() => setHoveredIndex(index)}
          // onMouseLeave={() => setHoveredIndex(null)}
          // onTouchStart={() => setHoveredIndex(index)}
          onClick={() => {
            if (brand.name === 'JW PEI') {
              onBrandClick('jwpei');
            } else if (brand.name === 'DANSE LENTE') {
              onBrandClick('danselente');
            } else if (brand.name === 'LO MONTE INTERNATIONAL') {
              onBrandClick('lomonte');
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            {typeof brand.staticImage === 'string' ? (
              <ImageWithFallback
                src={brand.staticImage}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={brand.staticImage}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black/30 transition-all duration-500" /> */}

          {/* Inset shadow on hover */}
          {/* <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ boxShadow: 'inset 0 0 0 0 rgba(0, 0, 0, 0)' }}
            animate={{
              boxShadow: hoveredIndex === index
                ? 'inset 0 0 80px 20px rgba(0, 0, 0, 0.6)'
                : 'inset 0 0 0 0 rgba(0, 0, 0, 0)'
            }}
            transition={{ duration: 0.4 }}
          /> */}

          {/* Description - Appears on hover from bottom left */}
          {/* <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                className="absolute bottom-6 left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 text-white text-left space-y-2 lg:space-y-3 max-w-[85%] lg:max-w-[70%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xs md:text-sm lg:text-base leading-relaxed">
                  {brand.description}
                </p>
                <div className="text-xs tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                  Explore more →
                </div>
              </motion.div>
            )}
          </AnimatePresence> */}
        </motion.div>
      ))}
    </div>
  );
}
