function Darin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white p-8">

      {/* CARD PROFILE */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* FOTO + NAMA */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/inidarinn.JPG"
            alt="Foto Darin"
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
          />

          <h1 className="text-3xl font-bold text-pink-600">
            Imtinan Darin Huwaida
          </h1>

          <p className="text-gray-500">Kelas: T2A</p>
          <p className="text-gray-500">Prodi: Teknologi Informasi</p>
          <p className="text-gray-500">Domisili: Bandung</p>
        </div>

        {/* TENTANG DIRI */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Tentang Saya</h2>
          <p className="text-gray-600 text-justify leading-relaxed">
            Saya adalah seorang mahasiswa informatika yang memiliki ketertarikan
            besar dalam dunia teknologi, khususnya di bidang pengembangan website.
            Saya mulai belajar pemrograman sejak awal perkuliahan dan terus
            mengembangkan kemampuan saya dalam menggunakan HTML, CSS, JavaScript,
            serta framework modern seperti React dan Tailwind CSS. Saya senang
            mengeksplorasi desain antarmuka yang menarik dan responsif, serta
            berusaha untuk menciptakan pengalaman pengguna yang baik. Selain itu,
            saya juga memiliki semangat untuk terus belajar hal-hal baru dan
            mengikuti perkembangan teknologi yang terus berubah.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Darin;