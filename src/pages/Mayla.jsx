import { useEffect, useState } from "react";

function Mayla() {
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setGlow({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex justify-center px-6 py-10 relative overflow-hidden">

      {/* GLOW BACKGROUND INTERAKTIF (HALUS) */}
      <div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-pink-300/20 blur-[120px] z-0 transition duration-300"
        style={{
          left: glow.x - 200,
          top: glow.y - 200,
        }}
      />

      {/* STATIC GLOW */}
      <div className="absolute w-96 h-96 bg-pink-300/20 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-purple-300/20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="max-w-5xl w-full space-y-10 relative z-10">

        {/* HERO */}
        <div className="bg-white/60 backdrop-blur-2xl rounded-3xl p-6 flex items-center gap-6 shadow-lg border border-white/40 hover:shadow-pink-200 transition duration-300">

          {/* FOTO */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blur-xl opacity-30 group-hover:opacity-60 transition"></div>

            <img
              src="/MaylaProfil.png"
              className="relative w-28 h-28 rounded-full object-cover object-[50%_20%] border-4 border-white shadow-lg group-hover:scale-105 transition"
            />
          </div>

          {/* TEXT */}
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Mayla Tahmida
            </h1>

            <p className="text-purple-600 text-sm mt-1">
              Web Development Learner • UI/UX Basics
            </p>

            {/* TAG */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {["Basic Web Development", "UI/UX Fundamentals", "Problem Solving"].map((item) => (
                <span className="px-3 py-1 text-xs bg-white/70 rounded-full shadow hover:scale-105 hover:bg-pink-100 transition">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow border border-white/40 hover:shadow-purple-200 transition duration-300">

          <p className="text-xs text-purple-500 mb-2 tracking-widest">
            TENTANG DIRI
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Saya mahasiswa D3 Teknologi Informasi Universitas Brawijaya yang sedang belajar dan mencoba berkembang di bidang web development dan UI/UX. Saya tertarik membuat tampilan yang sederhana, nyaman dilihat, dan mudah digunakan. Saat ini saya masih banyak belajar melalui praktik langsung dan eksplorasi desain secara mandiri. Saya juga terbiasa mencoba hal baru dan pelan-pelan meningkatkan kemampuan saya.
          </p>
        </div>

        {/* INFO */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["Kelas", "T2A"],
            ["Jurusan", "Teknologi Informasi"],
            ["Domisili", "Kota Malang"],
            ["Fokus", "Web & UI/UX"],
          ].map(([label, value]) => (
            <div className="bg-white/60 backdrop-blur-xl p-4 rounded-xl shadow hover:-translate-y-1 hover:shadow-pink-200 transition duration-300">
              <p className="text-xs text-gray-500">{label}</p>
              <p className="font-semibold text-gray-700">{value}</p>
            </div>
          ))}
        </div>

        {/* PORTFOLIO */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Techfair Volume 2", "Dokumentasi Foto"],
            ["Poster Creanomic", "Desain Poster"],
            ["Poster Dies Natalis", "Desain Poster"],
          ].map(([title, desc]) => (
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow hover:scale-[1.04] hover:shadow-pink-200 transition duration-300">

              <div className="h-40 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200"></div>

              <div className="p-3">
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Mayla;