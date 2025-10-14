import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const processSteps = [
    {
        num: '01',
        title: 'Discovery & Research',
        description: 'I start by understanding your brand, audience, and goals to build a strong strategic foundation.',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
        num: '02',
        title: 'Concept & Strategy',
        description: 'Based on research, I develop initial concepts and mood boards to define a clear visual strategy.',
        imageUrl: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870'
    },
    {
        num: '03',
        title: 'Design & Execution',
        description: 'This is where the vision comes to life. I meticulously craft the design assets with pixel-perfect execution.',
        imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop'
    },
    {
        num: '04',
        title: 'Feedback & Delivery',
        description: 'We review the designs together, I incorporate your feedback, and deliver all the final files.',
        imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
    },
];

const ProcessStep: React.FC<{ step: typeof processSteps[0]; index: number }> = ({ step, index }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-20 md:mb-32 last:mb-0">
            <div className={`relative ${isEven ? 'md:order-1' : 'md:order-2'} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`}`}>
                <img src={step.imageUrl} alt={step.title} className="w-full h-auto object-cover" />
            </div>
            <div className={`${isEven ? 'md:order-2' : 'md:order-1'} transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-10' : '-translate-x-10'}`}`}>
                <span className="text-7xl font-semibold text-gray-200">{step.num}</span>
                <h3 className="text-2xl font-semibold mb-3 -mt-2 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
        </div>
    );
};

const DesignProcess: React.FC = () => {
    const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>();

    return (
        <section id="process" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 md:mb-24 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">My Design Process</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">A structured approach to ensure every project is delivered to the highest standard.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    {processSteps.map((step, index) => (
                        <ProcessStep key={step.num} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignProcess;