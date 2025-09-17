import Link from "next/link";

export default function Home() {
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Industrial <span className="text-amber-500">M.S Fabrication</span>,
            Electrical, Duct & Civil Works
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            KESARI Engineering delivers end-to-end engineering services —
            structural M.S fabrication, electrical installations, HVAC duct work
            & cleaning, and civil construction. On-time, safety-first, and
            transparent pricing.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border-2 border-amber-500 text-amber-500 font-semibold hover:bg-amber-500 hover:text-white transition duration-300 shadow-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg border-2 border-amber-500 text-amber-500 font-semibold hover:bg-amber-500 hover:text-white transition duration-300 shadow-sm"
            >
              Explore Services
            </Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <li>✔ MSME Registered</li>
            <li>✔ GST: 05QBNPS7329C1Z2</li>
            <li>✔ Safety-first execution</li>
            <li>✔ Haridwar & nearby regions</li>
          </ul>
        </div>

        <div className="aspect-video rounded-2xl border overflow-hidden">
          <img
            src="https://www.goodwin.edu/enews/wp-content/uploads/2022/12/why-work-in-manufacturing-tiny-scaled.jpg"
            alt="Industrial work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">What we do</h2>
        <p className="text-zinc-600 mt-2 max-w-3xl">
          We design, fabricate, install, and maintain. Projects across plants,
          factories, commercial spaces, and residences — strict adherence to
          safety & quality.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "M.S Fabrication",
              img: "https://5.imimg.com/data5/MB/EV/MY-5963684/ms-structures-3-500x500.jpg",
              href: "/services#ms-fabrication",
            },
            {
              title: "Electrical Works",
              img: "https://5.imimg.com/data5/CM/RX/WY/SELLER-43924254/industrial-elec-work-500x500.png",
              href: "/services#electrical-works",
            },
            {
              title: "Duct Install & Cleaning",
              img: "https://mega.com.sg/wp-content/uploads/2020/12/duct.jpg",
              href: "/services#duct-works",
            },
            {
              title: "Civil Works",
              img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
              href: "/services#civil-works",
            },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="card hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border mb-3">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-zinc-600 mt-1">
                Click to view details
              </p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
