import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import logoJWPEI from '../assets/logos/jwpei-logo.png';

interface JobDetailPageProps {
    onBack: () => void;
    onNavigate?: (page: any) => void;
}

export function JobDetailPage({ onBack, onNavigate }: JobDetailPageProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Header Section */}
            <section
                className="pt-40 pb-24 px-6 md:px-12 lg:px-20"
                style={{ backgroundColor: '#C5D3E0', height: '230px' }}
            >
                <div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8"
                    style={{ paddingTop: '90px', paddingBottom: '90px' }}
                >
                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl text-white"
                        style={{ fontFamily: 'Playfair Display', fontWeight: 400 }}
                    >
                        Studio Manager - Prada Linea Rossa
                    </h1>
                    <div className="flex items-center gap-2 self-end md:self-auto">
                        <span
                            className="text-3xl md:text-4xl lg:text-5xl text-black tracking-tighter"
                            style={{ fontFamily: 'Playfair Display', fontWeight: 700, backgroundClip: 'unset', WebkitBackgroundClip: 'unset' }}
                        >
                            @
                        </span>
                        <img
                            src={logoJWPEI}
                            alt="Brand Logo"
                            className="h-8 md:h-10 object-contain brightness-0 invert"
                        />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-grow py-20 md:py-32 px-6 md:px-12 lg:px-20" style={{ paddingBottom: '0px' }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">

                    {/* Left Column: Details - Fixed width on desktop */}
                    <div className="w-full md:w-1/4 space-y-12 flex-shrink-0" style={{ width: '300px' }}>
                        <div>
                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: 'Roboto' }}>Country:</h3>
                            <p className="text-[13px]" style={{ fontFamily: 'Roboto' }}>IT</p>
                        </div>
                        <div>
                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: 'Roboto' }}>City:</h3>
                            <p className="text-[13px]" style={{ fontFamily: 'Roboto' }}>MILANO</p>
                        </div>
                        <div>
                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: 'Roboto' }}>Career Path:</h3>
                            <p className="text-[13px]" style={{ fontFamily: 'Roboto' }}>DESIGN</p>
                        </div>
                    </div>

                    {/* Right Column: Introduction - Flex grow */}
                    <div className="w-full md:flex-1 space-y-16">
                        <div>
                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-8 underline underline-offset-4 decoration-1" style={{ fontFamily: 'Roboto' }}>JOB PURPOSE</h3>
                            <div className="text-[13px] leading-[1.8] space-y-6 opacity-80" style={{ fontFamily: 'Roboto' }}>
                                <p style={{ lineHeight: '28px' }}>
                                    As Studio Manager for Prada Linea Rossa, you will play a pivotal role in coordinating the creative and operational flow of collections across multiple product categories. In this role, you will act as a point of reference for the Design Studio, ensuring alignment between creativity and operational strategy: planning, coordinating, and overseeing the execution of creative projects, empowering design teams to focus on concept and craft, and directly managing timelines, resources, and cross functional collaboration (retail, product, brand) to deliver impactful and on brand results.<br />
                                    In this position, the person will also act as a project leader, supporting the development of a team culture focused on innovation and creativity.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-8 underline underline-offset-4 decoration-1" style={{ fontFamily: 'Roboto', marginTop: '52px' }}>RESPONSIBILITIES</h3>
                            <ul className="list-disc list-outside ml-4 space-y-4 text-[13px] leading-[1.8] opacity-80" style={{ fontFamily: 'Roboto' }}>
                                <li className="mb-0">Lead and manage end-to-end planning and execution of creative studio projects across all channels (product, campaign, retail, digital).</li>
                                <li className="mb-0">Define and track project scope, timelines, budgets, and deliverables aligned with brand and business goals.</li>
                                <li className="mb-0">Facilitate cross-functional collaboration with design, marketing, merchandising, retail, product development, and external partners.</li>
                                <li className="mb-0">Implement efficient workflows and project management tools to optimize studio operations and creative output.</li>
                                <li className="mb-0">Act as liaison between creative and business teams, ensuring clear communication of vision, priorities, and feedback.</li>
                                <li className="mb-0">Manage allocation of internal and external creative resources, supporting hiring, onboarding, and freelance coordination.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[13px] font-bold uppercase tracking-widest mb-8 underline underline-offset-4 decoration-1" style={{ fontFamily: 'Roboto', marginTop: '52px' }}>KNOWLEDGE AND SKILLS</h3>
                            <div className="text-[13px] leading-[1.8] opacity-80" style={{ fontFamily: 'Roboto' }}>
                                <p style={{ lineHeight: '28px' }}>
                                    Degree in Luxury Management/ Industrial Design or equivalent<br />
                                    5/7 years of experience as Studio or Collection Coordinator/Executive Assistant within Fashion & Luxury Brands (One prior experience in the Footwear Industry will be considered a strong plus)<br />
                                    Proficient in project management tools such as Trello, Asana, Monday.com, or similar platforms<br />
                                    Proven Experience in coordinating cross-functional teams (design, product development, merchandising, retail) within a fast-paced, creative environment<br />
                                    Mastery of Excel, PPT and other presentation tools<br />
                                    Fluent in English and Italian<br />
                                    Leadership and team facilitation in cross-functional environments
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="w-full md:w-1/4 flex-shrink-0" style={{ width: '300px' }}>
                        <button
                            onClick={onBack}
                            className="flex items-center gap-3 group transition-all duration-300"
                        >
                            <svg width="24" height="12" viewBox="0 0 40 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1" style={{ borderColor: 'rgba(0, 0, 0, 0)' }}>
                                <path d="M8 1L1 8M1 8L8 15M1 8H39" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[13px] font-bold uppercase tracking-widest" style={{ fontFamily: 'Roboto' }}>Explore All Jobs</span>
                        </button>
                    </div>

                    <div className="w-full md:flex-1">
                        <p className="text-[13px] leading-relaxed opacity-80" style={{ fontFamily: 'Roboto' }}>
                            We will be interviewing candidates continuously and kindly ask you to send your CV to: <a href="mailto:JOBS@PLBRANDSGROUP.COM" className="font-bold underline hover:opacity-60 transition-opacity">JOBS@PLBRANDSGROUP.COM</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer language="EN" onNavigate={onNavigate} />
        </div>
    );
}
