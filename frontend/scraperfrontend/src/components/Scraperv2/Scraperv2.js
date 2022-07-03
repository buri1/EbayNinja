import React, {useState, useEffect} from 'react'
import Listings from '../Listings/Listings';


export default function Scraperv2(Searchkey) {
  const [URI, setURI] = useState("Nintendo");
  const [URL, setURL] = useState("Nintendo");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const id= {URL:"Nintendo"}

  useEffect(
    (Searchkey) => {
      //replace localhost with local ip adress for no cors error in chrome
      fetch(`http://localhost:8002/results/:${URI}`, {
        method: "POST",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [URI]
  );

  if (loading) return "Loading...";
  if (error) return "Error!";
  console.log(data);

  return (
<div class="flex flex-col">
    <div class="flex">
        <form >
          <input class="flex flex-row"
            type="text"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
    
          <button onSubmit={() => setURI(URL)} type="submit" class="absolut flex flex-row p-2 text-white -translate-y-1/2 bg-teal-600 rounded-full top-1/2 right-4" >
                 
                  </button>
        </form>
    </div>
    <div class="flex">  <Listings datas={data} /></div>
    
</div>
  );
}