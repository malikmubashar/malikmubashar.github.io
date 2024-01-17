import RotatingSlider from "@/components/rotating-slider";
import DetailShow from "./detail-show";
import Link from "next/link";
import { GitHub } from '@mui/icons-material';

export default function AboutWebsite() {
  const technologies = [
    {
      title: "Next.js",
      description: "React framework for production.",
      image: "https://cdn.worldvectorlogo.com/logos/next-js.svg"
    }, {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
    },
    {
      title: "TypeScript",
      description: "A typed superset of JavaScript that compiles to plain JavaScript.",
      image: "https://cdn.worldvectorlogo.com/logos/typescript.svg"
    },
    {
      title: "Material Icons",
      description: "Material Icons is huge icons library. Many icons in this website is taken from material.",
      image: "https://v4.material-ui.com/static/logo.png"
    },
    {
      title: "GitHub Pages",
      description: "GitHub is a code hosting platform for version control and collaboration. GitHub Pages is a static site hosting service offered by Github. This website is currently hosted on GitHub Pages.",
      image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
    },
    {
      title: "React",
      description: "A JavaScript library for building user interfaces. It made developing UI easier.",
      image: "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    },
    {
      title: "Redux Toolkit",
      description: "A State Container for JS Apps. It is used to manage the state of your application efficiently. And this animation is made with it.",
      image: "https://cdn.worldvectorlogo.com/logos/redux.svg"
    }
  ];


  return (
    <section className="min-h-screen">
      <h2 className='text-center font-bold text-xs text-bd drop-shadow opacity-80 py-6'>Made by using</h2>

      <div className='h-full w-full relative'>
        <div className='flex justify-end items-center overflow-hidden' style={{
          minHeight: "60vh"
        }}>
          <RotatingSlider transitionDuration={3000} duration={4000}>
            {technologies.map(({ title, image }, index) => (
              <span key={index} className="w-14 h-14 bg-py rounded-full transition-all duration-1000 scale-75 p-2 opacity-40" >
                <img src={image} alt={title} className="w-full h-full" />
              </span>
            ))}
          </RotatingSlider>
        </div>
        <DetailShow data={technologies} />
        <div className="grid place-content-center">
          <Link className="p-2 border rounded-xl transition-all flex gap-x-2 text-sm items-center hover:border-bd/50 text-bd shadow-xl shadow-bd/5 active:shadow-none hover:bg-bd/10" href='https://github.com/malikmubashar/malikmubashar.github.io'>
            View Source
            <GitHub className="text-sm" />
          </Link>
        </div>
      </div>

    </section>
  )
}
