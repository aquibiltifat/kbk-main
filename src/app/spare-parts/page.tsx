"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { ChevronRight, Box, Settings, Circle } from "lucide-react";

const spareParts = [
    {
        id: "sp-001",
        name: "Industrial Gear",
        type: "gear",
        description: "High-grade steel gear for heavy machinery transmission.",
        category: "Mechanical",
        icon: Settings
    },
    {
        id: "sp-002",
        name: "Control Valve",
        type: "valve",
        description: "Precision control valve for fluid regulation systems.",
        category: "Hydraulic",
        icon: Circle
    },
    {
        id: "sp-003",
        name: "Generic Component",
        type: "box",
        description: "Standard industrial component block.",
        category: "General",
        icon: Box
    }
];

interface SparePartViewerProps {
    type: string;
    className?: string;
}

const SparePartViewer = ({ type, className = "h-[400px] w-full" }: SparePartViewerProps) => {
    const getIcon = () => {
        switch (type) {
            case "gear":
                return <Settings className="w-24 h-24 text-primary animate-spin" style={{ animationDuration: '8s' }} />;
            case "valve":
                return <Circle className="w-24 h-24 text-gray-400" />;
            default:
                return <Box className="w-24 h-24 text-orange-400" />;
        }
    };

    const getLabel = () => {
        switch (type) {
            case "gear":
                return "Industrial Gear";
            case "valve":
                return "Control Valve";
            default:
                return "Component Block";
        }
    };

    return (
        <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border border-border flex flex-col items-center justify-center gap-4`}>
            <div className="p-8 bg-white/50 rounded-full shadow-inner animate-pulse">
                {getIcon()}
            </div>
            <div className="text-center">
                <p className="text-lg font-semibold text-foreground">{getLabel()}</p>
                <p className="text-sm text-muted-foreground mt-1">3D Preview</p>
            </div>
            <p className="text-xs text-muted-foreground/60 mt-4">
                Interactive 3D viewer coming soon
            </p>
        </div>
    );
};

export default function SparePartsPage() {
    const [selectedPart, setSelectedPart] = useState(spareParts[0]);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-16">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                            Spare Parts Catalog
                        </h1>
                        <p className="text-lg text-primary-foreground/80">
                            Explore our 3D interactive catalog of genuine industrial spare parts.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-background py-8 section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">

                        {/* Sidebar List */}
                        <div className="lg:col-span-1 space-y-4">
                            <h2 className="text-xl font-heading font-bold mb-4">Available Parts</h2>
                            <div className="flex flex-col gap-2">
                                {spareParts.map((part) => (
                                    <button
                                        key={part.id}
                                        onClick={() => setSelectedPart(part)}
                                        className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 text-left ${selectedPart.id === part.id
                                                ? "bg-primary/5 border-primary shadow-sm"
                                                : "bg-card border-border hover:border-primary/50"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-md ${selectedPart.id === part.id ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                                                <part.icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className={`font-semibold ${selectedPart.id === part.id ? "text-primary" : "text-foreground"}`}>
                                                    {part.name}
                                                </h3>
                                                <span className="text-xs text-muted-foreground">{part.id}</span>
                                            </div>
                                        </div>
                                        {selectedPart.id === part.id && <ChevronRight size={18} className="text-primary" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Content - 3D Viewer */}
                        <div className="lg:col-span-2">
                            <div className="bg-card border border-border rounded-xl p-6 shadow-soft h-full flex flex-col">
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="text-2xl font-heading font-bold text-foreground">
                                            {selectedPart.name}
                                        </h2>
                                        <span className="px-3 py-1 text-sm border border-primary text-primary rounded-full">
                                            {selectedPart.category}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground">
                                        {selectedPart.description}
                                    </p>
                                </div>

                                <div className="flex-grow w-full min-h-[400px] bg-muted/30 rounded-lg overflow-hidden border border-border relative">
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1 text-sm bg-black/50 text-white rounded-full backdrop-blur-sm">
                                            Interactive 3D
                                        </span>
                                    </div>
                                    <SparePartViewer type={selectedPart.type} className="w-full h-[500px]" />
                                </div>

                                <div className="mt-6 flex justify-end gap-3">
                                    <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors">
                                        Download Spec Sheet
                                    </button>
                                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}
