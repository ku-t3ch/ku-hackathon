import Image from 'next/image';
import { FC } from 'react';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

import { useCountUp } from 'react-countup';

interface Props {
  number: number;
  label: string;
  issueCount: number;
  isActive?: boolean;
  onClick?: () => void;
}

const IssueType: FC<Props> = ({
  number,
  label,
  issueCount,
  isActive = false,
  onClick,
}) => {
  useCountUp({
    ref: `issue-count-${number}`,
    end: issueCount,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card onClick={onClick}>
        <Image
          fill
          src={`${process.env.cdn}/issue-items/card.webp`}
          sizes="50vw"
          className={`rounded-l-lg ${isActive ? 'grayscale-0' : 'grayscale'}`}
          alt={`issue-card-bg-${number}`}
          priority
        />
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.38,
          }}
          className={`absolute bottom-[.25rem] left-[2.5rem] ${
            isActive ? 'grayscale-0' : 'grayscale'
          }`}
        >
          <Image
            src={`${process.env.cdn}/issue-items/icons/${label}.webp`}
            width={96}
            height={96}
            alt={`issue-type-icon-${number}`}
            priority
          />
        </motion.div>
        <Text>
          <div className="font-medium text-lg text-white">{label}</div>
          <div className="text-3xl font-semibold tracking-wider text-primary">
            <span id={`issue-count-${number}`}></span>
          </div>
        </Text>
      </Card>
    </motion.div>
  );
};

const Card = tw.div`
  w-[21rem]
  h-[5.5rem]
  bg-gray-800
  rounded-lg
  relative
  z-[1]
  select-none
`;

const Text = tw.div`
  absolute
  top-[.5rem]
  right-[1rem]

  text-end
  flex
  flex-col
  z-[3]
`;

export default IssueType;
