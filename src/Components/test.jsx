import React, { useState, useEffect } from "react";
import "../Styles/Recommendation.css";
import { Link } from "react-router-dom";
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/packageService';

function Citypackage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set default data when component mounts
    PackageService.getAllPackages()
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching latest packages:', error));
  }, []);

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Our Packages</h1>
      </div>
      <Link to={`/citypackage`} className="link">
        <div className="recommendationBox">
          {data && data.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.imgurl} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>

              <div className="hotelprice">
                <div>
                  {item.flight === 1 && <img src={info1} alt="flight icon" />}
                  {item.food === 1 && <img src={info2} alt="food icon" />}
                  {<img src={info3} alt="food icon" />}
                </div>
                <p>{item.cost} ₹</p>
              </div>

              <div className="details">
                <p>5 Days | 7 Nights</p>
                <p>PER PAX</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}

export default Citypackage;
