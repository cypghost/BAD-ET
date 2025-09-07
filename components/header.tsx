import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 lg:px-12 py-4 font-semibold text-sm bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/50">
      <Link href="#home" className="text-xl font-extrabold text-[#b3d808]">
        BaD ET
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#home" className="hover:text-[#b3d808] transition-colors">
          HOME
        </Link>
        <Link href="#about" className="hover:text-[#b3d808] transition-colors">
          ABOUT US
        </Link>
        <Link
          href="#partners"
          className="hover:text-[#b3d808] transition-colors"
        >
          PARTNERS
        </Link>
        <Link href="#team" className="hover:text-[#b3d808] transition-colors">
          TEAM
        </Link>
        <Link
          href="#community"
          className="hover:text-[#b3d808] transition-colors"
        >
          COMMUNITY
        </Link>
      </nav>
      <Link
        href="#contact"
        className="p-2 px-4 border-2 rounded-lg text-[#b3d808] border-[#b3d808] hover:bg-[#b3d808] hover:text-slate-900 transition-all duration-300"
      >
        CONTACT US
      </Link>
    </header>
  );
}
