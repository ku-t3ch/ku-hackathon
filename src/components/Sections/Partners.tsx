import { NextPage } from 'next';
import { Element } from 'react-scroll';
import Image from 'next/image';

interface Props {}

const partners = [
  {
    name: 'KU Startup',
    image: `${process.env.cdn}/partners/KUSTARTUP.webp`,
    link: 'https://www.facebook.com/Kustartup',
  },
  {
    name: 'KU Tech',
    image: `${process.env.cdn}/partners/KUTECH.webp`,
    link: 'https://www.facebook.com/ku.t3ch',
  },
  {
    name: 'Google Developer Student Clubs',
    image: `${process.env.cdn}/partners/GDSCKU.webp`,
    link: 'https://www.facebook.com/gdsc.ku/',
  },
  {
    name: 'Office of Computer Services',
    image: `${process.env.cdn}/partners/OCS.webp`,
    link: 'https://web.facebook.com/ocs.ku',
  },
  {
    name: 'Kasetsart University',
    image: `${process.env.cdn}/partners/KU.webp`,
    link: 'https://www.facebook.com/SDKUkasetsart',
  },
];

const Partners: NextPage<Props> = () => {
  return (
    <div className="max-w-8xl mx-auto w-full px-3 py-5 flex flex-col bg-[#1F2937] shadow-xl">
      <div className="flex flex-nowarp place-content-evenly">
        {partners.map((partner, index) => (
          <a key={index} href={partner.link} target="__blank">
            <Image
              src={partner.image}
              width={48}
              height={48}
              alt={partner.name}
              className="w-[2rem] sm:w-[3rem] grayscale transition duration-1000 hover:grayscale-0"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
