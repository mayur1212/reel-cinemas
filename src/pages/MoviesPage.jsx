// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { MOVIES } from "../data/movies";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-white via-purple-50 to-purple-100 py-24">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Now You See Me: Now You Don't
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Crime | Thriller — 115 MIN. The Four Horsemen return with new generations
            of illusionists performing mind-melding twists...
          </p>

          <div className="flex gap-4">
            <Link
              to="/movies"
              className="bg-reelPurple text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Book Now
            </Link>

            <button className="bg-white border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-50 transition">
              Trailer
            </button>
          </div>
        </div>
      </section>

      {/* MOVIES LIST SECTION */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Now Showing</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {MOVIES.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
