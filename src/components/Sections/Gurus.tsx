import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Avatar } from '@nextui-org/avatar';

interface Props {}

const gurus = [
  {
    name: 'Isoon Phitiphasit (Non)',
    job: 'Full-stack Developer',
    company: 'RentSpree Thailand',
    image: 'https://s3.tech.nisit.ku.ac.th/assets/speaker/isoon.jpg',
  },
  {
    name: 'Ekkasit Trakulkiattikul (Ake)',
    job: 'Founder',
    company: 'SignageSurf',
    image: 'https://s3.tech.nisit.ku.ac.th/assets/speaker/uncle-ake.jpg',
  }
];

const Gurus: NextPage<Props> = () => {
  return (
    <Element
      name="gurus"
      className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="text-4xl font-bold text-center">GURUS</div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[4rem]">
        {gurus.map((guru, idx) => {
          return (
            <div className="flex flex-col items-center" key={idx}>
              <Avatar
                isBordered
                src={guru.image}
                className="h-[8rem] w-[8rem]"
              />
              <div className="pt-[1.5rem] font-bold text-[1.25rem]">
                {guru.name}
              </div>
              <div className="text-default-500 text-center">
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
