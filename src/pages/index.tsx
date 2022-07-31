import TaskList from "src/modules/tasklist/tasklist";
import { stub } from "src/utils/stub";

function Home() {
  return (
    <div>
      <TaskList tasks={stub} />
    </div>
  );
}

export default Home;
