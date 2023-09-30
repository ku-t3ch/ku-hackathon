// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ConfigProvider, theme } from "antd";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
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
    );
}
