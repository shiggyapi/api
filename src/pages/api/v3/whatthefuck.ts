import { APIRoute } from "astro";
import { PUBLIC_DIR } from "../../../constants";
import { join } from "path";

export const get: APIRoute = () => {
  return new Response(
    Bun.file(join(PUBLIC_DIR, "whatthefuckwhywouldyoudownloadthis.zip")),
  );
};
