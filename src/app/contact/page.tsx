"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const contactInfo = [
    {
        icon: MapPin,
        title: "Our Office",
        details: ["Lucknow - 226003, UP India"],
    },
    {
        icon: Phone,
        title: "Phone Number",
        details: ["+91 9305605160"],
    },
    {
        icon: Mail,
        title: "Email Address",
        details: ["sales@kbksspl.com"],
    },
    {
        icon: Globe,
        title: "Website",
        details: ["www.kbksspl.com"],
    },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                setError(data.error || "Failed to send message. Please try again.");
            }
        } catch {
            setError("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-28">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-olive-dark" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-primary-foreground/80">
                            Get in touch with us for any inquiries about our products and services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                We&apos;re here to help. Reach out to us through any of the following channels
                                or fill out the contact form.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <info.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-foreground mb-1">
                                                {info.title}
                                            </h3>
                                            {info.details.map((detail) => (
                                                <p key={detail} className="text-muted-foreground text-sm">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-card rounded-2xl border border-border p-8 shadow-soft">
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                                    Send Us a Message
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                                </p>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                                        Thank you for your message! We&apos;ll get back to you soon. Check your email for confirmation.
                                    </div>
                                )}

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-foreground">
                                                Full Name *
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                                Email Address *
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 9305605160"
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium text-foreground">
                                                Subject *
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="How can we help?"
                                                required
                                                className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your requirements..."
                                            required
                                            className="w-full min-h-[150px] px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="animate-spin mr-2">⏳</span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Contact Us */}
            <section className="section-padding bg-muted">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                            Why Partner With <span className="text-primary">KBK Sourcing?</span>
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6 mt-10">
                            {[
                                "Quality Products",
                                "Timely Delivery",
                                "Expert Support",
                            ].map((item) => (
                                <div key={item} className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-medium text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
