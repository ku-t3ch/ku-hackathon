"use client";

import * as d3 from "d3";
import { Tree } from "@/interfaces/CircularPackingInterface";
import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";
import Chart from "react-apexcharts";

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
    const [hover, setHover] = useState("");

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
        <div>
            <Chart
                options={{
                    chart: {
                        id: "apexchart-example",
                    },
                    xaxis: {
                        categories: [
                            "sdf", 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                            1999,
                        ],
                    },
                }}
                series={[
                    {
                        name: "series-1",
                        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
                    },
                ]}
                type="bar"
                width={500}
                height={320}
            />
            asdfsdf
        </div>
    );
};
