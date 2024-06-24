import { useState } from "react";
import { RxCross2 } from "react-icons/rx/index";

const tags = {
  ocaml: "OCaml",
  rescript: "ReScript",
  terraform: "Terraform",
  nix: "Nix",
  ruby: "Ruby",
  elm: "Elm",
  rust: "Rust",
  svelte: "Svelte",
  deno: "Deno",
  frontend: "Frontend",
  typescript: "TypeScript",
  javascript: "JavaScript",
  telegram: "Telegram",
  animation: "Animation",
  terminal: "Terminal",
};

const projects = [
  {
    name: "SQL Studio",
    code: "https://github.com/frectonz/sql-studio",
    url: "https://sql-studio.frectonz.io/",
    description:
      "SQL Database Explorer [SQLite, libSQL, PostgreSQL, MySQL/MariaDB, DuckDB]",
    tags: [tags["rust"], tags["typescript"], tags["nix"]],
  },
  {
    name: "murder_tool",
    code: "https://github.com/frectonz/murder_tool/",
    description: "Kill processes with a TUI",
    tags: [tags["ocaml"], tags["nix"]],
  },
  {
    name: "ordo",
    code: "https://github.com/frectonz/ordo",
    url: "https://ordo.frectonz.io",
    description: "Effortlessly set up and conduct ranked choice voting",
    tags: [tags["rust"], tags["nix"]],
  },
  {
    name: "Act on Press",
    code: "https://github.com/frectonz/act-on-press",
    description:
      "A web extension that let's you trigger click actions on press instead of release.",
    tags: [tags["javascript"]],
  },
  {
    name: "Elm Dama",
    code: "https://github.com/frectonz/elm-dama",
    url: "https://dama.frectonz.io/",
    description: "Ethiopian dama game implemented in Elm.",
    tags: [tags["elm"], tags["nix"], tags["frontend"]],
  },
  {
    name: "of_base",
    code: "https://github.com/frectonz/of-base",
    url: "https://of-base.frectonz.io",
    description: "Base conversion app for learning rescript.",
    tags: [tags["rescript"], tags["nix"], tags["frontend"]],
  },
  {
    name: "CBE Cash Plot",
    code: "https://github.com/frectonz/cbe_cash_plot",
    description: "Generate a plot of your CBE balance overtime.",
    tags: [tags["ocaml"], tags["nix"], tags["terminal"]],
  },
  {
    name: "To Hearts Bot",
    code: "https://github.com/frectonz/to-hearts-bot",
    url: "https://t.me/to_hearts_bot",
    description: "The Hearts of OpenAi Telegram Bot",
    tags: [tags["typescript"], tags["nix"], tags["deno"], tags["telegram"]],
  },
  {
    name: "e/acc card",
    code: "https://github.com/frectonz/e-acc-card",
    url: "https://e-acc.frectonz.io/",
    description:
      "A demo for using SVGs as templates to generate images in the browser.",
    tags: [tags["svelte"], tags["typescript"], tags["nix"], tags["frontend"]],
  },
  {
    name: "cmd-rs",
    code: "https://github.com/frectonz/cmd-rs",
    description: "Python's cmd module implemented in Rust via proc-macros",
    tags: [tags["rust"], tags["nix"]],
  },
  {
    name: "The Hearts of OpenAi",
    code: "https://github.com/frectonz/the-hearts-of-openai",
    url: "https://openai.frectonz.io/",
    description:
      "Convert a string into a bunch of heart emojis ❤️🧡💛💚💙💜🖤🤍 OpenAi style.",
    tags: [tags["elm"], tags["nix"], tags["frontend"]],
  },
  {
    name: "Webcam Seeder",
    code: "https://github.com/frectonz/webcam-seeder",
    description: "Seed a random number generator using a webcam picture.",
    tags: [tags["rust"], tags["nix"], tags["terminal"]],
  },
  {
    name: "Prime Portraits",
    code: "https://github.com/frectonz/prime-portraits",
    description: "A program that turns images into prime numbers.",
    tags: [tags["rust"], tags["nix"], tags["terminal"]],
  },
  {
    name: "Watchbox",
    code: "https://github.com/frectonz/watchbox",
    description: "My personal program for watching movies and shows.",
    tags: [tags["ocaml"], tags["terminal"]],
  },
  {
    name: "Senamirmir Nixified ",
    code: "https://github.com/frectonz/senamirmir-nixified",
    description: "Senamirmir fonts packaged as a nix package.",
    tags: [tags["nix"]],
  },
  {
    name: "Monaspace Nixified ",
    code: "https://github.com/frectonz/monaspace",
    description: "Monaspace fonts packaged as a nix package.",
    tags: [tags["nix"]],
  },
  {
    name: "Tally Tool",
    code: "https://github.com/frectonz/tally-tool",
    description: "A ruby on rails app to count stuff.",
    tags: [tags["ruby"], tags["nix"], tags["terraform"], tags["typescript"]],
  },
  {
    name: "Super Tic-Tac-Toe",
    code: "https://github.com/frectonz/super-tic-tac-toe",
    url: "https://tic-tac-toe.frectonz.io/",
    description: "Super Tic-Tac-Toe implemented in Elm.",
    tags: [tags["elm"], tags["frontend"]],
  },
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
    url: "https://telegram.frectonz.io/",
    description:
      "An analysis tool that shows you different analytics from data exported from telegram groups.",
    tags: [tags["typescript"], tags["telegram"], tags["frontend"]],
  },
  {
    name: "Wordle in Elm",
    code: "https://github.com/frectonz/wordle-elm",
    url: "https://wordle.frectonz.io/",
    description: "A wordle clone implemented in Elm.",
    tags: [tags["elm"], tags["frontend"]],
  },
  {
    name: "MiniTab",
    code: "https://github.com/frectonz/minitab",
    url: "https://mini-tab.frectonz.io/",
    description:
      "A beautiful website that shows the time and a random image from unsplash that you can use as a new tab page.",
    tags: [tags["elm"], tags["frontend"]],
  },
  {
    name: "OXO",
    code: "https://github.com/frectonz/oxo",
    url: "https://oxo.frectonz.io/",
    description: "A tic tac toe game implemented in Elm.",
    tags: [tags["elm"], tags["frontend"]],
  },
  {
    name: "Gundan",
    code: "https://github.com/frectonz/gundan",
    url: "https://boids.frectonz.io/",
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
              selectedTags.every((tag) => project.tags.includes(tag)),
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
              <footer className="px-4 pb-4 flex gap-4 justify-end">
                <a href={project.code} className="underline">
                  Source
                </a>
                {project.url && (
                  <a href={project.url} className="underline">
                    View Project
                  </a>
                )}
              </footer>
            </article>
          ))}
      </section>
    </main>
  );
}
