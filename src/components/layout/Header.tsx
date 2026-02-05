"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services / Products", path: "/services" },
    { name: "Brands", path: "/brands" },
    { name: "Contact", path: "/contact" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
                <div className="w-full px-3 sm:px-4 lg:px-6">
                    <nav className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 sm:gap-3 h-full group shrink-0 max-w-[75%] sm:max-w-[60%] lg:max-w-[40%]">
                            <Image
                                src="/images/kbk-logo-full.png"
                                alt="KBK Symbol"
                                width={100}
                                height={100}
                                className="h-12 sm:h-16 lg:h-20 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                            <div className="flex flex-col items-start min-w-0">
                                <h1 className="text-sm sm:text-lg lg:text-2xl font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors whitespace-nowrap">
                                    KBK
                                </h1>
                                <p className="text-xs sm:text-sm lg:text-lg font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors whitespace-nowrap truncate">
                                    Sourcing Services Pvt. Ltd.
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`nav-link text-sm uppercase tracking-wider ${pathname === link.path ? "text-primary active" : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors shrink-0"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Navigation - Fixed position below header */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 w-full bg-background border-b border-border shadow-lg z-40">
                    <div className="px-4 py-4 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`py-3 px-4 text-sm uppercase tracking-wider font-medium rounded-md transition-colors ${pathname === link.path
                                    ? "bg-primary/10 text-primary"
                                    : "hover:bg-muted"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
