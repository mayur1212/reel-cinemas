// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      {/* outer padding tuned to match screenshot left/right spacing */}
      <div className="w-full px-8">
        <div className="h-20 flex items-center relative">

          {/* LEFT: logo (exact 168px width for the 8px reduction you requested) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Reel Cinemas"
                className="h-auto object-contain"
                style={{ width: "138px" }} // 176 - 8 = 168px
              />
            </Link>
          </div>

          {/* CENTER NAV: absolutely centered so the nav is visually centered between logo and right icons */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-[62%] -translate-x-1/2 top-1/2 -translate-y-1/2">

  <Link className="text-sm font-medium tracking-wide uppercase text-gray-800 hover:text-reelPurple transition-colors">
    SHOWTIMES
  </Link>

  <div
    className="relative"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    <button className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase text-gray-800 hover:text-reelPurple">
      EXPERIENCES
      
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4.25 3.99a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
      
    </button>

    {open && (
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white border rounded-md shadow-lg overflow-hidden z-50">
        <ul className="text-sm text-gray-700 divide-y">
          <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">Private Cinema</li>
          <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">Dolby Cinema</li>
          <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">Reel Platinum Suites</li>
          <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">Reel Junior</li>
        </ul>
      </div>
    )}
  </div>

  <Link className="text-sm font-medium tracking-wide uppercase text-gray-800 hover:text-reelPurple">OFFERS</Link>
  <Link className="text-sm font-medium tracking-wide uppercase text-gray-800 hover:text-reelPurple">FOOD</Link>
  <Link className="text-sm font-medium tracking-wide uppercase text-gray-800 hover:text-reelPurple">LOCATIONS</Link>

</nav>



          {/* RIGHT: icons & flag — spacing tuned to match screenshot */}
          <div className="ml-auto flex items-center gap-5">

            {/* profile icon */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a8.25 8.25 0 0115 0" />
              </svg>
            </div>

            {/* thin vertical divider */}
            <div className="hidden md:block h-8 border-l border-gray-200"></div>

            {/* hamburger/menu icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded hover:bg-gray-50 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </div>

            {/* small vertical divider */}
            <div className="hidden md:block h-8 border-l border-gray-200"></div>

            {/* UAE flag (small circle) */}
            <div className="w-9 h-9 rounded-full border overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_the_United_Arab_Emirates.svg"
                alt="UAE"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
