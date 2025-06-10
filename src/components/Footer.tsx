import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Luis Herasme
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer & UX/UI Designer passionate about creating 
              beautiful, functional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full-Stack Development</li>
              <li>UX/UI Design</li>
              <li>Web App Development</li>
              <li>Design Systems</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Luis Herasme. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Before anything else, preparation is the key to success. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;