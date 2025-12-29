import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import coverage1 from '../assets/media/coverage-1.png';
import coverage2 from '../assets/media/coverage-2.png';
import coverage3 from '../assets/media/coverage-3.png';
import coverage4 from '../assets/media/coverage-4.png';
import coverage5 from '../assets/media/coverage-5.png';
import coverage6 from '../assets/media/coverage-6.png';
import coverage7 from '../assets/media/coverage-7.png';
import coverage8 from '../assets/media/coverage-8.png';
import coverage9 from '../assets/media/coverage-9.png';
import coverage10 from '../assets/media/coverage-10.png';
import coverage11 from '../assets/media/coverage-11.png';
import coverage12 from '../assets/media/coverage-12.png';
import coverage13 from '../assets/media/coverage-13.png';
import coverage14 from '../assets/media/coverage-14.png';
import coverage15 from '../assets/media/coverage-15.png';
import coverage16 from '../assets/media/coverage-16.png';
import coverage17 from '../assets/media/coverage-17.png';
import coverage18 from '../assets/media/coverage-18.png';
import coverage19 from '../assets/media/coverage-19.png';
import coverage20 from '../assets/media/coverage-20.png';
import coverage21 from '../assets/media/coverage-21.png';
import coverage22 from '../assets/media/coverage-22.png';
import coverage23 from '../assets/media/coverage-23.png';
import coverage24 from '../assets/media/coverage-24.png';
import coverage25 from '../assets/media/coverage-25.png';
import coverage26 from '../assets/media/coverage-26.png';
import coverage27 from '../assets/media/coverage-27.png';
import coverage28 from '../assets/media/coverage-28.png';
import coverage29 from '../assets/media/coverage-29.png';
import coverage30 from '../assets/media/coverage-30.png';
import coverage31 from '../assets/media/coverage-31.png';

export function MediaPage({ language }: { language: 'EN' | 'CN' }) {
    const mediaImages = [
        coverage1,
        coverage2,
        coverage3,
        coverage4,
        coverage5,
        coverage6,
        coverage7,
        coverage8,
        coverage9,
        coverage10,
        coverage11,
        coverage12,
        coverage13,
        coverage14,
        coverage15,
        coverage16,
        coverage17,
        coverage18,
        coverage19,
        coverage20,
        coverage21,
        coverage22,
        coverage23,
        coverage24,
        coverage25,
        coverage26,
        coverage27,
        coverage28,
        coverage29,
        coverage30,
        coverage31,
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Intro block copied from Group page */}
            <section
                className="px-4 md:px-12 lg:px-20 pb-12 md:pb-16 flex items-center"
                style={{ paddingTop: '64px' }}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h1
                        className="text-2xl md:text-4xl lg:text-5xl tracking-tight leading-relaxed"
                        style={{ fontFamily: 'Playfair Display' }}
                    >
                        Coverage, news and other updates on our
                        portfolio brands in real time
                    </h1>
                </div>
            </section>

            {/* Media Grid Section - 3 rows x 4 columns */}
            <section className="px-6 md:px-10 lg:px-14 xl:px-20 pt-12 pb-12 md:pb-16 lg:pb-24 xl:pb-32">
                <motion.div
                    className="mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
                        {mediaImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden bg-gray-100"
                            >
                                <ImageWithFallback
                                    src={image}
                                    alt={`Media Coverage ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
