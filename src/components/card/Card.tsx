import { useTodoContext } from '@/context/todo.context';
import { Todo } from '@/types';
import Button from '../button';

interface Props {
  todo: Todo;
}

function Card({ todo }: Props) {
  const { toggle, remove } = useTodoContext();
  return (
    <li className=" p-4 relative flex flex-col w-60 h-60 border-2 border-red-500 rounded-lg">
      <h3 className=" mb-2 text-2xl font-bold">{todo.title}</h3>
      <p>{todo.content}</p>
      <div className=" p-4 flex justify-center items-center gap-4 absolute bottom-0 left-0 w-full">
        <Button
          onClick={() => toggle(todo.id)}
          className=" hover:bg-gray-100 border-2 border-red-300 hover:bg-red-400 hover:text-white rounded-md p-4 w-24 block "
        >
          완료
        </Button>
        <Button
          onClick={() => remove(todo.id)}
          className=" hover:bg-gray-100 border-2 border-red-300 hover:bg-red-400 hover:text-white rounded-md p-4 w-24 block "
        >
          삭제
        </Button>
      </div>
    </li>
  );
}

export default Card;
