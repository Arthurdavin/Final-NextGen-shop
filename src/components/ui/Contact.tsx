export default function ContactPage() {
  return (
    <div className="w-full px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Call To Us */}
          <div className="p-5 border rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-red-600 text-3xl">📞</div>
              <h2 className="text-xl font-bold">Call To Us</h2>
            </div>
            <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="font-semibold mt-2">Phone: +8801611112222</p>
          </div>

          {/* Write To Us */}
          <div className="p-5 border rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-red-600 text-3xl">✉️</div>
              <h2 className="text-xl font-bold">Write To Us</h2>
            </div>
            <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>

            <p className="mt-3 font-semibold">Email: customer@nextgenshop.com</p>
            <p className="font-semibold">Email: support@nextgenshop.com</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="md:col-span-2">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Your Name *"
              className="border p-3 rounded-md w-full"
              required
            />

            <input
              type="email"
              placeholder="Your Email *"
              className="border p-3 rounded-md w-full"
              required
            />

            <input
              type="text"
              placeholder="Your Phone *"
              className="border p-3 rounded-md w-full"
              required
            />

            <textarea
              placeholder="Your Message"
              className="border p-3 rounded-md w-full md:col-span-3 h-40"
            />

            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md w-fit md:col-span-3 hover:bg-red-700"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
