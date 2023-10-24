import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "KU Hackathon",
    description: "KU Hackathon กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต",
    applicationName: "KU Hackathon",
    keywords: "KU Hackathon, กระเทาะแอปนิสิต, นิสิต เพื่อนิสิต",
    authors: [{ name: "KUTech Team", url: "https://tech.nisit.ku.ac.th" }],
    creator: "KUTech Team",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        url: "https://hackathon.tech.nisit.ku.ac.th",
        title: "KU Hackathon",
        description: "KU Hackathon กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต",
        siteName: "KU Hackathon",
        images: [
            {
                url: "/og-image.png",
            },
        ],
    },
    metadataBase: new URL("https://hackathon.tech.nisit.ku.ac.th"),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    <div className="flex flex-col pb-10">{children}</div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
