import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Full-Stack Development",
      description: " Good management in modern web technologies including React, Java Spring Boot, and cloud platforms as Firebase or OCI."
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "UX/UI Design",
      description: "Creating intuitive, accessible, and visually compelling user experiences."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Collaboration",
      description: "Strong communication skills with experience leading cross-functional teams."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "Always exploring cutting-edge technologies and design methodologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and designer who believes in creating digital experiences 
            that are not only beautiful but also functional and user-centered.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                As a passionate Full Stack Developer and UI/UX Designer, 
                I thrive at the intersection of technology and user experience. 
                My academic journey at INTEC and hands-on experience in both startup and enterprise environments have equipped me with a versatile skill set, 
                allowing me to seamlessly transition between backend logic, frontend development, and intuitive interface design.
              </p>
              <p className="mb-6">
                Driven by a commitment to deliver solutions that are not only technically sound but also user-centric, 
                I prioritize clarity, efficiency, and aesthetics in every project. 
                My leadership training and interest in continuous learning empower me to tackle complex challenges collaboratively and with a growth mindset.
              </p>
              <p>
                Whether I’m coding backend services, designing user interfaces, 
                or exploring new technologies, I’m dedicated to creating digital experiences that genuinely improve people’s lives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;