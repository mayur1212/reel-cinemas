// src/pages/Home.jsx
import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import MovieDetailPanel from "../components/MovieDetailPanel";
import { MOVIES } from "../data/movies";
import ReelJuniorBanner from "../components/ReelJuniorBanner";

// ** Make sure these files exist in src/assets **
import heroImg from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";

export default function Home() {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [tab, setTab] = useState("whats-on"); // 'whats-on' | 'whats-coming'
  const [filtersOpen, setFiltersOpen] = useState(false);

  // If you prefer to use MOVIES posters as banner thumbs, replace the array below.
  const bannerThumbs = useMemo(() => {
    // Prioritize explicit banner assets but fallback to first movie posters if you want
    const explicit = [heroImg, banner2, banner3, banner4, banner5].filter(Boolean);
    if (explicit.length) return explicit;
    return MOVIES.slice(0, 8).map((m) => m.posterURL || "");
  }, []);

  // Choose visible movies by tab (use `comingSoon` flag on movie objects if available)
  const visibleMovies = useMemo(() => {
    if (tab === "whats-coming") return MOVIES.filter((m) => !!m.comingSoon);
    return MOVIES.filter((m) => !m.comingSoon);
  }, [tab]);

  return (
    <main className="min-h-screen bg-white">
      {/* Banner - hero + thumbnails */}
      <Banner
        title="Now You See Me: Now You Don't"
        subtitle="CRIME  |  THRILLER"
        runtime="115 MIN"
        description="Synopsis: The Four Horsemen return with a new generation of illusionists performing mind-melding twists, turns, ..."
        thumbnails={bannerThumbs}
        heroImage={bannerThumbs[0] || ""}
      />

      <section className="max-w-7xl mx-auto px-6 mt-8">
        {/* Tabs */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setTab("whats-on")}
            className={`text-lg font-semibold uppercase tracking-wide ${
              tab === "whats-on" ? "text-[#5b2b7e]" : "text-gray-800"
            }`}
          >
            WHAT'S ON
          </button>

          <div className="h-6 w-px bg-gray-300" />

          <button
            onClick={() => setTab("whats-coming")}
            className={`text-lg font-medium uppercase tracking-wide ${
              tab === "whats-coming" ? "text-[#5b2b7e]" : "text-gray-700"
            }`}
          >
            WHAT'S COMING
          </button>
        </div>

        {/* Filters row */}
        <div className="mt-6">
          <div className="bg-slate-50 rounded-xl p-4 flex flex-col md:flex-row gap-3 items-start md:items-center">
            <div className="flex items-center gap-3 flex-wrap">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                WHAT TO WATCH (0)
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 7h7l-5.6 4 2 7L12 16l-6.4 4 2-7L2 9h7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                LOCATION (0)
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                EXPERIENCE (0)
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3 7h7l-5.6 4 2 7L12 16l-6.4 4 2-7L2 9h7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                GENRE (0)
              </button>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button onClick={() => setFiltersOpen((s) => !s)} className="text-sm text-gray-600 underline">
                {filtersOpen ? "Hide filters" : "Show filters"}
              </button>

              <Link to="/movies" className="text-sm px-3 py-2 border rounded-lg">
                View all
              </Link>
            </div>
          </div>
        </div>

        {/* Movie grid */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">{tab === "whats-on" ? "Now Showing" : "Coming Soon"}</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {visibleMovies.length ? (
              visibleMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onSelect={(m) => setSelectedMovie(m)} />
              ))
            ) : (
              <div className="col-span-full py-8 text-center text-gray-500">No movies found</div>
            )}
          </div>
        </div>
      </section>

      {/* Reel Junior Section Below Movie Cards */}
      <div className="mt-20">
        <ReelJuniorBanner />
      </div>

      {/* Inline detail panel if a movie selected */}
      {selectedMovie && (
        <div className="w-full mt-8">
          <MovieDetailPanel movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        </div>
      )}
    </main>
  );
}
