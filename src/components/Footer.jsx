// src/components/Footer.jsx
import React from "react";

// ====== KEEP YOUR IMAGE IMPORTS (DO NOT CHANGE PATHS) ======
import dolbyAtmos from "../assets/footeratmos.png";
import mx4d from "../assets/footerimg1.png";
import dolbyCinema from "../assets/footerdobly.png";

import fab from "../assets/footerpatner1.png";
import omega from "../assets/footerpartner2.png";
import pepsi from "../assets/footerpartner3.png";

import appstoreBadge from "../assets/goodleplay.svg";
import googleplayBadge from "../assets/appplaystore.svg";
import emaarLogo from "../assets/emaar-logo.png";
// ==========================================================

export default function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Top links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 uppercase">Our Family</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Emaar Entertainment</a></li>
              <li><a href="#" className="hover:text-white transition">Dubai Mall</a></li>
              <li><a href="#" className="hover:text-white transition">Dubai Marina Mall</a></li>
              <li><a href="#" className="hover:text-white transition">The Spring Souk</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 uppercase">About Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Showtimes</a></li>
              <li><a href="#" className="hover:text-white transition">Experiences</a></li>
              <li><a href="#" className="hover:text-white transition">Food</a></li>
              <li><a href="#" className="hover:text-white transition">Locations</a></li>
              <li><a href="#" className="hover:text-white transition">About Reel Cinemas</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 uppercase">Locations</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Dubai Mall</a></li>
              <li><a href="#" className="hover:text-white transition">Dubai Marina Mall</a></li>
              <li><a href="#" className="hover:text-white transition">The Springs Souk</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider mb-6 uppercase">Follow Us</h3>
            <div className="flex items-center gap-4">
              {/* Social icons as simple SVGs in bordered square blocks */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 4.99 3.66 9.13 8.44 9.94v-7.03H8.01v-2.91h2.29V9.41c0-2.28 1.36-3.53 3.44-3.53.99 0 2.03.18 2.03.18v2.23H15.7c-1.18 0-1.55.74-1.55 1.5v1.8h2.64l-.42 2.91h-2.22v7.03c4.78-.81 8.44-4.95 8.44-9.94z" /></svg>
              </a>

              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 7.5A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm5.8-8.3a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1zM20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8z"/></svg>
              </a>

              <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 transition">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.2-3L10 9v6zm12-3c0 1.1-.9 2-2 2h-1.5c-2.23-.2-6.4-.2-8.63 0L6 14H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h1.5c2.23.2 6.4.2 8.63 0L18 8h1.5c1.1 0 2 .9 2 2v1z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider large with plenty of top/bottom space */}
        <div className="border-t border-gray-800 my-10" />

        {/* Partners area - match screenshot spacing and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Technology partners (left side, spans 5 cols on md) */}
          <div className="md:col-span-5">
            <h4 className="text-sm font-semibold text-gray-300 mb-5 uppercase">Technology Partners</h4>
            <div className="flex items-center gap-8">
              <img src={mx4d} alt="MX4D" className="h-8 object-contain" />
              <img src={dolbyAtmos} alt="Dolby Atmos" className="h-8 object-contain" />
              <img src={dolbyCinema} alt="Dolby Cinema" className="h-8 object-contain" />
            </div>
          </div>

          {/* Partners center-ish (spans 4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-5 uppercase">Partners</h4>
            <div className="flex items-center gap-8">
              <img src={fab} alt="FAB" className="h-8 object-contain" />
              <img src={omega} alt="Omega" className="h-8 object-contain" />
              <img src={pepsi} alt="Pepsi" className="h-24 object-contain" />




            </div>
          </div>

          {/* Right area: app badges, EMAAR logo and copyright (spans 3 cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end md:justify-center gap-6">
            <div className="flex items-center gap-4">
              <img src={appstoreBadge} alt="App Store" className="h-10 object-contain opacity-80" />
              <img src={googleplayBadge} alt="Google Play" className="h-10 object-contain opacity-80" />
            </div>

            <div className="flex items-center gap-6">
              <img src={emaarLogo} alt="Emaar" className="h-14 object-contain opacity-80" />
              <div className="text-sm text-gray-300">
                <div>Copyright © Reel Entertainment LLC. All rights reserved.</div>
                <div className="mt-1">
                  <a href="#" className="hover:text-white">Terms & Conditions</a>
                  <span className="mx-3">|</span>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar with left EMAAR and right text - match screenshot spacing */}
      <div className="bg-[#0b0b0b] py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <div className="text-white text-2xl font-semibold tracking-wide">EMAAR</div>
          <div className="text-white-400 font-semibold">
  Emaar Properties PJSC is the Master Developer of Reel Cinemas
</div>


        </div>
      </div>
    </footer>
  );
}
