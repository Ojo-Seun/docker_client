import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: "OJO", age: 20 },
        { name: "Seun", age: 30 },
        { name: "Seye", age: 10 },
        { name: "Yori", age: 35 },
        { name: "Doyong", age: 12 },
      ])
    );
  }),
];
