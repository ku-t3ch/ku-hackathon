import "../app/globals.css";
import type { Metadata } from "next";

import { Providers } from "../app/providers";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from "next/font/google";
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
        url: "https://hackathon.ku.ac.th",
        title: "KU Hackathon",
        description: "KU Hackathon กระเทาะแอปนิสิต โดยนิสิต เพื่อนิสิต",
        siteName: "KU Hackathon",
        images: [
            {
                url: "/og-image.png",
            },
        ],
    },
    metadataBase: new URL("https://hackathon.ku.ac.th"),
};

function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={inter.className}>
        <Providers>
            <Navbar />
            <div className="flex flex-col pb-10">{children}</div>
            <Footer />
        </Providers>
        </div>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}