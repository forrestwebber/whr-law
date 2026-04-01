"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", phone: "", email: "", practiceArea: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-lg p-8 sm:p-10 shadow-lg border border-cream-dark/20 text-center">
        <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-forest"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-forest mb-2">
          Thank You
        </h3>
        <p className="text-forest/60 font-[family-name:var(--font-body)]">
          William will review your information and contact you shortly to
          discuss your case.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg border border-cream-dark/20"
    >
      <h3 className="text-2xl font-bold text-forest mb-2">
        Request Your Free Consultation
      </h3>
      <p className="text-forest/50 text-sm mb-6 font-[family-name:var(--font-body)]">
        No cost. No obligation. Just honest legal guidance.
      </p>

      <div className="space-y-4 sm:space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-cream-dark/30 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-colors text-forest font-[family-name:var(--font-body)]"
            placeholder="Your full name"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded border-2 border-accent/20 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-colors text-forest text-lg font-semibold font-[family-name:var(--font-body)]"
            placeholder="(512) 555-0123"
          />
          <p className="text-xs text-forest/40 mt-1 font-[family-name:var(--font-body)]">
            We will call you back at this number
          </p>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-cream-dark/30 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-colors text-forest font-[family-name:var(--font-body)]"
            placeholder="you@example.com"
          />
        </div>

        {/* Practice Area */}
        <div>
          <label
            htmlFor="practiceArea"
            className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            What do you need help with?
          </label>
          <select
            id="practiceArea"
            value={formData.practiceArea}
            onChange={(e) =>
              setFormData({ ...formData, practiceArea: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-cream-dark/30 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-colors text-forest font-[family-name:var(--font-body)]"
          >
            <option value="">Select a practice area...</option>
            <option value="probate">Probate</option>
            <option value="family-law">Family Law</option>
            <option value="estate-planning">Estate Planning</option>
            <option value="criminal-defense">Criminal Defense</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        {/* Case Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-forest/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Tell Us About Your Situation{" "}
            <span className="text-accent">*</span>
          </label>
          <textarea
            id="description"
            required
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-cream-dark/30 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-colors text-forest resize-none font-[family-name:var(--font-body)]"
            placeholder="Briefly describe your legal situation and how we can help..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-forest hover:bg-forest-dark disabled:bg-forest/50 text-cream py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]"
        >
          {status === "sending" ? "Sending..." : "Request Free Consultation"}
        </button>

        {status === "error" && (
          <p className="text-red-600 text-sm text-center font-[family-name:var(--font-body)]">
            Something went wrong. Please call us directly or try again.
          </p>
        )}

        <p className="text-xs text-forest/40 text-center font-[family-name:var(--font-body)]">
          By submitting this form, you agree to be contacted about your legal
          matter. Your information is kept strictly confidential.
        </p>
      </div>
    </form>
  );
}
