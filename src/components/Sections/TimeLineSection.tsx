import { NextPage } from "next";
import { Element } from "react-scroll";
import { format, isSameDay, isWithinInterval } from "date-fns";
import { Timeline } from "antd";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";

interface Props {}

interface TimelineItem {
    children: JSX.Element | string;
    start: Date;
    end: Date;
    detail?: JSX.Element | string;
}

const timelineItems: TimelineItem[] = [
    {
        // children: "เปิดโพลรับปัญหาของเด็กในมหาลัย",
        children: "PROBLEM SUBMISSION",
        start: new Date("2023-10-02 23:59"),
        end: new Date("2023-11-03 23:59"),
    },
    {
        // children: "เปิดรับ PROPOSAL",
        children: "PROPOSAL SUBMISSION",
        start: new Date("2023-10-09 23:59"),
        end: new Date("2023-11-10 23:59"),
    },
    {
        // children: "ประกาศผลผู้เข้ารอบ",
        children: "PARTICIPANT ANNOUNCEMENT",
        start: new Date("2023-11-13 23:59"),
        end: new Date("2023-11-13 23:59"),
    },
    {
        children: "MATCHING TEAMS",
        start: new Date("2023-11-15 23:59"),
        end: new Date("2023-11-15 23:59"),
        detail: (
            <div className="flex flex-col">
                <div>8:30-9:00 Register</div>
                <div>9:00-12:00 Overview</div>
                <div>12:00-13:00 break</div>
                <div>13:00-16:00 Matching Team</div>
            </div>
        ),
    },
    {
        // children: "คลาสสอน UX UI",
        children: "LEARNING SESSION",
        start: new Date("2023-11-17 23:59"),
        end: new Date("2023-11-17 23:59"),
        detail: (
            <div className="flex flex-col">
                <div>8:30-9:00 Register</div>
                <div>9:00-12:00 Design Thinking</div>
                <div>12:00-13:00 Break</div>
                <div>13:00-16:00 UX/UI Tool</div>
            </div>
        ),
    },
    {
        children: "PITCHING DAY",
        start: new Date("2023-11-20 23:59"),
        end: new Date("2023-11-20 23:59"),
        detail: (
            <div className="flex flex-col">
                <div>8:30-9:00 Register</div>
                <div>9:00-12:00 Pitching</div>
                <div>12:00-13:00 break</div>
                <div>13:00-14:00 Pitching</div>
                <div>14:00-14:30 break</div>
                <div>14:30-15:30 Announce Winner</div>
            </div>
        ),
    },
    {
        children: "HACKATHON",
        start: new Date("2023-11-22 23:59"),
        end: new Date("2023-11-24 23:59"),
    },
];

const TimeLineSection: NextPage<Props> = () => {
    return (
        <>
            <Element
                name="time-line"
                className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
            >
                <div className="text-4xl font-bold text-center">TIMELINE</div>
                <div>
                    <Timeline
                        className="mt-10"
                        items={timelineItems.map((item) => ({
                            color: isWithinInterval(new Date(), {
                                start: item.start,
                                end: item.end,
                            })
                                ? "blue"
                                : "gray",
                            children: <TimeLineChild item={item} />,
                        }))}
                    />
                </div>
            </Element>
        </>
    );
};

const TimeLineChild: NextPage<{ item: TimelineItem }> = ({ item }) => {
    const [onExpand, setOnExpand] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="text-xl">{item.children}</div>
            <div className="flex gap-2">
                {isSameDay(item.start, item.end) ? (
                    <div className="text-gray-400">
                        {format(item.start, "dd MMM yyyy")}
                    </div>
                ) : (
                    <div className="text-gray-400">
                        {format(item.start, "dd MMM yyyy")} -{" "}
                        {format(item.end, "dd MMM yyyy")}
                    </div>
                )}
                {item.detail && (
                    <div
                        className="text-green-500 cursor-pointer"
                        onClick={() => setOnExpand(!onExpand)}
                    >
                        {onExpand ? "Hide detail" : "Show detail"}
                    </div>
                )}
            </div>

            <Collapse in={onExpand}>
                <div className="border-t-1 pt-2 mt-2">
                    <div className="text-gray-400">{item.detail}</div>
                </div>
            </Collapse>
        </div>
    );
};

export default TimeLineSection;
