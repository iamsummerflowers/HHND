import React from 'react';
import './Services.css';

function Services() {

  const services = [
      {
          title: "Strategic Marketing Plan",
          description: "Develop comprehensive marketing strategies tailored to your business goals. We analyze your market, competitors, and target audience to create actionable plans that drive results.",
          features: ["Market Analysis & Research", "Competitor Assessment", "Target Audience Identification", "ROI-Focused Strategies"],
          gradient: "from-red-800",
          border: "border-red-800",
          iconBg: "bg-red-800",
          icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          )
      },
      {
          title: "Digital Marketing",
          description: "Maximize your online presence with our comprehensive digital marketing services. From SEO to email campaigns, we help you reach and engage your target audience effectively.",
          features: ["Search Engine Optimization (SEO)", "Email Marketing Campaigns", "Conversion Rate Optimization", "Social Media Management"],
          gradient: "from-orange-800",
          border: "border-orange-800",
          iconBg: "bg-orange-800",
          icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9"></path>
          )
      },
      {
          title: "Brand Development",
          description: "Build a strong, memorable brand that resonates with your audience. We help create cohesive brand identities that differentiate you from competitors and build customer loyalty.",
          features: ["Brand Identity Design", "Logo & Visual Assets", "Brand Messaging Strategy", "Brand Guidelines Development"],
          gradient: "from-green-800",
          border: "border-green-800",
          iconBg: "bg-green-800",
          icon: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          )
      }
  ];


  return (
    <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Services</h2>
                <p className="text-xl text-black">Comprehensive marketing solutions to grow your business</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className={`transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl bg-black border-4 ${service.border} rounded-xl p-8`}>
                        <div className={`w-16 h-16 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                            <svg className={`w-8 h-8 ${service.title === 'Brand Development' ? 'text-white' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {service.icon}
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                        <p className="text-gray-300 mb-6">{service.description}</p>
                        <ul className="text-gray-300 space-y-2">
                            {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>• {feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Services;