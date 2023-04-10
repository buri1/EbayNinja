import React, { useState, useEffect } from 'react'
import Listings from '../Listings/Listings';


export default function Scraperv2(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //const id= {URL:"Nintendo"}

  const URLL = props.Searchkey

  useEffect(
    (Searchkey) => {
      //replace localhost with local ip adress for no cors error in chrome
      fetch(`http://localhost:8002/results/${URLL}`, {
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
    [URLL]
  );

  if (loading) return "Loading...";
  if (error) return "Error!";
  console.log(data);

  return (
    <div class="flex flex-col">
      <div class="flex">  <Listings datas={data} /></div>
    </div>
  );
}