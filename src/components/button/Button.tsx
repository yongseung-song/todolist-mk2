import { ComponentProps, MouseEventHandler, ReactNode } from 'react';

interface Props extends ComponentProps<'button'> {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
}

function Button({ children, className, onClick: handler }: Props) {
  return (
    <button onClick={handler} className={className}>
      {children}
    </button>
  );
}

export default Button;
