import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  bg: string;
  fg: string;
  rule?: string;
  children?: ReactNode;
  pin?: boolean;
};

export function StorySection({ index, kicker, title, bg, fg, rule, children, pin = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Tilt + shrink as the next section scrolls over it
  const rotate: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [0, pin ? 18 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, pin ? 0.85 : 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: pin ? "120dvh" : "100dvh" }}
    >
      <div className={pin ? "sticky top-0 h-[100dvh] w-full overflow-hidden" : "h-[100dvh] w-full overflow-hidden"}>
        <motion.div
          style={{
            backgroundColor: bg,
            color: fg,
            rotate: pin ? rotate : 0,
            scale: pin ? scale : 1,
            opacity,
            transformOrigin: "0% 100%",
          }}
          className="flex h-full w-full flex-col justify-between gap-3 px-[5vw] pt-20 pb-[max(2.5rem,env(safe-area-inset-bottom,0px)+2rem)] md:gap-6 md:pt-[clamp(2rem,6vw,5rem)] md:pb-[4vw] will-change-transform"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.25em]">
            {index} · {kicker}
          </p>
          <hr className="border-none border-t" style={{ borderColor: rule ?? fg, opacity: 0.5 }} />
          <div>
            <h2 className="font-display text-[clamp(2.2rem,12vw,14rem)] leading-[0.85] uppercase tracking-tight">
              {title}
            </h2>
          </div>
          <hr className="border-none border-t" style={{ borderColor: rule ?? fg, opacity: 0.5 }} />
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function ColRow({ items }: { items: { label: string; body: string }[] }) {
  return (
    <div className="flex flex-wrap gap-[3vw]">
      {items.map((it) => (
        <div key={it.label} className="min-w-[140px] flex-1">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider">{it.label}</p>
          <p className="text-[clamp(0.9rem,1.2vw,1.05rem)] leading-relaxed opacity-75">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
