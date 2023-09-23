import { Elysia } from "elysia";
const routes = new Elysia();

routes.get("/user", (context) => {
  return Response.json({ message: "Users" }, { status: 200 });
});

export default routes;
