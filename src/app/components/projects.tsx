import ProjectShowcaseBox from "@/components/project-showcase-box";

export default function Projects() {
    // const demo = {
    //     title: "Project Title",
    //     shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, explicabo harum distinctio cumque similique repudiandae minus vero dolorum eos repellendus inventore? Praesentium blanditiis vero illum earum, quae maiores voluptates pariatur. ",
    //     image: "https://miro.medium.com/v2/resize:fit:1200/1*5a0_sXxdX-XL705gftBatA.png",
    //     viewLink: "#",
    //     sourceLink: "#",
    // };
    const projects = [
        {
            title: "MS Excel Clone",
            shortDescription: "In development stage...",
        }
    ];
    return (
        <section id="projects" className="bg-bd/5 backdrop-blur">
            <h2 className="font-bold text-3xl p-6 opacity-50">My Projects</h2>
            <div className="p-6 w-[min(100%,1200px)] mx-auto my-6 flex flex-wrap gap-6 justify-evenly items-start">
                {projects.map((project, idx) => (<ProjectShowcaseBox key={idx} {...project} />))}
            </div>
        </section>
    );
}
