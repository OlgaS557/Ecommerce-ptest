import { FC, useState } from 'react';

type Props = {
    children: React.ReactNode;   
}

const Radio: FC<Props> = ({ children }) => {
  const [value, setValue] = useState<string>('');

  function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <label>
      <input
        type="radio"
        value={String(children)}
        name="radioGroup"
        checked={value === String(children)}
        onChange={changeValue}
      />
      {children}
    </label>
  );
};

export default Radio;
