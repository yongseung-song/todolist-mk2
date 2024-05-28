import { ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  className?: string;
}

function Input({ className, ...props }: Props) {
  return <input className={className} {...props} />;
}

export default Input;
