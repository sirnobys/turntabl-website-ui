import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingProgress() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div class="loader">
        <div class="bubble-1"></div>
        <div class="bubble-2"></div>
      </div>
    </Box>
  );
}