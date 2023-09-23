import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import routes from "./routes/api";

const app = new Elysia();

app.use(
  swagger({
    path: "/api/documentation",
    exclude: ["/", "/api/documentation", "/api/documentation/json"],
    documentation: {
      info: {
        title: "Sayeem's Bun!",
        description: "API documentation",
        version: "0.1.1",
      },
    },
  })
);

const port = process.env.PORT || 3000;

app.group("/api", (app) => app.use(routes));

app.get("/", () => {
  return Response.json({ message: "Hi Bun!" }, { status: 200 });
});

app.listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
