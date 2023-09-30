import { NextPage } from "next";
import { Element } from "react-scroll";
import { format, isSameDay, isWithinInterval } from "date-fns";
import { Timeline } from "antd";

interface Props {}

interface TimelineItem {
    children: JSX.Element | string;
    start: Date;
    end: Date;
}

const timelineItems: TimelineItem[] = [
    {
        children: "เปิดโพลรับปัญหาของเด็กในมหาลัย",
        start: new Date("2023-10-02 23:59"),
        end: new Date("2023-11-03 23:59"),
    },
    {
        children: "ประกาศผลผู้เข้ารอบ",
        start: new Date("2023-11-13 23:59"),
        end: new Date("2023-11-13 23:59"),
    },
    {
        children: "MATCHING TEAMS",
        start: new Date("2023-11-15 23:59"),
        end: new Date("2023-11-15 23:59"),
    },
    {
        children: "คลาสสอน UX UI",
        start: new Date("2023-11-17 23:59"),
        end: new Date("2023-11-17 23:59"),
    },
    {
        children: "PITCHING DAY",
        start: new Date("2023-11-20 23:59"),
        end: new Date("2023-11-20 23:59"),
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
                className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex  flex-col"
            >
                <div className="text-4xl">ไทม์ไลน์</div>
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
                            children: (
                                <div className="flex flex-col">
                                    <div className="text-xl">
                                        {item.children}
                                    </div>
                                    {isSameDay(item.start, item.end) ? (
                                        <div className="text-gray-400">
                                            {format(item.start, "dd MMM yyyy")}
                                        </div>
                                    ) : (
                                        <div className="text-gray-400">
                                            {format(item.start, "dd MMM yyyy")}{" "}
                                            - {format(item.end, "dd MMM yyyy")}
                                        </div>
                                    )}
                                </div>
                            ),
                        }))}
                    />
                </div>
            </Element>
        </>
    );
};

export default TimeLineSection;
