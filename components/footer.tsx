import Link from "next/link";
import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Brand & Tagline */}
          <div>
            <Link
              href="#home"
              className="text-2xl font-extrabold text-[#b3d808] inline-block"
            >
              BaD ET
            </Link>
            <p className="mt-2 text-slate-400 text-sm">
              Building Africa&apos;s Decentralized Future.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="flex flex-col items-center md:items-start space-y-2 text-slate-400">
            <div className="flex items-center gap-2">
              <Icons.mail className="w-4 h-4 text-[#b3d808]" />
              <Link
                href="mailto:ethiopiabad@gmail.com"
                className="hover:text-[#b3d808] transition-colors"
              >
                ethiopiabad@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Icons.mapPin className="w-4 h-4 text-[#b3d808]" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="flex justify-center md:justify-end items-center gap-4">
            <Link
              href="#"
              aria-label="X Profile"
              className="text-slate-400 hover:text-[#b3d808] transition-colors"
            >
              <Icons.twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Telegram Profile"
              className="text-slate-400 hover:text-[#b3d808] transition-colors"
            >
              <Icons.send className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-[#b3d808] transition-colors"
            >
              <Icons.linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="YouTube Channel"
              className="text-slate-400 hover:text-[#b3d808] transition-colors"
            >
              <Icons.youtube className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Discord Server"
              className="text-slate-400 hover:text-[#b3d808] transition-colors"
            >
              <Icons.messageSquare className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2024 Build a DAO Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
