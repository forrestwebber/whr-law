"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
        setFormData({ name: "", phone: "", email: "", description: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-lg p-8 sm:p-10 shadow-lg border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
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
        <h3 className="text-2xl font-bold text-navy mb-2">
          Thank You
        </h3>
        <p className="text-navy/60 font-[family-name:var(--font-body)]">
          Jack will review your case and contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-navy mb-6">
        Tell Us About Your Case
      </h3>

      <div className="space-y-4 sm:space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-navy/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Full Name <span className="text-red-cta">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors text-navy font-[family-name:var(--font-body)]"
            placeholder="John Smith"
          />
        </div>

        {/* Phone - prominent */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Phone Number <span className="text-red-cta">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors text-navy text-lg font-semibold font-[family-name:var(--font-body)]"
            placeholder="(214) 555-0123"
          />
          <p className="text-xs text-navy/40 mt-1 font-[family-name:var(--font-body)]">
            We will call you back at this number
          </p>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy/80 mb-1.5 font-[family-name:var(--font-body)]"
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
            className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors text-navy font-[family-name:var(--font-body)]"
            placeholder="john@example.com"
          />
        </div>

        {/* Case Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-navy/80 mb-1.5 font-[family-name:var(--font-body)]"
          >
            Brief Description of Your Case{" "}
            <span className="text-red-cta">*</span>
          </label>
          <textarea
            id="description"
            required
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-3 rounded border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors text-navy resize-none font-[family-name:var(--font-body)]"
            placeholder="Tell us what happened and how we can help..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-red-cta hover:bg-red-cta-dark disabled:bg-red-cta/50 text-white py-4 rounded text-lg font-semibold transition-colors font-[family-name:var(--font-body)]"
        >
          {status === "sending" ? "Sending..." : "Request Free Case Review"}
        </button>

        {status === "error" && (
          <p className="text-red-600 text-sm text-center font-[family-name:var(--font-body)]">
            Something went wrong. Please call us directly or try again.
          </p>
        )}

        <p className="text-xs text-navy/40 text-center font-[family-name:var(--font-body)]">
          By submitting this form, you agree to be contacted about your case.
          Your information is kept confidential.
        </p>
      </div>
    </form>
  );
}
