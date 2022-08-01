import { z } from "zod";
import { createProtectedRouter } from "./protected-router";

export const taskRouter = createProtectedRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.task.findMany({
        where: { userId: ctx.session.user.id },
      });
    },
  })
  .mutation("createOne", {
    input: z.object({
      userId: z.string(),
      title: z.string(),
      description: z.string().nullish(),
      done: z.boolean(),
      due: z.date().nullish(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.task.create({
        data: {
          userId: input.userId,
          title: input.title,
          description: input.description,
          done: input.done,
          due: input.due,
        },
      });
    },
  });
