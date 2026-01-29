import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';
import { resumeURL } from '../data/portfolioData.js';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const wiggleVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          variants={wiggleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white inline-block w-full"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="joshrosen281@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="www.linkedin.com/in/joshuajrosen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            <a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
            >
              <Download size={20} />
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
