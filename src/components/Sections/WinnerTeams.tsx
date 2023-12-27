"use client";
import { NextPage } from 'next';
import Image from 'next/image';
import { Element } from 'react-scroll';
import { useScreenWidthSize } from '../hooks/useScreenWidthSize';
import clsx from 'clsx';
import { Spinner } from '@nextui-org/react';

interface Props {}

const teams = [
  {
    rankId: 3,
    title: '🥉 รองชนะเลิศอันดับ 2',
    teamName: 'ปี 6',
    members: [
      'พรชนก จิรดำรงกุล',
      'นพรุจ ศรีพงษ์พันธุ์กุล',
      'รวิชญ์ พยัคฆวรรณ',
      'ชนาวิทย์ เตชมณีกร',
    ],
  },
  {
    rankId: 1,
    title: '🏆 รางวัลชนะเลิศ',
    teamName: 'ภัยพิบัติระดับหมอรำ',
    members: [
      'โภคิน วัฒนพิทักษ์',
      'ธนาธิป สุวรรณโคตร',
      'ภูมิธรรม รัตนะรัต',
      'กลวัชร รู้ปัญญา',
      'อภิญญา สุทธิโสภาอาภรณ์',
    ],
  },
  {
    rankId: 2,
    title: '🥈 รองชนะเลิศอันดับ 1',
    teamName: 'Memo',
    members: [
      'ชนาธิป พูลสวัสดิ์',
      'พชรพล ราชสภา',
      'วรกร โฆษิตโภคิน',
      'ณฐพล พลนาการ',
    ],
  },
  {
    rankId: 4,
    title: '🎖️ ชมเชย',
    teamName: 'HackBthon',
    members: [
      'คริษฐ์ธร บำรุงพิพัฒนพร',
      'ณัชชิภาพิชญ์ เสฏฐิธนาโชติ',
      'นิธิศรัฎฐ์ พุฒิภาพงศ์',
    ],
  },
];

const WinnerTeams: NextPage<Props> = () => {
  const width = useScreenWidthSize();
  const isMobile = width < 1280;

  const getTeams = (isSorted = false) => {
    if (isSorted) {
      return teams.sort((a, b) => a.rankId - b.rankId);
    }

    return teams;
  };
  return (
    <Element
      name="winners"
      className="max-w-[90vw] sm:max-w-[60vw] md:max-w-[90vw] xl:max-w-[75rem] mx-auto w-full pt-[7rem] md:pt-[10rem] flex flex-col items-center"
    >
      <div className="flex flex-col gap-2">
        <div className="text-3xl md:text-4xl font-bold text-center">
          ทีมผู้ชนะการแข่งขัน KU Hackathon 2023
        </div>
        <div className="text-xl text-primary font-bold text-center">
          The Winner Teams
        </div>
      </div>
      <div className="mt-[2.5rem] md:mt-[5rem] w-full">
        {width <= 0 ? (
          <div className="py-[9rem] flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        ) : (
          <div
            className={clsx(
              'items-end',
              isMobile
                ? 'grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 md:gap-5 lg:gap-10'
                : 'flex flex-wrap gap-3'
            )}
          >
            {getTeams(isMobile).map((item, index) => (
              <div
                key={index}
                className={clsx(isMobile ? 'w-full' : 'w-[18rem]')}
              >
                {!isMobile && (
                  <div className="text-center font-medium tracking-wide pb-3 text-lg">
                    {item.title}
                  </div>
                )}
                <div
                  key={index}
                  className={clsx(
                    'relative w-full bg-gray-800 border border-gray-700 px-[1.5rem] shadow',
                    isMobile ? 'rounded-lg' : 'rounded-t-lg'
                  )}
                  style={{
                    height: isMobile ? '24rem' : `${42 - item.rankId * 5.5}rem`,
                  }}
                >
                  <div className="flex justify-center">
                    <Image
                      src={`${process.env.cdn}/winners/${item.rankId}.webp`}
                      height={96}
                      width={96}
                      alt={`winner-icon-${item.rankId}`}
                      unoptimized
                      className="z-20"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    {isMobile && (
                      <div className="text-center font-medium tracking-wide text-lg">
                        {item.title}
                      </div>
                    )}
                    <span className="text-2xl font-semibold tracking-wide text-green-500">
                      {item.teamName}
                    </span>
                  </div>

                  <div className="px-[1rem] mt-5">
                    <ul className="md:px-3 lg:px-1 space-y-1 list-disc">
                      {item.members?.map((name, idx) => {
                        return (
                          <li key={idx} className="text-gray-300">
                            {name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Element>
  );
};

export default WinnerTeams;
