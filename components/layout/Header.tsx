"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash links: if on homepage, use hash. If on other pages, navigate to homepage with hash
  const getNavLink = (hash: string) => {
    if (pathname === "/") {
      return hash;
    }
    // Navigate to homepage with hash
    return `/${hash}`;
  };

  const handleHashClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    // If we're on the homepage, handle smooth scroll
    if (pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const headerHeight = 80; // Header height
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      e.preventDefault();
      router.push(`/${hash}`);
      // Scroll will be handled by the useEffect after navigation
    }
  };

  useEffect(() => {
    // Handle hash in URL after page load or navigation
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash;
        // Wait for the page to be fully rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerHeight = 80;
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      }
    };

    // Handle hash on pathname change
    handleHashScroll();

    // Also listen for hashchange events
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  type NavLink = {
    href: string;
    label: string;
    hash?: string;
    isNew?: boolean;
  };

  const navLinks: NavLink[] = [
    { href: getNavLink("#servicios"), label: "Servicios", hash: "#servicios" },
    { href: getNavLink("#disenos"), label: "Diseños", hash: "#disenos" },
    { href: "/colegios", label: "Colegios", isNew: true },
    { href: getNavLink("#partners"), label: "Partners", hash: "#partners" },
    { href: getNavLink("#contacto"), label: "Contacto", hash: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-pickletrack-black/90 backdrop-blur-md border-b border-white/10 scrolled-header"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 group"
          >
            <div className="relative w-48 h-36 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/pickletrack.png"
                alt="PickleTrack"
                fill
                className="object-contain object-left invert-on-light"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if ("hash" in link && link.hash) {
                    handleHashClick(e, link.hash);
                  }
                }}
                className="relative font-body text-sm uppercase tracking-widest text-white/70 hover:text-pickletrack-lime transition-colors duration-300 group flex items-center gap-1.5 nav-link whitespace-nowrap"
              >
                {link.label}
                {"isNew" in link && link.isNew && (
                  <span className="px-1.5 py-0.5 text-[10px] bg-pickletrack-gold text-pickletrack-black rounded font-display tracking-normal">
                    NEW
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pickletrack-lime transition-all duration-300 group-hover:w-full nav-link-underline" />
              </Link>
            ))}
          </div>

          {/* Compact Navigation for MD screens */}
          <div className="hidden md:flex lg:hidden items-center gap-3">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if ("hash" in link && link.hash) {
                    handleHashClick(e, link.hash);
                  }
                }}
                className="relative font-body text-xs uppercase tracking-wider text-white/70 hover:text-pickletrack-lime transition-colors duration-300 group flex items-center gap-1 nav-link whitespace-nowrap"
              >
                {link.label}
                {"isNew" in link && link.isNew && (
                  <span className="px-1 py-0.5 text-[8px] bg-pickletrack-gold text-pickletrack-black rounded font-display tracking-normal">
                    NEW
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            <ThemeToggle />
            <Link
              href={getNavLink("#contacto")}
              onClick={(e) => {
                handleHashClick(e, "#contacto");
              }}
              className="header-cta relative px-4 py-2 lg:px-6 lg:py-2.5 font-display text-xs lg:text-sm tracking-wider uppercase bg-pickletrack-lime text-pickletrack-black hover:glow-lime transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{
                clipPath:
                  "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
              }}
            >
              Quiero Pistas
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-white mobile-menu-bar transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white mobile-menu-bar transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white mobile-menu-bar transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-pickletrack-black/98 backdrop-blur-lg transition-all duration-500 mobile-menu ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ThemeToggle />
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if ("hash" in link && link.hash) {
                  handleHashClick(e, link.hash);
                }
              }}
              className="font-display text-4xl uppercase tracking-wider text-white hover:text-pickletrack-lime transition-colors mobile-nav-link"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={getNavLink("#contacto")}
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              handleHashClick(e, "#contacto");
            }}
            className="header-cta mt-8 px-8 py-4 font-display text-xl tracking-wider uppercase bg-pickletrack-lime text-pickletrack-black"
          >
            Quiero Pistas
          </Link>
        </div>
      </div>
    </header>
  );
}
