import React, { useState } from 'react';
import './FAQ.css';
import logo from '../assets/HNDlogo.svg'


function FAQ() {

    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "How long does it take to see results from your marketing strategies?",
            answer: "Results vary depending on the service and your industry, but most clients start seeing improvements within 3-6 months. SEO typically takes 4-6 months for significant results, while email marketing and conversion optimization can show results within weeks. We provide regular reports to track progress and adjust strategies as needed."
        },
        {
            question: "Do you work with businesses of all sizes?",
            answer: "Yes! We work with startups, small businesses, and established companies. Our strategies are tailored to your specific needs, budget, and growth stage. Whether you're just getting off the ground or looking to take your brand to the next level, we have solutions that scale with your business."
        },
        {
            question: "What makes your approach different from other marketing agencies?",
            answer: "We focus on comprehensive, data-driven strategies tailored to your unique business needs. Rather than one-size-fits-all solutions, we take time to understand your industry, competitors, and goals. Our integrated approach combines brand development, SEO, email marketing, and conversion optimization to create synergistic results that drive sustainable growth."
        }
        ,
        {
            question: "When should you consider purchasing a brand development service?",
            answer: "• If you are starting a new business or launching a new product and need to establish a strong brand identity from the beginning.\n • If you feel that your current brand is not effectively communicating your values and unique selling points to your target audience.\n • If you are planning a rebranding effort to revitalized your business and differentiate yourself from competitors.\n • If you want to create a consistent and cohesive brand experience across all touchpoints, from your website and social media presence to your packaging and marketing materials.\n • If you are looking to attract and engage your target audience, build brand loyalty, and ultimately drive business growth."
        }
        ,
        {
            question: "Is it too early to consider strategic marketing?",
            answer: "Strategic marketing can be beneficial at any stage of your business, including the initial stages of your business plan. It helps you define your target audience, differentiate your brand, and develop effective marketing strategies. By incorporating strategic marketing early on, you can establish a strong brand presence, expand your customer base, and achieve your marketing goals proactively."
        }
        ,
        {
            question: "Is digital marketing the same as regular marketing?",
            answer: "Traditional marketing focuses on offline channels such as print, television, and radio, digital marketing is centered around online platforms, including websites, social media, search engines, and email. Digital marketing often allows for more precise targeting, real-time analytics, and personalized communication with customers. It is essential for businesses to utilize both digital and traditional marketing strategies to maximize their reach and impact in today's interconnected world."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };



  return (
    <section id="faq" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">Get answers to common questions about our services</p>
            </div>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-yellow-900 border border-deep-red/30 rounded-lg">
                        <button 
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
                        >
                            <span className="text-xl font-semibold text-white">{faq.question}</span>
                            <svg 
                                className={`w-6 h-6 text-dark-yellow transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {openFAQ === index && (
                            <div className="p-6 pt-4 bg-black">
                                <p className="text-gray-300 whitespace-pre-line">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default FAQ;