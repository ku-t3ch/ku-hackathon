import { NextPage } from "next";
import { Element } from "react-scroll";
import { Card, CardBody, Button, CardHeader } from "@nextui-org/react";
import { PenTool, SquareCode, ChevronRight } from "lucide-react";
import Link from "next/link";
import _ from "lodash";
interface Props {
    // issues: Issue[];
}

const JoinSection: NextPage<Props> = (props) => {
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
                            <Link
                                href="https://forms.gle/v5xdDYXrY2EdXKt5A"
                                target="_blank"
                            >
                                <Button
                                    className="font-bold text-lg md:text-2xl mt-5 md:mt-8"
                                    color="primary"
                                    variant="ghost"
                                >
                                    APPLY
                                </Button>
                            </Link>
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
                            <Link
                                href="https://forms.gle/kBLLSRX54Mibyqoo7"
                                target="_blank"
                            >
                                <Button
                                    className="font-bold text-lg md:text-2xl mt-5 md:mt-8"
                                    color="primary"
                                    variant="ghost"
                                >
                                    APPLY
                                </Button>
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Element>
    );
};

export default JoinSection;
