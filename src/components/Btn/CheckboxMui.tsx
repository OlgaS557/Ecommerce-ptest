import { FC, useState } from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material'

type Props = {
    children: React.ReactNode;
}

const CheckboxMui: FC<Props> = ({children}) => {
    const [checked, setChecked] = useState(false);
    console.log(checked);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event?.target.checked);
        }
    
    return (
        <Box>
            <FormControlLabel
                label={children}
                control={<Checkbox checked={checked} 
                onChange={handleChange} />}
            
            />
        </Box>
    )
}

export default CheckboxMui;