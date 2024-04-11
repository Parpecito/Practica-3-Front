import { PageProps } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx"
import Footer from "../components/Footer.tsx"

export default function Layout({ Component, state }: PageProps) {
  
  return (
    <div class="layout">
        <Menu></Menu>
        <h1 class="titulo">Love is in the Air</h1>
      <Component />
      <Footer></Footer>
    </div>
  );
}