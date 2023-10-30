import { Collapse, CollapseProps } from "antd";
import { ChevronRight } from "lucide-react";
import { NextPage } from "next";
import { CSSProperties } from "react";
import { Element } from "react-scroll";

interface Props {}

const getItems: CollapseProps["items"] = [
    {
        key: "1",
        label: <div className="text-xl md:text-2xl">ใครสมัครได้บ้าง?</div>,
        children: (
            <div className="ml-7 text-xl">
                - นิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกวิทยาเขต
                ที่กำลังศึกษาอยู่ในปัจจุบัน เท่านั้น
            </div>
        ),
    },
    {
        key: "2",
        label: <div className="text-xl md:text-2xl">งานจัดเมื่อไร?</div>,
        children: (
            <div className="ml-7 text-xl">
                - เริ่มจัดตั้งแต่วันที่ 15 พฤศจิกายน 2023 และ มีการจัด Workshop
                ตามสาขาที่ยื่นสมัคร ในตารางที่กำหนดให้
            </div>
        ),
    },
    {
        key: "3",
        label: <div className="text-xl md:text-2xl">มีค่าใช้จ่ายไหม?</div>,
        children: (
            <div className="ml-7 text-xl">
                - มีค่าใช้จ่ายเป็นมัดจำ 300 บาท ได้คืนหลังจบโครงการ
            </div>
        ),
    },
    {
        key: "4",
        label: (
            <div className="text-xl md:text-2xl">
                สมัครแล้วได้เข้าร่วมทุกคนหรือไม่?
            </div>
        ),
        children: (
            <div className="ml-7 text-xl">
                - ทางทีมงานจะคัดเลือกแต่ละสาขา สาขา Developer 40-60 คน และ สาขา
                Designer 40 คน
                รวมแล้วจะมีผู้ที่ถูกคัดเลือกให้เข้าร่วมรอบต่อไปจำนวน 80-100 คน
            </div>
        ),
    },
    {
        key: "5",
        label: <div className="text-xl md:text-2xl">สมัครได้กี่สาขา?</div>,
        children: (
            <div className="ml-7 text-xl">
                - สมัครได้เพียง 1 สาขาเท่านั้น
                โดยแต่ละสาขาจะมีโจทย์ที่แตกต่างกันออกไป
            </div>
        ),
    },
    {
        key: "6",
        label: (
            <div className="text-xl md:text-2xl">จัดออนไซต์หรือออนไลน์?</div>
        ),
        children: (
            <div className="ml-7 text-xl">
                - จัดแบบผสม โดยจะมีจัดออนไลน์ในบางกิจกกรม
            </div>
        ),
    },
    {
        key: "7",
        label: (
            <div className="text-xl md:text-2xl">สมัครเดี่ยวหรือเป็นกลุ่ม?</div>
        ),
        children: (
            <div className="ml-7 text-xl flex flex-col">
                <div>- สาขา Developer ทีมละ 2-3 คน (กลุ่ม)</div>
                <div>- สาขา Designer 1 คน (เดี่ยว)</div>
            </div>
        ),
    },
    {
        key: "8",
        label: (
            <div className="text-xl md:text-2xl">
                จะทราบผลการคัดเลือกได้จากช่องทางไหน เมื่อไร?
            </div>
        ),
        children: (
            <div className="ml-7 text-xl flex flex-col">
                <div>
                    - การประกาศผลผู้สิทธิ์มีเข้าร่วมโครงการ ซึ่งจะประกาศในวันที่
                    13 พฤศจิกายน 2023
                </div>
                <div>
                    - การประกาศผ่านการคัดเลือกเข้าสู่รอบ Hackathon ในวันที่ 20
                    พฤศจิกายน 2023
                </div>
                <div>
                    โดยจะประกาศผลทางเว็บไซต์{" "}
                    <a
                        className="text-blue-500 underline"
                        href="https://hackathon.ku.ac.th"
                    >
                        https://hackathon.ku.ac.th
                    </a>
                </div>
            </div>
        ),
    },
    {
        key: "9",
        label: (
            <div className="text-xl md:text-2xl">
                เราสามารถจับทีมไปเองได้ไหม Developer กับ Designer?
            </div>
        ),
        children: (
            <div className="ml-7 text-xl flex flex-col">
                - ไม่ได้ เนื่องจากจะต้องจับคู่ทีมผ่านกิจกรรม Matching Team
                โดยเป็นกิจกรรมที่ผู้เข้าร่วมสามารถทำความรู้จักกัน
                และแลกเปลี่ยนความคิดเห็นกันผ่านกิจกรรมต่าง ๆ
                ซึ่งในท้ายกิจกรรมนั้นจะเป็นการจับคู่ทีม (ตามความสมัครใจ)
                จะเริ่มจากผู้นำทีม (ฝ่าย Developer หรือ Designer)
                จะต้องแสดงไอเดีย หรือวิสัยทัศน์เพื่อดึงดูดลูกทีมไปแข่งในวัน
                Hackathon
            </div>
        ),
    },
    {
        key: "10",
        label: (
            <div className="text-xl md:text-2xl">
                หลังจาก Matching Team จะได้ทีมเป็นอย่างไร ?
            </div>
        ),
        children: (
            <div className="ml-7 text-xl flex flex-col">
                - Designer 2 คน, Developer 2-3 คน รวมแล้วไม่เกิน 5 คน
            </div>
        ),
    },
    {
        key: "11",
        label: (
            <div className="text-xl md:text-2xl">
                หลังจาก Matching Team จะได้ทีมเป็นอย่างไร ?
            </div>
        ),
        children: (
            <div className="ml-7 text-xl flex flex-col">
                - Designer 2 คน, Developer 2-3 คน รวมแล้วไม่เกิน 5 คน
            </div>
        ),
    },
];

const FAQs: NextPage<Props> = () => {
    return (
        <Element
            name="faqs"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
        >
            <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-center">
                    คำถามที่พบบ่อย
                </div>
                <div className="text-xl text-green-500 font-bold text-center">
                    FAQs
                </div>
            </div>
            <div className="flex gap-5 mt-10 w-full">
                <Collapse
                    className="w-full"
                    ghost
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
