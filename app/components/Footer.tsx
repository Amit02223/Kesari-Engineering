export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl p-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} All rights reserved by KESARI Engineering
          Co.
        </p>
      </div>
    </footer>
  );
}
