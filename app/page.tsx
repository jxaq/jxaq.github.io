export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed z-20 top-2 md:top-4 w-full left-1/2 transform -translate-x-1/2">
        <div className="backdrop-blur-md z-20 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto backdrop-contrast-85">
          <h1 className="font-kanit font-bold text-xl dark:text-blue-300 text-blue-700">Jackson Kelly</h1>
          <h3 className="font-kanit text-slate-600 dark:text-slate-400">Learning Full-Stack Developer</h3>
        </div>
      </div>
      <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto mt-24 md:mt-32">
        <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">About Me</h2>
          <p className="text-violet-950 dark:text-violet-200">
            Since I was a small child, I have always shown interest towards how things work, and the systems behind things. When I was a toddler, I was more interested in disassembling a vaccum cleaner than playing with toys. As a matter of fact, I never had <i>any</i> toys.
            Over time, this interest has evolved into a passion for technology and software development. I have always been fascinated by the idea of improving the world one bit at a time, and the idea of being able to create something that can be used by millions of people around the world.<br /><br />
            In recent years, I have been learning how to develop software, and I have been working on various projects to improve my skills (This portfolio is my first large project!). I have experience with various programming languages, such as TypeScript, JavaScript, and a little bit of Python, and I have experience with various frameworks and libraries, such as React, and Next.js.
          </p>
      </div>
      <div className="fixed inset-0 -z-10 bg-bgwhite dark:bg-bgdark bg-repeat w-full h-full"></div>
    </div>
  );
}
