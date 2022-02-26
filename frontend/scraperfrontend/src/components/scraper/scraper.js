import React, {useState, useEffect} from 'react'
import "./scraper.css"
import Listings from '../Listings/Listings';


export default function Scraper() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
useEffect(() => {
  //replace localhost with local ip adress for no cors error in chrome
  fetch('http://localhost:8002/results')

  .then(response =>{
    if(response.ok){
      return response.json();
    }
    throw response;
  })
  .then(data => {
    setData(data);
  })
  .catch(error =>{
    console.error("Error fetching data:", error)
    setError(error);
  })
  .finally(()=> {
    setLoading(false);
  })
},[]);

if (loading) return "Loading...";
if (error) return "Error!";
console.log(data)
 

 return (
    <Listings datas={data}/>
      )
    }