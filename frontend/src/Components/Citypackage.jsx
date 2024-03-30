import React, { useState, useEffect } from "react";
import "../Styles/Recommendation.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material"; // Importing Material-UI icons
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/subpackageService';
import { useParams } from 'react-router-dom';

function Citypackage() {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState('desc'); // State to track sorting order
  const { title } = useParams();

  useEffect(() => {
    // Fetch sub-packages when component mounts
    PackageService.getSubpackages(title)
      .then(response => setData(response.data.data))
      .catch(error => console.error('Error fetching sub-packages:', error));
  }, [title]); // Include 'title' in the dependency array

  // Function to toggle sorting order
  const toggleSort = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  // Function to sort data based on cost
  const sortData = (data) => {
    if (sortBy === 'asc') {
      return data.slice().sort((a, b) => a.cost - b.cost);
    } else {
      return data.slice().sort((a, b) => b.cost - a.cost);
    }
  };

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>{title} Packages</h1>
        {/* Sort button with up and down icons from Material-UI */}
        <button className="sortButton" onClick={toggleSort}>
          Sort by Price {sortBy === 'asc' ? <ArrowUpward className="sortButtonIcon" /> : <ArrowDownward className="sortButtonIcon" />}
        </button>
      </div>
     
      <div className="recommendationBox">
        {sortData(data).map((item, index) => (
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
