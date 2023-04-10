import React from "react";
import Scraperv2 from "../Scraperv2/Scraperv2";
import { useState , useEffect } from "react";


export default function Searchbutton({onNewSearch = f => f }) {
  const [URL, setURL] = useState("oculus");
  const [URI, setURI] = useState("Insert search Item here");

  const submit = (e) => {
    e.preventDefault();
    onNewSearch()
    setURL(URI);
  };
  return (
    <div class="relative ">
      <form class="flex gap-4" onSubmit={submit}>
        <div class="relative z-0 w-full mb-6 mt-3 pl-1/2 group">
          <input
            value={URI}
            onChange={(event) => setURI(event.target.value)}
            name="Search Item"
            class="block py-2.5 px-0 w-full  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
            placeholder=" "
            required
          />

        </div>
<div class="mt-5">
<button type="submit" class="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Search!</button>

</div>
      </form>
      <div>
        {

          <Scraperv2 Searchkey={URL} />
        }
      </div>
    </div>
  );
}

{/* export default Searchbutton; */}
