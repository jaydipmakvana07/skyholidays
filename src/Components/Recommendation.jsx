import React, { useState, useEffect } from "react";
import "../Styles/Recommendation.css";
import { Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";
import info1 from "../assets/plane04.png";
import info2 from "../assets/dining.png";
import info3 from "../assets/love.gif";
import PackageService from '../services/packageService';
import icon from "../assets/search.png";
function Recommendation() {
  const [active, setActive] = useState(1); // Default active category index
  const [data, setData] = useState([]); // State to hold package data
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all and limited packages

  // Function to handle package category change
  const handleCategoryChange = (index) => {
    setActive(index); // Update active category index
    switch (index) {
      case 1:
        PackageService.getLatestPackages()
          .then(response => setData(response.data.data))
          .catch(error => console.error('Error fetching latest packages:', error));
        break;
      case 2:
        PackageService.getDomesticPackages()
          .then(response => setData(response.data.data))
          .catch(error => console.error('Error fetching domestic packages:', error));
        break;
      case 3:
        PackageService.getInternationalPackages()
          .then(response => setData(response.data.data))
          .catch(error => console.error('Error fetching international packages:', error));
        break;
      case 4:
        PackageService.getWeekendPackages()
          .then(response => setData(response.data.data))
          .catch(error => console.error('Error fetching weekend packages:', error));
        break;
      default:
        setData([]); // Clear data if no category is selected
        break;
    }
  };

  useEffect(() => {
    // Set default category data when component mounts
    handleCategoryChange(1);
  }, []); // Empty dependency array to run effect only once

  // Function to handle package selection from autocomplete
  const handlePackageSelection = (value) => {
    setSearchQuery(value);
  };

  // Function to handle clearing the search query
  const handleClearSearch = () => {
    setSearchQuery(""); // Clear the search query
  };

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes((searchQuery || "").toLowerCase()) // Check if searchQuery is null before applying toLowerCase()
  );

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Our Packages</h1>
        <div className="CategoryBar">
          <ul>
            {["Latest Offer", "Domestic Packages", "International Packages", "Weekend Break"].map((pkg, index) => {
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
      
      <div className="SearchBarContainer">
        {/* Autocomplete Search Box */}
        <Autocomplete
          options={data.map(item => item.title)}
          autoHighlight
          value={searchQuery}
          onChange={(event, value) => handlePackageSelection(value)}
          onClear={() => handleClearSearch()} // Handle clear event
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by Destination"
              variant="standard"
            />

          )}
          
        />
          <div className="icon">
            <img src={icon} alt="search" />
            </div>
      </div>

      <div className="recommendationBox">
        {showAll
          ? filteredData.map((item, index) => (
              <Link to={`/citypackage/${item.title}`} className="link" key={index}>
                <div className="box">
                  <div className="image">
                    <img src={item.imgurl} alt="image" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <div className="price">
                    <div>
                      {item.flight === 1 && <img src={info1} alt="flight icon" />}
                      {item.food === 1 && <img src={info2} alt="food icon" />}
                      <img src={info3} alt="food icon" />
                    </div>
                    <p>Starting @{item.cost} ₹</p>
                  </div>
                  <div className="details">
                    <p>{item.duration}</p>
                    <p>PER PAX</p>
                  </div>
                </div>
              </Link>
            ))
          : filteredData.slice(0, 6).map((item, index) => (
              <Link to={`/citypackage/${item.title}`} className="link" key={index}>
                <div className="box">
                  <div className="image">
                    <img src={item.imgurl} alt="image" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <div className="price">
                    <div>
                      {item.flight === 1 && <img src={info1} alt="flight icon" />}
                      {item.food === 1 && <img src={info2} alt="food icon" />}
                      <img src={info3} alt="food icon" />
                    </div>
                    <p>Starting @{item.cost} ₹</p>
                  </div>
                  <div className="details">
                    <p>{item.duration}</p>
                    <p>PER PAX</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
      <div className="viewMoreButtonContainer">
        <button className="viewMoreButton" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less Packages" : "View All Packages"}
        </button>
      </div>
    </section>
  );
}

export default Recommendation;
