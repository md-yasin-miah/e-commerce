import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../index";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.product.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.product.findMany({
        where: {
          category: input.category,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),
}); 