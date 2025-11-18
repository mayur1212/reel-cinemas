// src/components/Banner.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Keep these image imports (do not change paths unless your files differ)
import t1 from "../assets/banner1.jpg";
import t2 from "../assets/banner2.jpg";
import t3 from "../assets/banner3.jpg";
import t4 from "../assets/banner4.jpg";
import t5 from "../assets/banner5.jpg";
import t6 from "../assets/banner6.jpg";

export default function Banner({
  title = "Now You See Me: Now You Don't",
  subtitle = "CRIME  |  THRILLER",
  runtime = "115 MIN",
  description = "Synopsis: The Four Horsemen return along with a new generation of illusionists performing mind-melding twists, turns, ...",
  thumbnails = [t1, t2, t3, t4, t5, t6], // default six thumbnails
  initialIndex = 0,
}) {
  const safe = Array.isArray(thumbnails) && thumbnails.length ? thumbnails : [t1];
  const [activeIndex, setActiveIndex] = useState(initialIndex || 0);

  // crossfade layers for smooth transitions
  const [visibleLayer, setVisibleLayer] = useState(0);
  const [layerImgs, setLayerImgs] = useState([safe[activeIndex], null]);
  const transitionRef = useRef(null);
  const navigate = useNavigate();

  // initial set
  useEffect(() => {
    setLayerImgs([safe[activeIndex], null]);
    setVisibleLayer(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when activeIndex changes, prepare second layer then toggle visibleLayer
  useEffect(() => {
    const nextImg = safe[activeIndex];
    setLayerImgs((prev) => {
      const copy = [...prev];
      copy[visibleLayer ^ 1] = nextImg;
      return copy;
    });
    window.clearTimeout(transitionRef.current);
    transitionRef.current = window.setTimeout(() => {
      setVisibleLayer((v) => v ^ 1);
    }, 20);
    return () => window.clearTimeout(transitionRef.current);
  }, [activeIndex]); // eslint-disable-line

  // keyboard support (optional)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === 0 ? safe.length - 1 : i - 1));
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === safe.length - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [safe.length]);

  const prev = () => setActiveIndex((i) => (i === 0 ? safe.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === safe.length - 1 ? 0 : i + 1));

  return (
    <section className="relative overflow-hidden">
      {/* Two layers for crossfade */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 transition-opacity duration-600 ease-out banner-hero-layer"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.02) 8%, rgba(255,245,235,0.96) 48%), url('${layerImgs[0] || ""}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: visibleLayer === 0 ? 1 : 0,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 transition-opacity duration-600 ease-out banner-hero-layer"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.02) 8%, rgba(255,245,235,0.96) 48%), url('${layerImgs[1] || ""}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: visibleLayer === 1 ? 1 : 0,
        }}
      />

      {/* Foreground container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start py-14">
          {/* left text area */}
          <div className="md:col-span-6 lg:col-span-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              {title}
            </h1>

            <div className="mt-6 text-sm uppercase tracking-wider text-gray-700 font-medium">{subtitle}</div>

            <div className="mt-4 text-sm text-gray-700 flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-medium">{runtime}</span>
              </div>
            </div>

            <p className="mt-6 text-base md:text-lg text-gray-700 max-w-xl">{description}</p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => navigate("/movies")}
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#3d0c5d] to-[#6a2d9b] shadow-lg"
              >
                BOOK NOW
              </button>

              <button
                onClick={() => {
                  const iframe = document.querySelector(".banner-video iframe");
                  if (iframe) iframe.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                aria-label="Play trailer"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/90 border shadow"
              >
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3v18l15-9z" />
                </svg>
              </button>
            </div>
          </div>

          {/* right hero & arrows */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            {/* left arrow */}
            <button
              onClick={prev}
              aria-label="Prev"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 shadow flex items-center justify-center"
            >
              <svg className="w-6 h-6 stroke-current text-gray-700" viewBox="0 0 24 24" fill="none">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* right arrow */}
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 shadow flex items-center justify-center"
            >
              <svg className="w-6 h-6 stroke-current text-gray-700" viewBox="0 0 24 24" fill="none">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {/* hero spacer to create the visible hero height */}
            <div className="h-[420px] md:h-[520px] lg:h-[640px]" />

            {/* centered thumbnail row (six thumbnails, centered bottom) */}
            

                {/* Centered thumbnails INSIDE hero area only */}
                {/* centered thumbnail row (six thumbnails, centered bottom) */}
<div className="absolute inset-x-0 -bottom-10 z-30 pointer-events-none">
  {/* Inner wrapper has fixed max width and centers the row */}
  <div className="pointer-events-auto mx-auto flex items-end gap-6 justify-center w-full max-w-[1200px] px-4">
    {safe.slice(0, 6).map((img, i) => (
      <div key={i} className="flex flex-col items-center">
        <button
          onClick={() => setActiveIndex(i)}
          className={`thumb-medium rounded-xl bg-cover bg-center shadow-xl transform transition-all duration-300 ${
            activeIndex === i ? "scale-105 -translate-y-2 ring-4 ring-purple-50" : ""
          }`}
          style={{ backgroundImage: `url('${img}')` }}
          aria-label={`Thumbnail ${i + 1}`}
        />
        <div
          className="thumb-reflect rounded-xl"
          style={{ backgroundImage: `url('${img}')` }}
          aria-hidden
        />
      </div>
    ))}
  </div>
</div>



            {/* end thumbnails */}
          </div>
        </div>
      </div>
    </section>
  );
}
