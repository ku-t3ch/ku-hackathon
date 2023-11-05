import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Avatar } from '@nextui-org/avatar';

interface Props {}

const gurus = [
  {
    name: 'Isoon Phitiphasit (Non)',
    job: 'Full-stack Developer',
    company: 'RentSpree Thailand',
    image: `${process.env.cdn}/gurus/Isoon-Phitiphasit.webp`,
  },
  {
    name: 'Ekkasit Trakulkiattikul (Ake)',
    job: 'Founder',
    company: 'SignageSurf',
    image: `${process.env.cdn}/gurus/Ekkasit-Trakulkiattikul.webp`,
  },
  {
    name: 'Kanokpol Kulsri (Palm)',
    job: 'Software Engineer',
    company: 'Agoda',
    image: `${process.env.cdn}/gurus/Kanokpol-Kulsri.webp`,
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
          Gurus and Mentor
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-flow-col gap-[4rem]">
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
              <div className="text-center text-white">
                <div>{guru.job}</div>
                <div>@{guru.company}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default Gurus;
