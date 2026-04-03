"use client";

import Image from "next/image";

export default function AnimatedLogo({ size = 48 }: { size?: number }) {
    return (
        <div className="logo-frame" style={{ width: size, height: size }} aria-label="Wizdom Enterprizes Logo">
            <Image
                src="/logo.png"
                alt="Wizdom Enterprizes Logo"
                fill
                sizes={`${size}px`}
                className="logo-frame__img"
                priority
            />

        </div>
    );
}