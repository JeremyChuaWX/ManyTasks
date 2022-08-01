import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/router/app.router";
import { createContext } from "../../../server/trpc/context";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
