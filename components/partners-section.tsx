import { Icons } from "./icons";

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="min-h-screen flex flex-col justify-center items-center py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 text-5xl md:text-6xl font-extrabold tracking-tighter">
          <Icons.users className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-shadow-custom">OUR PARTNERS</h1>
        </div>
        <p className="mt-6 text-lg text-slate-400 text-pretty">
          We work with mission‑aligned organizations that provide mentorship, challenges, and career pathways—turning
          skills into impact and building an ecosystem where Africa&apos;s talent thrives.
        </p>
      </div>

      <div className="mt-20 flex items-center justify-center p-4">
        <div className="logo-orbit relative flex items-center justify-center w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
          <div className="absolute inset-0 bg-gradient-radial from-slate-800 via-slate-900/50 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute z-10 bg-slate-800 rounded-full w-32 h-32 md:w-52 md:h-52 flex items-center justify-center shadow-2xl border border-slate-700">
            <Icons.code className="w-16 h-16 md:w-28 md:h-28 text-white" />
          </div>
          <div className="orbit-container absolute w-full h-full">
            <div className="orbiting-logo absolute top-1/2 left-1/2 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-slate-700 p-4">
              <Icons.search className="w-full h-full text-white" />
            </div>
            <div className="orbiting-logo absolute top-1/2 left-1/2 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-slate-700 p-4">
              <Icons.hardDrive className="w-full h-full text-white" />
            </div>
            <div className="orbiting-logo absolute top-1/2 left-1/2 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-slate-700 p-4">
              <Icons.smartphone className="w-full h-full text-white" />
            </div>
            <div className="orbiting-logo absolute top-1/2 left-1/2 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-slate-700 p-4">
              <Icons.facebook className="w-full h-full text-white" />
            </div>
            <div className="orbiting-logo absolute top-1/2 left-1/2 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-slate-700 p-4">
              <Icons.shoppingCart className="w-full h-full text-white" />
            </div>
            <div className="orbiting-logo absolute top-1/2 left-1/2 bg-slate-800/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-slate-700 p-4">
              <Icons.tv className="w-full h-full text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
