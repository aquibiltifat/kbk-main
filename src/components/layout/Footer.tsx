import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="space-y-0">
                        <Image
                            src="/images/kbk-logo-white.png"
                            alt="KBK Sourcing Services"
                            width={180}
                            height={180}
                            className="h-60 px-0 py-0 w-auto object-contain pb-0 rounded-md"
                        />
                        <p className="text-primary-foreground/80 text-sm leading-relaxed top-0 pt-0">
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
                                <Image src="/images/icon-location.png" alt="Location" width={18} height={18} className="shrink-0 mt-0.5 object-contain" />
                                <a href="https://www.google.com/maps/search/?api=1&query=Lucknow+226003+UP+India" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                                    Lucknow - 226003, UP India
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Image src="/images/icon-phone.png" alt="Phone" width={18} height={18} className="shrink-0 object-contain" />
                                <a href="tel:+919305605160" className="hover:text-primary-foreground transition-colors">
                                    +91 9305605160
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Image src="/images/icon-email.png" alt="Email" width={18} height={18} className="shrink-0 object-contain" />
                                <a href="mailto:sales@kbksspl.com" className="hover:text-primary-foreground transition-colors">
                                    sales@kbksspl.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                                <Image src="/images/icon-globe.png" alt="Website" width={18} height={18} className="shrink-0 object-contain" />
                                <a href="https://www.kbksspl.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                                    www.kbksspl.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-primary-foreground/80 pt-2">
                                <Image
                                    src="/images/instagram-logo-colorful.png"
                                    alt="Instagram"
                                    width={18}
                                    height={18}
                                    className="shrink-0"
                                />
                                <a
                                    href="https://www.instagram.com/kbk_sourcing_services_pvt_ltd?utm_source=qr&igsh=NWdoN2pmY203bnp0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary-foreground transition-colors"
                                >
                                    kbk_sourcing_services_pvt_ltd
                                </a>
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
