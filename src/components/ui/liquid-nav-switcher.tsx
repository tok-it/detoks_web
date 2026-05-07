import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Quick Start", href: "#quick-start" },
  { label: "소개", href: "#about" },
  { label: "사용 예시", href: "#example" },
];

export function LiquidNavSwitcher() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (!el || activeIndex < 0) {
      setIndicator((s) => ({ ...s, opacity: 0 }));
      return;
    }
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
  }, [activeIndex]);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      const trigger = window.scrollY + window.innerHeight * 0.45;
      let next = -1;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= trigger) {
          next = i;
          break;
        }
      }
      setActiveIndex(next);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="nav-switcher">
      <div
        className="nav-switcher__indicator"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.opacity,
        }}
      />
      {navItems.map((item, i) => (
        <a
          key={item.href}
          ref={(el) => { itemRefs.current[i] = el; }}
          href={item.href}
          onClick={() => setActiveIndex(i)}
          className={`nav-switcher__option${activeIndex === i ? " nav-switcher__option--active" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
