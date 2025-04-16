
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BadmintonBooking() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = () => {
    if (!name || !phone || !date || !time) {
      alert('Please fill in all fields');
      return;
    }

    const templateParams = {
      name,
      phone,
      date,
      time,
      service: 'Badminton',
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(() => {
      setSubmitted(true);
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded p-6 text-center">
        {!submitted ? (
          <>
            <img src="/images/badminton.jpg" alt="Badminton" className="rounded mb-4 w-full object-cover h-48" />
            <h1 className="text-2xl font-bold mb-4">Book a 🏸 Badminton</h1>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-3 p-2 border rounded" />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full mb-3 p-2 border rounded" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mb-3 p-2 border rounded" />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full mb-4 p-2 border rounded" />
            <button onClick={handleBooking} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Book Now</button>
          </>
        ) : (
          <>
            <h2 className="text-green-600 text-xl font-semibold mb-4">Booking Confirmed!</h2>
            <p className="mb-4">
              🏸 Badminton on <strong>{date}</strong> at <strong>{time}</strong><br />
              for <strong>{name}</strong> (<strong>{phone}</strong>).
            </p>
            <button onClick={() => setSubmitted(false)} className="text-sm text-gray-500 underline">Make Another Booking</button>
          </>
        )}
      </div>
    </main>
  );
}
