import { createTRPCRouter } from "./index";
import { productRouter } from "./routers/product";
import { authRouter } from "./routers/auth";
import { orderRouter } from "./routers/order";

export const appRouter = createTRPCRouter({
  product: productRouter,
  auth: authRouter,
  order: orderRouter,
});

export type AppRouter = typeof appRouter; 