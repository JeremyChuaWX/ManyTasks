import { Task } from "../../../utils/task";
import TaskComponent from "../task-component";
import AddTaskButton from "./add-task-button";
import FilterArrayComponent from "./filter-array-component";

interface TaskListProps {
  tasks: Task[];
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
