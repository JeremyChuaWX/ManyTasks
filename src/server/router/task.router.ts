import * as trpc from "@trpc/server";
import { addTaskSchema, queryTaskByIdSchema } from "../../schema/task.schema";
import { createProtectedRouter } from "../trpc/create-protected-router";

const taskRouter = createProtectedRouter()
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.task.findMany({
        where: { userId: ctx.session.user.id },
      });
    },
  })
  .query("by-id", {
    input: queryTaskByIdSchema,
    async resolve({ input, ctx }) {
      return await ctx.prisma.task.findUnique({
        where: { id: input.id },
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
