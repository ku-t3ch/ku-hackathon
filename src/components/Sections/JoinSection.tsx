import { NextPage } from "next";
import { Element } from "react-scroll";
import { ReactElement, useEffect, useRef, useState } from "react";
import { Card, CardBody, Button, CardHeader, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { PenTool, SquareCode, ChevronRight } from "lucide-react";
import { Issue } from "@/interfaces/IssueInterface";
import { Tree, TreeNode } from "@/interfaces/CircularPackingInterface";
import Link from "next/link";
import { Collapse, CollapseProps } from "antd";
import axios from "axios";
import _ from "lodash";
import { on } from "events";
interface Props {
    // issues: Issue[];
}

interface ModalContentProps {
    title: string;
    content: ReactElement;
    link: string;
}

const JoinSection: NextPage<Props> = (props) => {
    const [Issues, setIssues] = useState<Issue[]>([]);
    const [IssueTree, setIssueTree] = useState<Tree[]>([]);
    const [modalContent, setModalContent] = useState<ReactElement>(<></>);
    const [modalActionLink, setModalActionLink] = useState<string>("");
    const [modalTitle, setModalTitle] = useState<string>("");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const developerModalContent: ModalContentProps = {
        title: "Developer",
        link: "https://forms.gle/kBLLSRX54Mibyqoo7",
        content:
            <div>
                นักพัฒนา Website สามารถสร้างสรรค์ไอเดียออกมาให้อยู่ในรูปแบบเว็บไซต์ต้นแบบ (Prototype) ตอบโจทย์การใช้งาน เพื่อให้สามารถนำไปพัฒนาต่อยอดใช้งานได้จริง<br />
                <br />
                🚨 คุณสมบัติ 🚨<br />
                &#x2022; สามารถพัฒนาเว็บแอปพลิเคชัน (Web Application) ตามภาษาความถนัดของตัวเอง<br />
                &#x2022; เข้าใจหลักการทำ Responsive (Mobile First)<br />
                &#x2022; สามารถทำงานร่วมกันเป็นทีมได้เป็นอย่างดี รับแรงกดดันได้ดี<br />
            </div>
    };

    const designerModalContent: ModalContentProps = {
        title: "Designer",
        link: "https://forms.gle/v5xdDYXrY2EdXKt5A",
        content: 
        <div>
            นักไอเดียสร้างสรรค์ ชอบคิดแก้ปัญหา รวมถึงออกแบบฟีเจอร์ใหม่ ๆ พร้อมนำเสนอต่อคณะกรรมการได้<br />
            หน้าที่หลักๆ แล้วจะเป็นคนที่มีความคิดสร้างสรรค์และมีความสามารถในการออกแบบ<br />
            <br />
            🚨 คุณสมบัติ 🚨<br />
            &#x2022; เป็นนักคิดนักวางแผน<br />
            &#x2022; มีความคิดสร้างสรรค์<br />
            &#x2022; เข้าใจความรู้สึกของผู้ใช้งานแอพ Nisit KU
        </div>
    };

    useEffect(() => {
        getIssues();
    }, []);

    const getIssues = async () => {
        const res = await axios.get<Issue[]>("/api/issues");
        res.data.forEach((i) => {
            const issueTree: Tree = {
                type: "node",
                name: i.name,
                value: i.subissues.reduce(
                    (count, subissue) => (count += subissue.count),
                    0
                ),
                children: i.subissues
                    .filter((s) => s.count > 10)
                    .map((subissue): Tree => {
                        return {
                            type: "leaf",
                            name: subissue.name,
                            value: subissue.count,
                        };
                    }),
            };
            setIssueTree((prev) => [...prev, issueTree]);
        });
        setIssues(res.data);
    };

    const handleOnOpen = (type: string) => {
        switch (type) {
            case "developer":
                setModalContent(developerModalContent.content);
                setModalActionLink(developerModalContent.link);
                setModalTitle(developerModalContent.title)
                onOpen();
                break;
            case "designer":
                setModalContent(designerModalContent.content);
                setModalActionLink(designerModalContent.link);
                setModalTitle(designerModalContent.title)
                onOpen();
                break;
            default:
                break;
        }
    }

    const sectionContainer = useRef(null);

    const charts: CollapseProps["items"] = IssueTree.map((t) => {
        return {
            key: `Collapsible ${t.name}`,
            label: <div className="text-xl md:text-2xl">{t.name}</div>,
            size: "lg",
            children: (
                <div className="flex flex-col gap-3">
                    {_.orderBy(
                        (t as TreeNode).children,
                        (o) => o.value,
                        "desc"
                    ).map((item) => (
                        <Card className="w-full">
                            <CardHeader className="flex gap-3">
                                <Button
                                    color="primary"
                                    variant="flat"
                                >
                                    <div className="flex items-end gap-1">
                                        <div className="text-xl">
                                            {item.value}
                                        </div>
                                        <div className="pb-[2px]">ครั้ง</div>
                                    </div>
                                </Button>
                                <div className="flex flex-col">
                                    <p className="text-xl">{item.name}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            ),
        };
    });

    return (
        <Element
            name="join"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center gap-3"
        >
            <div className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-center">
                    ปัญหาที่พบในมหาวิทยาลัย
                </div>
                <div className="text-xl text-green-500 font-bold text-center">
                    University’s Pain Point
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex grow flex-col md:grow-0 w-full">
                    <Collapse
                        className="w-full"
                        ghost
                        expandIcon={({ isActive }) => (
                            <ChevronRight
                                style={{
                                    transform: `rotate(${isActive ? 90 : 0
                                        }deg)`,
                                    transition: "transform 0.2s ease-in-out",
                                }}
                            />
                        )}
                        items={charts}
                        accordion
                    />
                </div>
            </div>
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
                    <Card className="w-full h-full md:py-3">
                        <CardBody className="items-center">
                            <span className="text-2xl md:text-4xl font-bold text-primary">
                                DESIGNER
                            </span>
                            <span className="text-lg md:text-2xl mb-5 md:mb-8">
                                นักออกแบบ
                            </span>
                            <PenTool
                                size={144}
                                className="text-primary"
                            ></PenTool>
                            <Button
                                className="font-bold text-lg md:text-2xl mt-5 md:mt-8"
                                color="primary"
                                variant="ghost"
                                onClick={() => handleOnOpen("designer")}
                            >
                                DESCRIPTION
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className="w-full h-full md:py-3">
                        <CardBody className="items-center">
                            <span className="text-2xl md:text-4xl font-bold text-primary">
                                DEVELOPER
                            </span>
                            <span className="text-lg md:text-2xl mb-5 md:mb-8">
                                นักพัฒนา
                            </span>
                            <SquareCode
                                size={144}
                                className="text-primary"
                            ></SquareCode>
                            <Button
                                className="font-bold text-lg md:text-2xl mt-5 md:mt-8"
                                color="primary"
                                variant="ghost"
                                onClick={() => handleOnOpen("developer")}
                            >
                                DESCRIPTION
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <Modal
                size="3xl"
                isOpen={isOpen}
                onClose={onClose}
                classNames={{
                    body: "py-6 text-lg",
                    header: "border-b-[1px] border-[#353839] text-[#21C55D] text-2xl font-bold",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{modalTitle}</ModalHeader>
                            <ModalBody>
                                <p>
                                    {modalContent}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="ghost" onPress={onClose}>
                                    Close
                                </Button>
                                <Link
                                    href={modalActionLink}
                                    target="_blank"
                                >
                                    <Button color="primary" variant="ghost">
                                        APPLY
                                    </Button>
                                </Link>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </Element>
    );
};

export default JoinSection;
