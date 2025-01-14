"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

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
              className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 placeholder-transparent focus:border-brand-interior-green focus:outline-none"
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
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 placeholder-transparent focus:border-brand-interior-green focus:outline-none"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 -translate-y-3 font-sans text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-brand-interior-green"
            >
              Your Email
            </label>
          </div>
        </div>

        <div className="relative mb-4">
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full rounded-md border border-gray-300 px-4 py-2 pt-4 placeholder-transparent focus:border-brand-interior-green focus:outline-none"
            placeholder="Message"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-3 -translate-y-3 font-sans text-sm text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-brand-interior-green"
          >
            Message
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-brand-aligned-black p-2 font-sans text-sm font-medium text-white"
      >
        Send
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}
