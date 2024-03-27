import React, { useState, useEffect } from "react";
import "../Styles/packagedetails.css";
import { Link } from "react-router-dom";
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/subpackageService';
import { useParams } from 'react-router-dom';

function Singlepackage() {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sub_package_id } = useParams();

  useEffect(() => {
    // Fetch data when component mounts
    PackageService.getSubpackageDetails(sub_package_id)
      .then(response => {
        setPackageData(response.data.data); // Set the entire array of data
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching latest package:', error);
        setLoading(false); // Set loading state to false in case of error
      });
  }, [sub_package_id]);

  return (
    <section id="Singlepackage" className="recommendation">
      {loading ? (
        <p>Loading...</p>
      ) : (
        packageData.length > 0 ? (
          packageData.map((item, index) => (
            <Link to={`/citypackage/${item.sub_package_id}`} className="link" key={index}>
              <div className="singlepackageBox">
                <div className="singlebox">
                  <div className="singleimage">
                    <img src={item.imgurl} alt="image" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>

                  <div className="hotelprice">
                    <div>
                      {item.flight === 1 && <img src={info1} alt="flight icon" />}
                      {item.food === 1 && <img src={info2} alt="food icon" />}
                      <img src={info3} alt="food icon" />
                    </div>
                    <p>{item.cost} ₹</p>
                  </div>

                  <div className="details">
                    <p>5 Days | 7 Nights</p>
                    <p>PER PAX</p>
                  </div>
                </div>
                <button className="book-now-button">Click here to Book Now</button>
              </div>
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )
      )}
    </section>
  );
}

export default Singlepackage;
