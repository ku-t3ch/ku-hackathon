import { NextPage } from "next";
import { Element } from "react-scroll";
import { use, useEffect, useRef, useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { PenTool, SquareCode, ChevronRight } from "lucide-react";
import { Issue } from "@/interfaces/IssueInterface";
import { Tree } from "@/interfaces/CircularPackingInterface";
import { useContainerDimensions } from "../hooks/useContainerDimensions";
import Link from "next/link";
import { CircularPacking } from "../Charts/CircularPackingModified";
import { Collapse, CollapseProps } from "antd";

interface Props {
    // issues: Issue[];
}

const JoinSection: NextPage<Props> = (props) => {
    const [Issues, setIssues] = useState<Issue[]>([]);
    const [IssueTree, setIssueTree] = useState<Tree[]>([]);

    useEffect(() => {
        getIssues();
    }, []);

    const getIssues = async () => {
        const res = await fetch("/api/issues");
        const data = (await res.json()) as Issue[];
        data.forEach((i) => {
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
                        // > 10 because less significant issues make harder-to-use interface
                        return {
                            type: "leaf",
                            name: subissue.name,
                            value: subissue.count,
                        };
                    }),
            };
            setIssueTree((prev) => [...prev, issueTree]);
        });
        setIssues(data);
    };

    const sectionContainer = useRef(null);

    const charts: CollapseProps["items"] = IssueTree.map((t) => {
        // const { width } = useContainerDimensions(sectionContainer);

        return {
            key: `Collapsible ${t.name}`,
            label: <div className="text-lg">{t.name}</div>,
            children: (
                <div key={t.name} className="mt-10 w-full text-center">
                    <CircularPacking data={t} width={300} height={300} />
                </div>
            ),
        };
    });

    return (
        <Element
            name="join"
            className="max-w-screen mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex items-center flex-col"
        >
            <div
                className="text-4xl font-bold text-center"
                ref={sectionContainer}
            >
                APPLICATION
            </div>
            <span className="text-xl md:text-2xl text-left w-full md:w-5/6 p-5 border-l-3 border-green-500">
                Issues to Hack
            </span>
            <div className="flex basis-1/2 grow flex-col md:grow-0 w-full md:w-5/6">
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
                    items={charts}
                    accordion
                />
            </div>
            <div className="flex basis-1/2 grow md:grow-0 flex-col gap-3 md:flex-row items-center w-full mt-5">
                <Card className="w-full h-full md:ml-20 md:py-3">
                    <CardBody className="items-center">
                        <span className="text-2xl md:text-4xl font-bold text-primary">
                            DESIGNER
                        </span>
                        <span className="text-lg md:text-2xl mb-5 md:mb-8">
                            นักออกแบบ
                        </span>
                        <PenTool size={144} className="text-primary"></PenTool>
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
                <Card className="w-full h-full md:mr-20 md:py-3">
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
        </Element>
    );
};

export default JoinSection;
