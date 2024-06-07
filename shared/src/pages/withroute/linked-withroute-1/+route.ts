import { resolveRoute } from "vike/routing";
import type { PageContextServer } from "vike/types";

export default (pageContext: PageContextServer) => {
  return resolveRoute("/linked-withroute-1", pageContext.urlPathname);
};
