// src/pages/Signup.jsx
import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column - heading + description */}
          <div>
            <h2 className="text-3xl font-semibold mb-3">Log in <span className="text-reelPurple underline-offset-4">Sign up</span></h2>
            <div className="text-sm text-gray-600 mb-6">
              Create a Reel Cinemas account to make booking movies easier and to see your booking history.
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First name" className="border border-gray-400 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple" />
                <input type="text" placeholder="Last name" className="border border-gray-400 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email address" className="border border-gray-400 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple" />
                <div className="flex">
                  <select className="border border-gray-400 rounded-l-lg px-4 py-3 bg-white">
                    <option>+971</option>
                  </select>
                  <input type="tel" placeholder="Phone number" className="border border-gray-400 rounded-r-lg px-4 py-3 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple" />
                </div>
              </div>

              <select className="w-full border border-gray-400 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple">
                <option>Select nationality</option>
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="password" placeholder="Password" className="border border-gray-400 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple" />
                <input type="password" placeholder="Confirm password" className="border border-gray-400 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reelPurple" />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="news" className="mt-1" />
                <label htmlFor="news" className="text-sm text-gray-700">
                  I would like to receive news and offers from Reel Cinemas
                </label>
              </div>

              <div className="text-sm text-gray-500">We respect your privacy. See our <a href="#" className="text-reelPurple underline">Privacy Policy</a></div>

              <button type="submit" className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-[#3d0c5d] to-[#6a2d9b] text-white font-semibold shadow-lg">SIGN UP</button>

              {/* OR sign up with */}
              <div className="mt-8 text-center">
                <div className="flex items-center gap-4 justify-center text-xs text-gray-400">
                  <span className="w-24 border-t border-gray-300 inline-block"></span>
                  <span>OR SIGN UP WITH</span>
                  <span className="w-24 border-t border-gray-300 inline-block"></span>
                </div>

                <div className="flex items-center justify-center gap-6 mt-6">
                  <img src="/src/assets/emaar-logo.png" alt="emaar" className="h-8 object-contain" />
                  <img src="/src/assets/google-logo.png" alt="google" className="h-8 object-contain" />
                </div>
              </div>
            </form>
          </div>

          {/* Right column - decorative gradient like screenshot */}
          <div className="hidden md:block">
            <div className="h-full rounded-lg" style={{ background: "linear-gradient(180deg,#F3E8FB 0%, #F7F0F8 100%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
