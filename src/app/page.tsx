import Intro from "./components/intro";
import Services from "./components/services";
import Projects from "./components/projects";
import AboutWebsite from "./components/about-website";

export default function Page() {
  return (
    <main className="home-page flex flex-col gap-y-14">
      <Intro />
      <Services />
      <Projects />
      <AboutWebsite />
    </main>
  )
}
