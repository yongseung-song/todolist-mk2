import { ChangeEvent, useState } from 'react';

export function useInput(
  defaultValue: string,
  validationFn: (value: string) => boolean
) {
  const [value, setValue] = useState<string>(defaultValue);
  const isValid = validationFn(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const resetValue = () => {
    setValue(defaultValue);
  };

  return { value, handleInputChange, resetValue, hasError: !isValid };
}
