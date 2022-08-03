import { z } from "zod";

const addTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  due: z.date().optional(),
  done: z.boolean(),
});

type addTaskInput = z.TypeOf<typeof addTaskSchema>;

const queryTaskByIdSchema = z.object({
  id: z.string(),
});

type queryTaskByIdInput = z.TypeOf<typeof queryTaskByIdSchema>;

export {
  addTaskSchema,
  type addTaskInput,
  queryTaskByIdSchema,
  type queryTaskByIdInput,
};
