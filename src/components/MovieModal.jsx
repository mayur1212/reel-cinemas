// src/components/MovieModal.jsx
import React from "react";

/**
 * MovieModal
 * - Full-width dark detail panel with left info column and right video
 * - Props:
 *   - movie: { id, title, posterURL, imdbId, description, runtime, genre, languages, age }
 *   - onClose: function to close the modal
 *
 * NOTE: If movie.trailerUrl exists it will be used for iframe src, otherwise it will attempt a YouTube search fallback.
 */

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  // Fallback fields when data is missing
  const synopsis =
    movie.description ||
    movie.overview ||
    "Synopsis not available. This is a demo description — replace with your movie data.";
  const runtime = movie.runtime || "2 hr 15 min";
  const genres = movie.genre || movie.genres || "Action | Adventure";
  const languages = movie.languages || "English";
  const age = movie.age || "15+";

  // Trailer URL - use provided trailerUrl, else attempt to embed YouTube search (you can replace)
  const trailerSrc =
    movie.trailerUrl ||
    // simple youtube embed fallback (replace with real embed when available)
    `https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-6 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.title} details`}
    >
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative w-full max-w-6xl bg-transparent">
        <div className="bg-black rounded-md overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* Left column - info */}
            <div className="md:w-1/2 px-8 py-10 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl md:text-4xl font-bold">{movie.title}</h2>
                  <div className="ml-2 px-3 py-1 rounded-full bg-purple-700 text-sm font-semibold">
                    {age}
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="text-gray-300 hover:text-white p-2 rounded"
                  aria-label="Close details"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-300 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M1 12h1M22 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7" />
                  </svg>
                  <span>{runtime}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-5.6 4 2 7L12 16l-6.4 4 2-7L2 9h7z" />
                  </svg>
                  <span>{genres}</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
                  </svg>
                  <span>{languages}</span>
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed text-sm">
                {synopsis}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => (window.location.href = `/movie/${movie.id}`)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3d0c5d] to-[#6a2d9b] text-white font-semibold"
                >
                  BOOK NOW
                </button>

                <button
                  onClick={() => {
                    // Play inline trailer in the right panel already present (no-op here),
                    // but you could also scroll to the video or start autoplay via postMessage.
                    const iframe = document.querySelector(`#movie-trailer-${movie.id}`);
                    if (iframe && iframe.contentWindow) {
                      // example: send play command if you have a player that supports it
                    }
                  }}
                  className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3v18l15-9z" />
                  </svg>
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <strong>Director :</strong> {movie.director || "—"} <br />
                <strong>Cast :</strong> {movie.cast || "—"}
              </div>
            </div>

            {/* Right column - video */}
            <div className="md:w-1/2 bg-black/80 flex items-center justify-center">
              <div className="w-full aspect-video">
                <iframe
                  id={`movie-trailer-${movie.id}`}
                  title={`${movie.title} trailer`}
                  src={trailerSrc}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
