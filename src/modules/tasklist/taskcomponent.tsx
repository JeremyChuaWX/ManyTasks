import React, { useState } from "react";
import { Task } from "src/utils/types";

interface TaskComponentProps {
  task: Task;
}

function TaskComponent({ task }: TaskComponentProps) {
  const [done, setDone] = useState<boolean>(task.done);

  function handleDone() {
    setDone((curr) => !curr);
  }

  return (
    <div className="flex items-center justify-between bg-slate-100 px-4 py-2 rounded-md">
      <div className="flex flex-col">
        <h1 className="font-bold">{task.title}</h1>
        <p>{task.due}</p>
      </div>
      <button
        className="bg-slate-500 text-white px-2 py-1 rounded-md"
        onClick={handleDone}
      >
        {done ? "Done" : "Not done"}
      </button>
    </div>
  );
}

export default TaskComponent;
