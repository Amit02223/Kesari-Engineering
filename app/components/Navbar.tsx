"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="KESARI Engineering"
            width={44}
            height={44}
            className="rounded-sm object-cover"
          />
          <div className="leading-none">
            <div className="font-extrabold">KESARI</div>
            <div className="text-xs -mt-0.5">ENGINEERING co.</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm ${
                    pathname === l.href ? "font-semibold" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-zinc-200" />

        </div>

        <button
          className="md:hidden px-3 py-1 border rounded-lg"
          onClick={() => setOpen((s) => !s)}
        >
          Menu
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
