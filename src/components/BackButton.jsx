import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={() => navigate(-1)} // Navigates to the previous page
      style={{ margin: '16px' }} // Optional styling
    >
      Back
    </Button>
  );
};

export default BackButton;
