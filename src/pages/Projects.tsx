import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Cyberpunk E-Commerce",
      description: "A futuristic e-commerce platform with 3D product visualization and AR try-on features.",
      image: "🛍️",
      technologies: ["React", "Three.js", "Node.js", "MongoDB"],
      github: "https://github.com/kamil/cyberpunk-ecommerce",
      live: "https://cyberpunk-ecommerce.com",
      category: "web"
    },
    {
      id: 2,
      title: "Neon Social Network",
      description: "A social media platform with real-time messaging and 3D avatar customization.",
      image: "💬",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/kamil/neon-social",
      live: "https://neon-social.net",
      category: "web"
    },
    {
      id: 3,
      title: "AR Portfolio App",
      description: "Mobile app that brings portfolios to life with augmented reality experiences.",
      image: "📱",
      technologies: ["React Native", "AR Kit", "Three.js", "Firebase"],
      github: "https://github.com/kamil/ar-portfolio",
      live: "https://ar-portfolio.app",
      category: "mobile"
    },
    {
      id: 4,
      title: "3D Game Engine",
      description: "A lightweight 3D game engine built with WebGL and modern JavaScript.",
      image: "🎮",
      technologies: ["WebGL", "TypeScript", "Webpack", "Jest"],
      github: "https://github.com/kamil/3d-engine",
      live: "https://3d-engine-demo.com",
      category: "game"
    },
    {
      id: 5,
      title: "AI Art Generator",
      description: "Web application that generates unique artwork using machine learning algorithms.",
      image: "🎨",
      technologies: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com/kamil/ai-art-generator",
      live: "https://ai-art-generator.com",
      category: "ai"
    },
    {
      id: 6,
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with 3D data visualization.",
      image: "📊",
      technologies: ["React", "D3.js", "WebSocket", "Node.js"],
      github: "https://github.com/kamil/crypto-dashboard",
      live: "https://crypto-dashboard.com",
      category: "web"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', color: 'neon-pink' },
    { id: 'web', name: 'Web Apps', color: 'neon-blue' },
    { id: 'mobile', name: 'Mobile Apps', color: 'neon-green' },
    { id: 'game', name: 'Games', color: 'neon-yellow' },
    { id: 'ai', name: 'AI/ML', color: 'neon-purple' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-neon-bg pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-neon-pink mb-6">Projects Gallery</h1>
          <p className="text-xl text-neon-blue max-w-3xl mx-auto">
            Explore my latest creations - from immersive web experiences to cutting-edge mobile applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-${category.color} text-black border-${category.color}`
                  : `text-${category.color} border-${category.color} hover:bg-${category.color} hover:text-black`
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black bg-opacity-60 rounded-2xl border border-neon-blue overflow-hidden cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-neon-pink to-neon-blue flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neon-pink mb-3">{project.title}</h3>
                <p className="text-neon-blue mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neon-green bg-opacity-20 text-neon-green rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-neon-pink text-black py-2 rounded-lg font-bold hover:bg-neon-blue transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    GitHub
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-neon-blue text-black py-2 rounded-lg font-bold hover:bg-neon-green transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                  >
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black bg-opacity-90 p-8 rounded-2xl border-2 border-neon-pink max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{selectedProject.image}</div>
                <h2 className="text-3xl font-bold text-neon-pink mb-4">{selectedProject.title}</h2>
                <p className="text-neon-blue text-lg leading-relaxed">{selectedProject.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neon-green mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-neon-green bg-opacity-20 text-neon-green rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-neon-pink text-black py-3 rounded-lg font-bold hover:bg-neon-blue transition-colors"
                  onClick={() => window.open(selectedProject.github, '_blank')}
                >
                  View on GitHub
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-neon-blue text-black py-3 rounded-lg font-bold hover:bg-neon-green transition-colors"
                  onClick={() => window.open(selectedProject.live, '_blank')}
                >
                  Live Demo
                </motion.button>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 text-neon-pink text-2xl hover:text-neon-blue transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects; 