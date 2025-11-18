import React from 'react'

export default function SidePanel({movie, show, seats, onClear, onPay}){
  return (
    <div className="bg-white rounded-xl p-6 shadow sticky top-6">
      <h3 className="font-semibold mb-2">Your selection</h3>
      <div className="text-sm text-gray-600">Movie: <span className="font-medium">{movie?.title}</span></div>
      <div className="text-sm text-gray-600">Show: <span className="font-medium">{show?.time}</span></div>

      <div className="mt-4">
        <div className="flex gap-2 flex-wrap">
          {seats.length ?
            seats.map(s => <div key={s} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">{s}</div>)
            : <div className="text-sm text-gray-500">No seats selected</div>
          }
        </div>
      </div>

      <div className="mt-6">
        <div className="flex gap-2">
          <button 
            onClick={onPay} 
            disabled={!seats.length}
            className={`flex-1 py-2 rounded-full ${seats.length ? 'bg-reelPurple text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>
            Pay {seats.length * 150} AED
          </button>

          <button onClick={onClear} className="px-3 py-2 border rounded-full">Clear</button>
        </div>
      </div>

      <div className="mt-6 text-xs text-gray-500">Hover seats to preview</div>
    </div>
  )
}
