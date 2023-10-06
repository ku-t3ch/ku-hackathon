"use client";
import { NextPage } from "next";
import {
    Navbar as NavbarComponent,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import React, { useEffect, useMemo } from "react";
import { ClipboardEdit } from "lucide-react";
import { Events, scroller } from "react-scroll";

interface Props {}

const Navbar: NextPage<Props> = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentView, setCurrentView] = React.useState("home");

    const scrollTo = (name: string) => {
        scroller.scrollTo(name, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    useEffect(() => {
        Events.scrollEvent.register("begin", function () {
            setCurrentView(arguments[0]);
        });
        Events.scrollEvent.register("end", function () {
            console.log(arguments[0]);
        });
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    return (
        <div className="fixed w-full z-10">
            <NavbarComponent
                onMenuOpenChange={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand
                        onClick={() => {
                            scrollTo("home");
                            setIsMenuOpen(false);
                        }}
                        className="cursor-pointer"
                    >
                        <p className="font-bold text-inherit">KU Hackathon</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Button
                            as={Link}
                            color="primary"
                            radius="none"
                            variant="flat"
                            size="sm"
                            onClick={() => scrollTo("join")}
                        >
                            <ClipboardEdit size={15} />
                            สมัครเข้าร่วม
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            color={
                                (currentView !== "time-line" && "foreground") ||
                                "primary"
                            }
                            href="#"
                            onClick={() => scrollTo("time-line")}
                        >
                            ไทม์ไลน์
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            color={
                                (currentView !== "schedule" && "foreground") ||
                                "primary"
                            }
                            href="#"
                            onClick={() => scrollTo("schedule")}
                        >
                            กำหนดการ
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    <NavbarMenuItem>
                        <Link
                            color={
                                (currentView !== "join" && "foreground") ||
                                "primary"
                            }
                            href="#"
                            onClick={() => {
                                scrollTo("join");
                                setIsMenuOpen(false);
                            }}
                        >
                            <ClipboardEdit size={15} className="mr-2" />
                            สมัครเข้าร่วม
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link
                            href="#"
                            color={
                                (currentView !== "time-line" && "foreground") ||
                                "primary"
                            }
                            onClick={() => {
                                scrollTo("time-line");
                                setIsMenuOpen(false);
                            }}
                        >
                            ไทม์ไลน์
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link
                            href="#"
                            color={
                                (currentView !== "schedule" && "foreground") ||
                                "primary"
                            }
                            onClick={() => {
                                scrollTo("schedule");
                                setIsMenuOpen(false);
                            }}
                        >
                            กำหนดการ
                        </Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </NavbarComponent>
        </div>
    );
};

export default Navbar;
