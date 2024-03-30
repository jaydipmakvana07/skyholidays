import React, { useState, useEffect } from 'react';
import '../Styles/details.css'; // Import the CSS file
import CheckIcon from '@mui/icons-material/Check';
import PackageService from '../services/subpackageService';
import { useParams } from 'react-router-dom';
import icon from "../assets/check.png";
const PackageDetailBox = () => {
  const { sub_package_id } = useParams();
  const [packageIncludes, setPackageIncludes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await PackageService.getSubpackageDetails(sub_package_id);
        const data = response.data.data;

        // Extract package_includes array from the data
        const includes = data && data.length > 0 ? data[0].package_includes : [];

       

        setPackageIncludes(includes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching package details:', error);
        setError('Error fetching package details');
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [sub_package_id]);

  return (
    <div className="package-detail-container"> 
    {/* Added a wrapping div with a class for the container */}
    
        <h1>Package Includes</h1>
      {packageIncludes.map((detail, index) => (
        <div key={index} className="package-detail-box">
          
          <div className="icon-container">
          <img src={icon}  alt="Check" className="image-icon" />
          
          </div>
          <div className="content" style={{ textAlign: 'left' }}>
            <h3 className="includes">{detail}</h3>
            
          </div>
        </div>
      ))}
    </div>
   );
};

export default PackageDetailBox;
