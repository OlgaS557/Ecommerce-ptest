import { FC, useState} from 'react';
import { RadioGroup, FormControlLabel, FormControl} from '@mui/material'
import Radio from '@mui/material/Radio';

type Props = {
    children: React.ReactNode;
   
}

const RadioMui: FC<Props> = ({children}) => {
//    const [value, setValue] = useState('All styles');
   

   
//    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
//     setValue(event.target.value);
//    }

   return (

           <FormControlLabel value={children} control={<Radio sx={{
                        color: "primary",
                        "&.Mui-checked": { color: "#2D74FF" },
                        pl: 3,
                      }} />} label={children} />

   )
}

export default RadioMui;