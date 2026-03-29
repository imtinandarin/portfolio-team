import { useState } from "react";

function Darin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-8 flex items-center justify-center">

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">

        {/* TOP SECTION (FOTO + INFO) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          {/* FOTO */}
          <img
            src="/inidarinn.JPG"
            alt="Foto Darin"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />

          {/* INFO */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl md:text-4xl font-bold text-pink-600">
              Imtinan Darin Huwaida
            </h1>

            {/* DETAIL */}
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start text-sm text-gray-600">

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Kelas: T2A
              </span>

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Prodi: Teknologi Informasi
              </span>

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Universitas Brawijaya
              </span>

              <span className="bg-pink-100 px-3 py-1 rounded-full">
                Domisili: Bandung
              </span>

            </div>

            {/* FIND ME */}
            <div className="mt-5">

              <p className="text-pink-500 font-semibold mb-2">
                Find Me
              </p>

              <div className="flex gap-4 justify-center md:justify-start">

                <a
                  href="https://www.linkedin.com/in/imtinan-darin"
                  target="_blank"
                  className="w-28 text-center py-3 bg-pink-100 rounded-2xl hover:bg-pink-200 transition shadow hover:scale-105"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/imtinandarin"
                  target="_blank"
                  className="w-28 text-center py-3 bg-pink-100 rounded-2xl hover:bg-pink-200 transition shadow hover:scale-105"
                >
                  GitHub
                </a>

                <a
                  href="https://wa.me/6285183032476"
                  target="_blank"
                  className="w-28 text-center py-3 bg-pink-100 rounded-2xl hover:bg-pink-200 transition shadow hover:scale-105"
                >
                  WhatsApp
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="mt-10">

          <h2 className="text-xl font-semibold mb-3">
            Tentang Saya
          </h2>

          <p className="text-gray-600 text-justify leading-relaxed">
            Saya adalah seorang mahasiswa universitas brawijaya program studi teknologi informasi 
            yang memiliki ketertarikan besar dalam dunia teknologi. Saya mulai mempelajari berbagai 
            bahasa pemrograman seperti html, css, javascript, dan memahami beberapa framework modern 
            seperti tailwind dan bootstrap. melalui ketertarikan saya di bidang teknologi, saya ingin mempelajari perkembangan teknologi yang terus berkembang di zaman modern ini.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Darin;