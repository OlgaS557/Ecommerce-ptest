import { FC, useState} from 'react';

type Props = {
    children: React.ReactNode;
   
}

const Radio: FC<Props> = ({children}) => {
   const [value, setValue] = useState<boolean>(false);
   

   
   function changeValue(event: any) {
    setValue(event.target.value);
   }

   return (
   <label>
      <input type="radio" value="{children}" name="{children}" 
      checked={value == ({children} ? true : false)}
      onChange={changeValue} />

   </label>
   )
}

export default Radio;