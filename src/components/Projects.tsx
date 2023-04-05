const tags = {
  elm: "Elm", rust: "Rust", frontend: "Frontend", typescript: "TypeScript", telegram: "Telegram", animation: "Animation"
};

const projects = [
  {
    name: "Telegram Export Analyzer",
    image: "/projects/telegram-export-analyzer.png",
    code: "https://github.com/frectonz/telegram-export-analyzer",
    url: "https://telegram-export-analyzer.netlify.app/",
    description:
      "An analysis tool that shows you different analytics from data exported from telegram groups.",
    tags: [tags["typescript"], tags["telegram"], tags["frontend"]],
  },
  {
    name: "Gundan",
    image: "/projects/gundan.png",
    code: "https://github.com/frectonz/gundan",
    url: "https://gundan.netlify.app/",
    description: "A boid simulation program.",
    tags: [tags["typescript"], tags["animation"]],
  },
  {
    name: "MiniTab",
    image: "/projects/minitab.png",
    code: "https://github.com/frectonz/minitab",
    url: "https://mini-tab.netlify.app/",
    description:
      "A beautiful website that shows the time and a random image from unsplash that you can use as a new tab page.",
    tags: [tags["elm"], tags["frontend"]],
  },
  {
    name: "Birr Forex Bot",
    image: "/projects/birr-forex-bot.png",
    code: "https://github.com/frectonz/birr-forex-bot",
    url: "https://t.me/birr_forex_bot",
    description:
      "A telegram bot that sends the current day's foreign exchange rates to its subscribers.",
    tags: [tags["typescript"], tags["telegram"]],
  },
  {
    name: "OXO",
    image: "/projects/oxo.png",
    code: "https://github.com/frectonz/oxo",
    url: "https://play-oxo.netlify.app/",
    description: "A tic tac toe game implemented in Elm.",
    tags: [tags["elm"], tags["frontend"]],
  },
]

export default function Projects() {
  return (<section className="py-5 flex gap-5 overflow-x-auto">
    {
      projects.map((project) => (
        <article className="min-w-[400px] w-[400px] border border-black box-shadow flex flex-col">
          <picture>
            <img
              src={project.image}
              className="h-80 mx-auto object-contain p-1"
            />
          </picture>
          <div className="p-4 flex gap-2">
            {project.tags.map((tag) => (
              <button className="border border-black px-1 hover:bg-black hover:text-white">{tag}</button>
            ))}
          </div>
          <header className="p-4 border-y border-black">
            <h1 className="font-serif text-xl font-bold">{project.name}</h1>
          </header>
          <main className="p-4 flex-grow">
            <p>{project.description}</p>
          </main>
          <footer className="px-4 pb-4 flex gap-2 justify-end">
            <a href={project.code} className="underline">
              Source
            </a>
            <a href={project.url} className="underline">
              View Project
            </a>
          </footer>
        </article>
      ))
    }
  </section>);
}
