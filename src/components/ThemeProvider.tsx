"use client";

import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export default function ThemeProviderWrapper({ children }: PropsWithChildren) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
            {children}
        </ThemeProvider>
    );
}
