import { NextPage } from "next";
import { Element } from "react-scroll";
import 'src/app/objective.css';

interface Props {}

const Objective: NextPage<Props> = () => {
    return (
        <div className="flex flex-col self-center">
            <Element
            name="objective"
            className="max-w-5xl w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-1 md:flex-row justify-between"
            >
                <div className="flex flex-1 flex-col md:flex-row">
                    <div className="md:w-1/2 md:mr-20 self-center">
                        <img src="Talai_bus.png" alt="Talai_bus" className="w-auto h-auto object-contain" />
                    </div>
                    <div className="p-2 flex flex-col gap-2 rounded-2xl flex-1 self-center">
                        <div className="pb-3 text-xl md:text-3xl font-bold header-text">
                            KU Hackathon คืออะไร?
                        </div>
                        <div className="text-xs md:text-lg">
                            KU Hackathon เป็นงานแข่งขันที่จัดขึ้นโดยมหาวิทยาลัยเกษตรศาสตร์ (Kasetsart University)
                            โดยงานนี้เป็นมหกรรมที่เน้นการพัฒนาและใช้เทคโนโลยีในการแก้ไขปัญหาต่าง ๆ
                            ที่เกิดขึ้นในมหาวิทยาลัยเอง นิสิตจากหลายสาขาที่สนใจและมีความสามารถทางเทคโนโลยีมาเข้าร่วมในงานนี้
                            จะทำงานร่วมกันเพื่อพัฒนาแนวคิดและโครงการต่าง ๆ
                            ที่สามารถช่วยแก้ไขปัญหาในมหาวิทยาลัยเกษตรศาสตร์ต่อไปได้
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );      
};

export default Objective;
