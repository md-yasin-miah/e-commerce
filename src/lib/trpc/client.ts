import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "./root.ts";

export const trpc = createTRPCReact<AppRouter>(); 