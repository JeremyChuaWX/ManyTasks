import { Task } from "@prisma/client";
import HeaderComponent from "./header-component";
import TaskCard from "./task-card";

interface TaskListProps {
  tasks: Task[];
}

function TitleComponent() {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-extrabold text-center">ManyTasks</h1>
    </div>
  );
}

function TaskPage({ tasks }: TaskListProps) {
  return (
    <div className="flex flex-col gap-12">
      <TitleComponent />
      <HeaderComponent />
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
