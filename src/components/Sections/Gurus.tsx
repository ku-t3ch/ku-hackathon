"use client";
import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Avatar } from '@nextui-org/avatar';

interface Props {}

const gurus = [
  {
    name: 'Isoon Phitiphasit',
    job: 'Software Engineer',
    company: 'RentSpree Thailand',
    image: 'Isoon-Phitiphasit.webp',
  },
  {
    name: 'Ekkasit Trakulkiattikul',
    job: 'Founder',
    company: 'SignageSurf',
    image: 'Ekkasit-Trakulkiattikul.webp',
  },
  {
    name: 'Nonthawit Doungsodsri',
    job: 'Chief Executive Officer',
    company: 'The Existing Company',
    image: 'Nonthawit-Doungsodsri.webp',
  },
  {
    name: 'Sathipakorn Vibulprapan',
    job: 'Business Incubation Officer',
    company: 'MAX Ventures',
    image: 'Sathipakorn-Vibulprapan.webp',
  },
  {
    name: 'Sahanon Phisetpakasit',
    job: 'Software Engineer',
    company: 'National Digital ID',
    image: 'Sahanon-Phisetpakasit.webp',
  },
  {
    name: 'Kongpon Charanwattanakit',
    job: 'Former Co-Founder & CTO at Ape Board',
    company: 'Nansen',
    image: 'Kongpon-Charanwattanakit.webp',
  },
];

const Gurus: NextPage<Props> = () => {
  return (
    <Element
      name="gurus"
      className="max-w-[75rem] mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-bold text-center">
          วิทยากร & ที่ปรึกษา
        </div>
        <div className="text-xl text-green-500 font-bold text-center">
          Gurus and Mentors
        </div>
      </div>
      <div className="mt-[2.5rem] md:mt-[5rem] flex flex-wrap justify-center gap-[3rem]">
        {gurus.map((guru, idx) => {
          return (
            <div className="flex flex-col items-center w-[17rem]" key={idx}>
              <Avatar
                isBordered
                imgProps={{ loading: 'lazy' ,}}
                src={`${process.env.cdn}/gurus/${guru.image}`}
                className="h-[8rem] w-[8rem]"
                color="success"
              />
              <div className="pt-[1.5rem] font-bold text-[1.25rem] text-green-500 whitespace-nowrap">
                {guru.name}
              </div>
              <div className="text-center">
                <div className="text-white whitespace-nowrap">{guru.job}</div>
                <div className="text-gray-400 whitespace-nowrap">@{guru.company}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default Gurus;
