import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import '@/app/home.css';

interface Props {}

const sloganAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const HomeSection: NextPage<Props> = () => {
  const slogan = 'กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต';
  const highlight = [7, 8, 9, 10, 11, 12, 13, 14]; // index of slogan text

  return (
    <Element
      name="home"
      className="min-h-screen flex flex-col justify-center items-center home-banner"
    >
      <div className="flex gap-2 md:gap-4 items-start">
        <motion.div
          initial={{
            x: '14vw',
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="text-[17.5vw] md:text-[8rem] font-extrabold leading-none text-primary"
        >
          KU
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: '5vw',
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          className="flex flex-col py-[1vw] md:py-[.5rem]"
        >
          <div className="text-[8vw] md:text-[4rem] font-bold leading-none tracking-wider text-primary">
            Hackathon
          </div>
          <div className="text-[3.25vw] md:text-[1.8rem] tracking-winder">
            <motion.span
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              aria-hidden
            >
              {slogan.split('').map((char, idx) => {
                return (
                  <motion.span
                    key={idx}
                    variants={sloganAnimation}
                    className={
                      highlight.includes(idx)
                        ? 'text-[#e23776] font-semibold'
                        : ''
                    }
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default HomeSection;
