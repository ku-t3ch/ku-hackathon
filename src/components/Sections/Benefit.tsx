import { NextPage } from 'next';
import { Element } from 'react-scroll';

interface Props {}

const rewards = [
  {
    icon: '🏆',
    title: 'ชิงชนะเลิศ',
    reward: '30,000',
    unit: 'บาท',
  },
  {
    icon: '🥈',
    title: 'อันดับที่ 2',
    reward: '20,000',
    unit: 'บาท',
  },
  {
    icon: '🥉',
    title: 'อันดับที่ 3',
    reward: '10,000',
    unit: 'บาท',
  },
  {
    icon: '🎖️',
    title: 'รางวัลชมเชย',
    reward: '5,000',
    unit: 'บาท',
  },
];

const Benefit: NextPage<Props> = () => {
  return (
    <Element
      name="benefit"
      className="max-w-[75rem] mx-auto w-full pt-[5rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-bold text-center">
          รางวัลที่ได้รับ
        </div>
        <div className="text-xl text-primary font-bold text-center">
          Reward & Benefit
        </div>
      </div>
      <div className="mt-[5rem] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] md:gap-[1rem] lg:gap-[1.5rem]">
        {rewards.map((item, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 border border-gray-700 p-[1.5rem] rounded-lg shadow"
          >
            <div className="mb-3">
              <div className="text-2xl">{item.icon}</div>
              <div className="text-xl font-bold">{item.title}</div>
            </div>
            <div className="flex gap-1 items-end text-primary">
              <div className="text-3xl font-bold">{item.reward}</div>
              <div className="text-xl font-bold">{item.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Benefit;
