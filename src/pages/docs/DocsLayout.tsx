import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { docsNav } from "./docsConfig";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const headings = Array.from(
        document.querySelectorAll(".doc-content h2[id], .doc-content h3[id]")
      );
      setItems(
        headings.map((h) => ({
          id: h.id,
          text: h.textContent ?? "",
          level: parseInt(h.tagName[1]),
        }))
      );
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0% -70% 0%" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="hidden 2xl:block fixed right-6 top-24 w-52">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-3">
        이 페이지에서
      </p>
      <ul className="border-l border-white/8 space-y-0.5">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: item.level === 3 ? "20px" : "12px" }}
          >
            <a
              href={`#${item.id}`}
              className={`block text-[13px] py-1 leading-snug transition-colors ${
                activeId === item.id
                  ? "text-[#00c853]"
                  : "text-white/38 hover:text-white/65"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
}

export function DocsLayout({ children }: Props) {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(docsNav.map((s) => s.title))
  );

  const toggleSection = (title: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "#172226" }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-60 flex flex-col transition-transform duration-300 xl:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "#0f1a1e",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Sidebar logo */}
        <div className="flex items-center justify-between px-5 h-14 shrink-0 border-b border-white/5">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-xl font-black text-[#00c853]">De</span>
            <span className="text-xl font-black text-white">Toks</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="xl:hidden text-white/40 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="overflow-y-auto flex-1 py-5 px-3">
          {docsNav.map((section) => (
            <div key={section.title} className="mb-5">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full px-2 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/35 hover:text-white/55 transition-colors"
              >
                {section.title}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    expanded.has(section.title) ? "" : "-rotate-90"
                  }`}
                />
              </button>
              {expanded.has(section.title) && (
                <ul className="mt-1 space-y-0.5">
                  {section.pages.map((page) => {
                    const active = pathname === page.path;
                    return (
                      <li key={page.path}>
                        <Link
                          to={page.path}
                          onClick={() => setSidebarOpen(false)}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            active
                              ? "text-[#00c853] bg-[#00c853]/10 font-medium"
                              : "text-white/48 hover:text-white/78 hover:bg-white/5"
                          }`}
                        >
                          {page.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main area */}
      <div className="xl:pl-60">
        {/* Docs header */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-5 h-14 border-b border-white/5"
          style={{
            background: "rgba(15,26,30,0.92)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="xl:hidden text-white/50 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              <Link
                to="/"
                className="text-white/38 hover:text-white/65 px-2 py-1 transition-colors"
              >
                홈
              </Link>
              <span className="text-white/18">/</span>
              <span className="text-white/65 px-2 py-1">문서</span>
            </nav>
          </div>
          <a
            href="https://github.com/tok-it/detoks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/38 hover:text-white/65 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            GitHub
          </a>
        </header>

        {/* Content */}
        <main className="max-w-4xl mx-auto px-6 pt-10 pb-28 2xl:pr-60">
          <div className="doc-content">{children}</div>
        </main>
      </div>

      <TableOfContents />
    </div>
  );
}
