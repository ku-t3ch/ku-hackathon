import { NextPage } from "next";

interface Props {}

const Reject: NextPage<Props> = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <div className="text-xl">
                    เสียใจด้วย คุณไม่ผ่านการคัดเลือก
                </div>
                <div className="text-3xl">
                    <span className="text-red-500 font-bold">ไม่ผ่าน</span>{" "}
                    การคัดเลือก
                </div>
            </div>
            <div className="flex flex-col">
               🙏 ขอบคุณที่สนใจเข้าร่วมกิจกรรม Hackathon ในครั้งนี้ ครั้งหน้าอาจจะเป็นคุณผ่านเข้ารอบ
            </div>
        </div>
    );
};

export default Reject;
