
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import navbarStyles from "../styles/navbar.css";
import Navbar from "../components/navbar";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import Navibar from "../components/navibar";
import CustomFooter from "../components/CustomFooter";


export const links = () => [
  { rel: "stylesheet", href: navbarStyles },
  { rel: "stylesheet", href: tailwindStylesheetUrl },

];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navibar />
        <CustomFooter/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      
    </html>
  );
}
