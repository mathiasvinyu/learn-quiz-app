import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
                Digital Solutions
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  That Converts
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-600">
                We create stunning digital experiences that drive results. From web design to brand identity, 
                we help businesses stand out in the digital landscape.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-gray-700 transition-all duration-200 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600">
                <Play className="w-5 h-5" />
                Watch Our Work
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 transform bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl rotate-6"></div>
            <div className="relative p-8 bg-white shadow-2xl rounded-3xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Design Process"
                className="object-cover w-full h-64 rounded-xl"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Strategic Planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Creative Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Development & Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;