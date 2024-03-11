import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about-me" className="flex flex-col items-center justify-center">
        <h1>About Me</h1>
        <p>Your introduction here</p>
      </section>
      <section id="projects" className="flex flex-col items-center justify-center">
        <h1>Projects</h1>
        <p>Your projects here</p>
      </section>
      <section id="skills" className="flex flex-col items-center justify-center">
        <h1>Skills</h1>
        <p>Your skills here</p>
      </section>
      <section id="contact" className="flex flex-col items-center justify-center">
        <h1>Contact</h1>
        <p>Your contact information here</p>
      </section>
      <footer className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </main>
  );
}