import { trpc } from "../utils/trpc";

interface TaskComponentProps {
  id: string;
  title: string;
  due: null | string;
  done: boolean;
}

function TaskComponent({ id, title, due, done }: TaskComponentProps) {
  const doneTaskMutation = trpc.useMutation(["tasks.done"]);

  const doneTask = async () => {
    await doneTaskMutation.mutateAsync({ id: id });
  };

  return (
    <div className="w-full flex justify-between px-4 py-1 rounded-full bg-white items-center mb-1 last:mb-0 hover:bg-neutral-100 transition ease-in-out duration-100">
      <div className="flex items-center">
        <input
          className="mr-2"
          type="checkbox"
          checked={done}
          onClick={doneTask}
        />
        <h1>{title}</h1>
      </div>
      {due && <div className="italic">{due}</div>}
    </div>
  );
}

export default TaskComponent;
