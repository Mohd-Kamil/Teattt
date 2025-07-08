import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: '2023',
      title: 'Senior Developer',
      description: 'Leading full-stack development projects with React and Node.js',
      icon: '🚀'
    },
    {
      year: '2022',
      title: 'Full-Stack Developer',
      description: 'Built scalable web applications and mobile apps',
      icon: '💻'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      description: 'Specialized in React, TypeScript, and modern UI/UX',
      icon: '🎨'
    },
    {
      year: '2020',
      title: 'Web Designer',
      description: 'Started journey in digital design and development',
      icon: '🌟'
    }
  ];

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', level: 90, color: '#3178C6' },
    { name: 'Three.js', level: 85, color: '#000000' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'Python', level: 82, color: '#3776AB' },
    { name: 'UI/UX Design', level: 92, color: '#FF4FCE' }
  ];

  return (
    <div className="min-h-screen bg-neon-bg pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-neon-pink mb-6">About Me</h1>
          <p className="text-xl text-neon-blue max-w-3xl mx-auto">
            Passionate web developer and designer creating immersive digital experiences 
            with cutting-edge technology and creative vision.
          </p>
        </motion.div>

        {/* Personal Info Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Left Column - Personal Info */}
          <div className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-blue">
            <h2 className="text-3xl font-bold text-neon-pink mb-6">Personal Info</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-neon-green text-2xl">👨‍💻</span>
                <div>
                  <p className="text-neon-blue font-semibold">Name</p>
                  <p className="text-white">Mohd Kamil</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-neon-green text-2xl">🎯</span>
                <div>
                  <p className="text-neon-blue font-semibold">Role</p>
                  <p className="text-white">Full-Stack Developer & Designer</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-neon-green text-2xl">🌍</span>
                <div>
                  <p className="text-neon-blue font-semibold">Location</p>
                  <p className="text-white">Digital Realm</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-neon-green text-2xl">🎓</span>
                <div>
                  <p className="text-neon-blue font-semibold">Experience</p>
                  <p className="text-white">4+ Years in Web Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Graph */}
          <div className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-green">
            <h2 className="text-3xl font-bold text-neon-green mb-6">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-neon-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="h-3 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-neon-yellow text-center mb-12">Journey Timeline</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-pink to-neon-blue"></div>
            
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-black bg-opacity-80 p-6 rounded-xl border border-neon-purple cursor-pointer"
                    onClick={() => setActiveTimeline(index)}
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-neon-purple mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-neon-pink mb-2">{item.title}</h4>
                    <p className="text-neon-blue">{item.description}</p>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-6 h-6 rounded-full border-4 border-white ${
                      activeTimeline === index ? 'bg-neon-yellow' : 'bg-neon-pink'
                    }`}
                  />
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-yellow mb-16"
        >
          <h2 className="text-3xl font-bold text-neon-yellow mb-6">My Story</h2>
          <div className="text-neon-blue space-y-4 text-lg leading-relaxed">
            <p>
              I'm a passionate developer who believes in creating digital experiences that not only 
              function flawlessly but also inspire and engage users on a deeper level.
            </p>
            <p>
              My journey in web development started with a curiosity for how things work on the internet, 
              which evolved into a passion for building immersive, interactive experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, experimenting with 3D graphics, 
              or contributing to open-source projects that push the boundaries of what's possible on the web.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 