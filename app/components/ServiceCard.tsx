"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ServiceCard({
  title,
  description,
  bullets,
  image,
}: {
  title: string;
  description: string;
  bullets: { heading: string; items: string[] }[];
  image: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-zinc-600 mt-1">{description}</p>

      <div className="mt-4 flex gap-2">
        <button className="btn btn-outline" onClick={() => setOpen((v) => !v)}>
          {open ? "Hide Details" : "View Details"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-4"
          >
            <div className="grid gap-4">
              {bullets.map((b) => (
                <div
                  key={b.heading}
                  className="border rounded-xl p-4 bg-zinc-50"
                >
                  <h4 className="font-medium">{b.heading}</h4>
                  <ul className="list-disc list-inside text-sm text-zinc-700 mt-1">
                    {b.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
