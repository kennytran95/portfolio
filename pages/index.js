import { NavBar } from "../components/NavBar.jsx";
import { Banner } from "../components/Banner.jsx";
import { Skills } from "../components/Skills.jsx";
import { Projects } from "../components/Projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </>
  );
}
