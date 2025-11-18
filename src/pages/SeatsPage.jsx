import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { MOVIES } from '../data/movies'
import SidePanel from '../components/SidePanel'

export default function SeatsPage(){
  const { id } = useParams()
  const location = useLocation()
  const navState = location.state || {}
  const movie = MOVIES.find(m => String(m.id) === String(id)) || MOVIES[0]

  const rows = 7
  const cols = 10
  const [selected, setSelected] = useState([])

  useEffect(() => {
    const key = `booking_${id}`
    const saved = localStorage.getItem(key)
    if (saved) setSelected(JSON.parse(saved))
  }, [id])

  useEffect(() => {
    const key = `booking_${id}`
    localStorage.setItem(key, JSON.stringify(selected))
  }, [selected, id])

  const toggleSeat = (r, c) => {
    const label = `${String.fromCharCode(65 + r)}${c + 1}`
    setSelected(prev =>
      prev.includes(label)
        ? prev.filter(x => x !== label)
        : [...prev, label].sort()
    )
  }

  const clearSelection = () => setSelected([])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">

        <div className="lg:w-3/4 bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold mb-1">Select Seats - {movie.title}</h2>
          <div className="text-sm text-gray-500">Screen this way</div>

          <div className="w-full h-10 rounded-t-lg bg-gray-200 mt-3 flex items-center justify-center">
            SCREEN
          </div>

          <div className="overflow-auto mt-6">
            <div className="inline-block px-4 py-6">
              {Array.from({ length: rows }).map((_, r) => (
                <div key={r} className="flex items-center gap-3 mb-3">
                  <div className="w-6 text-sm">{String.fromCharCode(65 + r)}</div>

                  <div className="grid grid-cols-10 gap-3">
                    {Array.from({ length: cols }).map((__, c) => {
                      const label = `${String.fromCharCode(65 + r)}${c + 1}`
                      const isSelected = selected.includes(label)
                      const isOccupied = r === 0 && (c === 2 || c === 3)

                      return (
                        <button
                          key={c}
                          onClick={() => !isOccupied && toggleSeat(r, c)}
                          title={label}
                          className={`
                            w-9 h-9 rounded-md text-xs flex items-center justify-center transition
                            ${isOccupied ? 'bg-gray-400 cursor-not-allowed' :
                              isSelected ? 'bg-reelPurple text-white' :
                              'bg-gray-100 hover:bg-purple-100'}
                          `}
                        >
                          {c + 1}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/4">
          <SidePanel 
            movie={movie} 
            show={navState} 
            seats={selected} 
            onClear={clearSelection}
            onPay={() => alert("Proceeding to payment...")}
          />
        </div>

      </div>
    </div>
  )
}
