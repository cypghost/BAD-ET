import Image from "next/image";
import { Icons } from "./icons";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Biruk Habteyohannis",
      role: "Lead Coordinator",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
    {
      name: "Member Name",
      role: "Role / Position",
      image: "/biruk-habteyohannis.png",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 sm:py-32 bg-[#b3d808] clip-trapezoid text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 text-5xl md:text-6xl font-extrabold tracking-tighter">
          <Icons.userCheck className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-shadow-custom">OUR TEAM</h1>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-800 text-white rounded-xl p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700"
              />
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
