import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl -z-10"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                About Me
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              I'm a passionate fullstack developer with years of experience in building scalable applications and innovative solutions. My expertise spans across modern web technologies, cloud architecture, and emerging tech like AI and blockchain.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Briefcase className="w-6 h-6 text-cyan-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Experience</h3>
                  <p className="text-gray-400">Senior Software Engineer at Yiska</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-6 h-6 text-cyan-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Education</h3>
                  <p className="text-gray-400">BSC.Information Technology</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-cyan-500 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Achievements</h3>
                  <p className="text-gray-400">placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;