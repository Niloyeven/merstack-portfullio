import React from 'react';
import { motion } from 'framer-motion';
import { SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiJsonwebtokens } from "react-icons/si";
import { 
  FiDownload, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiMapPin, 
  FiPhone,
  FiExternalLink,
  FiMenu,
  FiX,
  FiCode,
  FiServer,
  FiDatabase,
  FiShield,
  FiGitBranch,
  FiGithub as FiGitHubIcon,
  FiHome,
  FiUser,
  FiBriefcase,
  FiSend
} from 'react-icons/fi';
import { 
  SiReact, 
  SiTailwindcss, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit
} from 'react-icons/si';
import { BsVectorPen } from 'react-icons/bs';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with React, Redux, Node.js, MongoDB",
      tech: ["React", "Redux", "Node.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      tech: ["React", "Tailwind", "Express", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard with JWT authentication",
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      github: "#",
      live: "#"
    }
  ];

  // Skills data with icons
  const frontendSkills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-500" },
    { name: "React JS", icon: SiReact, color: "text-blue-400" }
  ];

  const backendSkills = [
    { name: "Node JS", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Express JS", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: FiGitHubIcon, color: "text-white" }
  ];

  return (
    <>
     {/* Navigation Bar - Sticky with Different Colors */}
      <nav className="sticky top-0 left-0 z-50 backdrop-blur-xl bg-[#0A0C12]/95 border-b border-[#1E2A3A]/30 shadow-xl shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with enhanced glow */}
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                &lt;Niloy/&gt;
              </span>
              <span className="ml-3 text-sm text-gray-500 hidden sm:inline font-light tracking-wider">
                Designer
              </span>
            </div>

            {/* Desktop Navigation - Different Colors for each item */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="#home" 
                className="flex items-center gap-2 px-5 py-2.5 text-gray-400 hover:text-cyan-400 transition-all duration-300 rounded-xl hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 group"
              >
                <FiHome className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Home</span>
                <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a 
                href="#skills" 
                className="flex items-center gap-2 px-5 py-2.5 text-gray-400 hover:text-purple-400 transition-all duration-300 rounded-xl hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30 group"
              >
                <FiCode className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Skills</span>
                <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a 
                href="#projects" 
                className="flex items-center gap-2 px-5 py-2.5 text-gray-400 hover:text-indigo-400 transition-all duration-300 rounded-xl hover:bg-indigo-500/10 border border-transparent hover:border-indigo-500/30 group"
              >
                <FiBriefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Projects</span>
                <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 px-5 py-2.5 text-gray-400 hover:text-pink-400 transition-all duration-300 rounded-xl hover:bg-pink-500/10 border border-transparent hover:border-pink-500/30 group"
              >
                <FiSend className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Contact</span>
                <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 text-gray-400 hover:text-white border border-gray-700/50 shadow-lg"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Different Colors */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 inset-x-0 bg-[#0A0C12]/95 backdrop-blur-xl border-t border-[#1E2A3A]/30 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-3">
              <a 
                href="#home" 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-3 px-4 py-3.5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all group"
              >
                <FiHome className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Home</span>
              </a>
              <a 
                href="#skills" 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-3 px-4 py-3.5 text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all group"
              >
                <FiCode className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Skills</span>
              </a>
              <a 
                href="#projects" 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-3 px-4 py-3.5 text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-xl transition-all group"
              >
                <FiBriefcase className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Projects</span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-3 px-4 py-3.5 text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 rounded-xl transition-all group"
              >
                <FiSend className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Contact</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
 
    <div className="min-h-screen bg-gradient-to-br from-[#0A0C12] via-[#0B0F15] to-[#080B0E] text-gray-100 relative overflow-x-hidden">


     

      {/* Hero Section with Rounded Man Image on Right */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              🚀 Available for work
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="text-gray-100">Niloy Kumar Tarafder</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
               Graphics Designer
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Crafting robust full-stack applications with modern JavaScript technologies. 
              Specialized in React, Node.js, and MongoDB ecosystems.
            </p>

            {/* Download Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 group"
            >
              <FiDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </motion.button>

            {/* Social Links - Dark Theme */}
            <div className="flex items-center gap-4 pt-6">
              <a href="#" className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group">
                <FiGithub className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 group">
                <FiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-purple-500/50 group">
                <FiMail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl hover:from-gray-700/80 hover:to-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50 group">
                <FiGitBranch className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Side - Rounded Man Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main rounded image with glowing border */}
              <div className="relative h-80 w-80 md:w-100 md:h-100 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-2xl shadow-cyan-500/30">
                <img 
                  src="https://i.ibb.co.com/7JjvCp40/514216224-3594997643967816-5881922270589536192-n.jpg"
                  alt="Professional MERN Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-transparent to-indigo-500/30 mix-blend-overlay"></div>
              </div>
              
              {/* Animated rings */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-30 blur-xl animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 opacity-20 blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-10 blur-3xl animate-pulse delay-2000"></div>
              
              {/* Floating tech icons around the image */}
              <div className="absolute -top-6 -right-6 p-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-xl">
                <SiAdobephotoshop className="w-8 h-8 text-cyan-400 animate-spin-slow" style={{ animation: 'spin 8s linear infinite' }} />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-green-500/30 shadow-xl">
                <SiAdobeillustrator className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute top-1/2 -right-8 p-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-xl">
                <PiFigmaLogoFill  className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="absolute top-1/4 -left-8 p-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-xl">
                <BsVectorPen className="w-8 h-8 text-cyan-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Full-stack development with modern tools and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/60"
          >
            <div className="flex items-center gap-3 mb-6">
              <SiReact className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">Frontend Development</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 p-3 bg-gray-900/60 rounded-lg border border-gray-800">
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/60"
          >
            <div className="flex items-center gap-3 mb-6">
              <SiNodedotjs className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">Backend & DevOps</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 p-3 bg-gray-900/60 rounded-lg border border-gray-800">
                  <skill.icon className={`w-5 h-5 ${skill.color}`} />
                  <span className="text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world applications built with MERN stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/60 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-gray-900/60 text-gray-400 rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                    <FiGithub className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-1 text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                    <FiExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 mb-8">
              I'm always interested in hearing about new opportunities and exciting projects.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <FiMail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:dev@mernstack.com" className="text-gray-300 hover:text-cyan-400">niloyeven@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <FiPhone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-cyan-400">+8801316187171</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg">
                  <FiMapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-300">Jhenaidah Kulna Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/60"
          >
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900/60 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500/50 text-gray-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                &lt;Shagor/&gt;
              </span>
              <p className="mt-4 text-sm text-gray-500">
                Building robust web applications with modern JavaScript technologies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-sm text-gray-500 hover:text-cyan-400 transition">Home</a></li>
                <li><a href="#skills" className="text-sm text-gray-500 hover:text-cyan-400 transition">Skills</a></li>
                <li><a href="#projects" className="text-sm text-gray-500 hover:text-cyan-400 transition">Projects</a></li>
                <li><a href="#contact" className="text-sm text-gray-500 hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">Tech Stack</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-500">MongoDB</li>
                <li className="text-sm text-gray-500">Express JS</li>
                <li className="text-sm text-gray-500">React JS</li>
                <li className="text-sm text-gray-500">Node JS</li>
              </ul>
            </div>
            
            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <FiGithub className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <FiLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <FiGitBranch className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800/50 text-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} MERN Stack Developer. All rights reserved. Built with React, Express & MongoDB
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
       </>
  );
};

export default App;