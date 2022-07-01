import React from "react";
import "./Listings.css";
import "../../index.css";
import Sidebar from "../Sidebar/Sidebar"

const Listings = ({ datas }) => {
  return (
    /* <div class="Main container flex flex-row"> */
<div class="py-2"> 
      <div class="List-items flex flex-row">
        <ul>
          {datas.map((data) => (
            <li class="py-1 px--1" key={data.Id}>
              <div>
                <a
                  key={data.Id}
                  href="#"
                  class="flex flex-col items-center bg-gray-200 rounded-lg border-4 border-teal-600  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div class="flex flex-row" >
                    <img
                    class="h-48 lg:h-auto lg:w-48 flex-none  pl-2 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={data.AdImg}
                    alt="Couldnt Load Ad Image"/> 
                    </div>
                  
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     <a href={data.AdUrlFinished} target="blank" rel="noopener noreferrer"> {data.AdTitle}</a>
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {data.AdDescription}
                    </p>
                     
                    <button class="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 my-1 px-4 border border-teal-600 rounded">
  Send Message
</button>
<button class=" bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 border border-teal-600 rounded">
  Open Offer
</button>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
};

export default Listings;
