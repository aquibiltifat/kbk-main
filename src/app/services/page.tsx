import type { Metadata } from "next";
import {
    Factory, Wrench, Zap, Gauge, Shield, Settings,
    Building, HandMetal, Package, Link2, Wind, FlaskConical,
    Layers, Flame, Gem
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import WhatWeDoSection from "@/components/services/WhatWeDoSection";

export const metadata: Metadata = {
    title: "Industrial Services & AMC | Plant Maintenance India",
    description:
        "Annual maintenance contracts, preventive maintenance, breakdown services, and factory equipment solutions. Best industrial AMC contractors in India.",
    keywords: [
        "industrial AMC contractors India",
        "preventive maintenance service provider India",
        "plant maintenance services for industries",
        "annual maintenance contract for factories",
        "breakdown maintenance services India",
        "factory equipment maintenance solutions India",
        "industrial maintenance services India"
    ],
    openGraph: {
        title: "Services & Products | KBK Sourcing",
        description: "Industrial equipment, AMC services, and plant maintenance solutions in India.",
    },
};

const industries = [
    { name: "Oil & Gas", description: "Exploration, production, and distribution support", icon: Factory },
    { name: "Mining & Metals", description: "Materials and equipment for mining and processing", icon: Wrench },
    { name: "Petrochemical & Chemical Plants", description: "Raw materials and process solutions", icon: FlaskConical },
    { name: "Pharmaceuticals", description: "Products meeting strict quality standards", icon: Shield },
    { name: "Construction & EPC Projects", description: "Materials and services for large-scale projects", icon: Building },
    { name: "Cement Industry", description: "Industrial supplies for cement manufacturing", icon: Factory },
];

const products = [
    { name: "Industrial Equipment", description: "Pumps, compressors, motors, valves, and machinery", icon: Factory },
    { name: "Mechanical Spares", description: "Bearings, gears, shafts, and couplings", icon: Settings },
    { name: "Electrical & Electronics", description: "Motors, circuit breakers, switches, sensors, and automation components", icon: Zap },
    { name: "Instrumentation Spares", description: "Pressure gauges, flow meters, control panels, and calibration tools", icon: Gauge },
    { name: "Safety & Sanitary Supplies", description: "PPE, helmets, gloves, fire safety equipment, and hygiene products", icon: Shield },
    { name: "Fabricated Spare Parts", description: "Custom parts and assemblies for specialized machinery", icon: Wrench },
    { name: "Heavy Steel Structures", description: "Beams, columns, frameworks, and industrial supports", icon: Building },
    { name: "Hand & Measurement Tools", description: "Wrenches, torque tools, calipers, micrometers, and precision instruments", icon: HandMetal },
    { name: "Industrial Raw Materials & Packing", description: "Chemicals, metals, alloys, polymers, and packaging solutions", icon: Package },
    { name: "Lashing & Rigging Tools", description: "Chains, hooks, clamps, and tie-down equipment", icon: Link2 },
    { name: "Pneumatic Tools", description: "Air compressors, drills, grinders, and impact tools", icon: Wind },
    { name: "Chemicals", description: "Industrial chemicals, solvents, acids, and specialty chemicals", icon: FlaskConical },
    { name: "Metals & Alloys", description: "Steel, aluminum, copper, nickel, and other alloys", icon: Layers },
    { name: "Refractories & Insulation", description: "Fire bricks, ceramic fibers, boards, and high-temp resistant materials", icon: Flame },
    { name: "Ceramic-Based Products", description: "Industrial ceramics, coatings, and specialty components", icon: Gem },
];

export default function ServicesPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            Services & Products
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            We provide genuine branded industrial products and equipment to keep your operations running smoothly.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <WhatWeDoSection />

            {/* Target Industries */}
            <section className="section-padding bg-muted">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Our Target <span className="text-primary">Industries</span>
                        </h2>
                        <p className="text-muted-foreground">
                            We serve a wide range of industries, delivering quality products and solutions tailored to each sector.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={industry.name}
                                className="group p-6 bg-card rounded-xl border border-border shadow-soft card-hover"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                                    <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                                    {industry.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {industry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-primary">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-primary-foreground/80 leading-relaxed">
                            We combine quality, reliability, and timely delivery to support your industrial projects
                            and operations, making us a trusted partner across multiple sectors worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Our <span className="text-primary">Commitment</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                After-Sales Service
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Reliable support and assistance to ensure smooth operation and long-term performance after delivery.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                Quality Products
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Genuine, high-quality products sourced from trusted brands and manufacturers.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                Anticipating Client Demands
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Proactively understanding client needs to deliver timely and effective solutions.
                            </p>
                        </div>

                        <div className="p-8 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-shadow duration-300">
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                High Level of Proficiency
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Experienced professionals with strong technical knowledge and industry expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
