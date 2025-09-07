import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-shadow-custom">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 text-balance">
              BUILDING AFRICA&apos;S DECENTRALIZED FUTURE
            </span>
          </h1>
          <p className="max-w-xl mx-auto lg:mx-0 mt-8 text-lg text-slate-400 text-pretty">
            Community first, student-led, and driven by real skills that turn
            ideas into impact.
          </p>
          <div className="mt-10 flex gap-4 justify-center lg:justify-start">
            <Link
              href="#community"
              className="bg-[#b3d808] text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all"
            >
              Join Community
            </Link>
            <Link
              href="#about"
              className="bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/build-a-dao.png"
            alt="Build a DAO Logo"
            width={400}
            height={400}
            className="w-[300px] md:w-[400px] transform-gpu transition-transform duration-500 hover:rotate-[15deg] hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
