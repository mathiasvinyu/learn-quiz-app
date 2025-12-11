import React from 'react';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import contactData from '../data/contactData.json';

export const Footer: React.FC = () => {
  const socialIcons = {
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-gradient">
              {contactData.companyName}
            </h3>
            <p className="text-gray-400">{contactData.tagline}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {contactData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href={`tel:${contactData.phone}`}
                className="flex items-center text-gray-400 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {contactData.phone}
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {contactData.email}
              </a>

              <div className="flex space-x-4 pt-4">
                {Object.entries(contactData.social).map(([key, url]) => {
                  const IconComponent = socialIcons[key as keyof typeof socialIcons];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {contactData.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
