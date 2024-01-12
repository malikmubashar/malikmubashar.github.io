

export default function Services() {

  const services = [
    {
      title: "Web Development",
      description: "I have experience building websites using JavaScript, React, HTML, CSS, and more.",
      icon: "💻"
    },
    {
      title: "Cloud Infrastructure",
      description: "I can help you set up and deploy your website to the cloud, using AWS, Azure, or GCP.",
      icon: "☁️"
    },
    {
      title: "API Development",
      description: "I can develop robust REST APIs using Node.js, Express, and MongoDB.",
      icon: "📡"
    }
  ];

  return (
    <section>
      <h2 className=" text-center font-bold text-xs drop-shadow p-2 opacity-80">Services</h2>
      <div className="flex flex-col gap-y-6 w-[min(100%,800px)] mx-auto p-6">
        {services.map((service, idx) => (
          <div key={idx} className="sm:w-1/2 [&:nth-child(even)]:self-end">
            <div className="flex justify-center">
              <span className="bg-bd/90 w-16 h-16 rounded-3xl translate-y-[50%] grid place-content-center">{service.icon}</span>
            </div>
            <div className="bg-py shadow shadow-cl/5 p-6 hover:bg-bd/5 hover:shadow-bd/5 [&>*]:my-6 rounded-3xl">
              <h3 className="font-bold text-xl font-mono">{service.title}</h3>
              <p className="text-xs opacity-45 ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}