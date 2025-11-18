// src/components/MovieCard.jsx
import React from "react";

export default function MovieCard({ movie, onSelect }) {
  const handleSelect = () => onSelect?.(movie);

  return (
    <div className="w-full sm:w-[120px] md:w-[150px] lg:w-[170px] mx-auto">
      <div
        role="button"
        tabIndex={0}
        onClick={handleSelect}
        onKeyDown={(e) => { if (e.key === "Enter") handleSelect(); }}
        className="bg-white rounded-xl poster-shadow overflow-hidden cursor-pointer group focus:outline-none focus:ring-4 focus:ring-purple-200"
        aria-label={`${movie.title} details`}
      >
        <div className="relative">
          <div className="aspect-[2/3] w-full overflow-hidden">
            <img
              src={movie.posterURL}
              alt={movie.title}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* ribbon */}
          {movie.advBooking && (
            <div className="ribbon">ADVANCE BOOKING</div>
          )}

          {/* PG badge */}
          {movie.age && (
            <div className="pg-badge">{movie.age}</div>
          )}
        </div>

        {/* purple tile bar */}
        <div className="tile-bar px-2 py-2">
          <div className="text-xs font-semibold truncate">
            {movie.title.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
