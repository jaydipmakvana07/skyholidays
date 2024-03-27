import React, { useState } from 'react';
import { Container, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import DriveEtaIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../Styles/roadmap.css'; // Import the CSS file

const RoadmapScreen = () => {
  const tripDetails = [
    { time: 'Day 01', activity: 'Eataaa' },
    { time: 'Day 02', activity: 'Code' },
    { time: 'Day 01', activity: 'Eat' },
    { time: 'Day 02', activity: 'Code' },
    { time: 'Day 01', activity: 'Eat' },
    { time: 'Day 02', activity: 'Code' },
    // Add more trip details as needed
  ];

  // Initialize an array to track the visibility state of each description
  const [showDescriptions, setShowDescriptions] = useState(new Array(tripDetails.length).fill(false));

  // Function to toggle the visibility of a specific description based on its index
  const toggleDescription = (index) => {
    const updatedDescriptions = [...showDescriptions];
    updatedDescriptions[index] = !updatedDescriptions[index];
    setShowDescriptions(updatedDescriptions);
  };

  return (
    <Container maxWidth="md" className="centered-container">
      <Typography variant="h5" className="h1-typography">
         Trip Roadmap
      </Typography>
      <Timeline>
        
        {tripDetails.map((detail, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent  sx={{ marginY: '0.7rem' }}>
              <Typography variant="text" className="timeline-opposite-content" >{detail.time}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <DriveEtaIcon />
              </TimelineDot>
              {index < tripDetails.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ marginY: '0.5rem' } }className="timeline-content" >
              <div className="city-container">
                <Typography variant="h6">{detail.activity}</Typography>
              </div>
              {/* Icon buttons to toggle description visibility */}
              <IconButton onClick={() => toggleDescription(index)}>
                {showDescriptions[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              {/* Conditionally render description based on state */}
              {showDescriptions[index] && (
                <Typography>
                  More details about {detail.activity}...
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default RoadmapScreen;
