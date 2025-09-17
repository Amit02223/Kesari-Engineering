"use client";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid gap-10 md:grid-cols-2 bg-white shadow-xl rounded-2xl p-8">
      
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800">Contact Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We respond quickly during business hours. Get in touch with us for
            any queries or assistance.
          </p>

          <div className="grid gap-4 text-gray-700 text-base">
            <span className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              📞 <span>+91 7310620321</span> 
            </span>
            <span className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              📞 <span>+91 9927777281</span> 
            </span>
            <a
              href="mailto:kesariengineering29@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition-colors"
            >
              ✉ <span>kesariengineering29@gmail.com</span>
            </a>
            <p className="flex items-start gap-3">
              🏢{" "}
              <span>
                Plot No. 53, Bhadrabad, <br /> Haridwar — 249402
              </span>
            </p>
          </div>
        </div>

        {/* Right Section - Map */}
        <div>
          <iframe
            className="w-full h-80 md:h-full rounded-xl border shadow-sm"
            loading="lazy"
            src="https://www.google.com/maps?q=Bhadrabad+Haridwar&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
