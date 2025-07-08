import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kamil',
      icon: '🐙',
      color: 'neon-green'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kamil',
      icon: '💼',
      color: 'neon-blue'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kamil',
      icon: '🐦',
      color: 'neon-pink'
    },
    {
      name: 'Email',
      url: 'mailto:kamil@example.com',
      icon: '📧',
      color: 'neon-yellow'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-5xl font-extrabold text-neon-pink mb-6">Get In Touch</h1>
          <p className="text-xl text-neon-blue max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-blue"
          >
            <h2 className="text-3xl font-bold text-neon-blue mb-6">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-neon-green font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black bg-opacity-50 border border-neon-blue rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-neon-green font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black bg-opacity-50 border border-neon-blue rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-neon-green font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black bg-opacity-50 border border-neon-blue rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label className="block text-neon-green font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-black bg-opacity-50 border border-neon-blue rounded-lg px-4 py-3 text-white focus:border-neon-pink focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full bg-neon-pink text-black py-4 rounded-lg font-bold hover:bg-neon-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-green">
              <h2 className="text-3xl font-bold text-neon-green mb-6">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">👨‍💻</span>
                  <div>
                    <p className="text-neon-blue font-semibold">Name</p>
                    <p className="text-white">Mohd Kamil</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="text-neon-blue font-semibold">Email</p>
                    <p className="text-white">kamil@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🌍</span>
                  <div>
                    <p className="text-neon-blue font-semibold">Location</p>
                    <p className="text-white">Available Worldwide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <p className="text-neon-blue font-semibold">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-purple">
              <h2 className="text-3xl font-bold text-neon-purple mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className={`bg-black bg-opacity-50 p-4 rounded-xl border border-${social.color} text-center hover:bg-${social.color} hover:text-black transition-all duration-300`}
                  >
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <p className="font-bold">{social.name}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-black bg-opacity-60 p-8 rounded-2xl border border-neon-yellow"
        >
          <h2 className="text-3xl font-bold text-neon-yellow mb-4">Ready to Start?</h2>
          <p className="text-neon-blue mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, 
            I'm always excited to hear from fellow creators and innovators.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-yellow text-black px-8 py-4 rounded-lg font-bold hover:bg-neon-pink transition-colors"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Create Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 