import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/00-basics", "routes/00-basics.tsx"),
] satisfies RouteConfig;
