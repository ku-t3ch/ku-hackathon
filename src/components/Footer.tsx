import { NextPage } from 'next';
import { Facebook, Instagram } from 'lucide-react';

interface Props {}

const socials = [
  {
    name: 'facebook',
    icon: <Facebook size={24} />,
    link: 'https://www.facebook.com/ku.t3ch',
  },
  {
    name: 'instagram',
    icon: <Instagram size={24} />,
    link: 'https://www.instagram.com/ku.t3ch/',
  },
];

const Footer: NextPage<Props> = () => {
  return (
    <div className="mt-[10rem] w-full py-[2rem] bg-default-50">
      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="flex justify-center items-center gap-5">
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
        <div className="mt-[1rem] text-xs text-default-500">
          &copy; 2023 KU TECH (Organizer). ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
