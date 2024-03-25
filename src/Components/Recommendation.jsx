import React, { useState, useEffect } from "react";
import "../Styles/Recommendation.css";
import { Link } from "react-router-dom";

import kerala from "../assets/kerala.jpg";
import lax from "../assets/lax.jpg";
import goa from "../assets/goa.jpg";
import jammu from "../assets/jammu.jpg";
import shimla from "../assets/shimla.jpg";
import rajsthan from "../assets/rajsthan.jpg";
import dubai from "../assets/dubai.jpg";
import thailand from "../assets/thailand.jpg";
import singapore from "../assets/singapore.jpg";
import maldives from "../assets/maldives.jpg";
import bali from "../assets/bali.jpg";
import nepal from "../assets/nepal.jpg";
import InternationalDestination1 from "../assets/Destination1.png";
import InternationalDestination2 from "../assets/Destination2.png";
import WeekendDestination1 from "../assets/Destination1.png";
import WeekendDestination2 from "../assets/Destination2.png";
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/packageService';


function Recommendation() {
  const [active, setActive] = useState(1); // Default active category index
  const [data, setData] = useState([]); // State to hold package data

  // Function to handle package category change
  const handleCategoryChange = (index) => {
    setActive(index); // Update active category index
    switch (index) {
      case 1:
        PackageService.getLatestPackages()
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching latest packages:', error));
        break;
      case 2:
        PackageService.getDomesticPackages()
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching domestic packages:', error));
        break;
      case 3:
        PackageService.getInternationalPackages()
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching international packages:', error));
        break;
      case 4:
        PackageService.getWeekendPackages()
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching weekend packages:', error));
        break;
      default:
        setData([]); // Clear data if no category is selected
        break;
    }
  };

  useEffect(() => {
    // Set default category data when component mounts
    PackageService.getLatestPackages()
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching latest packages:', error));
  }, []); // Empty dependency array to run effect only once

  // Your existing component code...
 // Empty dependency array to run effect only once

  const packages = [
    "Latest Offer",
    "Domestic Packages",
    "International Packages",
    "Weekend Break",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Our Packages</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => handleCategoryChange(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Link  to={`/citypackage`} className="link" >
      <div className="recommendationBox">
  {data && data.map((item, index) => (
    <div className="box" key={index}>
      <div className="image">
        <img src= {item.imgurl} alt="image" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>

      <div className="price">
        <div>
        {item.flight === 1 && <img src={info1} alt="flight icon" />}
                  {item.food === 1 && <img src={info2} alt="food icon" />}
                  { <img src={info3} alt="food icon" />}
        </div>
        <p>Starting @{item.cost} ₹</p>
      </div>

      <div className="details">
        <p>{item.duration} and many more</p>
        <p>per person</p>
      </div>
    </div>
  ))}
</div>
</Link>
    </section>
  );
}

export default Recommendation;
