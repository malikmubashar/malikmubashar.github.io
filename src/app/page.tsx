import Intro from "./components/intro";
import Experties from "./components/experties";
import Projects from "./components/projects";
import AboutMe from "./components/about-me";
import AboutWebsite from "./components/about-website";

export default function Page() {
  return (
    <main className="home-page flex flex-col gap-y-14">
      <Intro />
      <Experties />
      <Projects />
      <AboutMe />
      <AboutWebsite />
    </main>
  )
}
