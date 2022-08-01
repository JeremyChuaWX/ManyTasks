import { Task } from "@prisma/client";

export const stub: Task[] = [
  {
    id: "1",
    userId: "u1",
    title: "stub task 1",
    description: "this is stub task 1",
    due: new Date(2022, 11, 20),
    done: false,
  },
  {
    id: "2",
    userId: "u2",
    title: "stub task 2",
    description: "this is stub task 1",
    due: new Date(2022, 11, 20),
    done: false,
  },
  {
    id: "3",
    userId: "u3",
    title: "stub task 3",
    description: "this is stub task 1",
    due: new Date(2022, 11, 20),
    done: false,
  },
  {
    id: "4",
    userId: "u4",
    title: "stub task 4",
    description: "this is stub task 1",
    due: new Date(2022, 11, 20),
    done: false,
  },
  {
    id: "5",
    userId: "u5",
    title: "stub task 5",
    description: "this is stub task 1",
    due: new Date(2022, 11, 20),
    done: false,
  },
];
