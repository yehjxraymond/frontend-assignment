import type { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import { movies } from "../../src/movies";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  if (event.httpMethod == "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
    };
  }
  // your server-side functionality
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movies.map(({ synopsisFull, ...movie }) => movie)),
  };
};

export { handler };
