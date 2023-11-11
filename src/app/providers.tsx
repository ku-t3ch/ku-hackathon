// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import useSWR, { SWRConfig } from "swr";

import { ConfigProvider, theme } from "antd";

export function Providers({ children }: { children: React.ReactNode }) {
    function localStorageProvider() {
        if (typeof window === "undefined") {
            return () => new Map();
        }

        const map = new Map(
            JSON.parse(localStorage.getItem("app-cache") || "[]")
        );

        // Before unloading the app, we write back all the data into `localStorage`.
        window.addEventListener("beforeunload", () => {
            const appCache = JSON.stringify(Array.from(map.entries()));
            localStorage.setItem("app-cache", appCache);
        });

        // We still use the map for write & read for performance.
        return map;
    }

    return (
        // <SWRConfig value={{ provider: localStorageProvider as any }}>
            <NextUIProvider>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: "#21C55D",
                        },
                        algorithm: theme.darkAlgorithm,
                    }}
                >
                    {children}
                </ConfigProvider>
            </NextUIProvider>
        // </SWRConfig>
    );
}
