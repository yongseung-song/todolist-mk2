import { Todo } from '@/types';
import Card from '../card';

interface Props {
  todo: Todo[];
  title: string;
}

function List({ todo, title }: Props) {
  return (
    <section>
      <h1 className=" mb-3 text-2xl font-bold">{title}</h1>
      <div className=" w-full h-auto bg-white w-screen overflow-x-scroll">
        <ul className=" w-[1200px]">
          <Card
            todo={{ title: '투두', content: '바바', id: '123', isDone: false }}
          />
          {todo.map((item: Todo) => (
            <Card todo={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default List;
