import * as trpc from "@trpc/server";
import { Context } from "./context";

function createRouter() {
  return trpc.router<Context>();
}

export { createRouter };
