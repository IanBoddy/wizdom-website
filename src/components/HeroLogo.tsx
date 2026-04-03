import AnimatedLogo from "./AnimatedLogo";

export default function HeroLogo() {
    return (
        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            {/* soft halo */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-2xl" />

            {/* “device” frame */}
            <div className="relative grid h-full w-full place-items-center rounded-[32px] border border-zinc-200 bg-white shadow-sm">
                <AnimatedLogo size={240} />
            </div>

            {/* subtle caption */}
            <div className="mt-3 text-center text-xs text-zinc-500">
                Clarity • Execution • Results
            </div>
        </div>
    );
}