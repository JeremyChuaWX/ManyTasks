import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Task } from "src/utils/types";

interface TaskComponentProps {
  task: Task;
}

interface DoneButtonProps {
  done: boolean;
  handleDone: () => void;
}

function DoneButton({ done, handleDone }: DoneButtonProps) {
  return done ? (
    <button className="bg-slate-500 p-2 rounded-md" onClick={handleDone}>
      <CheckIcon className="w-4 h-4 text-white" />
    </button>
  ) : (
    <button className="p-2 rounded-md" onClick={handleDone}>
      <CheckIcon className="w-4 h-4 text-slate-500" />
    </button>
  );
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
      <DoneButton done={done} handleDone={handleDone} />
    </div>
  );
}
export default TaskComponent;
