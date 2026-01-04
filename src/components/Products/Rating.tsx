import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


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
      <Rating
        name="simple-controlled"
        value={stars}
      />
    </Box>
  );
}