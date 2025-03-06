"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Globe, Menu, X } from "lucide-react";
import PartnersSection from "@/components/partners-section";
import HelpSection from "@/components/help-section";
import TopStories from "./components/top-stories";
import Footer from "./components/footer";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-7xl rounded-3xl bg-black overflow-hidden">
          {/* Main container with rounded corners */}
          <div className="rounded-3xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 md:p-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <div className="h-3 w-3 bg-black rounded-sm"></div>
                </div>
                <span className="text-white font-bold text-2xl">
                  MekdiyeMedia
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex bg-white rounded-full px-4 py-2">
                <nav className="flex space-x-6">
                  <button className="text-black font-medium">Services</button>
                  <button className="text-black font-medium">Pricing</button>
                  <button className="text-black font-medium">About</button>
                  <button className="text-black font-medium">Contact us</button>
                </nav>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-white p-1 rounded-md"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>

                <div className="hidden sm:flex items-center gap-1 text-white bg-black/20 px-3 py-1.5 rounded-full">
                  <span>English</span>
                  <Globe className="h-4 w-4" />
                </div>
                <button className="hidden sm:flex bg-zinc-800 text-white rounded-full px-4 py-2 items-center gap-1">
                  <div className="h-4 w-4 bg-white rounded-full"></div>
                  <span>Let's Connect</span>
                </button>
              </div>
            </div>
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden bg-white rounded-xl mx-4 mb-4 overflow-hidden">
                <nav className="flex flex-col">
                  <button className="text-black font-medium py-3 px-6 hover:bg-gray-100 text-left">
                    Services
                  </button>
                  <button className="text-black font-medium py-3 px-6 hover:bg-gray-100 text-left">
                    Pricing
                  </button>
                  <button className="text-black font-medium py-3 px-6 hover:bg-gray-100 text-left">
                    About
                  </button>
                  <button className="text-black font-medium py-3 px-6 hover:bg-gray-100 text-left">
                    Contact us
                  </button>
                  <div className="border-t border-gray-200 py-3 px-6 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-black">
                      <span>English</span>
                      <Globe className="h-4 w-4" />
                    </div>
                    <button className="bg-zinc-800 text-white rounded-full px-4 py-2 flex items-center gap-1">
                      <div className="h-3 w-3 bg-white rounded-full"></div>
                      <span className="text-sm">Let's Connect</span>
                    </button>
                  </div>
                </nav>
              </div>
            )}
            {/* Main content */}
            <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-16 flex flex-col md:flex-row">
              {/* Left content */}
              <div className="flex-1 pr-0 md:pr-10">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                    Your Trusted <br />
                    Source for <br />
                    News & Entertainment.
                  </h1>

                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 sm:h-16 sm:w-16">
                      <div className="absolute bottom-0 h-8 w-8 sm:h-10 sm:w-10 bg-gray-200 rounded-md"></div>
                      <div className="absolute bottom-1.5 sm:bottom-2 h-8 w-8 sm:h-10 sm:w-10 bg-gray-300 rounded-md"></div>
                      <div className="absolute bottom-3 sm:bottom-4 h-8 w-8 sm:h-10 sm:w-10 bg-orange-200 rounded-md"></div>
                      <div className="absolute bottom-4.5 sm:bottom-6 h-8 w-8 sm:h-10 sm:w-10 bg-orange-400 rounded-md flex items-center justify-center">
                        <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-black rounded-md"></div>
                      </div>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 font-medium text-black">
                    Start Exploring
                    <div className="bg-black rounded-full p-1">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                  </button>

                  <div className="border-t border-gray-300 pt-4 max-w-md">
                    <p className="text-gray-600 text-sm">
                      Explore trusted reviews, exclusive promotions, and
                      entertaining TV content—all in one place.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right content - Image */}
              <div className="flex-1 mt-10 md:mt-0">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
                  <Image
                    src="/hero.png"
                    alt="hero image"
                    width={600}
                    height={500}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            <HelpSection />
            <TopStories />
            <PartnersSection />
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
