import { Collapse, CollapseProps } from "antd";
import { ChevronRight } from "lucide-react";
import { NextPage } from "next";
import { CSSProperties } from "react";
import { Element } from "react-scroll";

interface Props {}

const getItems: CollapseProps["items"] = [
    {
        key: "1",
        label: <div className="text-lg">Are there any costs to attend?</div>,
        children: <>test</>,
    },
    {
        key: "2",
        label: <div className="text-lg">How many role can I apply to?</div>,
        children: <>test</>,
    },
    {
        key: "3",
        label: (
            <div className="text-lg">
                Did everyone can pass to the KU hackathon?
            </div>
        ),
        children: <>test</>,
    },
    {
        key: "4",
        label: <div className="text-lg">Onsite or Online?</div>,
        children: <>test</>,
    },
];

const FAQs: NextPage<Props> = () => {
    return (
        <Element
            name="faqs"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col  items-center"
        >
            <div className="text-4xl font-bold">FAQs</div>
            <div className="flex gap-5 mt-10 w-full">
                <Collapse
                    className="w-full"
                    ghost
                    defaultActiveKey={["1"]}
                    expandIcon={({ isActive }) => (
                        <ChevronRight
                            style={{
                                transform: `rotate(${isActive ? 90 : 0}deg)`,
                                transition: "transform 0.2s ease-in-out",
                            }}
                        />
                    )}
                    items={getItems}
                />
            </div>
        </Element>
    );
};

export default FAQs;
