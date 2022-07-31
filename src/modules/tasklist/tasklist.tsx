import { Task } from "src/utils/types";
import TaskComponent from "./taskcomponent";

interface TaskListProps {
  tasks: Task[];
}

function FilterComponent({ title }: { title: string }) {
  return (
    <button className="bg-slate-400 text-white w-max px-4 py-1 rounded-full">
      {title}
    </button>
  );
}

function FilterArrayComponent() {
  return (
    <div className="flex justify-center gap-4">
      <FilterComponent title="Done" />
      <FilterComponent title="Today" />
      <FilterComponent title="Other" />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold text-center">ManyTasks</h1>
    </div>
  );
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <FilterArrayComponent />
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
