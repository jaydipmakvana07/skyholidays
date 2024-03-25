import React, { useState, useEffect } from "react";
import "../Styles/packagedetails.css";
import { Link } from "react-router-dom";
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/packageService';

function Singlepackage() {
  const [packageData, setPackageData] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    PackageService.getAllPackages()
      .then(response => {
        // Set the first package from the response
        if (response.data.length > 0) {
          setPackageData(response.data[0]);
        }
      })
      .catch(error => console.error('Error fetching latest package:', error));
  }, []);

  return (
    <section id="Singlepackage" className="recommendation">
      
      {packageData && (
        <Link to={`/citypackage/${packageData.id}`} className="link">
          <div className="singlepackageBox">
            <div className="singlebox">
              <div className="singleimage">
                <img src={packageData.imgurl} alt="image" />
              </div>
              <h3>{packageData.title}</h3>
              <p>{packageData.subtitle}</p>

              <div className="hotelprice">
                <div>
                  {packageData.flight === 1 && <img src={info1} alt="flight icon" />}
                  {packageData.food === 1 && <img src={info2} alt="food icon" />}
                  {<img src={info3} alt="food icon" />}
                </div>
                <p>{packageData.cost} ₹</p>
              </div>

              <div className="details">
                <p>5 Days | 7 Nights</p>
                <p>PER PAX</p>
              </div>
            </div>
            <button className="book-now-button">Click here to Book Now</button>
          </div>
        </Link>
      )}
    </section>
  );
}

export default Singlepackage;
