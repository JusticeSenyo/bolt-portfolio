import React from 'react';
import { Code, Database, Server, Layout, Smartphone, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-cyan-500" />,
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "WebGL"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      technologies: ["Node.js", "Python", "Go", "Java", "GraphQL", "REST"]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8 text-cyan-500" />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"]
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"]
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      technologies: ["JavaScript", "Python", "Go", "Java", "C++", "Rust"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Technical Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-black rounded-xl hover:bg-gray-800 transition-all duration-300">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full">
                    {tech}
                  </span>
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