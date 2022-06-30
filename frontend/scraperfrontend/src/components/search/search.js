import React from 'react'
import "./search.css"

function Search() {
    return (
        <div className="SearchForm">


<div class="relative">
  <label class="sr-only" for="email"> Email </label>

  <input
    class="w-full py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
    id="search-url"
    type="url"
    placeholder="Insert search URL here"
  />

  <button class="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 right-4" type="button">
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
</div>
        </div>
    )
}

export default Search
