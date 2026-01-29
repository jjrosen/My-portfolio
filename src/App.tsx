import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { siteMeta } from './data/portfolioData';

function App() {
  useEffect(() => {
    document.title = siteMeta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', siteMeta.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = siteMeta.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Josh Rosen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
