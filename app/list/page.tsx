"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ CORRECT IMPORT

export default function ListPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    phone: "",
    category: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          businessName: formData.businessName,
          contactPerson: formData.contactPerson,
          phone: formData.phone,
          category: formData.category,
          description: formData.description,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <main className="min-h-screen bg-gray-100 font-poppins flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">List Your Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="businessName"
                type="text"
                placeholder="Business Name"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                name="contactPerson"
                type="text"
                placeholder="Contact Person"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <select
                name="category"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded text-gray-600"
              >
                <option value="">Select Category</option>
                <option value="Car">Car Services</option>
                <option value="Sport">Sport</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="description"
                placeholder="Service Description"
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">🎉 Submitted!</h2>
            <p className="text-gray-700">Your service has been submitted. We’ll contact you soon!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              List Another Service
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
