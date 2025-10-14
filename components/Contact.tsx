import React, { useState } from 'react';
import { BehanceIcon, InstagramIcon, MailIcon, PhoneIcon } from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation<HTMLDivElement>();
  const [contentRef, isContentVisible] = useScrollAnimation<HTMLDivElement>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    const phoneNumber = '917588072877';
    const text = `Hello Kunal,\n\nMy name is ${name}.\nMy email is ${email}.\n\nMessage:\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f9f9f9] overflow-x-hidden">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get In Touch</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div ref={contentRef} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ease-out ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
            <div className="space-y-4">
              <a href="mailto:shirsathkunal11@gmail.com" className="flex items-center group">
                <MailIcon className="w-5 h-5 text-gray-500 mr-4" />
                <span className="text-gray-700 group-hover:text-black transition-colors">shirsathkunal11@gmail.com</span>
              </a>
              <a href="tel:+917588072877" className="flex items-center group">
                <PhoneIcon className="w-5 h-5 text-gray-500 mr-4" />
                <span className="text-gray-700 group-hover:text-black transition-colors">+91 758 807 2877</span>
              </a>
              <a href="https://www.behance.net/kunalshirsath369" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <BehanceIcon className="w-5 h-5 text-gray-500 mr-4" />
                <span className="text-gray-700 group-hover:text-black transition-colors">/kunalshirsath</span>
              </a>
              <a href="https://www.instagram.com/_kunalshirsath/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <InstagramIcon className="w-5 h-5 text-gray-500 mr-4" />
                <span className="text-gray-700 group-hover:text-black transition-colors">@_kunalshirsath</span>
              </a>
            </div>
          </div>
          <div className={`transition-all duration-1000 ease-out delay-200 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
              />
              <textarea 
                placeholder="Your Message" 
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
              ></textarea>
              <button 
                type="button" 
                onClick={handleSendMessage}
                className="w-full bg-[#222] text-white py-3 px-6 font-semibold tracking-wider hover:bg-black transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;