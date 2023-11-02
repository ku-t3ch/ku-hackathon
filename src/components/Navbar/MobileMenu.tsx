import { NavLinksInterface } from '@/interfaces/NavbarInterface';
import { X } from 'lucide-react';
import { FC } from 'react';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NavScrollLink } from './NavScrollLink';

interface NavbarMobileProps {
  isOpen: boolean;
  closeMenu: () => void;
  data?: NavLinksInterface[];
}

const navbarAnimation = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
  },
};

const MobileMenu: FC<NavbarMobileProps> = ({
  isOpen = false,
  closeMenu,
  data = [],
}) => {
  return (
    <motion.div
      variants={navbarAnimation}
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      onAnimationEnd={() => console.log('ends')}
      transition={{
        duration: 0.38,
      }}
      className="fixed h-full w-full bg-[#111827] z-[1000] p-[1.5rem]"
    >
      <div className="w-full mb-[1rem] flex">
        <div>
          <Image
            src={`${process.env.cdn}/navbar-logo.webp`}
            width={0}
            height={0}
            alt="navbar-logo"
            className="w-[2.5rem]"
            unoptimized
          />
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="p-[.25rem]" onClick={closeMenu}>
            <X />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-[.5rem]">
        {data.map((menu, idx) => {
          return (
            <NavScrollLink
              key={idx}
              to={menu.to}
              className="h-[3rem]"
              onClick={() => closeMenu()}
            >
              {menu.children}
            </NavScrollLink>
          );
        })}
      </div>
    </motion.div>
  );
};

const NavItem = tw.div`
  h-[2.5rem]
  flex
  items-center
  justify-start
  font-medium
  hover:text-primary
  hover:shadow-[inset_0_-2.5px]
`;

export default MobileMenu;
