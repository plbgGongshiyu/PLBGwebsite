import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

export function LoadingScreen() {
    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
        >
            <motion.h1
                style={{
                    fontFamily: 'Playfair Display',
                    fontSize: 'clamp(24px, 5vw, 40px)',
                    letterSpacing: '0.15em',
                    fontWeight: 400,
                    color: '#000',
                    textAlign: 'center',
                    padding: '0 20px'
                }}
                animate={{
                    opacity: [0.15, 1, 0.15],
                    scale: [0.98, 1.02, 0.98],
                    filter: ['blur(1px)', 'blur(0px)', 'blur(1px)'],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: [0.445, 0.05, 0.55, 0.95], // easeInOutSine for ultra-smoothness
                    times: [0, 0.5, 1]
                }}
            >
                PL BrandGroup
            </motion.h1>
        </motion.div>,
        document.body
    );
}
