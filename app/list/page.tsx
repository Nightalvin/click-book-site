"use client";

import { useState } from "react";

export default function ListPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 font-poppins flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">List Your Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Business Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Contact Person"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Category</option>
                <option value="Car">Car Services</option>
                <option value="Sport">Sport</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                placeholder="Service Description"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 rounded hover:scale-105 transition"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-green-600">🎉 Submitted!</h2>
            <p className="text-gray-700">Your service has been submitted. We’ll review and contact you shortly!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              List Another Service
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
