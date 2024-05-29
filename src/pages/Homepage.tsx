import Button from '@/components/button';
import Form from '@/components/form';
import Input from '@/components/input';
import List from '@/components/list';
import Page from '@/components/page';
import { useTodoContext } from '@/context/todo.context';
import { useInput } from '@/hooks/useInput';
import { Todo } from '@/types';
import { FormEvent } from 'react';

function Homepage() {
  const { todo, doneTodo, add } = useTodoContext();
  const title = useInput('', (value: string) => value.length <= 12);
  const content = useInput('', (value: string) => value.length <= 80);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.hasError && !content.hasError) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title: title.value,
        content: content.value,
        isDone: false,
      };
      add(newTodo);
      title.resetValue();
      content.resetValue();
    }
  };

  return (
    <Page>
      <header className="border-2 border-red-500 rounded-lg w-fit mx-auto my-0">
        <h1 className="p-3 text-2xl font-bold text-center">
          TodoList mk2 - 240528
        </h1>
        <Form
          onSubmit={handleSubmit}
          className="flex justify-center gap-6  w-fit p-6"
        >
          <Input
            value={title.value}
            onChange={title.handleInputChange}
            withLabel={true}
            type="text"
            id="title"
            name="Title"
            required
          />
          {title.hasError ? <span>12글자 이내로 작성해 주세요</span> : null}
          <Input
            value={content.value}
            onChange={content.handleInputChange}
            withLabel={true}
            type="text"
            id="content"
            name="Content"
          />
          {content.hasError ? <span>80자 이내로 작성해 주세요.</span> : null}
          <Button type="submit">등록</Button>
        </Form>
      </header>
      <div className="flex flex-col gap-6 p-12 h-auto w-screen">
        <List title={'In Progress...'} todo={todo} />
        <List title={'Done!'} todo={doneTodo} />
      </div>
      <footer className="text-center">this is footer</footer>
    </Page>
  );
}

export default Homepage;
