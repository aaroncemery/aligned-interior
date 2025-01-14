"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferText: false,
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value =
      e.target.type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferText: false,
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

  if (status === "Message sent successfully!") {
    return (
      <div className="rounded-md bg-green-50 p-6 text-center">
        <h3 className="mb-2 font-cinzel text-2xl font-medium text-brand-aligned-black">
          Thank you for your message!
        </h3>
        <p className="font-sans text-sm text-brand-aligned-black">
          We'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="flex w-full flex-col md:flex-row md:gap-2">
          <div className="relative mb-4 w-full">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 font-sans placeholder-transparent focus:border-brand-interior-green focus:outline-none"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 -translate-y-3 font-sans text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-brand-interior-green"
            >
              Your Name
            </label>
          </div>

          <div className="relative mb-4 w-full">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 font-sans placeholder-transparent focus:border-brand-interior-green focus:outline-none"
              placeholder="Phone"
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-3 -translate-y-3 font-sans text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-brand-interior-green"
            >
              Your Phone
            </label>
          </div>
        </div>
        <div className="relative mb-4 w-full">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Please enter a valid email address"
            className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 font-sans placeholder-transparent focus:border-brand-interior-green focus:outline-none"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 -translate-y-3 font-sans text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-brand-interior-green"
          >
            Your Email
          </label>
        </div>
        <div className="relative mb-4">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 font-sans placeholder-transparent focus:border-brand-interior-green focus:outline-none"
            placeholder="Message"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3 -translate-y-3 font-sans text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-brand-interior-green"
          >
            Message
          </label>
        </div>
        <div className="relative mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            name="preferText"
            id="preferText"
            checked={formData.preferText}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 accent-brand-interior-green focus:ring-brand-interior-green"
          />
          <label
            htmlFor="preferText"
            className="font-sans text-sm text-gray-500"
          >
            I prefer to be contacted via text message
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-brand-aligned-black p-2 font-sans text-sm font-medium text-white hover:bg-brand-aligned-black/90 focus:outline-1 focus:outline-brand-winter-morning"
      >
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
