import type {
  Config,
  Handler,
  HandlerEvent,
  HandlerContext,
} from "@netlify/functions";
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
    body: JSON.stringify(movies),
  };
};

export { handler, config };

const config: Config = {
  path: "/movie",
};
