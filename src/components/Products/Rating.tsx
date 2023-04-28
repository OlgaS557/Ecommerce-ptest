import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


type propsType = {
  stars: number
}

export default function BasicRating({stars}: propsType) {


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating
        name="simple-controlled"
        value={stars}
      />
      {/* <Typography component="legend">Read only</Typography> */}
      {/* <Rating name="read-only" value={value} readOnly size="large"/> */}
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}