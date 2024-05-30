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
      <input
        className=" border-2 border-white focus:border-2 focus:border-red-400 rounded-md p-2 focus:outline-none"
        {...props}
      />
    </div>
  );
}

export default Input;
