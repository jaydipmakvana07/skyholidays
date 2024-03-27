import React, { useState, useEffect } from 'react';
import { Container, IconButton, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import DriveEtaIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../Styles/roadmap.css'; // Import the CSS file
import PackageService from '../services/subpackageService';
import { useParams } from 'react-router-dom';

const RoadmapScreen = () => {
  const [packageDetails, setPackageDetails] = useState([]);
  const [showDescriptions, setShowDescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { sub_package_id } = useParams();

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await PackageService.getSubpackageDetails(sub_package_id);
        const data = response.data.data;

        if (data && data.length > 0) {
          setPackageDetails(data[0].pacakge_details); // Assuming 'pacakge_details' is the correct property name
          setShowDescriptions(Array(data[0].pacakge_details.length).fill(false));
        } else {
          setError('Package details not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching package details:', error);
        setError('Error fetching package details');
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [sub_package_id]);

  const toggleDescription = (index) => {
    const updatedDescriptions = [...showDescriptions];
    updatedDescriptions[index] = !updatedDescriptions[index];
    setShowDescriptions(updatedDescriptions);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <Container maxWidth="md" className="centered-container">
      <Typography variant="h5" >
        Trip Roadmap
      </Typography>
      <Timeline>
        {packageDetails.map((detail, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ marginY: '0.5rem' }}>
              <Typography variant="text" className="timeline-opposite-content">{detail.day}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <DriveEtaIcon />
              </TimelineDot>
              {index < packageDetails.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ marginY: '0.5rem' }} className="timeline-content">
              <div className="city-container">
                <Typography variant="h6">{detail.city}</Typography>
              </div>
              <IconButton onClick={() => toggleDescription(index)}>
                {showDescriptions[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              {showDescriptions[index] && (
                <Typography>{detail.description}</Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default RoadmapScreen;
