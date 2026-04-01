import { useEffect, useState } from "react";

function Darin() {

const [progress, setProgress] = useState({
  react: 0,
  tailwind: 0,
  js: 0,
  html: 0,
});

useEffect(() => {
  setTimeout(() => {
      setProgress({
    react: 70,
    tailwind: 75,
    js: 80,
    html: 85,
  });
  }, 300);
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white px-4 py-6 md:p-8 flex items-center justify-center">

      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">

        {/* TOP SECTION (FOTO + INFO) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* FOTO */}
          <img
            src="/inidarinn.JPG"
            alt="Foto Darin"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
          />

          {/* INFO */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
              Imtinan Darin Huwaida
            </h1>

            {/* DETAIL */}
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start text-sm text-gray-600">

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                T2A
              </span>

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Teknologi Informasi
              </span>

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Universitas Brawijaya
              </span>

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Bandung
              </span>

            </div>

            {/* FIND ME */}
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-center gap-3">

  <p className="text-pink-500 font-semibold">
    Find Me :
  </p>

  <div className="flex flex-wrap gap-3 justify-center md:justify-start">

    <a
      href="https://www.linkedin.com/in/imtinan-darin"
      target="_blank"
      className="px-4 py-2 text-sm bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl hover:from-yellow-200 hover:to-yellow-300 transition shadow hover:scale-105"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/imtinandarin"
      target="_blank"
      className="px-4 py-2 text-sm bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl hover:from-yellow-200 hover:to-yellow-300 transition shadow hover:scale-105"
    >
      GitHub
    </a>

    <a
      href="https://wa.me/6285183032476"
      target="_blank"
      className="px-4 py-2 text-sm bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl hover:from-yellow-200 hover:to-yellow-300 transition shadow hover:scale-105"
    >
      WhatsApp
    </a>

  </div>
</div>

          </div>
        </div>

       {/* DESKRIPSI + SKILLS (CARD VERSION) */}
<div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-6">

  {/* CARD TENTANG SAYA */}
  <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 transition duration-300 hover:bg-pink-100 hover:shadow-lg hover:-translate-y-1">

    <h2 className="text-xl font-semibold mb-3 text-pink-600">
      Tentang Saya
    </h2>

    <p className="text-gray-600 text-justify leading-relaxed text-sm md:text-base">
      Saya adalah seorang mahasiswa universitas brawijaya program studi teknologi informasi 
      yang memiliki ketertarikan besar dalam dunia teknologi. Saya mulai mempelajari berbagai 
      bahasa pemrograman seperti html, css, javascript, dan memahami beberapa framework modern 
      seperti tailwind dan bootstrap. melalui ketertarikan saya di bidang teknologi, saya ingin 
      mempelajari perkembangan teknologi yang terus berkembang di zaman modern ini.
    </p>

  </div>

  {/* CARD SKILLS */}
  <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 transition duration-300 hover:bg-pink-100 hover:shadow-lg hover:-translate-y-1">

    <h2 className="text-xl font-semibold mb-3 text-pink-600">
      Skills
    </h2>

    {/* REACT */}
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>ReactJS</span>
        <span>{progress.react}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-300 to-orange-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.react}%` }}
        ></div>
      </div>
    </div>

    {/* TAILWIND */}
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>Tailwind CSS</span>
        <span>{progress.tailwind}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-300 to-orange-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.tailwind}%` }}
        ></div>
      </div>
    </div>

    {/* JAVASCRIPT */}
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>JavaScript</span>
        <span>{progress.js}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-300 to-orange-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.js}%` }}
        ></div>
      </div>
    </div>

    {/* HTML CSS */}
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>HTML & CSS</span>
        <span>{progress.html}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
         className="bg-gradient-to-r from-yellow-300 to-orange-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.html}%` }}
        ></div>
      </div>
    </div>

  </div>

</div>

      </div>
    </div>
  );
}

export default Darin;