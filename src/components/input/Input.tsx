import { ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
  withLabel?: boolean;
}

function Input({ withLabel = false, ...props }: Props) {
  return (
    <div className="relative">
      {withLabel ? (
        <label className="font-semibold px-2" htmlFor={props.name}>
          {props.name}
        </label>
      ) : null}
      <input {...props} />
    </div>
  );
}

export default Input;
