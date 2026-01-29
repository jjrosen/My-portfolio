import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { capstone, miniCapstone, projects } from '../data/portfolioData';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
  repoUrl: string;
  imageLeft?: boolean;
}

function FeaturedProject({ title, description, techStack, image, imageAlt, liveUrl, repoUrl, imageLeft = true }: ProjectProps) {
  return (
    <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mb-16`}>
      <motion.div
        className="flex-1"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={`https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800`}
            alt={imageAlt}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </motion.div>

      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, techStack, image, imageAlt, liveUrl, repoUrl }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="overflow-hidden">
        <img
          src={`https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600`}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto">
          <FeaturedProject {...capstone} imageLeft={true} />

          <FeaturedProject {...miniCapstone} imageLeft={false} />

          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
