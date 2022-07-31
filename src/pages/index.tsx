import TaskList from "../modules/tasklist/tasklist";
import { stub } from "../utils/stub";

function Home() {
  return (
    <div>
      <TaskList tasks={stub} />
    </div>
  );
}

export default Home;
