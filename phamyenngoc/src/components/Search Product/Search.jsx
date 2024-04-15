import React from 'react'

const Search = () => {
  return (
    <div className="join mb-[15px]">
            <div>
              <div>
                <input
                  className="input input-bordered join-item border-gray-950 w-[300px]"
                  placeholder="Search by Keyword or item #"
                />
              </div>
            </div>
            <div className="indicator">
              <button className="btn join-item bg-gray-950 text-white">
                Search
              </button>
            </div>
          </div>
  )
}

export default Search
