import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import BannerSlider from '../BannerSlider';
import { FC, useState } from 'react';

interface Props {}

const sloganAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const prefix = 'https://s3.tech.nisit.ku.ac.th/assets/ku-hackathon/banners/';

const banners = [
  {
    label: 'วิทยาเขตบางเขน',
    source: prefix + 'bkn-banner.webp',
  },
  {
    label: 'วิทยาเขตกำแพงแสน',
    source: prefix + 'kps-banner.webp',
  },
  {
    label: 'วิทยาเขตศรีราชา',
    source: prefix + 'src-banner.webp',
  },
  {
    label: 'วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร',
    source: prefix + 'scs-banner.webp',
  },
  {
    label: 'วิทยาเขตสุพรรณบุรี',
    source: prefix + 'sbc-banner.webp',
  },
];

const HomeSection: NextPage<Props> = () => {
  return (
    <Element name="home" className="h-screen relative z-[9]">
      <BannerSlider data={banners} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10]">
        <HackathonLogo />
      </div>
    </Element>
  );
};

const HackathonLogo: FC<{}> = () => {
  const slogan = 'กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต';
  const highlight = [7, 8, 9, 10, 11, 12, 13, 14]; // index of slogan text

  return (
    <div className="flex gap-2 md:gap-4 items-start">
      <motion.div
        initial={{
          x: '100%',
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 0.1,
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
          delay: 0.65,
          duration: 0.5,
        }}
        className="flex flex-col py-[1vw] md:py-[.5rem]"
      >
        <div className="text-[8vw] md:text-[4rem] font-bold leading-none tracking-wider text-primary">
          Hackathon
        </div>
        <div className="text-[3.25vw] md:text-[1.65rem] tracking-winder">
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
  );
};

export default HomeSection;
