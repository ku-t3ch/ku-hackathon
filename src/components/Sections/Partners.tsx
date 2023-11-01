import { NextPage } from 'next';
import { Element } from 'react-scroll';
import Image from 'next/image';

interface Props {}

const prefix = 'https://s3.tech.nisit.ku.ac.th/assets/ku-hackathon/partners/';

const partners = [
  {
    name: 'KU Startup',
    image: prefix + 'KUSTARTUP.webp',
    link: 'https://www.facebook.com/Kustartup',
  },
  {
    name: 'KU Tech',
    image: prefix + 'KUTECH.webp',
    link: 'https://www.facebook.com/ku.t3ch',
  },
  {
    name: 'Google Developer Student Clubs',
    image: prefix + 'GDSCKU.webp',
    link: 'https://www.facebook.com/gdsc.ku/',
  },
  {
    name: 'Office of Computer Services',
    image: prefix + 'OCS.webp',
    link: 'https://web.facebook.com/ocs.ku',
  },
  {
    name: 'Kasetsart University',
    image: prefix + 'KU.webp',
    link: 'https://www.facebook.com/SDKUkasetsart',
  },
];

const Partners: NextPage<Props> = () => {
  return (
    <div className="max-w-8xl mx-auto w-full px-3 py-5 flex flex-col bg-[#1F2937]">
      <div className="flex flex-nowarp place-content-evenly">
        {partners.map((partner, index) => (
          <a href={partner.link} target="__blank">
            <Image
              key={index}
              src={partner.image}
              alt={partner.name}
              className="grayscale transition duration-1000 hover:grayscale-0"
              height={48}
              width={48}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
