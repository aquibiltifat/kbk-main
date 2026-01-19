import type { Metadata } from "next";
import { Target, Eye, Heart, Shield, Users, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
    title: "About Us | Best Factory Service Company in India",
    description:
        "Leading industrial maintenance company in India. Quality-focused procurement, global vendor network, and decades of expertise in factory maintenance.",
    keywords: [
        "best factory service company in India",
        "industrial maintenance company India",
        "factory maintenance company India",
        "industrial services India"
    ],
    openGraph: {
        title: "About KBK Sourcing Services",
        description: "Leading industrial maintenance company in India with global expertise.",
        images: ["/images/about-image.png"],
    },
};

const values = [
    { icon: Heart, title: "Empowerment", description: "Encouraging ownership, accountability, and innovation" },
    { icon: Users, title: "Collaboration", description: "Working as one team with clients, partners, and stakeholders" },
    { icon: Award, title: "Recognition", description: "Valuing performance, dedication, and excellence" },
    { icon: Shield, title: "Respect", description: "Upholding dignity, diversity, and ethical conduct" },
];

export default function AboutPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            About Us
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            A professionally managed global trading and industrial sourcing organization based in India.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-foreground leading-relaxed mb-6">
                            KBK Sourcing Services Pvt. Ltd. is a professionally managed global trading and industrial
                            sourcing organization based in India, committed to delivering high-quality materials,
                            engineered products, and reliable supply solutions to industries worldwide. As a dynamic
                            and forward-thinking trading house, KBK operates with a clear focus on quality, speed,
                            integrity, and long-term partnerships.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            With a strong foundation in international trade and sourcing, we specialize in supplying
                            a diverse range of industrial materials and services that support critical operations across
                            Oil & Gas, EPC, Petrochemical, Chemical, Pharmaceutical, Mining, Construction, and
                            Manufacturing sectors. Our ability to understand complex technical requirements and convert
                            them into dependable supply solutions has enabled us to serve clients across multiple
                            geographies with consistency and confidence.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At KBK, we believe that customer satisfaction is the ultimate measure of success. Every
                            engagement is driven by a deep understanding of client needs, strict adherence to quality
                            standards, and a commitment to delivering value beyond expectations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding bg-muted">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Vision */}
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our vision is to emerge as a leading global force in the trading and industrial sourcing
                                industry, recognized for excellence in quality, reliability, and customer-centric solutions.
                                We aspire to consistently deliver high-quality products and value-driven services that not
                                only meet but exceed the evolving expectations of our customers across international markets.
                                Through innovation, integrity, and strategic growth, KBK aims to set new benchmarks in global
                                trade while building long-lasting partnerships founded on trust and performance.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                At KBK Sourcing Services Pvt. Ltd., we foster a caring and considerate work environment
                                that values the well-being and growth of our employees. Our culture is built on the
                                principles of empowerment, flexibility, collaboration, recognition, and respect. Our
                                mission is to create sustainable value by delivering efficient, and ethical trading
                                solutions while nurturing a supportive and people-centric work culture & recognizing
                                them as the foundation of our success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Our <span className="text-primary">Core Values</span>
                        </h2>
                        <p className="text-muted-foreground">
                            The principles that guide everything we do.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="group p-6 bg-card rounded-xl border border-border text-center card-hover"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                                    <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="section-padding bg-primary">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <Shield className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                            Quality Assurance
                        </h2>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                            At KBK Sourcing Services Pvt. Ltd., we are dedicated to providing high-quality products
                            to our customers. We deliver genuine, reliable, and high-performance industrial products
                            that meet international standards. Specializing in import-export of steel, ceramics, and
                            a wide range of industrial materials, we ensure every product is carefully sourced and verified.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {["Quality Products", "After-Sales Service", "Anticipating Client Demands"].map((item) => (
                                <div key={item} className="flex items-center gap-3 justify-center text-primary-foreground">
                                    <CheckCircle className="w-6 h-6 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Proficiency */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                            High Level of <span className="text-primary">Proficiency</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            At our organization, we recognize and nurture individual expertise to drive overall growth.
                            By embracing a culture of excellence and precision, we consistently deliver superior results,
                            enabling us to expand our global client base and build long-term partnerships worldwide.
                            Our experienced professionals bring strong technical knowledge and industry expertise to
                            every project.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
