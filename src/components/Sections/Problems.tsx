import { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import { Issue } from "@/interfaces/IssueInterface";
import { Tree, TreeNode } from "@/interfaces/CircularPackingInterface";
import { Collapse, CollapseProps } from "antd";
import { Element } from "react-scroll";
import { Card, CardBody, Button, CardHeader } from "@nextui-org/react";
import { PenTool, SquareCode, ChevronRight } from "lucide-react";
import axios from "axios";
import clsx from "clsx";
import _ from "lodash";

interface Props {}

const Problems: NextPage<Props> = () => {
    const [Issues, setIssues] = useState<Issue[]>([]);
    const [IssueTree, setIssueTree] = useState<Tree[]>([]);
    const sectionContainer = useRef(null);

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

    const charts: CollapseProps["items"] = IssueTree.map((t) => {
        return {
            key: `Collapsible ${t.name}`,
            label: <div className="text-xl md:text-2xl">{t.name}</div>,
            children: (
                <div className="flex flex-col gap-3">
                    {_.orderBy(
                        (t as TreeNode).children,
                        (o) => o.value,
                        "desc"
                    ).map((item) => (
                        <Card className="w-full">
                            <CardHeader className="flex gap-3">
                                <Button color="primary" variant="flat">
                                    <div className="flex items-end gap-1">
                                        <div className="text-xl">{item.value}</div>
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
            name="problems"
            className="max-w-5xl mx-auto w-full px-5 pt-[5rem] md:pt-[10rem] flex flex-col items-center"
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
                                    transform: `rotate(${isActive ? 90 : 0}deg)`,
                                    transition: "transform 0.2s ease-in-out",
                                }}
                            />
                        )}
                        items={charts}
                        accordion
                    />
                </div>
            </div>
        </Element>
    );
};

export default Problems;
