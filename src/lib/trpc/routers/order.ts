import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../index";

export const orderRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        items: z.array(
          z.object({
            productId: z.string(),
            quantity: z.number().min(1),
            price: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const total = input.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const order = await ctx.db.order.create({
        data: {
          userId: ctx.session.user.id,
          total,
          items: {
            create: input.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
      });

      return order;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.order.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.order.findUnique({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });
    }),
}); 