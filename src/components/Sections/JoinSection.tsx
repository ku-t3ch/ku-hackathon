import { NextPage } from "next";
import { Element } from "react-scroll";
import { Card, CardBody, Button } from "@nextui-org/react";
import { PenTool, SquareCode } from "lucide-react";
import Link from "next/link";

interface Props { }

const JoinSection: NextPage<Props> = () => {
    return (
        <Element
            name="join"
            className="max-w-screen mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex items-center flex-col"
        >
            <div className="text-4xl font-bold text-center">APPLICATION</div>
            <div className="flex basis-1/2 grow md:grow-0 flex-col gap-3 md:flex-row items-center w-full mt-5">
                <Card className="w-full h-full md:ml-20 md:py-3">
                    <CardBody className="items-center">
                        <span className="text-2xl md:text-4xl font-bold text-primary">DESIGNER</span>
                        <span className="text-lg md:text-2xl mb-5 md:mb-8">นักออกแบบ</span>
                        <PenTool size={144} className="text-primary"></PenTool>
                        <Link href="https://forms.gle/v5xdDYXrY2EdXKt5A" target="_blank">
                            <Button className="font-bold text-lg md:text-2xl mt-5 md:mt-8"
                                color="primary" variant="ghost">
                                APPLY
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
                <Card className="w-full h-full md:mr-20 md:py-3">
                    <CardBody className="items-center">
                        <span className="text-2xl md:text-4xl font-bold text-primary">DEVELOPER</span>
                        <span className="text-lg md:text-2xl mb-5 md:mb-8">นักพัฒนา</span>
                        <SquareCode size={144} className="text-primary"></SquareCode>
                        <Link href="https://forms.gle/kBLLSRX54Mibyqoo7" target="_blank">
                            <Button className="font-bold text-lg md:text-2xl mt-5 md:mt-8"
                                color="primary" variant="ghost">
                                APPLY
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </Element>
    );
};

export default JoinSection;
