import Link from "next/link";
import { Icons } from "./icons";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="py-20 sm:py-32 flex flex-col justify-center items-center"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 text-5xl md:text-6xl font-extrabold tracking-tighter">
          <Icons.globe className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-shadow-custom">JOIN OUR COMMUNITY</h1>
        </div>
        <div className="mt-12 relative bg-slate-800 p-10 rounded-2xl border border-slate-700">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b3d808] to-green-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <p className="text-lg text-slate-300 text-pretty">
              Join our vibrant community of developers, creators, and
              enthusiasts to stay updated on the latest BaD Ethiopia
              developments and connect with like-minded individuals.
            </p>
            <div className="mt-8">
              <Link
                href="#"
                className="bg-[#b3d808] text-slate-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all"
              >
                BECOME A MEMBER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
