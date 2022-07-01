import React from 'react'

function Inboxwidget() {
  return (
    <div class="flex flex-row flex-1">
       <div class="flex my-4 mx-3 border-4 border-teal-600 bg-gray-200 dark:bg-gray-800 rounded-lg justify-left w-full"> 
       <ul class="mt-6">
           <li><h1 class=" text-gray-800 Dark:text-gray-200 text-center font-bold text-xl underline underline-offset-2">Inbox</h1></li>
        <li class="py-5 border-b px-3 transition hover:hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md text-gray-700">23m ago</p>
          </a>
          <div class="text-md italic text-gray-700">You have an Offer!</div>
        </li>
        <li class="py-5 border-b px-3 transition hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md text-gray-700">23m ago</p>
          </a>
          <div class="text-md italic text-gray-700">You have an Offer!</div>
        </li>
        <li class="py-5 border-b px-3 transition hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md text-gray-700">23m ago</p>
          </a>
          <div class="text-md italic text-gray-700">You have an Offer!</div>
        </li>
        <li class="py-5 border-b px-3 transition hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md text-gray-700">23m ago</p>
          </a>
          <div class="text-md italic text-gray-700">You have an Offer!</div>
        </li>
        <li class="py-5 border-b px-3   hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md pl-1">23m ago</p>
          </a>
          <div class="text-md">You have an Offer!</div>
        </li>
        <li class="py-5 border-b px-3 transition hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md text-gray-700">23m ago</p>
          </a>
          <div class="text-md italic text-gray-700">You have been invited!</div>
        </li>
        <li class="py-5 border-b px-3 transition hover:bg-teal-600">
          <a href="#" class="flex justify-between items-center">
            <h3 class="text-lg text-gray-700 Dark:text-gray-200 font-semibold">Jens Flieder</h3>
            <p class="text-md text-gray-700">23m ago</p>
          </a>
          <div class="text-md italic text-gray-700">You have been invited!</div>
        </li>
        
      </ul>
      </div>

      
       
    </div>
  )
}

export default Inboxwidget