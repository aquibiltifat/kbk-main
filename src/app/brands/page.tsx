"use client";

import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

const allBrands = [
    // A
    "ABB", "ABICOR BINZEL", "ABANAKI", "AEROMECCANICA STRANICH SPA", "AERZEN", "AFFIX",
    "ALLEN BRADLY", "ALLEN TEL", "ALLEN BRADLEY", "AMPERES ELECTRONICS", "ANAMET",
    "AIR PRODUCTS AND CONTROL INC", "APOLLO", "APC", "APT", "ARCONIC CORPORATION",
    "ARO", "ARPEGE MASTER K", "ASCO", "ASHCROFT", "AVID",
    // B
    "BARTEC", "BDK VALVE", "BAUMER", "BLACK BOX", "BONFIGLIOLI", "BRADLEY LIFTING",
    "BITZER", "BUHLER", "BUSSMAN", "BENTLY NEVADA CORP", "Balluff", "Belt", "BPW",
    "Braid", "Breco", "BERNING-MASCHINENFABRIK",
    // C
    "CB CHINA CHANGSHA PUMP WORKS CO", "CHINT", "CINTEC HEAVY EQUIPMENT COMPANY",
    "CEMBRE", "CHANGSHA PUMP WORKS CO. LTD", "CISCO", "CMC PRO", "CONDUCTIX WAMPFLER",
    "CATERPILLAR", "CONTRINEX", "CRESSALL", "COPELAND", "CANFIELD", "CAREL", "CATTRON",
    "CEFEM", "COOPER BUSSMANN",
    // D
    "DANFOSS", "DEUBLIN", "Demag", "DELTA",
    // E
    "EBNER", "Eastern Transformers", "ENDRESS+HAUSER", "EMERSON", "ENTRELEC", "EBM-PAPST", "EMG",
    // F
    "FERRAZ SHAWMUT", "FME FANON", "FRIGOR TECH", "FEAM", "FESTO", "FAG", "FARPOINTE DATA",
    "Feldbinder", "FIPNET", "FLENDER", "FLYGT", "FMIC", "FSQ",
    // G
    "GEDORE", "GENERAL", "GE", "GIOVENZANA", "GRUNDFOS", "GARLOCK", "GENERAL ELECTRIC",
    "GENERAL MONITORS", "GLAMA", "GRAINGER", "GREENLEE", "Gali", "GEMU", "Grainger",
    // H
    "HAIER", "HERBERT HANCHEN", "HOMA", "HYUNDAI", "HAWE Hydraulik", "HBC- RADIOMATIC INTERNATIONAL",
    "HELUKABEL", "HEYPAC", "HILTI", "HONEYWELL", "HYDAC", "HYLOC", "Hansa-Flex", "HARTING",
    "Hella", "HENGST-GEA Delbag GmbH", "HONSBERG", "Hilco - filter", "Hyosung",
    // I
    "IGUS", "INA", "INFINITY", "INGERSOLL RAND", "ISB", "Italiana rele",
    "I SQUARED R ELEMENT CO., INC", "Intensiv Filter Himenviro",
    // J
    "JAMES WALKER", "JCB", "JOVYATLAS GMBH",
    // K
    "KLOPPER THERM", "KROHNE", "KSB", "K-TON", "KTR", "KARL KLEIN", "KROMSCHRODER",
    "KUBLER", "KUHNEZUG", "KUNKLE", "Kaeser", "KEMPE", "KEYENCE", "KOBO", "KFNGS",
    "Kingda", "Kraus & Naimer", "KOLLMORGEN", "KOREA FLUID MACHINERY",
    // L
    "LUMBERG", "LEGRAND", "LIYANG GUFENGJI FACTORY", "LAIRD-CATTRON", "LESER", "LINTERN",
    "LAIRD", "LINCOLN",
    // M
    "METTLER TOLEDO", "MAINA ITALY", "MARTIN", "MAX AIR", "MECANINDUS", "MECFOR", "MAKITA",
    "Mettler-Toledo", "MOXA", "MICHAEL RIEDEL", "Mitsubishi", "MOGENSEN", "MOLEX",
    "MORGAN THERMAL", "MEAN WELL", "Meriam", "MERSEN", "MICHIELOTTO", "Molex", "MP FILTRI",
    "MPM-MOLEX", "MENNEKES", "Metal work Co", "MECHATHERM", "MINIMAX", "MAGNALOY",
    // N
    "NSK", "Nord", "NORGREN", "NUCLEAR INDUSTRY", "MURR-ELEKTRONIK",
    // O
    "OHL INDUSTRIAL MINING",
    // P
    "Phoenix", "P+F", "Parker", "Parker-Kempe", "PAULSTRA", "PARKER", "PATOL LTD",
    "PFANNENBERG", "POWERSCREEN", "PROSOFT TECHNOLOGIES", "PROTECTIVE COATING",
    "Perma", "PILLAR INDUCTION", "Powerscreen", "PRO TECH VALVES", "Provo", "PILZ",
    "PANAMETRICS INC", "PLATTCO",
    // R
    "REXROTH BOSCH", "RITTAL", "ROCKWELL", "ROSSEL MESSTECHNIK", "ROTEX", "RBL", "REID",
    "Renold", "REX MATERIALS GROUP", "REXNORD", "RHP", "RENOLD", "RONMAS",
    // S
    "SUNON", "SAB BROCKSKES", "SCHNEIDER ELECTRIC", "SICK", "SKF", "SKM AIR CONDITIONING",
    "SMC", "SQUARE D", "STAHL", "SUN HYDRAULICS", "SAFERACK", "SANDVIK", "Sang yong",
    "SCHENCK INDUSTRIAL", "Schroedahl circor", "SEAL MASTER", "SEW", "SHIELD SPRAY",
    "SHIJAZHUANG KINGDA PUMP INDUSTRY GROUP", "SHIN JIN BOLT CO.,LTD", "SPECTROMETER",
    "STRUERS", "SWAGELOK", "SWIFT HEAT & CONTROL", "Sensor Electronic", "SHAKO",
    "SHANGHAI", "SHIMADZU CORPORATION", "SIEMENS", "SOLER Y PALAU", "SSI", "SCHRACK", "SEAGATE",
    // T
    "TAYAO", "TELEMECANIQUE", "TEMPORITI", "THERMAX", "THERMO KINETICS", "TLV CO. LTD",
    "TRIAC", "TRICO", "TURCK", "THERMO FISHER", "THERMOPATCH", "TORK", "Trimble",
    "TWIFLEX", "TECA", "TELCO", "TDK LAMBDA", "TRICONEX",
    // U
    "UD Truck", "UD TRUCKS", "UMETA", "UNISEARCH ASSOCIATES INC",
    // V
    "VIKING", "VOHOBOO CRANE", "VICINAY", "VIP AIR EMPOWERMENT", "VEGA", "VORWALD",
    "VOSSIOH SCHWABE",
    // W
    "WAGO", "WEIDMULLER", "WEISHAUPT", "WHEELABRATOR", "WIKA", "WAM", "WANDFLUH",
    "WESTERN DIGITAL COMPANY", "WIEDEMANN", "WUXI", "WILDEN PUMPS",
    // X
    "XI AN TECHFULL SIMO MOTOR CO LTD",
    // Y
    "YASKAWA", "YOKOGAWA", "YANTAI TONGXING IND CO., LTD",
    // Z
    "Zhangjiagang", "ZIEHL ABEGG",
];

const alphabet = ["0-9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function BrandsPage() {
    const [selectedLetter, setSelectedLetter] = useState<string>("A");

    const getFilteredBrands = () => {
        if (selectedLetter === "0-9") {
            return allBrands.filter((brand) => /^[0-9]/.test(brand));
        }
        return allBrands.filter((brand) =>
            brand.toUpperCase().startsWith(selectedLetter)
        ).sort((a, b) => a.localeCompare(b));
    };

    const filteredBrands = getFilteredBrands();

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            Our Brands
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            We partner with leading global manufacturers to bring you the best industrial products.
                        </p>
                    </div>
                </div>
            </section>

            {/* Brands Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    {/* Alphabet Filter */}
                    <div className="mb-10 overflow-x-auto pb-2">
                        <div className="flex gap-1 min-w-max">
                            {alphabet.map((letter) => (
                                <button
                                    key={letter}
                                    onClick={() => setSelectedLetter(letter)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-md font-heading font-semibold text-sm transition-all duration-200 ${selectedLetter === letter
                                            ? "bg-primary text-primary-foreground shadow-md"
                                            : "bg-muted text-foreground hover:bg-primary/10"
                                        }`}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Letter Title */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-heading font-bold text-foreground">
                            Brands starting with &quot;{selectedLetter}&quot;
                        </h2>
                        <p className="text-muted-foreground mt-1">
                            {filteredBrands.length} brand{filteredBrands.length !== 1 ? "s" : ""} found
                        </p>
                    </div>

                    {/* Brands Grid */}
                    {filteredBrands.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredBrands.map((brand, index) => {
                                const slug = brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

                                return (
                                    <div
                                        key={`${brand}-${index}`}
                                        className="group relative hover:z-20 flex items-center gap-6 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-200"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                                            {brand}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground text-lg">
                                No brands found starting with &quot;{selectedLetter}&quot;
                            </p>
                        </div>
                    )}

                    {/* Additional Info */}
                    <div className="mt-16 p-8 bg-muted rounded-2xl text-center">
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                            & Many More...
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We continuously expand our network of trusted brand partners. If you&apos;re looking for
                            a specific brand not listed here, please contact us and we&apos;ll be happy to assist.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
