import { NextPage } from "next";
import { Element } from "react-scroll";
import 'src/app/objective.css';

interface Props {}

const Objective: NextPage<Props> = () => {
    return (
        <div className="columns-2 px-10 pt-[10rem] md:pt-[10rem]">
            <Element
                name="objective"
                className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col md:flex-row justify-between gap-10"
            >
                <div className="p-5 flex flex-col gap-3 rounded-2xl">
                    <div className="text-xl md:text-3xl font-bold header-text">
                        KU Hackathon คืออะไร?
                    </div>
                    <div>
                        KU Hackathon
                        เป็นงานแข่งขันที่จัดขึ้นโดยมหาวิทยาลัยเกษตรศาสตร์ (Kasetsart
                        University)
                        โดยงานนี้เป็นมหกรรมที่เน้นการพัฒนาและใช้เทคโนโลยีในการแก้ไขปัญหาต่าง
                        ๆ ที่เกิดขึ้นในมหาวิทยาลัยเอง
                        นิสิตจากหลายสาขาที่สนใจและมีความสามารถทางเทคโนโลยีมาเข้าร่วมในงานนี้
                        จะทำงานร่วมกันเพื่อพัฒนาแนวคิดและโครงการต่าง ๆ
                        ที่สามารถช่วยแก้ไขปัญหาในมหาวิทยาลัยเกษตรศาสตร์ต่อไปได้
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default Objective;
