
              import React from 'react'
              import "./Listings.css"
              
              const Listings = ({datas}) => {
                  return (
                    <div className ="ListingCard">
<ul>
          {datas.map(data => (
            <li key={data.Id}>
              <h3>{data.AdTitle}</h3>
              <p>{data.AdDescription}</p>
              <img src={data.AdImg} alt="Adimg" />;
              
            </li>
          ))}
        </ul>
</div>) }
              
              export default Listings
              