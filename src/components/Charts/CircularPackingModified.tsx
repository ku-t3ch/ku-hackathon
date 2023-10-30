"use client";

import * as d3 from "d3";
import { Tree } from "@/interfaces/CircularPackingInterface";
import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

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
    const [hover, setHover] = useState<string | null>(null);

    const hierarchy = d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value! - a.value!);

    const packGenerator = d3.pack<Tree>().size([width, height]).padding(6);
    const root = packGenerator(hierarchy);

    const getFontSize = (value: number) => {
        return (value / data.value) * 20 + 10;
    };

    return (
        <svg
            width={width}
            height={height}
            style={{ display: "inline-block", overflow: "visible" }}
        >
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
                            onMouseOut={() => setHover(null)}
                            className={
                                hover == node.data.name
                                    ? "fill-primary"
                                    : "fill-default-50"
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
                        <foreignObject
                            key={node.data.name}
                            x={node.x - fontSize * 4}
                            y={node.y - fontSize * 1.5}
                            width={hover == node.data.name ? node.r * 4 : 0}
                            height={hover == node.data.name ? node.r : 0}
                            onMouseOver={() => setHover(node.data.name)}
                            onMouseOut={() => setHover(null)}
                            className={`cursor-default duration-300 ease-in-out break-words overflow-visible`}
                        >
                            <span
                                style={{
                                    fontSize:
                                        hover == node.data.name ? fontSize : 0,
                                    fontWeight: 0.4,
                                    color: "#fff",
                                }}
                                className="duration-300 ease-in-out"
                            >
                                {node.data.name}
                            </span>
                        </foreignObject>
                    );
                })}
        </svg>
    );
};
