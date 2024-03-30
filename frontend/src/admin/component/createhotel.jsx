// HotelForm.jsx

import React, { useState } from 'react';
import PackageService from '../../services/hotelService';
import '../style/create.css'; // Import the CSS file

function HotelForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    imgurl: '',
    price: '',
    roomtype: '',
    is_latest: 0,
    is_weekend: 0,
    food: 0,
    is_ac: 0,
    wifi: 0
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (checked ? 1 : 0) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestData = {
      data: {
        name: formData.name,
        city: formData.city,
        imgurl: formData.imgurl,
        price: parseInt(formData.price),
        roomtype: formData.roomtype,
        is_latest: formData.is_latest,
        is_weekend: formData.is_weekend,
        food: formData.food,
        is_ac: formData.is_ac,
        wifi: formData.wifi
      }
    };

    PackageService.createHotel(requestData)
      .then(response => {
        console.log("Hotel created successfully:", response.data);
        setFormData({
          name: '',
          city: '',
          imgurl: '',
          price: '',
          roomtype: '',
          is_latest: 0,
          is_weekend: 0,
          food: 0,
          is_ac: 0,
          wifi: 0
        });
      })
      .catch(error => {
        console.error("Error creating hotel:", error);
      });
  };

  return (
    <div className="formbox">
        <h2>Create Hotel</h2> {/* Apply box styling */}
      <form onSubmit={handleSubmit}>
        
        <label className="form-label">
          Hotel Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          Image URL:
          <input type="text" name="imgurl" value={formData.imgurl} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          Room Type:
          <input type="text" name="roomtype" value={formData.roomtype} onChange={handleChange} className="form-input" />
        </label>
        <br />
     
        <label className="form-label">
          Food:
          <input type="checkbox" name="food" checked={formData.food} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          AC:
          <input type="checkbox" name="is_ac" checked={formData.is_ac} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          WiFi:
          <input type="checkbox" name="wifi" checked={formData.wifi} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button> {/* Apply button styling */}
      </form>
    </div>
  );
}

export default HotelForm;
