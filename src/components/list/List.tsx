import { Todo } from '@/types';
import Card from '../card';

interface Props {
  todo: Todo[];
  title: string;
}

function List({ todo, title }: Props) {
  return (
    <section>
      <h1 className=" mb-3 px-4 text-2xl font-bold">{title}</h1>
      <div className="px-4 w-full h-60 bg-white w-screen overflow-x-scroll">
        <ul className=" w-fit flex gap-4 w-[1200px]">
          {todo.map((item: Todo) => (
            <Card key={item.id} todo={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default List;
