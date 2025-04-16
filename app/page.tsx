'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-poppins flex items-center justify-center px-4">
      <div className="max-w-3xl text-center py-16">

        {/* Bigger logo centered */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo.png"
            alt="Click & Book Logo"
            width={120}
            height={120}
            priority
            className="rounded-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Your One-Stop Booking Platform
        </h1>

        {/* Tagline */}
        <p className="text-lg text-gray-600 mb-10">
          Quickly book or list services like car wash, badminton courts, and more — all around Kuching.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/book"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow-md flex items-center justify-center gap-2"
          >
            <span>📅</span> Book a Service
          </a>
          <a
            href="/list"
            className="border border-blue-600 hover:bg-blue-100 text-blue-600 font-medium px-6 py-3 rounded shadow-md flex items-center justify-center gap-2"
          >
            <span>📌</span> List Your Service
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-12">
          © 2025 Click & Book | Built with ❤️ in Kuching
        </p>
      </div>
    </main>
  );
}
