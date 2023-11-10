'use client';
import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { ClipboardEdit, AlignJustify } from 'lucide-react';
import { scroller } from 'react-scroll';
import { NavLinksInterface } from '@/interfaces/NavbarInterface';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import MobileMenu from './MobileMenu';
import { NavScrollLink } from './NavScrollLink';

interface Props {}

const navLinks: NavLinksInterface[] = [
  {
    to: 'problems',
    children: 'ปัญหาที่พบ',
  },
  {
    to: 'gurus',
    children: 'วิทยากร',
  },
//   {
//     to: 'join',
//     children: 'สาขาที่รับสมัคร',
//   },
  {
    to: 'benefit',
    children: 'รางวัล',
  },
  {
    to: 'location',
    children: 'สถานที่จัด',
  },
  {
    to: 'time-line',
    children: 'กำหนดการ',
  },
  {
    to: 'faqs',
    children: 'คำถามที่พบบ่อย',
  },
];

const Navbar: NextPage<Props> = () => {
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);

  const handleScroll = () => {
    setShowBackground(window.scrollY >= 70);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (path: string) => {
    scroller.scrollTo(path, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleOnClickApply = () => {
    scrollTo('join');
  };

  return (
    <>
      <NavbarContainer
        $isBlur={showBackground}
        $isShowBackground={showBackground}
      >
        <NavbarBody>
          {/* desktop brand */}
          <NavbarBrand className="hidden lg:inline">
            <Image
              src={`${process.env.cdn}/navbar-logo.webp`}
              width={0}
              height={0}
              alt="navbar-logo"
              className="w-[3.5rem]"
              onClick={() => scrollTo('home')}
              unoptimized
              priority
            />
          </NavbarBrand>

          {/* mobile brand */}
          <NavbarBrand className="lg:hidden">
            <div
              className="flex items-center gap-2"
              onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
            >
              <AlignJustify size={28} />
              <span>เมนู</span>
            </div>
          </NavbarBrand>

          {/* desktop content */}
          <NavbarContent className="hidden lg:flex">
            {navLinks.map((menu, idx) => {
              return (
                <NavScrollLink key={idx} to={menu.to} className="h-full">
                  {menu.children}
                </NavScrollLink>
              );
            })}
            <Button
              color="primary"
              size="md"
              className="text-[#2D3648] h-full font-semibold rounded-[.25rem]"
              onClick={handleOnClickApply}
            >
              <ClipboardEdit size={16} />
              <span>ลงทะเบียน</span>
            </Button>
          </NavbarContent>

          {/* mobile content */}
          <NavbarContent className="lg:hidden">
            <Button
              color="primary"
              size="md"
              className="h-[2.25rem] text-[#2D3648] font-semibold rounded-[.25rem]"
              onClick={handleOnClickApply}
            >
              <ClipboardEdit size={16} />
              <span>ลงทะเบียน</span>
            </Button>
          </NavbarContent>
        </NavbarBody>
      </NavbarContainer>
      <MobileMenu
        isOpen={isOpenMobileMenu}
        closeMenu={() => setIsOpenMobileMenu(false)}
        data={navLinks}
      />
    </>
  );
};

const NavbarContainer: any = tw.div`
  fixed
  w-full
  z-[999]
  border-b
  border-[#2D3648]
  shadow-sm
  ${(p: any) => p.$isBlur && 'backdrop-blur'}
  ${(p: any) =>
    p.$isShowBackground ? 'bg-[#0D111C] bg-opacity-80' : 'transparent'}
`;

const NavbarBody = tw.nav`
  flex
  items-center
  w-full
  py-[1rem]
  px-[1.25rem]
  mx-auto
  max-w-[80rem]
`;

const NavbarBrand = tw.div`
  flex
  items-center
`;

const NavbarContent = tw.div`
  w-full
  h-[2.5rem]
  flex
  gap-[1.5rem]
  items-center
  justify-end
`;

const NavItem = tw.div`
  h-full
  flex
  items-center
  justify-center
  font-medium
  hover:text-primary
  hover:shadow-[inset_0_-2.5px]
`;

export default Navbar;
