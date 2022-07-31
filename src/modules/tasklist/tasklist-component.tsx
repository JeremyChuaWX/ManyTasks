import { Task } from "../../utils/task";
import TaskComponent from "./task-component";
import { PlusIcon } from "@heroicons/react/solid";

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
    <div className="flex gap-4">
      <FilterComponent title="Done" />
      <FilterComponent title="Today" />
      <FilterComponent title="Other" />
    </div>
  );
}

function AddTaskButton() {
  return (
    <button>
      <PlusIcon className="w-4 h-4 text-slate-500" />
    </button>
  );
}

function Header() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold text-center">ManyTasks</h1>
    </div>
  );
}

function ControlPanel() {
  return (
    <div className="flex justify-around">
      <FilterArrayComponent />
      <AddTaskButton />
    </div>
  );
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <ControlPanel />
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
