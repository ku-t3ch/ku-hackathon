'use client';

import * as d3 from 'd3';
import { Tree } from '@/interfaces/CircularPackingInterface';
import { Tooltip } from '@nextui-org/tooltip';
import { useState } from 'react';

type CircularPackingProps = {
  width: number;
  height: number;
  data: Tree;
};

export const CircularPacking = ({
  width,
  height,
  data,
}: CircularPackingProps) => {
  const [hover, setHover] = useState('');

  const hierarchy = d3
    .hierarchy(data)
    .sum((d) => d.value)
    .sort((a, b) => b.value! - a.value!);

  const packGenerator = d3.pack<Tree>().size([width, height]).padding(4);
  const root = packGenerator(hierarchy);

  const getFontSize = (value: number) => {
    return (value / data.value) * 20 + 10;
  };

  return (
    <svg width={width} height={height} style={{ display: 'inline-block' }}>
      {root
        .descendants()
        .slice(1)
        .map((node) => (
          <Tooltip
            key={node.data.name}
            size="sm"
            radius="sm"
            placement="bottom"
            content={`จำนวน ${node.data.value} ครั้ง`}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              onMouseOver={() => setHover(node.data.name)}
              onMouseOut={() => setHover('')}
              opacity={0.8}
              className={
                hover == node.data.name ? 'fill-primary' : 'fill-default-100'
              }
            />
          </Tooltip>
        ))}
      {root
        .descendants()
        .slice(1)
        .map((node) => {
          const fontSize = getFontSize(node.data.value);
          return (
            <text
              key={node.data.name}
              x={node.x}
              y={node.y}
              fill="#fff"
              fontSize={hover == node.data.name ? fontSize + 1.5 : fontSize}
              fontWeight={0.4}
              textAnchor="middle"
              alignmentBaseline="middle"
              onMouseOver={() => setHover(node.data.name)}
              onMouseOut={() => setHover('')}
              className={`cursor-default duration-300 ease-in-out`}
            >
              {node.data.name}
            </text>
          );
        })}
    </svg>
  );
};
