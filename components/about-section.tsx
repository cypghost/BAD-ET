import { Icons } from "./icons";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#b3d808] clip-trapezoid text-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 text-5xl md:text-6xl font-extrabold tracking-tighter">
          <Icons.info className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-shadow-custom">ABOUT US</h1>
        </div>
        <div className="mt-10 text-lg bg-black/80 text-white p-8 md:p-12 rounded-2xl shadow-2xl">
          Build a DAO Ethiopia is a student-led, community-first organization that equips Africa&apos;s youth with Web3
          skills through bootcamps, hackathons, and internships. We focus on hands-on learning, transparent governance,
          and real-world impact—connecting curiosity to careers without tokens or hype.
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-black/80 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-[#b3d808]">MISSION</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <b>Empowers</b> Africa&apos;s youth through decentralized education and hands-on learning.
              </li>
              <li>
                <b>Supports</b> Student-led innovation, turning curiosity into real-world impact.
              </li>
            </ul>
          </div>
          <div className="bg-black/80 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-4 text-[#b3d808]">CORE VALUES</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <b>Community First:</b> We design for access, inclusion, and local relevance.
              </li>
              <li>
                <b>Build in Public:</b> We learn out loud—iterate fast, share openly, and credit generously.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
