'use client';
import { NextPage } from 'next';
import {
  Navbar as NavbarComponent,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import React, { useEffect } from 'react';
import { ClipboardEdit } from 'lucide-react';
import Scroll, { Events, animateScroll } from 'react-scroll';
import { NavLinksInterface } from '@/interfaces/NavbarInterface';
import { usePathname } from 'next/navigation';

interface Props {}

// to = ถ้าต้องการให้ redirect ไป page อื่นๆ ให้ใช้ / นำหน้า เช่น /register, /join, ...
const navLinks: NavLinksInterface[] = [
  {
    to: '/join',
    children: (
      <Button color="primary" radius="none" variant="flat" size="sm">
        <ClipboardEdit size={15} />
        Apply Now
      </Button>
    ),
    mobileChildren: (
      <>
        <ClipboardEdit size={15} className="mr-1.5" />
        Apply Now
      </>
    ),
  },
  {
    to: 'time-line',
    children: 'Timeline',
  },
  {
    to: 'benefit',
    children: 'Prizes',
  },
  {
    to: 'gurus',
    children: 'Gurus',
  },
  {
    to: 'issues',
    children: 'Issues',
  },
  {
    to: 'partners',
    children: 'Supports',
  },
  {
    to: 'faqs',
    children: 'FAQs',
  },
];

const Navbar: NextPage<Props> = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    Events.scrollEvent.register('end', function () {
      console.log(arguments[0]);
    });

    return () => {
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="fixed w-full z-[999]">
      <NavbarComponent onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand
            onClick={() => {
              if (pathname == '/') {
                animateScroll.scrollToTop();
              } else {
                location.replace('/');
              }
              setIsMenuOpen(false);
            }}
            className="cursor-pointer"
          >
            <p className="font-bold text-inherit">KU Hackathon</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navLinks.map((nav, idx) => {
            return (
              <NavbarItem key={idx}>
                {nav.to.startsWith('/') ? (
                  <Link href={nav.to} className="text-white">
                    <>{nav.children}</>
                  </Link>
                ) : typeof nav.children == 'string' ? (
                  <LinkScroll to={nav.to} className="text-md">
                    {nav.children}
                  </LinkScroll>
                ) : (
                  <div>{nav?.children}</div>
                )}
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarMenu>
          {navLinks.map((nav, idx) => {
            const children = nav?.mobileChildren ?? nav.children;

            return (
              <NavbarMenuItem key={idx}>
                {nav.to.startsWith('/') ? (
                  <Link href={nav.to} className="text-white">
                    <>{children}</>
                  </Link>
                ) : typeof children == 'string' ? (
                  <LinkScroll
                    to={nav.to}
                    onSetActive={() => {
                      setIsMenuOpen(false);
                    }}
                    className="text-[16px]"
                  >
                    {children}
                  </LinkScroll>
                ) : (
                  <>{nav?.children}</>
                )}
              </NavbarMenuItem>
            );
          })}
        </NavbarMenu>
      </NavbarComponent>
    </div>
  );
};

interface LinkScrollProps {
  to: string;
  className?: string;
  onSetActive?: () => void;
  children: React.ReactNode;
}

const LinkScroll: NextPage<LinkScrollProps> = ({
  to,
  className = '',
  onSetActive,
  children,
}) => {
  return (
    <Scroll.Link
      to={to}
      duration={800}
      smooth="easeInOutQuart"
      onClick={onSetActive}
      activeClass="text-primary"
      spy={true}
      className={`${className} hover:text-primary cursor-pointer`}
    >
      {children}
    </Scroll.Link>
  );
};

export default Navbar;
