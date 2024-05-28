import List from '@/components/list';
import Page from '@/components/page';
import { useTodoContext } from '@/context/todo.context';

function Homepage() {
  const { todo, doneTodo } = useTodoContext();
  return (
    <Page>
      <header className=" text-center">TodoList mk2 - 240528</header>
      <div className="flex flex-col gap-6 p-12 h-auto w-screen">
        <List title={'In Progress...'} todo={todo} />
        <List title={'Done!'} todo={doneTodo} />
      </div>
      <footer className="text-center">this is footer</footer>
    </Page>
  );
}

export default Homepage;
