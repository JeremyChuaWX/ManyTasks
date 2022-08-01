import { ChangeEvent, FormEvent, useState } from "react";
import { createTaskInput } from "../schema/task.schema";
import { trpc } from "../utils/trpc";

function Add() {
  const [title, setTitle] = useState<string>("");
  const { mutate } = trpc.useMutation(["task.add"]);

  const addTask = () => {
    const input: createTaskInput = {
      title: "test",
      done: false,
    };
    mutate(input);
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("submitted");
    addTask();
  };

  return (
    <div>
      <form className="flex flex-col gap-1 justify-center">
        <label>Title</label>
        <input
          className="bg-slate-100"
          type="text"
          onChange={handleTitle}
          value={title}
        />
        <button className="bg-slate-200" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
