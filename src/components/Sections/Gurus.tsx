import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Avatar } from '@nextui-org/avatar';

interface Props {}

const gurus = [
  {
    name: 'Isoon Phitiphasit',
    job: 'Full-stack Developer',
    company: 'RentSpree Thailand',
    image: `${process.env.cdn}/gurus/Isoon-Phitiphasit.webp`,
  },
  {
    name: 'Ekkasit Trakulkiattikul',
    job: 'Founder',
    company: 'SignageSurf',
    image: `${process.env.cdn}/gurus/Ekkasit-Trakulkiattikul.webp`,
  },
  {
    name: 'Nonthawit Doungsodsri',
    job: 'Chief Executive Officer',
    company: 'The Existing Company',
    image: `${process.env.cdn}/gurus/Nonthawit-Doungsodsri.webp`,
  },
  {
    name: 'Sathipakorn Vibulprapan',
    job: 'Business Incubation Officer',
    company: 'MAX Ventures',
    image: `${process.env.cdn}/gurus/Sathipakorn-Vibulprapan.webp`,
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
      <div className="mt-[2.5rem] md:mt-[5rem] grid md:grid-cols-2 xl:grid-flow-col gap-[4rem]">
        {gurus.map((guru, idx) => {
          return (
            <div className="flex flex-col items-center" key={idx}>
              <Avatar
                isBordered
                src={guru.image}
                className="h-[8rem] w-[8rem]"
                color="success"
              ></Avatar>
              <div className="pt-[1.5rem] font-bold text-[1.25rem] text-green-500">
                {guru.name}
              </div>
              <div className="text-center">
                <div className="text-white">{guru.job}</div>
                <div className="text-gray-400">@{guru.company}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default Gurus;
