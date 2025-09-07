"use client";

import type React from "react";
import { useState } from "react";
import { Icons } from "./icons";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email, message });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-32 bg-[#b3d808] clip-trapezoid text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-4 text-5xl md:text-6xl font-extrabold tracking-tighter">
            <Icons.mail className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="text-shadow-custom">CONTACT US</h1>
          </div>
          <p className="mt-6 text-lg text-slate-800 text-pretty">
            We&apos;d love to hear from you. Whether you have a question, a
            collaboration idea, or want to explore Web3 opportunities, reach out
            and we&apos;ll respond promptly.
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full p-3 bg-slate-900/50 text-white rounded-lg border border-slate-700 focus:ring-2 focus:ring-slate-900 focus:outline-none transition"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full p-3 bg-slate-900/50 text-white rounded-lg border border-slate-700 focus:ring-2 focus:ring-slate-900 focus:outline-none transition"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-slate-900 text-[#b3d808] font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-800 transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
