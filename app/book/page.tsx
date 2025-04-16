export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-poppins p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
        <p className="text-gray-600 mb-8">
          Select a category to explore available services:
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Car Category */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 hover:shadow-xl transition">
            <img
              src="/images/car-main.jpg"
              alt="Car Services"
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                🚗 Car Services
              </h2>
              <ul className="text-left list-disc list-inside text-blue-600 space-y-2">
                <li><a href="/book/car-wash" className="hover:underline">Car Wash</a></li>
                <li><a href="/book/car-services" className="hover:underline">Car Services</a></li>
                <li><a href="/book/car-tinted" className="hover:underline">Car Tinted</a></li>
              </ul>
            </div>
          </div>

          {/* Sport Category */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 hover:shadow-xl transition">
            <img
              src="/images/sport-main.jpg"
              alt="Sport Services"
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                🏸 Sport Services
              </h2>
              <ul className="text-left list-disc list-inside text-blue-600 space-y-2">
                <li><a href="/book/badminton" className="hover:underline">Badminton</a></li>
                <li className="text-gray-400 italic">More services coming soon...</li>
              </ul>
            </div>
          </div>

          {/* Coming Soon Category */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 hover:shadow-xl transition">
            <img
              src="/images/coming-soon.jpg"
              alt="More Categories"
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                🆕 More Categories
              </h2>
              <p className="text-gray-500 italic">
                New services launching soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
