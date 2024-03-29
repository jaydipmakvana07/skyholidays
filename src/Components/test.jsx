import React, { useState, useEffect } from "react";
import "../Styles/Recommendation.css";
import { Link } from "react-router-dom";
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/subpackageService';
import { useParams } from 'react-router-dom';

function Citypackage() {
  const [data, setData] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    // Fetch sub-packages when component mounts
    PackageService.getSubpackages(title)
      .then(response => setData(response.data.data))
      .catch(error => console.error('Error fetching sub-packages:', error));
  }, [title]); // Include 'title' in the dependency array

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>{title} Packages</h1>
      </div>
     
      <div className="recommendationBox">
        {data && data.map((item, index) => (
          <Link to={`/packagedetails/${item.sub_package_id}`} className="link" key={index}>
            <div className="box">
              <div className="image">
                <img src={item.imgurl} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>

              <div className="hotelprice">
                <div>
                  {item.flight === 1 && <img src={info1} alt="flight icon" />}
                  {item.food && <img src={info2} alt="food icon" />}
                  <img src={info3} alt="love icon" />
                </div>
                <p>{item.cost} ₹</p>
              </div>

              <div className="details">
                <p>{item.duration}</p>
                <p>PER PAX</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Citypackage;
