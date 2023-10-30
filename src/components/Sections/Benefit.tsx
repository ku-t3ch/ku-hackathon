import { NextPage } from "next";
import { Element } from "react-scroll";

interface Props {}

const Benefit: NextPage<Props> = () => {
    return (
        <Element
            name="benefit"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
        >
            <div className="flex flex-col gap-2">
                <div className="text-4xl font-bold text-center">
                    รางวัลที่ได้รับ
                </div>
                <div className="text-xl text-green-500 font-bold text-center">
                    Reward & Benefit
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full mt-5">
                <div className="p-5 w-full flex flex-col gap-3 border-l-3 border-green-500 bg-[#0DBC58]/40 justify-center">
                    <div className="text-xl">Winner</div>
                    <div className="text-xl">30,000 THB</div>
                </div>
                <div className="p-5 w-full flex flex-col gap-3 border-l-3 border-green-500 bg-[#0DBC58]/30 justify-center">
                    <div className="text-xl">Second place</div>
                    <div className="text-lg">20,000 THB</div>
                </div>
                <div className="p-5 w-full flex flex-col gap-3 border-l-3 border-green-500 bg-[#0DBC58]/20 justify-center">
                    <div className="text-xl">Third place</div>
                    <div className="text-base">10,000 THB</div>
                </div>
                <div className="p-5 w-full flex flex-col gap-3 border-l-3 border-green-500 bg-[#0DBC58]/10 justify-center">
                    <div className="text-xl">Consolation</div>
                    <div className="text-sm">5,000 THB</div>
                </div>
            </div>
        </Element>
    );
};

export default Benefit;
