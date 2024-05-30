import { ComponentProps } from 'react';

function Button({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className=" bg-white border-2 border-red-300 hover:bg-red-400 hover:text-white rounded-md p-4 w-24 block "
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
