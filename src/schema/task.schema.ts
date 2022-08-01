import { z } from "zod";

const createTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  due: z.date().optional(),
  done: z.boolean(),
});

type createTaskInput = z.TypeOf<typeof createTaskSchema>;

export { createTaskSchema, type createTaskInput };
