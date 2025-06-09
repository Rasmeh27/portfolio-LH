import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-purple-600 to-purple-400",
      skills: [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      color: "from-blue-600 to-blue-400",
      skills: [
        { name: "Java", level: 65 },
        { name: "Python", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "SQL Server", level: 70 }
      ]
    },
    {
      title: "Design Tools",
      color: "from-purple-500 to-pink-400",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Excalidraw", level: 85 },
        { name: "Balsamiq", level: 50 }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "OCI", level: 50 },
        { name: "Firebase", level: 60 },
        { name: "Git", level: 95 },
        { name: "Vercel", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning development, design, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                <div className="w-6 h-6 bg-white rounded opacity-80"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;