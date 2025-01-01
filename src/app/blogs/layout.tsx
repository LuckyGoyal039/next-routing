import { Main } from "next/document";
import React from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}