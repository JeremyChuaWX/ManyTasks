import superjson from "superjson";
import { createRouter } from "../trpc/create-router";
import { taskRouter } from "./task.router";

const appRouter = createRouter()
  .transformer(superjson)
  .merge("task.", taskRouter);

// export type definition of API
type AppRouter = typeof appRouter;

export { appRouter, type AppRouter };
