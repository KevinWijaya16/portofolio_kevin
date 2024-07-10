"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import Cards from "./components/cards";
import AnimatedText from "./components/teks";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-slate-500 pt-28">
        <div className="mx-24 mt-8">
          <p className="flex text-xl text-black font-bold mt-20">Hi, Im</p>
          <AnimatedText />
          <p className="flex text-1xl font-medium mt-2">Web Development</p>
          <div className="bg-blue-400 w-32 h-2 mt-2 rounded-lg animate-slide-in-right"></div>

          <div className="flex space-x-2 mt-3">
            <a href="https://web.whatsapp.com/">
              <Image src="/img/wa.png" width={40} height={40} alt="wa" />
            </a>
            <a href="https://www.instagram.com/kvvzyyy">
              <Image src="/img/ig.png" width={33} height={33} alt="ig" />
            </a>
            <a href="https://x.com">
              <Image src="/img/x.png" width={40} height={40} alt="x" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center mx-16">
          <Image
            src="/img/character.png"
            width={500}
            height={600}
            alt="character"
          />
        </div>
      </div>

      <section id="about">
        <div className="grid grid-cols-2 bg-slate-900 w-full h-screen">
          <div className="flex justify-center items-center">
            <Image
              src="/img/character.png"
              width={550}
              height={400}
              alt="kevin"
            />
          </div>
          <div className="bg-slate-900 p-4 border-4 border-white h-64 rounded-xl my-40 mx-10 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold mb-7 text-orange-600 shadow-blue-200 text-shadow-lg">
              About Me
            </h3>
            <p className="text-white text-lg font-serif">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              velit consectetur deserunt a necessitatibus quam nesciunt itaque
              tempore repellendus fugiat perspiciatis vel, repellat deleniti
              aliquam. Modi vitae pariatur saepe sunt?
            </p>
          </div>
        </div>
      </section>
      <div>
        <section
          id="projects"
          className="w-full min-h-screen bg-gray-800 text-white pt-28"
        >
          <h1 className="text-5xl text-center font-bold mb-10 text-shadow-xl">
            Projects
          </h1>

          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:bg-blue-600">
              <Cards img={"/img/web.jpg"} desc={"gk"}>
                <p className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nulla, quos! Ex ratione accusamus laudantium quam aut aperiam?
                </p>
              </Cards>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Cards img={"/img/web.jpg"} desc={"gk"}>
                <p className="p-4">
                  Perferendis unde repellat culpa maxime, beatae ad sequi
                  aspernatur esse quaerat expedita quo.
                </p>
              </Cards>
            </div>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Cards img={"/img/web.jpg"} desc={"gk"}>
                <p className="p-4">
                  Perferendis unde repellat culpa maxime, beatae ad sequi
                  aspernatur esse quaerat expedita quo.
                </p>
              </Cards>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-blue-600 text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        <section
          id="contact"
          className="flex h-screen items-center bg-gray-500"
        >
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Contact
            </h1>
            <p className="text-lg mb-8 text-center italic font-semibold">
              Berikut adalah informasi saya, Jika ada pertanyaan silahkan
              hubungi kontak saya.
            </p>

            <div className="bg-gray-800 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-5">Informasi Kontak</h2>
              <p className="mb-2">
                <strong>Alamat:</strong> Jl. Pasirkoja. 123, Bandung, Indonesia
              </p>
              <p className="mb-2">
                <strong>Telepon:</strong> 087877714698
              </p>
              <p className="mb-2">
                <strong>Email:</strong> kevinwijaya162207@gmail.com
              </p>
              <p className="mb-2">
                <strong>Kelas:</strong> XII
              </p>
              <p className="mb-4">
                <strong>Jurusan:</strong> PPLG
              </p>
            </div>
          </div>
        </section>
      </div>
      <div></div>
    </div>
  );
}
