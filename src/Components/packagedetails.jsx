import React from 'react';
import '../Styles/details.css'; // Import the CSS file
import CheckIcon from '@mui/icons-material/Check';

const PackageDetailBox = () => {
  // Define the details directly within the component
  const details = [
    { title: 'Accommodation' },
    { title: 'Hotel Room' },
   
  ];

  return (
    <div className="package-detail-container"> 
    {/* Added a wrapping div with a class for the container */}
    
        <h1>Package Includes</h1>
      {details.map((detail, index) => (
        <div key={index} className="package-detail-box">
          
          <div className="icon-container">
            <CheckIcon className="icon" />
          </div>
          <div className="content">
            <h3 className="title">{detail.title}</h3>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageDetailBox;
