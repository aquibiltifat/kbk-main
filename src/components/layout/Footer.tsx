import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Image
                            src="/images/logo-new.png"
                            alt="KBK Sourcing Services"
                            width={160}
                            height={64}
                            className="h-16 w-auto object-contain bg-background p-2 rounded-md"
                        />
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            A professionally managed global trading and industrial sourcing organization delivering high-quality materials and reliable supply solutions worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-bold text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Brands", path: "/brands" },
                                { name: "Contact", path: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-bold text-lg">Industries We Serve</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li>Oil & Gas</li>
                            <li>Petrochemical & Chemical</li>
                            <li>Mining & Metals</li>
                            <li>Pharmaceuticals</li>
                            <li>Construction & EPC</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-bold text-lg">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                                <MapPin size={18} className="shrink-0 mt-0.5" />
                                <span>Lucknow - 226003, UP India</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Phone size={18} className="shrink-0" />
                                <a href="tel:+919305605160" className="hover:text-primary-foreground transition-colors">
                                    +91 9305605160
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Mail size={18} className="shrink-0" />
                                <a href="mailto:sales@kbksspl.com" className="hover:text-primary-foreground transition-colors">
                                    sales@kbksspl.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Globe size={18} className="shrink-0" />
                                <span>www.kbksspl.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
                    <p>© {new Date().getFullYear()} KBK Sourcing Services Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
