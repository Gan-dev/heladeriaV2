import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req) {
    return Response.redirect(new URL("/carta", req.url), 302);
  },
};

export default function Home() {
  return null;
}
