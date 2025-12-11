import React from 'react';
import { Monitor, Smartphone, Palette, Search, ShoppingCart, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Web Design & Development",
      description: "Custom websites that are beautiful, fast, and optimized for conversions.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "CMS Integration"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Design",
      description: "User-centered mobile applications that engage and delight your users.",
      features: ["iOS & Android", "UI/UX Design", "Prototyping", "User Testing"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Identity",
      description: "Complete brand packages that tell your story and connect with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Print Design", "Brand Strategy"]
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that grow your online presence.",
      features: ["SEO Services", "Social Media", "Content Strategy", "PPC Campaigns"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Complete online stores that drive sales and enhance user experience.",
      features: ["Custom E-commerce", "Payment Integration", "Inventory Management", "Analytics"]
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Analytics & Optimization",
      description: "Continuous improvement through data analysis and performance optimization.",
      features: ["Performance Audit", "A/B Testing", "Conversion Optimization", "Reporting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group">
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;