import * as trpc from "@trpc/server";
import { addTaskSchema } from "../../schema/task.schema";
import { createProtectedRouter } from "../trpc/create-protected-router";

const taskRouter = createProtectedRouter()
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.task.findMany({
        where: { userId: ctx.session.user.id },
      });
    },
  })
  .mutation("add", {
    input: addTaskSchema,
    async resolve({ input, ctx }) {
      const userId = ctx.session.user.id;

      if (!userId) throw new trpc.TRPCError({ code: "BAD_REQUEST" });

      return await ctx.prisma.task.create({
        data: {
          userId,
          title: input.title,
          description: input.description,
          done: input.done,
          due: input.due,
        },
      });
    },
  });

export { taskRouter };
