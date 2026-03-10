import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services / Products", path: "/services" },
    { name: "Brands", path: "/brands" },
    { name: "Contact", path: "/contact" },
];

const industries = [
    "Oil & Gas",
    "Petrochemical & Chemical",
    "Mining & Metals",
    "Pharmaceuticals",
    "Construction & EPC",
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#fcfcfc] text-foreground border-t border-foreground/10">
            {/* Top CTA / Newsletter Section */}
            <div className="border-b border-foreground/5 bg-primary/5">
                <div className="container-custom py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Ready to streamline your industrial sourcing?</h3>
                            <p className="text-sm text-foreground/60 max-w-lg">Get in touch today for a tailored supply chain solution or request a comprehensive quote.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 rounded shadow-sm whitespace-nowrap"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container-custom py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block group" aria-label="KBK Sourcing Services home">
                            <Image
                                src="/images/kbk-footer-logo.png"
                                alt="KBK Sourcing Services logo"
                                width={160}
                                height={160}
                                className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <div className="space-y-4 pr-4">
                            <p className="text-base leading-relaxed text-foreground/70 text-justify">
                                KBK Sourcing Services Pvt. Ltd. is a premier global trading house and industrial sourcing partner. We specialize in end-to-end supply chain solutions for critical industries, ensuring unmatched quality and reliability.
                            </p>
                            <div className="flex items-center gap-4 pt-4">
                                <a
                                    href="https://www.instagram.com/kbk_sourcing_services_pvt_ltd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full border border-foreground/10 hover:border-primary hover:text-primary transition-all duration-300 group"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-all" />
                                </a>
                                <a
                                    href="https://www.kbksspl.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full border border-foreground/10 hover:border-primary hover:text-primary transition-all duration-300 group"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-all" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest text-primary uppercase border-l-2 border-primary pl-3">Resources</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary hover:translate-x-1 inline-block duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest text-primary uppercase border-l-2 border-primary pl-3">Industries</h4>
                        <ul className="space-y-4">
                            {industries.map((industry) => (
                                <li key={industry} className="text-sm font-medium text-foreground/60">
                                    {industry}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <h4 className="text-sm font-bold tracking-widest text-primary uppercase border-l-2 border-primary pl-3">Corporate Headquarters</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-primary/5 rounded border border-primary/10">
                                    <Image src="/images/icon-location.png" alt="" width={18} height={18} className="opacity-80" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-tighter">Visit Us</p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=Lucknow+226003+UP+India" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors block leading-tight">
                                        Lucknow - 226003,<br />Uttar Pradesh, India
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-primary/5 rounded border border-primary/10">
                                    <Image src="/images/icon-phone.png" alt="" width={18} height={18} className="opacity-80" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-tighter">Call Support</p>
                                    <a href="tel:+919305605160" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors block">
                                        +91 9305605160
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-2 bg-primary/5 rounded border border-primary/10">
                                    <Image src="/images/icon-email.png" alt="" width={18} height={18} className="opacity-80" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-tighter">General Inquiry</p>
                                    <a href="mailto:sales@kbksspl.com" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors block font-bold">
                                        sales@kbksspl.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-foreground/5 py-8 bg-secondary/20">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-xs text-foreground/50 tracking-wide order-2 md:order-1">
                        © {currentYear} KBK Sourcing Services Pvt. Ltd. | All Corporate Rights Reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 order-1 md:order-2">
                        <Link href="/privacy" className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors tracking-widest uppercase">Privacy Policy</Link>
                        <Link href="/terms" className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors tracking-widest uppercase">Terms of Use</Link>
                        <Link href="/cookies" className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors tracking-widest uppercase">Cookie Policy</Link>
                        <Link href="/sitemap" className="text-[10px] font-bold text-foreground/30 hover:text-primary transition-colors tracking-widest uppercase">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
