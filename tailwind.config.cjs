


// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        reelPurple: "#5B2B7E",    // main purple used for tile bar and accents
        reelPurpleDark: "#3d0c5d",// darker gradient start
        reelAccent: "#6a2d9b",
        reelPink: "#ff507c"
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        'poster': '0 6px 20px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};
