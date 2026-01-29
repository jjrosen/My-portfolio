import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutMe, funFacts } from '../data/portfolioData';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
            {aboutMe}
          </p>

          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Fun Facts
          </h3>

          <div ref={ref} className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ delay: index * 0.2, duration: 0.4 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-700 dark:text-gray-300">{fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
