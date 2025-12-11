import React from 'react';
import { Award, Users, Lightbulb, Target, CheckCircle, TrendingUp } from 'lucide-react';

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

  const milestones = [
    { year: "2019", event: "3rdEdge Founded", description: "Started with a vision to create exceptional digital experiences" },
    { year: "2020", event: "First 50 Clients", description: "Reached our first major milestone of satisfied customers" },
    { year: "2021", event: "Team Expansion", description: "Grew our team to include specialists in UX/UI and development" },
    { year: "2022", event: "100+ Projects", description: "Successfully delivered over 100 digital projects" },
    { year: "2023", event: "Industry Recognition", description: "Received multiple awards for design excellence" },
    { year: "2024", event: "Global Reach", description: "Expanded services to clients across multiple continents" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About 
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                3rdEdge
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of digital designers and developers dedicated to creating 
              exceptional online experiences that drive business growth and engage users meaningfully.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2019 with a vision to bridge the gap between creativity and technology, 3rdEdge has 
                evolved into a leading digital design agency. We combine strategic thinking with 
                creative execution to deliver solutions that not only look amazing but also perform 
                exceptionally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our journey began when our founders recognized the need for digital solutions that truly 
                understand business objectives. Today, we're proud to have helped over 150 businesses 
                transform their digital presence and achieve measurable growth.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                <div className="text-blue-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
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

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here's how we've grown over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              To empower businesses with exceptional digital experiences that drive growth, 
              engage audiences, and create lasting impact in the digital landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Drive Growth</h3>
                <p className="text-blue-200">Every project is designed to deliver measurable business results</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Engage Audiences</h3>
                <p className="text-blue-200">Creating meaningful connections between brands and their customers</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Create Impact</h3>
                <p className="text-blue-200">Building digital solutions that make a lasting difference</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;