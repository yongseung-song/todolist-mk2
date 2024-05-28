import { PropsWithChildren } from 'react';

function Page({ children }: PropsWithChildren) {
  return <main className=" mx-0 my-auto text-red-500">{children}</main>;
}

export default Page;
