import React from 'react';
import { Grid } from '@mui/material';
import Citypackage from '../Components/singlepackage';
import TourPackageScreen from '../Components/packagedetails';
import RoadmapScreen from '../Components/roadmap';
import "../Styles/packagedetails.css";

const MainScreen = () => {
  return (
    <div className="main-container">
      
      <Grid container spacing={2}>
        {/* Left side: Citypackage */}
        <Grid item xs={12} sm={4} className="left-side">
          <Citypackage />
        </Grid>
        {/* Right side: TourPackageScreen and RoadmapScreen */}
        <Grid item xs={12} sm={8} className="right-side">
          <div className="right-content">
            <div className="packagedetails">
              <TourPackageScreen />
            </div>
            <div className="roadmap">
              <RoadmapScreen />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainScreen;
