import React, { useState } from 'react';
import { Tab, Tabs, AppBar, Box } from '@mui/material';
import Category1 from './createhotel';
import Category2 from './createpackage';
import Category3 from './createsubpackage';
import '../style/create.css';
function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 0:
        return <Category1 />;
      case 1:
        return <Category2 />;
      case 2:
        return <Category3 />;
      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-bar-wrapper">
      <AppBar position="static">
      
        <Tabs  className="tab-bar " value={activeTab}  onChange={handleTabChange}>
          <Tab label="Hotel" />
          <Tab label="Packages" />
          <Tab label="Sub Packages" />
        </Tabs>
        
      </AppBar>
      </div>
      <Box p={3}>
        {renderActiveComponent()}
      </Box>
    </div>
  );
}

export default App;
