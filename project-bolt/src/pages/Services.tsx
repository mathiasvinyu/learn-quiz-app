import React, { useState } from 'react';
import { Monitor, Smartphone, Palette, Search, ShoppingCart, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Web Design & Development",
      description: "Custom websites that are beautiful, fast, and optimized for conversions.",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "CMS Integration"],
      process: ["Discovery & Planning", "Design & Prototyping", "Development", "Testing & Launch"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Design",
      description: "User-centered mobile applications that engage and delight your users.",
      features: ["iOS & Android", "UI/UX Design", "Prototyping", "User Testing"],
      process: ["User Research", "Wireframing", "Visual Design", "Development Support"],
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Identity",
      description: "Complete brand packages that tell your story and connect with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Print Design", "Brand Strategy"],
      process: ["Brand Discovery", "Concept Development", "Design Refinement", "Brand Guidelines"],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that grow your online presence.",
      features: ["SEO Services", "Social Media", "Content Strategy", "PPC Campaigns"],
      process: ["Market Analysis", "Strategy Development", "Campaign Execution", "Performance Optimization"],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Complete online stores that drive sales and enhance user experience.",
      features: ["Custom E-commerce", "Payment Integration", "Inventory Management", "Analytics"],
      process: ["Requirements Analysis", "Platform Selection", "Store Development", "Launch & Optimization"],
      image: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Analytics & Optimization",
      description: "Continuous improvement through data analysis and performance optimization.",
      features: ["Performance Audit", "A/B Testing", "Conversion Optimization", "Reporting"],
      process: ["Current State Analysis", "Optimization Strategy", "Implementation", "Monitoring & Reporting"],
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "R15,000",
      description: "Perfect for small businesses getting started online",
      features: [
        "5-page responsive website",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly design",
        "3 months support"
      ]
    },
    {
      name: "Professional",
      price: "R35,000",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "10-page custom website",
        "Advanced SEO optimization",
        "CMS integration",
        "E-commerce functionality",
        "Analytics setup",
        "6 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Dedicated project manager",
        "12 months support"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the online world. 
            From strategy to execution, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setActiveService(index)}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="text-blue-600 mb-6">
                  {services[activeService].icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {services[activeService].title}
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                <div className="space-y-4">
                  {services[activeService].process.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative p-8 rounded-2xl ${pkg.popular ? 'bg-blue-600 text-white' : 'bg-gray-50'} ${pkg.popular ? 'scale-105' : ''} transition-transform duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-blue-600'}`}>
                    {pkg.price}
                  </div>
                  <p className={`${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${pkg.popular ? 'text-blue-200' : 'text-green-500'}`} />
                      <span className={`${pkg.popular ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors duration-200 ${
                  pkg.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;