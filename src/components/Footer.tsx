import { NextPage } from 'next';
import { Facebook, Globe, Instagram, X } from 'lucide-react';

interface Props {}

const socials = [
  {
    name: 'facebook',
    icon: <Facebook size={20} />,
    link: 'https://www.facebook.com/KasetsartUniversity',
  },
  {
    name: 'instagram',
    icon: <Instagram size={20} />,
    link: 'https://www.instagram.com/kasetsart_ku',
  },
  {
    name: 'twitter',
    icon: <X size={20} />,
    link: 'https://twitter.com/kasetsart_ku',
  },
  {
    name: 'website',
    icon: <Globe size={20} />,
    link: 'https://www.ku.ac.th',
  },
];

const Footer: NextPage<Props> = () => {
  return (
    <div className="mt-[10rem] w-full p-[2rem] bg-[#0f1420]">
      <div className="flex flex-col-reverse gap-[1rem] sm:flex-row">
        <div className="w-full text-xs sm:text-sm text-center sm:text-start text-default-500">
          &copy; 2023 Kasetsart University. All Rights Reserved.
        </div>
        <div className="flex gap-[1rem] justify-center sm:justify-end items-center">
          {socials.map((social) => {
            return (
              <a
                role="button"
                href={social.link}
                target="__blank"
                key={social.name}
                className="text-default-600 hover:text-default-800"
              >
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
