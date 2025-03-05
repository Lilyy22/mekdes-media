"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function PartnersSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerMarqueeRef = useRef<HTMLDivElement>(null);

  // Clone the marquee items for a seamless loop
  useEffect(() => {
    if (marqueeRef.current && innerMarqueeRef.current) {
      const marqueeContent = innerMarqueeRef.current.innerHTML;
      innerMarqueeRef.current.innerHTML = marqueeContent + marqueeContent;
    }
  }, []);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading with horizontal line */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <div className="w-full h-px bg-zinc-700 mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mb-8">
              Our goal from day one has been to help divide the needles from the
              haystack, focusing on what matters, while ignoring the rest.
              Effective cyber security is about getting the basics right.
              Intruder helps you do that, saving time on the easy stuff, so you
              can focus on the rest.
            </p>
            <button className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              Contact Us
              <div className="bg-white/10 rounded-full p-1">
                <ChevronRight className="h-4 w-4" />
              </div>
            </button>
          </div>

          {/* Marquee Partners Slider */}
          <div
            ref={marqueeRef}
            className="overflow-hidden relative"
            aria-label="Our partners"
          >
            <div
              ref={innerMarqueeRef}
              className="flex gap-6 animate-marquee hover:pause-animation"
            >
              {/* Partner Cards */}
              {[
                { name: "Auth0", logo: "/placeholder.svg?height=80&width=160" },
                {
                  name: "Grammarly",
                  logo: "/placeholder.svg?height=80&width=160",
                },
                {
                  name: "Trustly",
                  logo: "/placeholder.svg?height=80&width=160",
                },
                {
                  name: "Schibsted",
                  logo: "/placeholder.svg?height=80&width=160",
                },
                {
                  name: "Partner 5",
                  logo: "/placeholder.svg?height=80&width=160",
                },
                {
                  name: "Partner 6",
                  logo: "/placeholder.svg?height=80&width=160",
                },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="min-w-[300px] h-[200px] bg-zinc-800 rounded-xl flex items-center justify-center p-8 flex-shrink-0"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    width={160}
                    height={80}
                    className="max-w-[160px] h-auto object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
