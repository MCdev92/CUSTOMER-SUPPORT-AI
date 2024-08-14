import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Feedback = ({ response, messageId }) => {
  const [hasRated, setHasRated] = useState(false);
  const [rating, setRating] = useState(null);

  const handleFeedback = (newRating) => {
    console.log(`User rated the response ${messageId}: ${newRating}`);
    setRating(newRating);
    setHasRated(true);
    
  };

  return (
    <Box 
      display="flex" 
      justifyContent="flex-end" 
      alignItems="center" 
      mt={1} 
      mr={2}
    >
      <Tooltip title="Helpful">
        <span>
          <IconButton 
            onClick={() => handleFeedback('positive')} 
            disabled={hasRated}
            color={rating === 'positive' ? 'primary' : 'default'}
            size="small"
          >
            <ThumbUpAltIcon fontSize="small" />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Not helpful">
        <span>
          <IconButton 
            onClick={() => handleFeedback('negative')} 
            disabled={hasRated}
            color={rating === 'negative' ? 'secondary' : 'default'}
            size="small"
          >
            <ThumbDownAltIcon fontSize="small" />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
};

export default Feedback;