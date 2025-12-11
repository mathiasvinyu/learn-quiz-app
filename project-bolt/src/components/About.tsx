import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring top-quality deliverables."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and goals."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of trends and implement cutting-edge solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results",
      description: "Every design decision is made with your business objectives in mind."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About 3rdEdge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital designers and developers dedicated to creating 
            exceptional online experiences that drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our team at work"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Crafting Digital Excellence Since 2019
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to bridge the gap between creativity and technology, 3rdEdge has 
              evolved into a leading digital design agency. We combine strategic thinking with 
              creative execution to deliver solutions that not only look amazing but also perform 
              exceptionally.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experts specializes in web design, brand identity, digital marketing, 
              and user experience design. We've had the privilege of working with startups, 
              SMEs, and established brands across various industries.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">15</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;