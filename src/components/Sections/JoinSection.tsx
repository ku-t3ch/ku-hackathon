import { NextPage } from "next";
import { Element } from "react-scroll";
import { Card, CardBody, Button, CardHeader } from "@nextui-org/react";
import { PenTool, SquareCode, ChevronRight } from "lucide-react";
import React, { useState } from 'react';
import Link from "next/link";
import _ from "lodash";
import 'src/app/button_arrow.css';

interface Props {
    // issues: Issue[];
}

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    source?: string;
};

const JoinSection: NextPage<Props> = (props) => {
    const [isFirstArrowAnimate, setFirstArrowAnimate] = useState(false);
    const [isSecondArrowAnimate, setSecondArrowAnimate] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);
    const [modalSource, setModalSource] = useState("");

    const toggleModal = (source: string) => {
        setModalSource(source);
        setModalVisible(!isModalVisible);
    };

    const Modal: React.FC<ModalProps> = ({ visible, onClose, source }) => {
        if (!visible) return null;
    
        return (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-4 rounded shadow-lg relative modal">
                    {source === "Developer" && (
                        <div>Here is the developer</div>
                    )}
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    };

    return (
        <Element
            name="join"
            className="max-w-5xl self-center w-full px-5 flex flex-col items-center gap-3"
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
                <div className="flex gap-5 md:gap-3 flex-col md:flex-row items-center w-full mt-5">
                    <div className="relative flex-1">
                        <div className="absolute z-10 bottom-5 left-5 text-2xl">
                            <div className="font-bold">Designer</div>
                            <div className="flex flex-row text-xl py-1">
                                สมัครแล้ว 
                                <div className="px-1.5 text-[#FF914D] font-bold">0</div> 
                                คน
                            </div>
                            <Button 
                                className="first-letter mt-1 pr-8 bg-[#FF914D] font-bold relative"
                                onClick={() => {
                                    setFirstArrowAnimate(!isFirstArrowAnimate);
                                    setTimeout(() => setFirstArrowAnimate(false), 1000);
                                    toggleModal("Designer");
                                }}
                            >   
                                ดูรายละเอียด
                                <span
                                    className={`absolute right-3 bg-[#FF914D] ${
                                        isFirstArrowAnimate ? 'arrow-animation' : ''
                                    }`}
                                >
                                    ➜
                                </span>
                            </Button>
                        </div>
                        <img src="designer-card.png" className="z-0"/>
                    </div>
                    <div className="relative flex-1">
                        <div className="absolute z-10 bottom-5 left-5 text-2xl">
                            <div className="font-bold">Developer</div>
                            <div className="flex flex-row text-xl py-1">
                                สมัครแล้ว 
                                <div className="px-1.5 text-[#38B6FF] font-bold">0</div> 
                                คน
                            </div>
                            <Button 
                                className="first-letter mt-1 pr-8 bg-[#38B6FF] font-bold relative"
                                onClick={() => {
                                    setSecondArrowAnimate(!isSecondArrowAnimate);
                                    setTimeout(() => setFirstArrowAnimate(false), 1000);
                                    toggleModal("Developer");
                                }}
                            >
                                ดูรายละเอียด
                                <span
                                    className={`absolute right-3 bg-[#38B6FF] ${
                                        isSecondArrowAnimate ? 'arrow-animation' : ''
                                    }`}
                                >
                                    ➜
                                </span>
                            </Button>
                        </div>
                        <img src="developer-card.png" className="z-0"/>
                    </div>
                </div>
            </div>
            {isModalVisible && (
                <Modal visible={isModalVisible} onClose={() => toggleModal("")} source={modalSource} />
            )}
        </Element>
    );
};

export default JoinSection;
