import { ComponentProps } from 'react';

interface Props extends ComponentProps<'form'> {
  className?: string;
}

function Form({ className }: Props) {
  <form action="" className={className}></form>;
}

export default Form;
