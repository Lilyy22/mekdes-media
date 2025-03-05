"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Monitor risk\nacross your stack",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    number: "02",
    title: "Effortless Compliance\n& Reporting",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    number: "03",
    title: "Continuous\nPenetration Testing",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function HelpSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading and Description */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Fynsec Help?
            </h2>
            <div className="w-full h-px bg-zinc-700 mb-8"></div>
            <p className="text-gray-400 text-lg max-w-3xl mb-8">
              With strong foundations in application security, our External
              Attack Surface Management platform solves common challenges AppSec
              and ProdSec teams face, such as managing digital transformation,
              securing digital products, and understanding risks during M&As.
            </p>
            <button className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              Services
              <div className="bg-white/10 rounded-full p-1">
                <ChevronRight className="h-4 w-4" />
              </div>
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-zinc-800/50 p-6 transition-all duration-300 hover:bg-yellow-400"
              >
                {/* Number with curved line */}
                <div className="absolute -top-3 -left-3 flex items-center">
                  <div className="relative">
                    <svg
                      width="60"
                      height="40"
                      viewBox="0 0 60 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-zinc-700 group-hover:text-yellow-400/50 transition-colors"
                    >
                      <path
                        d="M0 40V15C0 6.71573 6.71573 0 15 0H60"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span className="absolute top-4 left-8 text-sm text-zinc-500 group-hover:text-yellow-400/80">
                      {feature.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 space-y-6">
                  <div className="relative h-48 w-48 mx-auto">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-contain filter group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-white whitespace-pre-line text-center">
                    {feature.title}
                  </h3>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/30 pointer-events-none" />

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
