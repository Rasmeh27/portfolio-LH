import type React from "react"
import {
  Code2,
  Database,
  Palette,
  Cloud,
  Coffee,
  FileCode,
  Layers,
  Server,
  GitBranch,
  Figma,
  Zap,
  Globe,
  GithubIcon,
  Leaf
} from "lucide-react"

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-purple-600 to-purple-400",
      icon: <Code2 className="w-6 h-6 text-white" />,
      skills: [
        { name: "React", icon: <Code2 className="w-5 h-5 text-blue-500" /> },
        { name: "JavaScript", icon: <FileCode className="w-5 h-5 text-yellow-500" /> },
        { name: "CSS", icon: <Palette className="w-5 h-5 text-blue-600" /> },
        { name: "Tailwind CSS", icon: <Layers className="w-5 h-5 text-cyan-500" /> },
        { name: "HTML", icon: <Globe className="w-5 h-5 text-orange-500" /> },
      ],
    },
    {
      title: "Backend Development",
      color: "from-blue-600 to-blue-400",
      icon: <Server className="w-6 h-6 text-white" />,
      skills: [
        { name: "Java", icon: <Coffee className="w-5 h-5 text-red-600" /> },
        { name: "Python", icon: <Code2 className="w-5 h-5 text-green-600" /> },
        { name: "Spring Boot", icon: <Leaf className="w-5 h-5 text-green-500" /> },
        { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-700" /> },
        { name: "MySQL", icon: <Database className="w-5 h-5 text-orange-600" /> },
        { name: "SQL Server", icon: <Database className="w-5 h-5 text-red-500" /> },
      ],
    },
    {
      title: "Design Tools",
      color: "from-purple-500 to-pink-400",
      icon: <Palette className="w-6 h-6 text-white" />,
      skills: [
        { name: "Figma", icon: <Figma className="w-5 h-5 text-purple-600" /> },
        { name: "Excalidraw", icon: <Palette className="w-5 h-5 text-indigo-500" /> },
        { name: "Balsamiq", icon: <Layers className="w-5 h-5 text-gray-600" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "from-blue-500 to-cyan-400",
      icon: <Cloud className="w-6 h-6 text-white" />,
      skills: [
        { name: "Oracle Cloud Infraestructure (OCI)", icon: <Cloud className="w-5 h-5 text-red-600" /> },
        { name: "Firebase", icon: <Zap className="w-5 h-5 text-yellow-600" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5 text-orange-600" /> },
        { name: "GitHub", icon: <GithubIcon className="w-5 h-5 text-black" /> },
        { name: "Vercel", icon: <Globe className="w-5 h-5 text-black" /> },
        { name: "Render", icon: <Globe className="w-5 h-5 text-blue-600" /> },
        { name: "DBeaver", icon: <Database className="w-5 h-5 text-blue-500" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning development, design, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-2 rounded-lg"
                  >
                    <div className="flex-shrink-0">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-800 flex-grow">{skill.name}</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" title="Proficient"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Proficient & Ready to Use</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
