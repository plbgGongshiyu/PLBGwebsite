import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const coverage1 = 'https://storage.googleapis.com/plbg/assets/media/coverage-1.png';
const coverage2 = 'https://storage.googleapis.com/plbg/assets/media/coverage-2.png';
const coverage3 = 'https://storage.googleapis.com/plbg/assets/media/coverage-3.png';
const coverage4 = 'https://storage.googleapis.com/plbg/assets/media/coverage-4.png';
const coverage5 = 'https://storage.googleapis.com/plbg/assets/media/coverage-5.png';
const coverage6 = 'https://storage.googleapis.com/plbg/assets/media/coverage-6.png';
const coverage7 = 'https://storage.googleapis.com/plbg/assets/media/coverage-7.png';
const coverage8 = 'https://storage.googleapis.com/plbg/assets/media/coverage-8.png';
const coverage9 = 'https://storage.googleapis.com/plbg/assets/media/coverage-9.png';
const coverage10 = 'https://storage.googleapis.com/plbg/assets/media/coverage-10.png';
const coverage11 = 'https://storage.googleapis.com/plbg/assets/media/coverage-11.png';
const coverage12 = 'https://storage.googleapis.com/plbg/assets/media/coverage-12.png';
const coverage13 = 'https://storage.googleapis.com/plbg/assets/media/coverage-13.png';
const coverage14 = 'https://storage.googleapis.com/plbg/assets/media/coverage-14.png';
const coverage15 = 'https://storage.googleapis.com/plbg/assets/media/coverage-15.png';
const coverage16 = 'https://storage.googleapis.com/plbg/assets/media/coverage-16.png';
const coverage17 = 'https://storage.googleapis.com/plbg/assets/media/coverage-17.png';
const coverage18 = 'https://storage.googleapis.com/plbg/assets/media/coverage-18.png';
const coverage19 = 'https://storage.googleapis.com/plbg/assets/media/coverage-19.png';
const coverage20 = 'https://storage.googleapis.com/plbg/assets/media/coverage-20.png';
const coverage21 = 'https://storage.googleapis.com/plbg/assets/media/coverage-21.png';
const coverage22 = 'https://storage.googleapis.com/plbg/assets/media/coverage-22.png';
const coverage23 = 'https://storage.googleapis.com/plbg/assets/media/coverage-23.png';
const coverage24 = 'https://storage.googleapis.com/plbg/assets/media/coverage-24.png';
const coverage25 = 'https://storage.googleapis.com/plbg/assets/media/coverage-25.png';
const coverage26 = 'https://storage.googleapis.com/plbg/assets/media/coverage-26.png';
const coverage27 = 'https://storage.googleapis.com/plbg/assets/media/coverage-27.png';
const coverage28 = 'https://storage.googleapis.com/plbg/assets/media/coverage-28.png';
const coverage29 = 'https://storage.googleapis.com/plbg/assets/media/coverage-29.png';
const coverage30 = 'https://storage.googleapis.com/plbg/assets/media/coverage-30.png';
const coverage31 = 'https://storage.googleapis.com/plbg/assets/media/coverage-31.png';

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
