import { z } from "zod";

const addTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  due: z.date().optional(),
  done: z.boolean(),
});

type addTaskInput = z.TypeOf<typeof addTaskSchema>;

export { addTaskSchema, type addTaskInput };
