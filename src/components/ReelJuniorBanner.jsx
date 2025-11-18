// src/components/ReelJuniorBanner.jsx
import React from "react";

// Replace these imports with your real image files (you already used these names)
import heroImg from "../assets/Thum_reel-junior_tc.jpg";
import logo1 from "../assets/f1.png";
import logo2 from "../assets/f2.png";
import logo3 from "../assets/f3.png";
import logo4 from "../assets/footeratmos.png";

/*
  Updated component tuned to match the screenshot more closely:
  - Full-bleed right hero image that fades into the left content.
  - Left column wide spacing, large heading, thin horizontal rule aligned with "EXPERIENCE".
  - Stronger white gradient overlay so text sits crisply on the white background.
  - Pill gradient CTA and rounded logo cards with soft shadows.
  - Navigation arrows placed visually like the screenshot.
*/

export default function ReelJuniorBanner() {
  return (
    <section className="relative bg-white">
      {/* Make the whole section edge-to-edge horizontally */}
      <div className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
            {/* Left content */}
            <div className="lg:col-span-6 xl:col-span-5 z-20">
              <div className="flex items-center gap-6 mb-6">
                <h6 className="text-gray-600 tracking-wide text-lg">EXPERIENCE</h6>
                {/* thin rule that extends to the right like screenshot */}
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Reel Junior
              </h1>

              <p className="text-gray-600 max-w-xl mb-8 leading-relaxed">
                Comfy beanbag seats and tasty kids' treats await your little ones at the family-friendly cinema designed just for children.
              </p>

              <div className="flex items-center gap-6">
                <button
                  className="px-8 py-3 rounded-full font-semibold text-white shadow-md transform transition hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(90deg,#4a2673,#2c1542)" }}
                >
                  KNOW MORE
                </button>
              </div>

              {/* logos / thumbnails row */}
              <div className="mt-14">
                <div className="relative flex items-center">
                  {/* left arrow (visible on md+) */}
                  <button
                    className="hidden md:flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 shadow-sm mr-4"
                    aria-label="prev"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex gap-5 items-center overflow-x-auto scrollbar-hide pb-2">
                    {[logo1, logo2, logo3, logo4].map((logo, idx) => (
                      <div
                        key={idx}
                        className="min-w-[140px] h-20 rounded-xl bg-gray-100 flex items-center justify-center p-3 shadow-sm"
                        style={{ boxShadow: "0 6px 18px rgba(16,24,40,0.06)" }}
                      >
                        <img src={logo} alt={`logo-${idx}`} className="max-h-full max-w-full object-contain" />
                      </div>
                    ))}
                  </div>

                  {/* right arrow (visible on md+) */}
                  <button
                    className="hidden md:flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 shadow-sm ml-4"
                    aria-label="next"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right hero image */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 relative">
              {/* This wrapper gives the hero a full bleed feel while keeping left text readable */}
              <div className="absolute inset-0 flex">
                {/* left half is transparent (keeps text readable), right half shows the image */}
                <div className="w-1/2" />
                <div className="w-1/2" />
              </div>

              <div className="relative h-[420px] rounded-none overflow-hidden">
                <img src={heroImg} alt="Reel Junior" className="object-cover w-full h-full" />

                {/* strong white gradient from left to transparent to match screenshot fade */}
                <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
                     style={{ background: "linear-gradient(to right, rgba(255,255,255,1) 20%, rgba(255,255,255,0.0) 60%)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
