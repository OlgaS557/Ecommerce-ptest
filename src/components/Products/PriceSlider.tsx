import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 200]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}