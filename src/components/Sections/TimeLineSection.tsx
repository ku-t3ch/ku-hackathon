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
        // children: "PROBLEM SUBMISSION",
        children: "Problem Submission",
        start: new Date("2023-10-09 23:59"),
        end: new Date("2023-11-03 23:59"),
    },
    {
        // children: "เปิดรับ PROPOSAL",
        // children: "PROPOSAL SUBMISSION",
        children: "Registration",
        start: new Date("2023-10-23 23:59"),
        end: new Date("2023-11-10 23:59"),
    },
    {
        // children: "ประกาศผลผู้เข้ารอบ",
        // children: "PARTICIPANT ANNOUNCEMENT",
        children: "Participant Announcement",
        start: new Date("2023-11-13 23:59"),
        end: new Date("2023-11-13 23:59"),
    },
    {
        // children: "MATCHING TEAMS",
        children: "Matching Teams",
        start: new Date("2023-11-15 23:59"),
        end: new Date("2023-11-15 23:59"),
        detail: (
            <div className="flex flex-col">
                <div>8:30-9:00 Register</div>
                <div>9:00-12:00 Overview</div>
                <div>12:00-13:00 Break</div>
                <div>13:00-16:00 Matching Team</div>
            </div>
        ),
    },
    {
        // children: "ประกาศผลผู้เข้ารอบ",
        // children: "OVERVIEW PROBLEM",
        children: "Overview Problem",
        start: new Date("2023-11-16 23:59"),
        end: new Date("2023-11-16 23:59"),
    },
    {
        // children: "คลาสสอน UX UI",
        // children: "UX/UI WORKSHOP",
        children: "UX/UI Workshop",
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
        // children: "คลาสสอน UX UI",
        // children: "DEV WORKSHOP",
        children: "Dev Workshop",
        start: new Date("2023-11-19 23:59"),
        end: new Date("2023-11-19 23:59"),
        detail: (
            <div className="flex flex-col">
                <div>8:30-9:00 Register</div>
                <div>9:00-12:00 React</div>
                <div>12:00-13:00 Break</div>
                <div>13:00-16:30 FastAPI</div>
            </div>
        ),
    },
    {
        // children: "PITCHING DAY",
        children: "Pitching Day",
        start: new Date("2023-11-20 23:59"),
        end: new Date("2023-11-20 23:59"),
        detail: (
            <div className="flex flex-col">
                <div>8:30-9:00 Register</div>
                <div>9:00-12:00 Pitching</div>
                <div>12:00-13:00 Break</div>
                <div>13:00-14:00 Pitching</div>
                <div>14:00-14:30 Break</div>
                <div>14:30-15:30 Announce Winner</div>
            </div>
        ),
    },
    {
        // children: "HACKATHON",
        children: "Hackathon",
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
                <div className="flex flex-col gap-2">
                    <div className="text-3xl md:text-4xl font-bold text-center">
                        กำหนดการ
                    </div>
                    <div className="text-xl text-green-500 font-bold text-center">
                        Timeline
                    </div>
                </div>
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
                        className="text-[#0DBC58] cursor-pointer"
                        onClick={() => setOnExpand(!onExpand)}
                    >
                        {onExpand ? "ซ่อนรายละเอียด" : "แสดงรายละเอียด"}
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
