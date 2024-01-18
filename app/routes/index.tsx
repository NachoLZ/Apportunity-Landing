import type { MetaFunction } from "@remix-run/node";
import Squares from "~/components/squares";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>
        Bienvenido a ITS - monitoreo inteligente de plagas urbanas y agrícolas
      </h1>

      <Squares />
    </div>
  );
}
