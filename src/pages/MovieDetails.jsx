import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MOVIES } from '../data/movies'

export default function MovieDetails(){
  const { id } = useParams()
  const movie = MOVIES.find(m => String(m.id) === String(id)) || MOVIES[0]
  const navigate = useNavigate()

  const dates = useMemo(() => {
    const arr = []
    const today = new Date()
    for (let i = 0; i < 5; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      arr.push(d)
    }
    return arr
  }, [])

  const showtimes = ['12:00 PM','3:00 PM','6:30 PM','9:30 PM']

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">

        <div className="md:w-2/3 bg-white rounded-xl p-6 shadow">
          <div className="flex gap-6">
            <img src={movie.posterURL} className="w-44 rounded-lg shadow" />
            <div>
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <p className="text-gray-600 mt-2">Genre: Comedy / Crime</p>
              <p className="text-gray-700 mt-4">
                Synopsis: The Four Horsemen return with a new generation of illusionists performing mind-melting twists.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-3">Choose date & showtime</h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {dates.map(d => (
                <div key={d.toDateString()} className="bg-gray-50 border rounded-lg p-3">
                  <div className="text-xs text-gray-500">
                    {d.toLocaleDateString(undefined,{weekday:'short'})}
                  </div>
                  <div className="font-medium">{d.toLocaleDateString()}</div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {showtimes.map(s => (
                      <button 
                        key={s} 
                        onClick={() => navigate(`/movie/${id}/seats`, { state: { movie, date: d.toISOString(), time: s } })}
                        className="px-3 py-1 text-xs border rounded-full hover:bg-reelPurple hover:text-white transition"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="bg-gradient-to-b from-reelPurple to-purple-600 text-white p-6 rounded-xl shadow">
            <h4 className="font-semibold">Now Showing</h4>

            <div className="mt-4 flex items-center gap-3">
              <img src={movie.posterURL} className="w-16 rounded" />
              <div>
                <div className="font-bold">{movie.title}</div>
                <div className="text-sm">Select date & showtime</div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/')}
              className="w-full mt-6 bg-white text-reelPurple rounded-full py-2 font-semibold"
            >
              Back to movies
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
