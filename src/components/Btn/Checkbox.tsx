import { FC, useState } from 'react';

type Props = {
    children: React.ReactNode;
}

const Checkbox: FC<Props> = ({children}) => {
    const [checkedState, setCheckedState] = useState<Boolean>(false);
    console.log(checkedState)

    function handleChange() {
        setCheckedState(isChecked => !isChecked);
        }
    
    return (
        <label>
            <input onChange={handleChange} type='checkbox' defaultChecked={false} />
            {children}
            
        </label>
    )
}

export default Checkbox