import React from 'react';
import { Terminal, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      
      <div className="relative z-10 text-center px-4">
        <Terminal className="w-16 h-16 mx-auto mb-8 text-cyan-500" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            John Doe
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Fullstack Developer & Software Architect</p>
        <div className="typing-effect text-lg md:text-xl text-cyan-400 mb-12">
          Building the future, one line of code at a time
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500/10 transition-all duration-300">
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;