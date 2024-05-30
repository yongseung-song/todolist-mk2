import { useTodoContext } from '@/context/todo.context';
import { useInput } from '@/hooks/useInput';
import { Todo } from '@/types';
import { FormEvent } from 'react';
import Button from '../button';
import Form from '../form';
import Input from '../input';

function TodoForm() {
  const { add } = useTodoContext();
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
    <Form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-6  w-fit p-6"
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
  );
}

export default TodoForm;
