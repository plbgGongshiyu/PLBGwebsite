import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import wwdArticle from 'figma:asset/611dcdd008bcfe5958bad27ffefd1845d555a1cb.png';
import mediaReplacement from '../assets/2.png';
import mediaThird from '../assets/3.png';
import mediaFourth from '../assets/4.png';
import mediaFifth from '../assets/5.png';
import mediaSixth from '../assets/6.png';
import mediaSeventh from '../assets/7.png';
import mediaEighth from '../assets/8.png';
import mediaNinth from '../assets/9.png';
import mediaTenth from '../assets/10.png';
import mediaEleventh from '../assets/11.png';
import mediaTwelfth from '../assets/12.png';
import mediaThirteenth from '../assets/13.png';
import mediaFourteenth from '../assets/14.png';
import mediaFifteenth from '../assets/15.png';
import mediaSixteenth from '../assets/16.png';
import mediaSeventeenth from '../assets/17.png';
import mediaEighteenth from '../assets/18.png';
import mediaNineteenth from '../assets/19.png';
import mediaTwentieth from '../assets/20.png';
import mediaTwentyFirst from '../assets/21.png';
import mediaTwentySecond from '../assets/22.png';
import mediaTwentyThird from '../assets/23.png';
import mediaTwentyFourth from '../assets/24.png';
import mediaTwentyFifth from '../assets/25.png';
import mediaTwentySixth from '../assets/26.png';
import mediaTwentySeventh from '../assets/27.png';
import mediaTwentyEighth from '../assets/28.png';
import mediaTwentyNinth from '../assets/29.png';
import mediaThirtieth from '../assets/30.png';
import mediaThirtyFirst from '../assets/31.png';

export function MediaPage({ language }: { language: 'EN' | 'CN' }) {
    const mediaImages = [
        wwdArticle,
        mediaReplacement,
        mediaThird,
        mediaFourth,
        mediaFifth,
        mediaSixth,
        mediaSeventh,
        mediaEighth,
        mediaNinth,
        mediaTenth,
        mediaEleventh,
        mediaTwelfth,
        mediaThirteenth,
        mediaFourteenth,
        mediaFifteenth,
        mediaSixteenth,
        mediaSeventeenth,
        mediaEighteenth,
        mediaNineteenth,
        mediaTwentieth,
        mediaTwentyFirst,
        mediaTwentySecond,
        mediaTwentyThird,
        mediaTwentyFourth,
        mediaTwentyFifth,
        mediaTwentySixth,
        mediaTwentySeventh,
        mediaTwentyEighth,
        mediaTwentyNinth,
        mediaThirtieth,
        mediaThirtyFirst,
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

            {/* Footer */}

        </div>
    );
}
