import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Enterprise-level analytics platform utilizing machine learning for predictive insights. Built with Python, TensorFlow, and React.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    tags: ["React", "Python", "TensorFlow", "AWS"],
    github: "#",
    live: "#"
  },
  {
    title: "Blockchain Trading System",
    description: "Decentralized trading platform built on Ethereum. Features smart contracts and real-time market data.",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    tags: ["Solidity", "Web3.js", "React", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    title: "IoT Smart Home Platform",
    description: "Comprehensive IoT platform for smart home automation. Includes mobile app and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    tags: ["React Native", "Node.js", "MongoDB", "MQTT"],
    github: "#",
    live: "#"
  },
  {
    title: "Cloud-Native Microservices",
    description: "Scalable microservices architecture for e-commerce platform. Implements event-driven architecture.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    tags: ["Kubernetes", "Docker", "Go", "gRPC"],
    github: "#",
    live: "#"
  },
  {
    title: "AR Development Tool",
    description: "Augmented reality development platform for creating immersive experiences. Features real-time 3D rendering.",
    image: "https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    tags: ["Unity", "C#", "ARKit", "WebGL"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
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