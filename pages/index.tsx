import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="open-sans flex text-neutral-200 flex-col items-center w-full min-h-screen h-full bg-gray-900 ">
        <main className="">
          <div>
            <span className="text-sm text-neutral-500">
              {'"'}Only those who have suffered long, can see the light within the shadows{'"'} - Roronoa Zoro
            </span>

            <br />
            <br />

            <p className="mt-2">
              Hi, my name is <strong>Ulisses</strong>, and currently I am doing my{' '}
              <strong>computer science</strong> bachelor’s in{' '}
              <strong>UFMG</strong> (Universidade Federal de Minas Gerais).
              <br />
              <br />
              I am passionate about <strong>computer science</strong> and{' '}
              <strong>software development</strong>. To be more accurate, my favorite
              topics in CS are <i>computer theory</i>, <i>compilers</i>,{' '}
              <i>language design</i> and <i>algorithms</i>. I am always working on
              small projects to sharpen my knowledge in these areas. In addition, I
              really enjoy <i>competitive programming</i> and{' '}
              <i>functional programming</i>.
            </p>

            <br/>
            
            <Link href="/blog">
              <a className="underline">
                Click here to see my blog.
              </a>
            </Link>

            <hr className="mt-6" />

            <h1 className="mt-6 mb-2 font-bold text-lg">Projects and Contributions</h1>

            <div className="w-full flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 mt-4 pr-4">
                <a className="text-gray-300 underline underline-offset-[4px] decoration-stone-500" href="https://github.com/lang-vulpi/vulpi"><strong>Vulpi</strong></a>
                <p className="mt-3">I started to contribute to Vulpi, a functional programming language that compiles to JavaScript and LLVM. Despite having added only small features to the language, I am enjoying all the process.</p>
              </div>

              <div className="w-full md:w-1/2 mt-4 pr-4">
                <a className="text-gray-300 underline underline-offset-[4px] decoration-stone-500" href="https://github.com/RosaUlisses/CppLox"><strong>CppLox</strong></a>
                <p className="mt-3">An interpreter for the Lox programming language Written in C++ following the book Crafting Interpreters.</p>
              </div>
              
              <div className="w-full md:w-1/2 mt-4 pr-4">
                <a className="text-gray-300 underline underline-offset-[4px] decoration-stone-500" href="https://github.com/RosaUlisses/Compilers-Rinha.git"><strong>Interpreter in Rust</strong></a>
                <p className="mt-3">An interpreter coded in Rust for a benchmarking contest of interpreters.</p>
              </div>
              
              
              <div className="w-full md:w-1/2 mt-4 pr-4">
                <a className="text-gray-300 underline underline-offset-[4px] decoration-stone-500" href="https://github.com/RosaUlisses/Competitive-Programming"><strong>Cp</strong></a>
                <p className="mt-3">The solutions of all codeforces problems that I solved.</p>
              </div>
            </div>

            <hr className="mt-6" />

            <h1 className="mt-6 mb-2 font-bold text-lg">Work Experience</h1>

            <div className="w-full flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 mt-4 pr-4">
                <a className="text-gray-300 underline underline-offset-[4px] decoration-stone-500" href="https://lifecode.med.br/login">Software Developer</a>
                <span className="text-xs text-neutral-500 ml-2">March 2023 - Currently</span>
                <p className="mt-3">As a junior developer at Mais60, I worked on the Development of Hygeia, a microservice designed for handling lifecode{"'"}s teleconsultaions, implemented in C#.</p>
              </div>
              
              <div className="w-full md:w-1/2 mt-4 pr-4">
                <a className="text-gray-300 underline underline-offset-[4px] decoration-stone-500" href="https://lifecode.med.br/login">Internship</a>
                <span className="text-xs text-neutral-500 ml-2">April 2022 - December 2022</span>
                <p className="mt-3">As a intern at Mais60, I contributed to the maintance of Lifecode{"'"}s (Mais60{"'"}s system for managing medical consultations) backend and frontend.</p>
              </div>
            </div>

            <hr className="mt-6" />

            <h1 className="my-4 font-bold text-lg">Social Networks</h1>

            <div className="">
              <div className="flex flex-wrap text-gray-300 underline underline-offset-[4px] decoration-stone-500">
                <a className="flex items-baseline" href="https://github.com/RosaUlisses">
                  <p className="text-[16px]">Github</p>
                  <i className="ml-2 fa fa-github-alt text-[16px]"></i>
                </a>

                <a className="flex items-baseline md:ml-3 w-full md:w-fit" href="https://www.instagram.com/ulissao_/">
                  <p className="text-[16px]">Instagram</p>
                  <i className="ml-2 fa fa-instagram text-[16px]"></i>
                </a>

                <a className="flex items-baseline md:ml-3 w-full md:w-fit" href="https://www.linkedin.com/in/ulisses-rosa-3b13a4204/">
                  <p className="text-[16px]">Linkedin</p>
                  <i className="ml-2 fa fa-linkedin text-[16px]"></i>
                </a>

                <a className="flex items-baseline md:ml-3 w-full md:w-fit" href="https://codeforces.com/profile/Ulissao">
                  <p className="text-[16px]">Codeforces</p>
                  <img className="ml-[1px] h-[16px] w-[32px] mt-auto mb-[2px]" src="./codeforces-seeklogo.com.svg" alt="Codeforces Logo" />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
