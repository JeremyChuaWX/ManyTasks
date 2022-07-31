import TaskList from "../modules/tasklist/tasklist-component";
import { stub } from "../utils/stub";

function Home() {
  return (
    <div>
      <TaskList tasks={stub} />
    </div>
  );
}

export default Home;
