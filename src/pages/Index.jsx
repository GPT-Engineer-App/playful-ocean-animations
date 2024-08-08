import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHub, Twitter, Linkedin, ArrowDown, Code, Brain, Rocket } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', title: 'Anton Osika' },
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'tweets', title: 'Tweets' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className="bg-[#001f3f] text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#003366] bg-opacity-80 backdrop-blur-md">
        <ul className="flex justify-center space-x-6 py-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-[#00ffff] hover:text-[#66ffff] transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <motion.h1
            className="text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Anton Osika
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Building AGI in Europe
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="https://github.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#66ffff]">
              <GitHub size={24} />
            </a>
            <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#66ffff]">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com/in/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#66ffff]">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(0,31,63,0) 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-8"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={32} className="text-[#00ffff]" />
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a passionate AI engineer and entrepreneur with a background in cutting-edge technology. My journey has taken me from CERN to Sana Labs, and now I'm focused on building AGI (Artificial General Intelligence) in Europe.
              </p>
              <p className="text-lg mb-4">
                As the creator of gpt-engineer, I'm working to reduce barriers in software development and empower people to build amazing things with AI.
              </p>
              <p className="text-lg">
                My mission is to push the boundaries of what's possible with AI and make it accessible to everyone.
              </p>
            </div>
            <div className="relative">
              <img src="https://source.unsplash.com/random/400x400?ai" alt="AI Visualization" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]" />
              <motion.div
                className="absolute inset-0 border-4 border-[#00ffff] rounded-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-[#002f5f]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'gpt-engineer', icon: <Code size={48} />, description: 'One prompt generates a codebase. Open-source project for AI-powered code generation.' },
              { title: 'Lovable', icon: <Brain size={48} />, description: 'Building software that builds software. A new AI startup out of Europe.' },
              { title: 'AI Research', icon: <Rocket size={48} />, description: 'Pushing the boundaries of AGI and exploring new frontiers in artificial intelligence.' },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-[#004080] p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-[#00ffff] mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tweets" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Tweets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Introducing gpt-engineer App👶\n\nsince gpt-engineer became the world's most popular codegen project I have been tinkering with the next step: how to make it practical, ie allow anyone to build and deploy web–apps with plain english\n\nMission: Reduce barriers to build",
              "👶🤖 Introducing `gpt-engineer`\n\n▸ One prompt generates a codebase\n▸ Asks clarifying questions\n▸ Generates technical spec\n▸ Writes all necessary code\n▸ Easy to add your own reasoning steps, modify, and experiment\n▸ open source\n▸ Lets you finish a project in one sitting",
              "Happy Valentine's Day everyone!\nAnd happy birthday Dad ❤️(my dad is awesome)\n\nLaunching a new AI startup out of Europe today.\nLovable.\n\nNeedless to say, we're very excited about Lovable. We think it will be huge:\n\nWe're building software that builds software.",
            ].map((tweet, index) => (
              <motion.div
                key={index}
                className="bg-[#003366] p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-sm">{tweet}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-[#002f5f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Interested in collaborating or just want to say hi? Feel free to reach out!
          </p>
          <a
            href="mailto:anton@example.com"
            className="inline-block bg-[#00ffff] text-[#001f3f] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#66ffff] transition-colors"
          >
            Send me an email
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#66ffff]">
              <GitHub size={32} />
            </a>
            <a href="https://twitter.com/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#66ffff]">
              <Twitter size={32} />
            </a>
            <a href="https://linkedin.com/in/antonosika" target="_blank" rel="noopener noreferrer" className="text-[#00ffff] hover:text-[#66ffff]">
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#001f3f] text-center py-6">
        <p>&copy; 2024 Anton Osika. All rights reserved.</p>
      </footer>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${scrollY % window.innerWidth}px ${scrollY % window.innerHeight}px, rgba(0,255,255,0.1) 0%, rgba(0,31,63,0) 10%)`,
        }}
      />
    </div>
  );
};

export default Index;
