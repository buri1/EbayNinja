import React from "react";
import "../../index.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Listings = ({ datas }) => {
  return (
    <div class="py-2 sm:mr-2 md:mr-0">
      <div class="List-items flex flex-row">
        <ul>
          {datas.map((data) => (
            <li class="py-1 pt-0" key={data.Id}>
              <div class="">
                <a
                  key={data.Id}
                  href={data.AdUrlFinished}
                  target="blank"
                  class="flex flex-col items-center bg-gray-200 rounded-lg border-4 border-teal-600  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="flex-1">
                    <div class="flex w-48 h-48 flex-col">
                      <img
                        class="flex-1 border-4 border-teal-600 rounded-lg  mt-2 ml-2  w- h-48 dark:text-gray-600"
                        src={data.AdImg}
                        alt="No Ad Image"
                      />

                    </div>
                    <div class="flex " ><h2 class=" align-text-bottom  mt-2 pl-4 pb-1 text-2xl font-bold tracking-tight md:text-xl text-teal-800 dark:text-teal-200">
                      {data.AdPrice}</h2>
                    </div>
                  </div>

                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold md:text-center tracking-tight text-gray-700 dark:text-gray-200">
                      <a
                        href={data.AdUrlFinished}
                        target="blank"
                      >
                        {" "}
                        {data.AdTitle}
                      </a>
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {data.AdDescription}
                    </p>


                    <button class="bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 my-1 px-4 border border-teal-600 rounded">
                      Send Message
                    </button>
                    <button class=" bg-teal-600 hover:bg-teal-900 text-white font-bold py-2 px-4 border border-teal-600 rounded"><Link
                      to={data.AdUrlFinished}
                      target="blank"
                    >
                      Open Offer </Link>
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
