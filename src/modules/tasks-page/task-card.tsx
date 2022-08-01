import { CheckIcon } from "@heroicons/react/solid";
import { Task } from "@prisma/client";
import { useState } from "react";

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

function TaskCard({ task }: TaskComponentProps) {
  const [done, setDone] = useState<boolean>(task.done);

  function handleDone() {
    setDone((curr) => !curr);
  }

  return (
    <div className="flex items-center justify-between bg-slate-100 px-4 py-2 rounded-md">
      <div className="flex flex-col">
        <h1 className="font-bold">{task.title}</h1>
        {task.due && <p>{task.due.toLocaleDateString()}</p>}
      </div>
      <DoneButton done={done} handleDone={handleDone} />
    </div>
  );
}
export default TaskCard;
