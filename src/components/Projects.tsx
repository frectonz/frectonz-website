import { useState } from "react";
import { RxCross2 } from "react-icons/rx/index";

const tags = {
  elm: "Elm",
  rust: "Rust",
  frontend: "Frontend",
  typescript: "TypeScript",
  telegram: "Telegram",
  animation: "Animation",
  terminal: "Terminal",
};

const projects = [
  {
    name: "Mekuteriya",
    code: "https://github.com/frectonz/mek-ut-er-ya",
    url: "https://asciinema.org/a/539058",
    description: "A simple program for handling Ethiopian calendar dates.",
    tags: [tags["rust"], tags["terminal"]],
  },
  {
    name: "Birr Forex Bot",
    code: "https://github.com/frectonz/birr-forex-bot",
    url: "https://t.me/birr_forex_bot",
    description:
      "A telegram bot that sends the current day's foreign exchange rates to its subscribers.",
    tags: [tags["typescript"], tags["telegram"]],
  },
  {
    name: "Snake Game",
    code: "https://github.com/frectonz/snake",
    url: "https://youtu.be/RHeQA1ISvE0",
    description: "A snake game implemented in Rust.",
    tags: [tags["rust"], tags["terminal"]],
  },
  {
    name: "Telegram Export Analyzer",
    code: "https://github.com/frectonz/telegram-export-analyzer",
    url: "https://telegram-export-analyzer.netlify.app/",
    description:
      "An analysis tool that shows you different analytics from data exported from telegram groups.",
    tags: [tags["typescript"], tags["telegram"], tags["frontend"]],
  },
  {
    name: "Wordle in Elm",
    code: "https://github.com/frectonz/wordle-elm",
    url: "https://wordle-elm.netlify.app/",
    description: "A wordle clone implemented in Elm.",
    tags: [tags["elm"], tags["frontend"]],
  },

  {
    name: "MiniTab",
    code: "https://github.com/frectonz/minitab",
    url: "https://mini-tab.netlify.app/",
    description:
      "A beautiful website that shows the time and a random image from unsplash that you can use as a new tab page.",
    tags: [tags["elm"], tags["frontend"]],
  },

  {
    name: "OXO",
    code: "https://github.com/frectonz/oxo",
    url: "https://play-oxo.netlify.app/",
    description: "A tic tac toe game implemented in Elm.",
    tags: [tags["elm"], tags["frontend"]],
  },
  {
    name: "Gundan",
    code: "https://github.com/frectonz/gundan",
    url: "https://gundan.netlify.app/",
    description: "A boid simulation program.",
    tags: [tags["typescript"], tags["animation"]],
  },
];

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <main className="mb-5">
      <div className="flex flex-wrap gap-2 items-center">
        {selectedTags.length !== 0 && (
          <span className="mr-2">Showing Projects with</span>
        )}
        {selectedTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => removeTag(tag)}
            className="border border-black px-1 p-0.5 flex gap-1 items-center"
          >
            <span>{tag}</span>
            <RxCross2 className="ml-1 inline-block bg-black text-white" />
          </button>
        ))}
      </div>
      <section className="py-5 flex gap-5 overflow-x-auto">
        {projects
          .filter(
            (project) =>
              selectedTags.length === 0 ||
              selectedTags.every((tag) => project.tags.includes(tag))
          )
          .map((project, i) => (
            <article
              key={i}
              className="min-w-[400px] w-[400px] border border-black box-shadow flex flex-col"
            >
              <header className="p-4 border-black">
                <h1 className="font-serif text-xl font-bold">{project.name}</h1>
              </header>

              <div className="p-4 border-y border-black flex gap-2">
                {project.tags.map((tag, i) => (
                  <button
                    key={i}
                    className="border border-black px-1 hover:bg-black hover:text-white"
                    onClick={() => addTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

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
          ))}
      </section>
    </main>
  );
}
