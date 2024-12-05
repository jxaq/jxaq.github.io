import Image from "next/image";
export default function Home() {
    return (
      <div className="relative min-h-screen w-full">
        <div className="fixed z-20 top-2 md:top-4 w-full left-1/2 transform -translate-x-1/2">
          <div className="backdrop-blur-md z-20 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto backdrop-contrast-85 flex">
          <div>
            <h1 className="font-kanit font-bold text-xl dark:text-blue-300 text-blue-700">Jackson Kelly</h1>
            <h3 className="font-kanit text-slate-600 dark:text-slate-400">Learning Full-Stack Developer</h3>
            </div>
            <Image
                src="/profile.png"
                alt="Jackson Kelly"
                width={50}
                height={50}
                className="rounded-full ml-auto" />
        </div>
        </div>
        <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto mt-24 md:mt-32">
          <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">About Me</h2>
            <p className="text-violet-950 dark:text-violet-200 text-noto">
              Since I was a small child, I have always shown interest towards how things work, and the systems behind things. When I was a toddler, I was more interested in disassembling a vaccum cleaner than playing with toys. As a matter of fact, I never had <i>any</i> toys.
              Over time, this interest has evolved into a passion for technology and software development. I have always been fascinated by the idea of improving the world one bit at a time, and the idea of being able to create something that can be used by millions of people around the world.<br /><br />
              In recent years, I have been learning how to develop software, and I have been working on various projects to improve my skills (This portfolio is my first large project!). I have experience with various programming languages, such as TypeScript, JavaScript, and a little bit of Python, and I have experience with various frameworks and libraries, such as React, and Next.js.
            </p>
        </div>
        <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-2/5 mx-auto mt-4 md:mt-8">
          <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">Socials</h2>
            <p className="text-violet-950 dark:text-violet-200 text-noto">
              <a href="https://github.com/jxaq" target="_blank" rel="noreferrer noopener" className="hover:text-blue-700 dark:hover:text-blue-300">GitHub</a><br />
              <a href="https://twitter.com/JaxK5546" target="_blank" rel="noreferrer noopener" className="hover:text-blue-700 dark:hover:text-blue-300">Twitter</a><br />
              <a href="https://mastodon.social/jacksonk" target="_blank" rel="noreferrer noopener" className="hover:text-blue-700 dark:hover:text-blue-300">Mastodon</a><br />
              <a href="https://discord.com/users/632415379519569950" target="_blank" rel="noreferrer noopener" className="hover:text-blue-700 dark:hover:text-blue-300">Discord</a><br />
              <a href="mailto:jacksonkelly13@icloud.com" className="hover:text-blue-700 dark:hover:text-blue-300">Email</a>
            </p>
        </div>
        <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto mt-4 md:mt-8">
          <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">Experience & Projects</h2>
            <p className="text-violet-950 dark:text-violet-200 text-noto">
              Over time, there has been a few projects that I worked on and also I have helped with a lot of events and other projects in my school life.<br /><br /></p>
              <b className="text-violet-800 dark:text-violet-100">Projects:</b><br />
              <ul>
                <li className="text-violet-950 dark:text-violet-200 text-noto">My portfolio (This website!)</li>
                <li className="text-violet-950 dark:text-violet-200 text-noto">QSYS Audio System for my school hall.</li>
              </ul>
              <b className="text-violet-800 dark:text-violet-100">Events:</b><br />
              <ul>
                <li className="text-violet-950 dark:text-violet-200 text-noto">Showquest 2024 - Waikato - Main Lighting for my school (We got 1st place regionals!)</li>
                <li className="text-violet-950 dark:text-violet-200 text-noto">Wearable Arts 2024 - Lighting Manager</li>
                <li className="text-violet-950 dark:text-violet-200 text-noto">Talent Quest 2024 - Sound, Video, Lighting.</li>
                <li className="text-violet-950 dark:text-violet-200 text-noto">Tech for various events</li>
              </ul>
            
        </div>
        <div className="fixed inset-0 -z-10 bg-bgwhite dark:bg-bgdark bg-repeat w-full h-full"></div>
      </div>
    );
  }
  