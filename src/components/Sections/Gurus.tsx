import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { Avatar } from '@nextui-org/avatar';

interface Props {}

const gurus = [
  {
    name: 'Lorem Ipsum (A)',
    job: 'Co-Founder',
    company: 'SCBX',
    image: 'https://i.pravatar.cc/200?u=a04258a2462d826712d',
  },
  {
    name: 'Lorem Ipsum (B)',
    job: 'Chief Executive Officer',
    company: 'Wongnai',
    image: 'https://i.pravatar.cc/200?u=a042581f4e29026024d',
  },
  {
    name: 'Lorem Ipsum (C)',
    job: 'Digital Product Design',
    company: 'Bitkub',
    image: 'https://i.pravatar.cc/200?u=a04258114e29026302d',
  },
  {
    name: 'Lorem Ipsum (D)',
    job: 'Fullstack Developer',
    company: 'Agoda',
    image: 'https://i.pravatar.cc/200?u=a04258114e29026708c',
  },
];

const Gurus: NextPage<Props> = () => {
  return (
    <Element
      name="gurus"
      className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col  items-center"
    >
      <div className="text-4xl font-bold">GURUS</div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4rem]">
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
