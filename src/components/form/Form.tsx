import { ComponentProps } from 'react';

function Form({ children, ...props }: ComponentProps<'form'>) {
  return <form {...props}>{children}</form>;
}

export default Form;
