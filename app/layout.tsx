
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KESARI Engineering",
    telephone: "+91 7310620321",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 53, Bhadrabad",
      addressLocality: "Haridwar",
      postalCode: "249402",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-800">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // @ts-ignore
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
