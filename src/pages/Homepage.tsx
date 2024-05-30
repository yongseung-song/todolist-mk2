import Button from '@/components/button';
import List from '@/components/list';
import Page from '@/components/page';
import TodoForm from '@/components/todoForm';
import { useTodoContext } from '@/context/todo.context';

function Homepage() {
  const { todo, doneTodo, reset } = useTodoContext();

  return (
    <Page>
      <header className="border-2 border-red-500 rounded-lg w-fit mx-auto my-0">
        <h1 className="p-3 text-2xl font-bold text-center">
          TodoList mk2 - 240528
        </h1>
        <TodoForm />
      </header>
      <div className="flex flex-col gap-6 py-12 h-auto w-screen">
        <List title={'In Progress...'} todo={todo} />
        <List title={'Done!'} todo={doneTodo} />
      </div>
      <Button
        onClick={reset}
        className=" absolute bottom-4 right-4 rotate-[30deg] w-24 h-24 rounded-full bg-red-500 hover:bg-red-700 text-white text-2xl"
      >
        RESET ALL
      </Button>
    </Page>
  );
}

export default Homepage;
