import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 dark:from-sky-600 dark:via-blue-700 dark:to-indigo-900"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-white">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              I'M JOSH ROSEN — SOFTWARE ENGINEER.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl"
            >
              I solve real-world problems with code.
            </motion.p>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-200">
              <img
                src="src/assets/Smiling man in a navy suit.png"
                alt="Josh Rosen profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
