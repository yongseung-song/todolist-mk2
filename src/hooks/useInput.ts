import { ChangeEvent, useState } from 'react';

export function useInput(
  defaultValue: string,
  validationFn: (value: string) => boolean
) {
  // 이 커스텀 훅의 목표는
  // 1. value 추적
  // 2. handler
  // 3. validation
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
