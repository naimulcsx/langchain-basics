import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Learning Langchain.js" }];
}

export default function Home() {
  return <div>Learning Langchain.js</div>;
}
