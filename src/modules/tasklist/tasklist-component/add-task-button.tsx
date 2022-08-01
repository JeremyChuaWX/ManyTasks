import { PlusIcon } from "@heroicons/react/solid";
import { trpc } from "../../../utils/trpc";

function AddTaskButton() {
  const createTask = trpc.useMutation("task.createOne");
  async function addTask() {
    const input = {}; // shape of Task
    try {
      await createTask.mutateAsync(input);
    } catch {}
  }

  return (
    <button>
      <PlusIcon className="w-4 h-4 text-slate-500" />
    </button>
  );
}

export default AddTaskButton;
