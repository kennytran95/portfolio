import Head from "next/head";
import { NavBar } from "../components/NavBar.jsx";
import { Banner } from "../components/Banner.jsx";
import { Skills } from "../components/Skills.jsx";
import { Projects } from "../components/Projects.jsx";
import { Contact } from "../components/Contact.jsx";
import { Footer } from "../components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenny Tran | Full Stack Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
