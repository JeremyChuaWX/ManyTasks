import TaskPage from "../modules/tasks-page/tasks-page";
import { stub } from "../modules/tasks-page/stub";

function Tasks() {
  return <TaskPage tasks={stub} />;
}

export default Tasks;
