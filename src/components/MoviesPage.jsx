// src/pages/MoviesPage.jsx
import React, { useState, useMemo } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetailPanel from "../components/MovieDetailPanel";
import { MOVIES } from "../data/movies";

/**
 * MoviesPage
 * - Tabs: "WHAT'S ON" | "WHAT'S COMING"
 * - FilterBar: placeholder UI (WHAT TO WATCH, LOCATION, EXPERIENCE, GENRE)
 * - Grid with each MovieCard occupying a grid cell; card content centered and card width set to 90% (handled inside MovieCard)
 * - Inline detail panel appears below the grid for the selected movie
 */

function FilterBar({ onChangeFilter }) {
  // Visual-only filter pills; hook up callbacks if you want to filter results
  return (
    <div className="max-w-6xl mx-auto px-4 mt-6">
      <div className="bg-slate-100 rounded-lg px-4 py-3 flex gap-4 items-center">
        <button className="flex items-center gap-2 px-3 py-2 bg-white rounded shadow-sm text-sm font-medium">
          <svg className="w-4 h-4 text-violet-700" viewBox="0 0 24 24" fill="none">
            <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          WHAT TO WATCH (0)
        </button>

        <div className="flex-1 flex gap-3">
          <button className="flex items-center gap-2 px-3 py-2 rounded text-sm">LOCATION (0)</button>
          <button className="flex items-center gap-2 px-3 py-2 rounded text-sm">EXPERIENCE (0)</button>
          <button className="flex items-center gap-2 px-3 py-2 rounded text-sm">GENRE (0)</button>
        </div>
      </div>
    </div>
  );
}

export default function MoviesPage() {
  const [tab, setTab] = useState("on"); // "on" | "coming"
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Example separation: use `releaseDate` or `comingSoon` property in your MOVIES data.
  // For now we split by a `comingSoon` prop (false => what's on, true => what's coming)
  const whatsOn = useMemo(() => MOVIES.filter(m => !m.comingSoon), []);
  const whatsComing = useMemo(() => MOVIES.filter(m => !!m.comingSoon), []);

  const moviesToShow = tab === "on" ? whatsOn : whatsComing;

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 pt-6">
        {/* Tabs */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setTab("on")}
            className={`text-lg font-bold uppercase tracking-wide ${tab === "on" ? "text-violet-700" : "text-gray-700"}`}
          >
            WHAT'S ON
          </button>

          <div className="h-6 w-px bg-gray-300" />

          <button
            onClick={() => setTab("coming")}
            className={`text-lg font-semibold uppercase tracking-wide ${tab === "coming" ? "text-violet-700" : "text-gray-800"}`}
          >
            WHAT'S COMING
          </button>
        </div>

        {/* FilterBar */}
        <FilterBar />

        {/* Grid */}
        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {moviesToShow.map((m) => (
              <MovieCard
                key={m.id}
                movie={m}
                onSelect={(movie) => setSelectedMovie(movie)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Inline detail panel showing full-bleed below the grid */}
      <div className="w-full">
        {selectedMovie && (
          <div className="w-full transition-all duration-300 ease-out">
            <MovieDetailPanel movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
          </div>
        )}
      </div>
    </>
  );
}
