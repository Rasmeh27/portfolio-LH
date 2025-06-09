import React from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "UX/UI Designer & Frontend Developer",
      company: "INTELCA SRL",
      location: "Santo Domingo, Oeste, Dominican Republic",
      period: "2024 - Present",
      description:
        "I design and develop custom digital solutions, blending intuitive UI design in Figma with robust backend development in Java and Python. I also lead frontend implementation in React.js, collaborating with cross-functional teams to deliver user-friendly, high-performance applications.",
      achievements: [
        "Designed user-centric interfaces in Figma, enhancing usability and efficiency.",
        "Built and maintained scalable backend services with Java and Python.",
        "Championed new technologies and methodologies to drive team improvement.",
      ],
      type: "current",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Freelance",
      location: "Remote",
      period: "2020 - Present",
      description:
        "Developed a financial management desktop app with Electron, transforming a web app (HTML, CSS, JavaScript) into a cross-platform solution focused on modern UI and seamless experience. Also built an inventory management system for a local market using C#, .NET, and Windows Forms, integrating SQL Server, product search, authentication, and automated reporting.",
      achievements: [
        "Designed robust business and financial desktop apps with Electron, C#, .NET, and JavaScript.",
        "Developed intuitive UIs for enhanced accessibility and cross-platform user experience.",
        "Implemented authentication, inventory management, and automated reporting to boost efficiency and user satisfaction.",
      ],
      type: "current",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in development and design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-500"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                    exp.type === "current"
                      ? "bg-gradient-to-r from-purple-600 to-blue-500 ring-4 ring-white shadow-lg"
                      : "bg-white border-4 border-purple-600"
                  }`}
                ></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      {exp.type === "current" && (
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="text-lg font-semibold text-purple-600 mb-2">
                      {exp.company}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-purple-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
