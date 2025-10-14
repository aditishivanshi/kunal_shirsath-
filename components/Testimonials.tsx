import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Kunal's attention to detail is unmatched. He took our vision and translated it into a brand identity that perfectly captures our essence. A true professional and a pleasure to work with.",
    name: 'Rishabh Baghel',
    title: 'CEO, Kollabgram & Khetiwallah',
  },
  {
    quote: "The UI/UX design for our app exceeded all expectations. It's not only beautiful but also incredibly intuitive. Our user engagement has skyrocketed since the launch.",
    name: 'Adesh Rane',
    title: 'Founder, Loan For India',
  },
  {
    quote: "Working with Kunal was a seamless experience. He is a creative powerhouse who delivered stunning visuals on a tight deadline. We couldn't be happier with the results.",
    name: 'Abhishekk Handa',
    title: 'Founder, Handaji Tech',
  },
];

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; index: number }> = ({ quote, name, title, index }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    return (
        <div 
            ref={ref}
            className={`bg-white p-8 border border-gray-200 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <p className="text-gray-600 italic mb-6">"{quote}"</p>
            <div className="font-semibold text-[#222]">{name}</div>
            <div className="text-gray-500 text-sm">{title}</div>
        </div>
    );
};

const Testimonials: React.FC = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What Clients Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">I'm proud to have collaborated with some amazing clients.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;