import { Avatar } from '@nextui-org/avatar';
import { NextPage } from 'next';
import { Element } from 'react-scroll';

interface Props {}

const partners = [
  {
    name: 'KU Biz',
    image: 'https://s3.tech.nisit.ku.ac.th/assets/partner/kubic.jpg',
    link: 'https://web.facebook.com/KUBICTHAILAND',
  },
  {
    name: 'KU OCS',
    image: 'https://s3.tech.nisit.ku.ac.th/assets/partner/ocslogo.png',
    link: 'https://web.facebook.com/ocs.ku',
  },
  {
    name: 'GDSC KU',
    image: 'https://s3.tech.nisit.ku.ac.th/assets/partner/GDSCKU.png',
    link: 'https://www.facebook.com/gdsc.ku/',
  },
  {
    name: 'KU Startup',
    image: 'https://s3.tech.nisit.ku.ac.th/assets/partner/KUStartup.jpg',
    link: 'https://www.facebook.com/Kustartup',
  },
  {
    name: 'KU Tech',
    image: 'https://tech.nisit.ku.ac.th/logo/KUTechBlack.png',
    link: 'https://www.facebook.com/ku.t3ch',
  }
];

const Partners: NextPage<Props> = () => {
  return (
    <Element
      name="partners"
      className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="text-4xl font-bold text-center">
        PARTNERS & SUPPORTERS
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {partners.map((partner, index) => (
          <a
            className="flex flex-col"
            key={index}
            href={partner.link}
            target="_bank"
          >
            <Avatar
              color="success"
              className="w-20 h-20 text-large bg-white"
              isBordered
              src={partner.image}
              alt={partner.name}
            />
          </a>
        ))}
      </div>
    </Element>
  );
};

export default Partners;
