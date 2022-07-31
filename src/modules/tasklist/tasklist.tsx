import { stub } from "src/utils/stub";
import TaskComponent from "./taskcomponent";

function Header() {
  return <h1 className="text-5xl font-extrabold text-center">ManyTasks</h1>;
}

function TaskList() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <div className="flex flex-col gap-4">
        {stub.map((task, index) => (
          <TaskComponent key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
