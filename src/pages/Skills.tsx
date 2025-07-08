import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
  icon: string;
  description: string;
}

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const skills: Skill[] = [
    // Frontend Skills
    { name: 'React', level: 95, category: 'frontend', color: '#61DAFB', icon: '⚛️', description: 'Advanced React with hooks, context, and performance optimization' },
    { name: 'TypeScript', level: 90, category: 'frontend', color: '#3178C6', icon: '📘', description: 'Type-safe development with advanced TypeScript patterns' },
    { name: 'Three.js', level: 85, category: 'frontend', color: '#000000', icon: '🎮', description: '3D graphics and interactive experiences' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend', color: '#06B6D4', icon: '🎨', description: 'Utility-first CSS framework for rapid UI development' },
    
    // Backend Skills
    { name: 'Node.js', level: 88, category: 'backend', color: '#339933', icon: '🟢', description: 'Server-side JavaScript with Express and advanced patterns' },
    { name: 'Python', level: 82, category: 'backend', color: '#3776AB', icon: '🐍', description: 'Backend development with Django and Flask' },
    { name: 'PostgreSQL', level: 80, category: 'backend', color: '#336791', icon: '🐘', description: 'Relational database design and optimization' },
    { name: 'MongoDB', level: 85, category: 'backend', color: '#47A248', icon: '🍃', description: 'NoSQL database with aggregation pipelines' },
    
    // Tools & Others
    { name: 'Git', level: 90, category: 'tools', color: '#F05032', icon: '📚', description: 'Version control and collaborative development' },
    { name: 'Docker', level: 75, category: 'tools', color: '#2496ED', icon: '🐳', description: 'Containerization and deployment' },
    { name: 'AWS', level: 78, category: 'tools', color: '#FF9900', icon: '☁️', description: 'Cloud infrastructure and services' },
    { name: 'Figma', level: 85, category: 'design', color: '#F24E1E', icon: '🎯', description: 'UI/UX design and prototyping' }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', color: 'neon-pink' },
    { id: 'frontend', name: 'Frontend', color: 'neon-blue' },
    { id: 'backend', name: 'Backend', color: 'neon-green' },
    { id: 'tools', name: 'Tools', color: 'neon-yellow' },
    { id: 'design', name: 'Design', color: 'neon-purple' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
          <h1 className="text-5xl font-extrabold text-neon-pink mb-6">Skills & Expertise</h1>
          <p className="text-xl text-neon-blue max-w-3xl mx-auto">
            My technical arsenal - from frontend frameworks to backend systems and design tools
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

        {/* Skills Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-black bg-opacity-60 p-6 rounded-2xl border border-neon-blue cursor-pointer group"
              onClick={() => setSelectedSkill(skill)}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-neon-pink">{skill.name}</h3>
                </div>
                <span className="text-neon-green font-bold">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-3 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              
              {/* Category Badge */}
              <div className="flex justify-between items-center">
                <span className="text-neon-blue text-sm capitalize">{skill.category}</span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-neon-yellow text-lg"
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Tree Visualization */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-green mb-16"
        >
          <h2 className="text-3xl font-bold text-neon-green text-center mb-8">Skill Tree</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Frontend Branch */}
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-neon-blue mb-4">Frontend</h3>
              <div className="space-y-2">
                {skills.filter(s => s.category === 'frontend').map(skill => (
                  <div key={skill.name} className="text-sm text-neon-green">
                    {skill.name} ({skill.level}%)
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Branch */}
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-neon-green mb-4">Backend</h3>
              <div className="space-y-2">
                {skills.filter(s => s.category === 'backend').map(skill => (
                  <div key={skill.name} className="text-sm text-neon-green">
                    {skill.name} ({skill.level}%)
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools Branch */}
            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-neon-yellow mb-4">Tools</h3>
              <div className="space-y-2">
                {skills.filter(s => s.category === 'tools').map(skill => (
                  <div key={skill.name} className="text-sm text-neon-green">
                    {skill.name} ({skill.level}%)
                  </div>
                ))}
              </div>
            </div>
            
            {/* Design Branch */}
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-neon-purple mb-4">Design</h3>
              <div className="space-y-2">
                {skills.filter(s => s.category === 'design').map(skill => (
                  <div key={skill.name} className="text-sm text-neon-green">
                    {skill.name} ({skill.level}%)
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-black bg-opacity-90 p-8 rounded-2xl border-2 border-neon-pink max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedSkill.icon}</div>
              <h2 className="text-3xl font-bold text-neon-pink mb-4">{selectedSkill.name}</h2>
              <div className="text-2xl font-bold text-neon-green mb-4">{selectedSkill.level}%</div>
              <p className="text-neon-blue mb-6">{selectedSkill.description}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon-pink text-black px-6 py-3 rounded-lg font-bold hover:bg-neon-blue transition-colors"
                onClick={() => setSelectedSkill(null)}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Skills; 