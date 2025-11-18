// src/components/MovieDetailPanel.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieDetailPanel({ movie, onClose }) {
  const panelRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (panelRef.current)
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!movie) return null;

  const synopsis = movie.description || movie.overview || "Synopsis not available.";
  const runtime = movie.runtime || "2 HR 15 MIN";
  const languages = movie.languages || "ENGLISH";

  const handleBookNow = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div ref={panelRef} className="w-full py-8">
      <div className="max-w-6xl mx-auto px-4 detail-panel">
        <div className="flex flex-col md:flex-row">
          
          {/* LEFT - Movie Information */}
          <div className="md:w-1/2 p-8 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  {movie.title}
                </h2>

                <div className="mt-3 inline-flex gap-3 items-center text-gray-300 uppercase text-xs">
                  <span>{movie.genre || "ACTION | ADVENTURE"}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                className="text-gray-300 hover:text-white p-2"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-5 text-sm text-gray-300 flex gap-6 items-center">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7"
                  />
                </svg>
                <span>{runtime}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2l3 7h7l-5.6 4 2 7L12 16l-6.4 4 2-7L2 9h7z"
                  />
                </svg>
                <span>{languages}</span>
              </div>
            </div>

            <p className="mt-6 text-gray-300 text-sm leading-relaxed">
              {synopsis}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={handleBookNow}
                className="btn-book"
                aria-label="Book now"
              >
                BOOK NOW
              </button>

              <button className="btn-play" title="Poster">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 5l7 7-7 7-7-7 7-7z" />
                </svg>
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <div>
                <strong>Director:</strong> {movie.director || "—"}
              </div>
              <div className="mt-2">
                <strong>Cast:</strong> {movie.cast || "—"}
              </div>
            </div>
          </div>

          {/* RIGHT - Poster Image (Smaller Size) */}
          <div className="md:w-1/2 bg-black/90 flex items-center justify-center p-6">
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-[60%] h-auto rounded-xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
