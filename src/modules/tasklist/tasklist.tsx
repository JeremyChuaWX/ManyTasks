import { Task } from "src/utils/types";
import TaskComponent from "./taskcomponent";

interface TaskListProps {
  tasks: Task[];
}

function Header() {
  return <h1 className="text-5xl font-extrabold text-center">ManyTasks</h1>;
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
