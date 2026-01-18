

import { useState, useEffect } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    if (!showHint) return;
    const timer = setTimeout(() => setShowHint(false), 15000);
    return () => clearTimeout(timer);
  }, [showHint]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Samuel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop softwares, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>



      {/* Interactivity hint (shows for 5s on mount) */}
      {showHint && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[28%] z-20 flex flex-col items-center pointer-events-none select-none">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm shadow-lg flex items-center gap-2"
          >
            <FaSyncAlt className="inline-block mr-1 animate-spin-slow" size={20} />
            <span>Drag to rotating the computer!</span>
          </motion.div>
        </div>
      )}

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
