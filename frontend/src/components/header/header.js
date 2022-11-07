import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
<div class="sticky top-0 z-50 border-bottom-black">
 <header class="bg-gray-100 border-b-4 border-teal-600">
  <div class="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
    
    <a class=" antialiased text-teal-600 text-lg font-bold transition hover:text-gray-500/75" href="/">
              EbayNinja
    </a>
    

    <div class="flex items-center justify-end flex-1 md:justify-between">
      <nav class="hidden md:block" aria-labelledby="header-navigation">
        <h2 class="sr-only" id="header-navigation">Header navigation</h2>

        <ul class="flex items-center gap-6 ">

          <li>
            <a class="text-gray-900 font-normal text-base transition hover:text-gray-500/75" href="/">
              New Listing
            </a>
          </li>

          <li>
            <Link class="text-gray-900 font-normal text-base transition hover:text-gray-500/75" to="/search">
              New Search
            </Link>
          </li>

          <li>
            <a class="text-gray-900 font-normal text-base transition hover:text-gray-500/75" href="/">
              Search Finder
            </a>
          </li>

          <li>
            <a class="text-gray-900 font-normal text-base transition hover:text-gray-500/75" href="/">
              Settings
            </a>
          </li>
          <li>
            <a href="/">
              <div class="relative mr-3">
                  <input
                   class="block px-5 py-2.5  pr-16 text-sm border-1.5 border-teal-600 rounded-lg"
                   id="search-url"
                   type="url"
                   placeholder="Insert search URL here"
                   />

                  <button class="absolute p-2 text-white -translate-y-1/2 bg-teal-600 rounded-full top-1/2 right-4" type="button">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white ">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
              </div> 
            </a>
          </li>

        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:gap-4 sm:flex">
          <a
            class="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition rounded-md"
            href="/"
          >
            Login
          </a>

          <a
            class="hidden sm:block px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-teal-600/75 transition"
            href="/">
            Register
          </a>
        </div>

        <button
          class="block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75">
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
            
        </div>
    )
}
