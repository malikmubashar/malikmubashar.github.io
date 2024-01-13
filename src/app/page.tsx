import Intro from "./components/intro";
import Services from "./components/services";
import Projects from "./components/projects";
import AboutWebsite from "./components/about-website";

export default function Page() {
  return (
    <main className="[&>*]:min-h-screen home-page">
      <Intro />
      <Services />
      <Projects />
      <AboutWebsite />
    </main>
  )
}
