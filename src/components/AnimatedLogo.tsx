import Image from "next/image";

export default function AnimatedLogo() {
    return (
        <div className="logo-animated">
            {/* Electric circuit + chip behind the logo */}
            <svg
                className="logo-animated-svg"
                viewBox="0 0 64 64"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Dark chip background so it pops on a light header */}
                <rect
                    x={6}
                    y={6}
                    width={52}
                    height={52}
                    rx={12}
                    ry={12}
                    fill="rgba(6, 20, 38, 0.96)"
                />

                {/* Static outline – always visible */}
                <rect
                    x={8}
                    y={8}
                    width={48}
                    height={48}
                    rx={8}
                    ry={8}
                    fill="none"
                    stroke="var(--logo-accent)"
                    strokeWidth={1.5}
                    opacity={0.9}
                />

                {/* Animated outline */}
                <rect
                    x={8}
                    y={8}
                    width={48}
                    height={48}
                    rx={8}
                    ry={8}
                    fill="none"
                    className="circuit-path"
                />

                {/* Main horizontal trace */}
                <path
                    d="M 14 32 H 50"
                    className="circuit-path"
                />

                {/* Vertical + L-shaped traces to feel like a board */}
                <path
                    d="M 22 18 V 28 H 30"
                    className="circuit-path"
                />
                <path
                    d="M 42 36 H 34 V 48"
                    className="circuit-path"
                />

                {/* Extra diagonal trace for interest */}
                <path
                    d="M 18 40 L 26 48"
                    className="circuit-path"
                />

                {/* Nodes */}
                <circle cx={22} cy={18} r={2.2} fill="var(--logo-accent)" opacity={0.95} />
                <circle cx={30} cy={28} r={2} fill="var(--logo-accent)" opacity={0.95} />
                <circle cx={42} cy={36} r={2.2} fill="var(--logo-accent)" opacity={0.95} />
                <circle cx={34} cy={48} r={2} fill="var(--logo-accent)" opacity={0.95} />
                <circle cx={18} cy={40} r={1.8} fill="var(--logo-accent)" opacity={0.95} />
                <circle cx={26} cy={48} r={1.8} fill="var(--logo-accent)" opacity={0.95} />
            </svg>

            {/* Your logo on top */}
            <Image
                src="/logo.png"
                alt="Wizdom Enterprizes Logo"
                width={80}
                height={80}
                style={{ position: "relative", zIndex: 2 }}
                priority
            />
        </div>
    );
}
