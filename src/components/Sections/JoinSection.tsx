import { NextPage } from "next";
import { Element } from "react-scroll";

import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter, 
    Image, 
    Button, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    useDisclosure 
} from "@nextui-org/react";

import { PenTool, SquareCode, ChevronRight } from "lucide-react";
import Link from "next/link";
import _ from "lodash";

import dotenv from 'dotenv';
dotenv.config();
interface Props {
    // issues: Issue[];
}

const JoinSection: NextPage<Props> = (props) => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const modalStates = [
        useDisclosure(),
        useDisclosure()
    ];

    const insideContent = (index: number) => {
        if (index === 0) {
            return (
                <>
                    <div className="flex flex-col gap-5">
                        <p>โดย Designer นั้นหน้าที่หลักๆ แล้วจะเป็นคนที่มีความคิดสร้างสรรค์และมีความสามารถในการออกแบบ</p>
                        <div>
                            <p className="font-bold">🚨Key Responsibility🚨</p>
                            <p>- วางแผน และออกแบบหน้าตาแอพ ให้เหมาะสมกับผู้ใช้งาน</p>
                            <p>- ออกแบบเนื้อหาของฟีเจอร์ เพื่อแก้ปัญหานิสิตที่ใช้แอพ Nisit KU</p>
                        </div>
                        <div>
                            <p className="font-bold">🚨Qualifications🚨</p>
                            <p>- เป็นนักคิดนักวางแผน</p>
                            <p>- มีความคิดสร้างสรรค์</p>
                            <p>- มี Empathy ในการเข้าใจความรู้สึกของผู้ใช้งานแอพ Nisit KU</p>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="flex flex-col gap-5">
                        <p>ทำหน้าที่สร้างเว็บไซต์จากการเขียนโค้ต</p>
                        <div>
                            <p className="font-bold">🔑คุณสมบัติ</p>
                            <p>- สามารถพัฒนาเว็บแอปพลิเคชัน (Web Application)</p>
                            <p>- เข้าใจหลักการทำ Responsive (Mobile First)</p>
                            <p>- สามารถทำงานร่วมกันเป็นทีมได้เป็นอย่างดี รับแรงกดดันได้ดี</p>
                        </div>
                        <div>
                            <p className="font-bold">🏆เป้าหมาย</p>
                            <p>- สามารถพัฒนาเว็บแอปพลิเคชัน (Web Application) Prototype 
                                ที่สามารถตอบโจทย์การใช้งานภายในมหาวิทยาลัยเกษตรศาสตร์ได้เป็นอย่างดี 
                                เพื่อให้สามารถนำไปพัฒนาต่อยอดใช้งานได้จริง</p>
                        </div>
                        <div>
                            <p className="font-bold">☀️ร่วมกับเคลื่อนโดย</p>
                            <p>- หน่วยส่งเสริมอาชีพ งานส่งเสริมสุขภาวะและอาชีพ กองพัฒนานิสิต มหาวิทยาลัยเกษตรศาสตร์</p>
                            <p>- สำนักบริการคอมพิวเตอร์ มหาวิทยาลัยเกษตรศาสตร์</p>
                        </div>      
                        <div>
                            <p className="font-bold">📅ปิดรับ</p>
                            <p>
                                - 10 พฤศจิกายน พ.ศ. 2566 เวลา 23.59 น.
                            </p>
                        </div>                  
                    </div>
                </>
            );
        }
    };

    const popUp = (index: number) => {
        return (
            <ModalContent className="bg-black/80">
                {(onClose) => (
                    <>
                        <ModalHeader className={`flex flex-col gap-1 ${index===0? 'text-orange-500':'text-sky-500'}`}>{index===0? 'Designer':'Developer'}</ModalHeader>
                        <ModalBody className="">
                            { insideContent(index) }
                        </ModalBody>
                        <ModalFooter>
                            <a href={index===0? 
                                "https://docs.google.com/forms/d/e/1FAIpQLSeqWsz5-tMGn3d56-SIczieUVZqlOvxl5Si4rUoJ4OK86IZBA/viewform":
                                "https://docs.google.com/forms/d/e/1FAIpQLSfxYpFCcbwoboqbNbXf444TY3AXEERMcMjzMyfYuiweITaQQg/viewform"}>
                                <Button color="primary" >
                                    ไปที่แบบทดสอบ →
                                </Button>
                            </a>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        )
    };

    

    return (
        <Element
            name="join"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center gap-3"
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-2">
                    <div className="text-3xl md:text-4xl font-bold text-center">
                        สาขาที่รับสมัคร
                    </div>
                    <div className="text-xl text-green-500 font-bold text-center">
                        Major Register
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:gap-3 md:flex-row items-center w-full mt-5">
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute top-1 flex-col items-start z-20">
                            <h4 className="text-whitefont-medium text-2xl">Designer</h4>
                            <p className="text-tiny text-white/60 uppercase font-bold">สมัครแล้ว 0 คน</p>
                        </CardHeader>
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-orange-600 to-black border-orange-500 border-2 opacity-50"></div>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="register-items/designer.jpg"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                            <p className="text-white text-tiny">More Details.</p>
                            </div>
                            <Button className="text-tiny bg-orange-600" color="primary" radius="full" size="sm" onPress={modalStates[0].onOpen}>
                                ดูรายละเอียด →
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute top-1 flex-col items-start z-20">
                            <h4 className="text-whitefont-medium text-2xl">Developer</h4>
                            <p className="text-tiny text-white/60 uppercase font-bold">สมัครแล้ว 0 คน</p>
                        </CardHeader>
                        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-sky-600 to-black border-sky-500 border-2 opacity-50"></div>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="register-items/developer.jpg"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                            <p className="text-white text-tiny">More Details.</p>
                            </div>
                            <Button className="text-tiny bg-sky-600" color="primary" radius="full" size="sm" onPress={modalStates[1].onOpen}>
                                ดูรายละเอียด →
                            </Button>
                        </CardFooter>
                    </Card>
                    <Modal 
                        isOpen={modalStates[0].isOpen} 
                        onClose={modalStates[0].onClose} 
                        size="3xl"
                    >
                        {popUp(0)}
                    </Modal>
                    <Modal 
                        isOpen={modalStates[1].isOpen} 
                        onClose={modalStates[1].onClose} 
                        size="3xl"
                    >
                        {popUp(1)}
                    </Modal>
                </div>
            </div>
        </Element>
    );
};

export default JoinSection;
