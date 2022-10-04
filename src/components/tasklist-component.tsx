import TaskComponent from "../components/task-component";
import { trpc } from "../utils/trpc";

function TaskListComponent() {
  const { data, isLoading } = trpc.useQuery(["tasks.all"]);
  const addTaskMutation = trpc.useMutation(["tasks.add"]);

  const addTask = async () => {
    await addTaskMutation.mutateAsync({ title: "hello" });
  };

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {data &&
        data.map((task) => {
          return (
            <TaskComponent
              id={task.id}
              title={task.title}
              due={null}
              done={task.done}
            />
          );
        })}
      <button onClick={addTask}>add</button>
    </>
  );
}

export default TaskListComponent;
