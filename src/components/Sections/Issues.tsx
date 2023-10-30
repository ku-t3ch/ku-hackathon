import { NextPage } from 'next';
import { Element } from 'react-scroll';
import { CircularPacking } from '@/components/Charts/CircularPacking';
import { Tree } from '@/interfaces/CircularPackingInterface';
import { useRef } from 'react';
import { useContainerDimensions } from '../hooks/useContainerDimensions';
import { Button } from '@nextui-org/button';

interface Props {}

const issues: Tree = {
  type: 'node',
  name: 'problems',
  value: 468,
  children: [
    { type: 'leaf', name: 'รถตะลัยช้า', value: 90 },
    { type: 'leaf', name: 'พบโรคจิต', value: 30 },
    { type: 'leaf', name: 'รถวินขับเร็ว', value: 34 },
    { type: 'leaf', name: 'ไม่ปลอดภัย', value: 53 },
    { type: 'leaf', name: 'น้ำท่วม', value: 98 },
    { type: 'leaf', name: 'Problem A', value: 22 },
    { type: 'leaf', name: 'Problem B', value: 30 },
    { type: 'leaf', name: 'Problem C', value: 45 },
    { type: 'leaf', name: 'Problem D', value: 76 },
  ],
};

const Issues: NextPage<Props> = () => {
  const circularElement = useRef(null);
  const { width } = useContainerDimensions(circularElement);

  return (
    <Element
      name="issues"
      className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col  items-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-center">SUBMITTED ISSUES</div>
      <div ref={circularElement} className="mt-10 w-full text-center">
        {width <= 0 ? (
          <Button
            color="default"
            size="lg"
            variant="light"
            isLoading
            className=""
          />
        ) : (
          <CircularPacking data={issues} width={width} height={400} />
        )}
      </div>
    </Element>
  );
};

export default Issues;
