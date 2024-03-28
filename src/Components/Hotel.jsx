import React, { useState, useEffect } from "react";
import "../Styles/Hotelmodule.css";
import { Link } from "react-router-dom";
import { Autocomplete, TextField, Button } from "@mui/material";
import info1 from "../assets/dining.png";
import info2 from "../assets/wifi.png";
import info3 from "../assets/ac.png";
import icon from "../assets/search.png";
import PackageService from "../services/hotelService";

function Hotel() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    PackageService.getAllHotels()
      .then((response) => {
        setData(response.data.data);
        setFilteredData(response.data.data);
      })
      .catch((error) =>
        console.error("Error fetching latest packages:", error)
      );
  }, []);

  useEffect(() => {
    if (selectedDestination) {
      const filtered = data.filter((item) =>
        item.city.toLowerCase().includes(selectedDestination.toLowerCase())
      );
      setFilteredData(filtered);
      setShowAll(true);
    } else {
      // Update filteredData with all the data when search bar is cleared
      setFilteredData(data);
      setShowAll(false);
    }
  }, [selectedDestination, data]);

  const uniqueCities = [...new Set(data.map((item) => item.city))];

  return (
    <section id="hotel" className="hotel">
      <div className="title">
        <h1>Our Hotels</h1>
        <div className="SearchBarContainer">
          <Autocomplete
            options={uniqueCities}
            autoHighlight
            value={selectedDestination}
            onChange={(event, value) => setSelectedDestination(value)}
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
      </div>
      <div className="hotelBox">
        {showAll ? (
          filteredData.map((item, index) => (
            
              <div className="box">
                <div className="image">
                  <img src={item.imgurl} alt="image" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.city}</p>
                <div className="hotelprice">
                  <div>
                    {item.food === 1 && <img src={info1} alt="food icon" />}
                    {item.wifi === 1 && <img src={info2} alt="wifi icon" />}
                    {item.is_ac === 1 && <img src={info3} alt="ac icon" />}
                  </div>
                  <p>{item.price} ₹</p>
                </div>
                <div className="details">
                  <p>{item.roomtype}</p>
                  <p>1 Room | 2 Adults</p>
                </div>
              </div>
         
          ))
        ) : (
          filteredData.slice(0, 3).map((item, index) => (
            
              <div className="box">
                <div className="image">
                  <img src={item.imgurl} alt="image" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.city}</p>
                <div className="hotelprice">
                  <div>
                    {item.food === 1 && <img src={info1} alt="food icon" />}
                    {item.wifi === 1 && <img src={info2} alt="wifi icon" />}
                    {item.is_ac === 1 && <img src={info3} alt="ac icon" />}
                  </div>
                  <p>{item.price} ₹</p>
                </div>
                <div className="details">
                  <p>{item.roomtype}</p>
                  <p>1 Room | 2 Adults</p>
                </div>
              </div>
            
          ))
        )}
      </div>
      <div className="viewMoreButtonContainer">
        {showAll ? (
          <button className="viewMoreButton" onClick={() => setShowAll(false)}>
            View Less Hotels
          </button>
        ) : (
          <button className="viewMoreButton" onClick={() => setShowAll(true)}>
            View All Hotels
          </button>
        )}
      </div>
    </section>
  );
}

export default Hotel;
