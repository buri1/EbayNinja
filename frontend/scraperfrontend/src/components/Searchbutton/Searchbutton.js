import React from "react";
import Scraperv2 from "../Scraperv2/Scraperv2";
import { useState } from "react";

function Searchbutton() {
    const [URL, setURL] = useState("Nintendo");
    const [URI, setURI] = useState("Nintendo");
    function handleSubmit() {
        setURL(URI);
      }
  return (
      <div>


    <div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          
          placeholder="Search Article"
          onChange={(e) => setURI(e.target.URI)}
        />

        <button type="submit">Create Search</button>
      </form>
    </div>
    <div>
    <Scraperv2 
    Searchkey={URL}
    />
    </div>
    </div>
  );
}

export default Searchbutton;
