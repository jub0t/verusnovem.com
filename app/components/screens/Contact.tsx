"use client"

import React, { ChangeEvent, useState } from "react";
import { ChivoMono, KodeMono } from "@/app/font";
import Config from "../../config";

export default function Contact() {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        message: "",
        no_emails: false,
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: ChangeEvent<any>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: ChangeEvent<any>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const form = new FormData();
            form.append("full_name", formData.full_name);
            form.append("email", formData.email);
            form.append("message", formData.message);
            form.append("no_mails", formData.no_emails.toString()); // Convert boolean to string

            const response = await fetch(Config.backendUrl, {
                method: "POST",
                body: form, // Sending FormData
            });

            if (response.ok) {
                setSuccessMessage("Message sent successfully!");
                setFormData({
                    full_name: "",
                    email: "",
                    message: "",
                    no_emails: false,
                });
            } else {
                setSuccessMessage("Failed to send the message. Please try again.");
            }
        } catch (_) {
            setSuccessMessage("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex flex-wrap justify-center py-36 bg-gray-50">
            <div id="contact" className="px-8 lg:px-[70px] w-full py-16 lg:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Section */}
                <section>
                    <h1 className={`font-bold text-2xl lg:text-3xl mb-4 ${KodeMono.className}`}>
                        No Socials? No Problem.
                    </h1>
                    <p className={`${ChivoMono.className} w-full lg:w-10/12 text-gray-600 leading-relaxed`}>
                        Fill out the form on the right to send a message directly to my personal inbox.
                    </p>
                </section>

                {/* Right Section - Contact Form */}
                <section className="p-8 gap-6 flex flex-wrap rounded-[12px] bg-white shadow-lg border-[#9B8989]-200/500 border-[1px]">
                    <form className="flex-wrap space-y-6 flex-wrap" onSubmit={handleSubmit}>
                        <div className={`grid ${KodeMono.className}`}>
                            <label htmlFor="full_name" className="capitalize text-[14px] mb-2">Full Name</label>
                            <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                className="border rounded-[7px] focus:outline-none focus:border-black border-[#9B8989]-200/500 py-3 px-4 placeholder-gray-400 transition duration-200"
                                placeholder="John Doe"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={`grid ${KodeMono.className}`}>
                            <label htmlFor="email" className="capitalize text-[14px] mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="border rounded-[7px] focus:outline-none focus:border-black border-[#9B8989]-200/500 py-3 px-4 placeholder-gray-400 transition duration-200"
                                placeholder="example@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={`grid ${KodeMono.className}`}>
                            <label htmlFor="message" className="capitalize text-[14px] mb-2">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={7}
                                className="border rounded-[7px] focus:outline-none focus:border-black border-[#9B8989]-200/500 py-3 px-4 placeholder-gray-400 transition duration-200"
                                placeholder="Just be yourself, no need to be formal ;)"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={`flex gap-2 items-start ${KodeMono.className}`}>
                            <input
                                type="checkbox"
                                id="no_emails"
                                name="no_emails"
                                className="mt-1 accent-black"
                                checked={formData.no_emails}
                                onChange={handleChange}
                            />
                            <label htmlFor="no_emails" className="text-[14px]">
                                {`I will send you emails about my blog. Check the box on the left if you don't want any emails.`}
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`w-full lg:w-auto rounded-[12px] text-white bg-black hover:bg-gray-800 px-16 py-3 transition duration-200 ${KodeMono.className}`}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                    {successMessage && (
                        <p className={`text-center mt-4 text-gray-600 px-5 py-4 bg-gray-50 ${ChivoMono.className} w-full`}>{successMessage}</p>
                    )}
                </section>
            </div>
        </section>
    );
}
