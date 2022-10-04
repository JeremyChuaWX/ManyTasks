import { z } from "zod";
import { createProtectedRouter } from "./context";

export const taskRouter = createProtectedRouter()
  .query("all", {
    async resolve({ ctx }) {
      try {
        return await ctx.prisma.tasks.findMany({
          where: { userId: ctx.session.user.id },
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
  .mutation("add", {
    input: z.object({
      title: z.string(),
    }),
    async resolve({ ctx, input }) {
      try {
        await ctx.prisma.tasks.create({
          data: {
            userId: ctx.session.user.id,
            title: input.title,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  })
  .mutation("done", {
    input: z.object({
      id: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      try {
        await ctx.prisma.tasks.update({
          where: {
            id: input.id,
          },
          data: {
            done: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
