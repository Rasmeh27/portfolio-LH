import { ChevronDown, Github, Instagram, Linkedin, Mail } from "lucide-react";

// Colores de las partículas
const colors = [
  "bg-purple-500",
  "bg-pink-400",
  "bg-blue-400",
  "bg-pink-300",
  "bg-cyan-300",
  "bg-red-300",
  "bg-indigo-400"
];

// Utilidad random
const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

// Componente de una sola partícula
const Particle = ({ i }: {i: number}) => {
  const color = colors[i % colors.length];
  const left = getRandom(0, 100);
  const size = getRandom(10, 24);
  const duration = getRandom(6, 12);
  const delay = getRandom(0, 8);

  return (
    <div
      className={`absolute rounded-full opacity-60 ${color} pointer-events-none`}
      style={{
        left: `${left}%`,
        bottom: `-40px`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `fly ${duration}s linear ${delay}s infinite`
      }}
    />
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animación fly embebida */}
      <style>
        {`
          @keyframes fly {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.7;
            }
            80% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) scale(1.2);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Partículas animadas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <Particle key={i} i={i} />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 z-0"></div>
      
      {/* SIN círculos borrosos */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900 mb-2">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Luis Herasme
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4">
              FullStack Developer & UX/UI Designer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, functional digital experiences that bridge the gap between 
              innovative design and robust development.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#projects">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                View My Work
              </button>
            </a>
            <a href="/public/document/Luis-Herarsme-Software-Developer.pdf" download="Resume">
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200 cursor-pointer">
                Download Resume
              </button>
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/Rasmeh27" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200">
              <Github size={24} className="text-gray-600 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/luis-herasme-9a60bb318/" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200">
              <Linkedin size={24} className="text-gray-600 hover:text-blue-600 " />
            </a>
            <a href="mailto:luisherasme4@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200">
              <Mail size={24} className="text-gray-600 hover:text-red-600" />
            </a>
            <a href="https://www.instagram.com/luishr.dev/" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200">
              <Instagram size={24} className="text-gray-600 hover:text-pink-500" />
            </a>
          </div>
          <button
            onClick={scrollToAbout}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} className="text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
