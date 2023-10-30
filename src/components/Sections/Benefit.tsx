import { NextPage } from "next";
import { Element } from "react-scroll";

interface Props {}

const rewards = [
    {
        icon: "🏆",
        title: "ชิงชนะเลิศ",
        reward: "30,000",
        unit: "บาท",
    },
    {
        icon: "🥈",
        title: "อันดับที่ 2",
        reward: "20,000",
        unit: "บาท",
    },
    {
        icon: "🥉",
        title: "อันดับที่ 3",
        reward: "10,000",
        unit: "บาท",
    },
    {
        icon: "🎖️",
        title: "รางวัลชมเชย",
        reward: "5,000",
        unit: "บาท",
    },
];

const Benefit: NextPage<Props> = () => {
    return (
        <Element
            name="benefit"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
        >
            <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-center">
                    รางวัลที่ได้รับ
                </div>
                <div className="text-xl text-green-500 font-bold text-center">
                    Reward & Benefit
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full mt-5">
                {rewards.map((item, index) => (
                    <div className="p-5 w-full flex flex-col gap-1 border-3 border-green-500  justify-center rounded-2xl">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="text-xl font-bold">{item.title}</div>
                        <div className="flex gap-1 items-end text-green-500">
                            <div className="text-4xl font-bold">{item.reward}</div>
                            <div className="text-xl font-bold">{item.unit}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Element>
    );
};

export default Benefit;
