import React, { useState } from 'react';
import PackageService from '../../services/subpackageService';
import '../style/create.css'; // Import the CSS file

function PackageForm() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    cost: '',
    duration: '',
    food: 0,
    flight: 0,
    package_includes: '',
    pacakge_details: [{ day: '', city: '', description: '' }],
    imgurl: ''
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "day" || name === "city" || name === "description") {
      const updatedPackageDetails = [...formData.pacakge_details];
      updatedPackageDetails[index] = {
        ...updatedPackageDetails[index],
        [name]: value
      };
      setFormData(prevState => ({
        ...prevState,
        pacakge_details: updatedPackageDetails
      }));
    } else {
      const sanitizedValue = value.replace(/\\/g, ''); // Remove slashes from the value
      setFormData(prevState => ({
        ...prevState,
        [name]: sanitizedValue
      }));
    }
  };

  const handleAddPackageDetail = () => {
    setFormData(prevState => ({
      ...prevState,
      pacakge_details: [...prevState.pacakge_details, { day: '', city: '', description: '' }]
    }));
  };

  const handleRemovePackageDetail = (index) => {
    const newPacakgeDetails = [...formData.pacakge_details];
    newPacakgeDetails.splice(index, 1);
    setFormData(prevState => ({
      ...prevState,
      pacakge_details: newPacakgeDetails
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requestData = {
      data: {
        title: formData.title,
        subtitle: formData.subtitle,
        cost: parseInt(formData.cost),
        duration: formData.duration,
        food: formData.food === "on" ? 1 : 0, // Convert checkbox value to 0 or 1
        flight: formData.flight === "on" ? 1 : 0, 
        package_includes: formData.package_includes.split('\n').filter(item => item.trim() !== ''),
        pacakge_details: formData.pacakge_details,
        imgurl: formData.imgurl
      }
    };

    PackageService.createSubPackage(requestData)
      .then(response => {
        console.log("Package created successfully:", response.data);
        setFormData({
          title: '',
          subtitle: '',
          cost: '',
          duration: '',
          food: 0,
          flight: 0,
          package_includes: '',
          pacakge_details: [{ day: '', city: '', description: '' }],
          imgurl: ''
        });
      })
      .catch(error => {
        console.error("Error creating package:", error);
      });
  };

  return (
    <div className="formbox">
      <h2 className="heading">Create Subpackage</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Title:
          <input type="text" name="title" value={formData.title} onChange={(e) => handleChange(e)} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          Subtitle:
          <input type="text" name="subtitle" value={formData.subtitle} onChange={(e) => handleChange(e)} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Image URL:
          <input type="text" name="imgurl" value={formData.imgurl} onChange={(e) => handleChange(e)} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Cost:
          <input type="number" name="cost" value={formData.cost} onChange={(e) => handleChange(e)} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={(e) => handleChange(e)} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Food:
          <input type="checkbox" name="food" checked={formData.food} onChange={(e) => handleChange(e)} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          Flight:
          <input type="checkbox" name="flight" checked={formData.flight} onChange={(e) => handleChange(e)} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          Package Includes :
          <textarea name="package_includes" value={formData.package_includes} onChange={(e) => handleChange(e)} className="form-input" rows={4}></textarea>
        </label>
        <br />
        <div className="package-details-container">
          <label className="form-label">Package Details:</label>
          {formData.pacakge_details.map((detail, index) => (
            <div key={index} className="package-detail">
              <input type="text" name="day" value={detail.day} onChange={(e) => handleChange(e, index)} placeholder="Day" className="package-detail-input" />
              <input type="text" name="city" value={detail.city} onChange={(e) => handleChange(e, index)} placeholder="City" className="package-detail-input" />
              <input type="text" name="description" value={detail.description} onChange={(e) => handleChange(e, index)} placeholder="Description" className="package-detail-input" />
              <button type="button" onClick={() => handleRemovePackageDetail(index)} className="remove-package-detail">Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddPackageDetail} className="add-package-detail">Add Detail</button>
        </div>
      
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default PackageForm;
