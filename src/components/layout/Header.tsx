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
    { name: "Spare Parts", path: "/spare-parts" },
    { name: "Contact", path: "/contact" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
            <div className="w-full pl-0 pr-4 lg:pl-0 lg:pr-6">
                <nav className="flex items-center justify-between h-32">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-0 w-[40%] h-full group pr-4">
                        <Image
                            src="/images/logo-icon-transparent-v2.png"
                            alt="KBK Symbol"
                            width={208}
                            height={208}
                            className="h-52 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                        <div className="flex flex-col items-start z-10 -ml-6">
                            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors whitespace-nowrap">
                                KBK
                            </h1>
                            <p className="text-xs lg:text-sm font-semibold tracking-widest text-[#2c4c2c] uppercase whitespace-nowrap">
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
                        className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-32 left-0 right-0 bg-background border-b border-border shadow-medium animate-slide-up">
                        <div className="container-custom py-4 flex flex-col gap-4">
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
            </div>
        </header>
    );
};

export default Header;
