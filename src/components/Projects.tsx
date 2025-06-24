import React, { useState } from "react";
import { Github, Eye } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Adon Film Portfolio",
      description:
        "Official portfolio site for photographer Bryan Adon. Built with React and TailwindCSS, it features a responsive gallery, service showcase, and an interactive contact form via EmailJS.",
      image: "/images/logoportfoliobryan.jpg",
      category: "design",
      technologies: ["React JS", " Tailwind CSS", "EmailJS", "Vite"],
      liveUrl: "https://bryan-adon-portafolio.vercel.app",
      githubUrl: "https://github.com/Rasmeh27/Bryan-Adon-portafolio",
    },
    {
      id: 2,
      title: "Bytes and Words",
      description:
        "A modern tech blog for sharing articles on technology, programming, and design. Built with React, Tailwind CSS, and Vite, featuring a clean, responsive interface.",
      image:
        "/images/byteandwords.png",
      category: "development",
      technologies: [
        "Figma",
        "Prototyping",
        "User Research",
        "React Js",
        "Tailwind CSS",
        "Vite",
      ],
      liveUrl: "https://website-01-tech-articles.vercel.app",
      githubUrl: "https://github.com/Rasmeh27/website-01-tech-articles",
    },
    {
      id: 3,
      title: "Friends Social Media App",
      description:
        "A minimalist social network where users create profiles, post updates, add friends, and discover mutual connections. Developed with FastAPI and vanilla JS, it uses a graph-based approach to suggest new friends and visualize connections.",
      image: "/images/friends.png",
      category: "fullstack",
      technologies: ["HTML", "CSS", "Python", "PostgreSQL", "FastAPI"],
      liveUrl: null,
      githubUrl: "https://github.com/Rasmeh27/Friends-Social-Graph-App",
    },
    {
      id: 4,
      title: "Infinity Page",
      description:
        "Modern, website created with HTML, CSS, and JavaScript. It focuses on responsive design and smooth animations, featuring a clean layout and interactive elements.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/31/11/21/shelf-791155_1280.jpg",
      category: "design",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://paginasinfinitas.vercel.app/index.html",
      githubUrl: "https://github.com/Rasmeh27/paginas-infinitas",
    },
    {
      id: 5,
      title: "Text Encryptor",
      description:
        "A simple app to encrypt and decrypt text using a basic algorithm. Built for an Alura Latam challenge, it features a clean, user-friendly interface with HTML and CSS.",
      image:
        "https://kinsta.com/wp-content/uploads/2023/07/what-is-encryption.jpg",
      category: "development",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://rasmeh27.github.io/encriptador-de-texto/",
      githubUrl: "https://github.com/Rasmeh27/encriptador-de-texto",
    },
    {
      id: 6,
      title: "Forum hub - Java Spring Boot",
      description:
        "A Spring Boot app for secure user authentication and management, using JWT for authorization. Includes user login and protected API endpoints for a robust, scalable solution.",
      image: "/images/forumhub.png",
      category: "development",
      technologies: [
        "Java",
        "Spring boot",
        "Auth0 JWT",
        "Spring Security",
        "Jakarta Servlet",
        "PostgreSQL",
      ],
      liveUrl: null,
      githubUrl: "https://github.com/Rasmeh27/forum-hub-java-spring-boot",
    },
    {
      id: 7,
      title: "Currency Converter",
      description:
        "Java console app that converts currencies using the ExchangeRate API. Users select source/destination currencies and enter the amount to convert.",
      image:
        "https://cdn.pixabay.com/photo/2020/06/10/11/19/coin-5282271_1280.jpg",
      category: "development",
      technologies: ["Java", "GSON", "ExchangeRate API"],
      liveUrl: null,
      githubUrl: "https://github.com/Rasmeh27/Conversor-De-Monedas-Java",
    },
    {
      id: 8,
      title: "Raffle System - Fast Racing Tuning",
      description:
        "A web app where users join raffles by submitting a form and payment receipt. Admins manage participants, assign ticket numbers, and filter or export data through a secure panel.",
      image:
        "/images/fastracing-logo.jpg",
      category: "fullstack",
      technologies: ["Python", "React", "TypeScript","Vite","FastAPI","PostgreSQL"],
      liveUrl: "https://rifafastracing.vercel.app",
      githubUrl: null,
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "development", label: "Development" },
    { key: "design", label: "Design" },
    { key: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A selection of projects that showcase my expertise in both
            development and design
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-3 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                      >
                        <Eye size={16} />
                        View
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 px-3 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
