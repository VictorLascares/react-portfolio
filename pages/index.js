import Head from "next/head";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import Deved from "../public/dev-ed-wave.png";
import Design from "../public/design.png";
import Code from "../public/code.png";
import Consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Victor Lascares | Portfolio</title>
        <meta name="description" content="My evidence portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200">
              Developedbyvl
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="hover:cursor-pointer text-2xl text-gray-200"
                  />
                ) : (
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="hover:cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-purple-600 font-bold uppercase md:text-6xl">
              Victor Lascares
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Frontend Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-gray-500">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-13 py-3 text-gray-500">
            <AiFillTwitterCircle className="hover:text-gray-800 hover:cursor-pointer" />
            <AiFillLinkedin className="hover:text-gray-800 hover:cursor-pointer" />
            <AiFillGithub className="hover:text-gray-800 hover:cursor-pointer" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-purple-600 rounded-full w-80 h-80 my-10 overflow-hidden md:w-96 md:h-96">
            <Image src={Deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-500">
              Since the beginning of my journey as a free developer, I've done
              remote work for<span className="text-purple-600"> agencies </span>
              consulted for<span className="text-purple-600"> startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-500">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex lg:gap-4">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
              <Image src={Design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-purple-600">Design tools I use</h4>
              <p className="text-gray-700 py-1">Blender</p>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Gimp</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
              <Image src={Code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-purple-600">Design tools I use</h4>
              <p className="text-gray-700 py-1">Blender</p>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Gimp</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200">
              <Image src={Consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-purple-600">Design tools I use</h4>
              <p className="text-gray-700 py-1">Blender</p>
              <p className="text-gray-700 py-1">Figma</p>
              <p className="text-gray-700 py-1">Gimp</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-500">
              Since the beginning of my journey as a free developer, I've done
              remote work for<span className="text-purple-600"> agencies </span>
              consulted for<span className="text-purple-600"> startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-700 dark:text-gray-500">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
