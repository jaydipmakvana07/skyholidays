import React, { useState } from 'react';
import PackageService from '../../services/packageService';
import '../style/create.css'; // Import the CSS file

function PackageForm() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    cost: '',
    duration: '',
    packagetype: '',
    is_latest: 0,
    is_weekend: 0,
    food: 0,
    flight: 0,
    imgurl: ''
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
        title: formData.title,
        subtitle: formData.subtitle,
        cost: parseInt(formData.cost),
        duration: formData.duration,
        packagetype: formData.packagetype,
        is_latest: formData.is_latest,
        is_weekend: formData.is_weekend,
        food: formData.food,
        flight: formData.flight,
        imgurl: formData.imgurl
      }
    };

    PackageService.createPackage(requestData)
      .then(response => {
        console.log("Package created successfully:", response.data);
        setFormData({
          title: '',
          subtitle: '',
          cost: '',
          duration: '',
          packagetype: '',
          is_latest: 0,
          is_weekend: 0,
          food: 0,
          flight: 0,
          imgurl: ''
        });
      })
      .catch(error => {
        console.error("Error creating package:", error);
      });
  };

  return (
    <div className="formbox">
      <h2 className="heading">Create Package</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          Subtitle:
          <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Image URL:
          <input type="text" name="imgurl" value={formData.imgurl} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Cost:
          <input type="number" name="cost" value={formData.cost} onChange={handleChange} className="form-input" required />
        </label>
        <br />
        <label className="form-label">
          Duration:
          <input type="text" name="duration" value={formData.duration} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <div className="form-label">
          Package Type:
          <label>
            <input type="radio" name="packagetype" value="domestic" checked={formData.packagetype === 'domestic'} onChange={handleChange} /> Domestic
          </label>
          <label>
            <input type="radio" name="packagetype" value="international" checked={formData.packagetype === 'international'} onChange={handleChange} /> International
          </label>
        </div>
        <br />
        <label className="form-label">
          Latest:
          <input type="checkbox" name="is_latest" checked={formData.is_latest} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          Weekend:
          <input type="checkbox" name="is_weekend" checked={formData.is_weekend} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          Food:
          <input type="checkbox" name="food" checked={formData.food} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <label className="form-label">
          Flight:
          <input type="checkbox" name="flight" checked={formData.flight} onChange={handleChange} className="checkbox-input" />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default PackageForm;
