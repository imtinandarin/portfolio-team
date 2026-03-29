import { useState } from "react";
import dataJace from "../data/dataJace";
import profileImage from '../assets/jace.jpg';

import gochic from '../assets/gochic.png';
import hollowbooth from '../assets/hollowbooth.png';
import clcanteen from '../assets/clcanteen.png';
import sappy from '../assets/sappy.png';

import SectionCard from "../components/SectionCard";

const colorMap = {
  purple: { bg: "bg-purple-100", text: "text-purple-800", bar: "from-purple-400 to-purple-300", avatar: "from-purple-500 to-pink-400", card: "from-purple-200 to-purple-100" },
  teal:   { bg: "bg-teal-100",   text: "text-teal-800",   bar: "from-teal-400 to-teal-300",   avatar: "from-teal-500 to-emerald-400", card: "from-teal-200 to-teal-100" },
  pink:   { bg: "bg-pink-100",   text: "text-pink-800",   bar: "from-pink-400 to-pink-300",   avatar: "from-pink-500 to-rose-400",    card: "from-pink-200 to-pink-100" },
  amber:  { bg: "bg-amber-100",  text: "text-amber-800",  bar: "from-amber-400 to-amber-300",  avatar: "from-amber-400 to-orange-400", card: "from-amber-200 to-amber-100" },
  coral:  { bg: "bg-orange-100", text: "text-orange-800", bar: "from-orange-400 to-orange-300",avatar: "from-orange-500 to-red-400",   card: "from-orange-200 to-orange-100" },
  blue:   { bg: "bg-blue-100",   text: "text-blue-800",   bar: "from-blue-400 to-blue-300",   avatar: "from-blue-500 to-indigo-400",  card: "from-blue-200 to-blue-100" },
};

const SkillBar = ({ skill }) => {
  const c = colorMap[skill.color] || colorMap.purple;
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
        <span className={`text-xs font-semibold ${c.text}`}>{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} transition-all duration-1000`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};

const MovieCard = ({ movie }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all">   
      <img
        src={movie.image}
        alt={movie.title}
        className="w-9 h-12 rounded-lg object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-800 truncate">
          {movie.title}
        </p>
        <p className="text-xs text-slate-400">
          {movie.genre} · {movie.year}
        </p>
      </div>
      <span className="text-xs font-bold px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 flex-shrink-0">
        ⭐ {movie.rating}/10
      </span>
    </div>
  );
};

const PortfolioCard = ({ item }) => {
  const c = colorMap[item.color] || colorMap.purple;
  return (
    <div className="rounded-xl overflow-hidden border border-white/80 hover:scale-105 hover:shadow-md transition-all duration-200">
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full aspect-square object-cover"
        />
      ) : (
        <div className={`aspect-square bg-gradient-to-br ${c.card} flex items-center justify-center`}>
          <p className={`text-xs font-bold ${c.text}`}>{item.title}</p>
        </div>
      )}
      <div className="p-2 bg-white/80">
        <p className={`text-xs font-bold ${c.text}`}>{item.title}</p>
        <p className="text-[10px] text-slate-500">{item.desc}</p>
      </div>
    </div>
  );
};

const Jace = () => {
  const [activeTab, setActiveTab] = useState("about");
  const d = { ...dataJace, photo: profileImage };

const portfolio = [
  { title: "Go-Chic", desc: "E-commerce outfit cewek", color: "pink", image: gochic },
  { title: "HollowBooth", desc: "Photobooth interaktif web", color: "purple", image: hollowbooth },
  { title: "CL Canteen", desc: "Pemesanan makanan kantin", color: "amber", image: clcanteen },
  { title: "Sappy", desc: "Peternakan sapi online", color: "teal", image: sappy },
];

  const tabs = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "fun", label: "Fun Stuff" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="fixed top-1/2 right-0 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-lg mx-auto px-4 py-8">

        {/* HERO CARD */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/60 shadow-md p-6 mb-4 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-purple-200 via-pink-200 to-teal-200 opacity-60" />

          <div className="relative mt-6">
            {d.photo ? (
              <img
                src={d.photo}
                alt={d.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-3xl font-bold text-white">
                {d.initials}
              </div>
            )}
          </div>

          <h1 className="mt-3 text-2xl font-bold text-slate-800">{d.name}</h1>
          <p className="text-sm text-purple-600 font-medium mt-1">{d.major} · {d.class}</p>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
              📍 {d.domicile}
            </span>
            <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
              🎓 {d.university}
            </span>
            <span className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-medium">
              📅 {d.year}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mt-4">
            {d.social.github && (
              <a href={d.social.github} target="_blank" rel="noreferrer"
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-1.5 rounded-full font-medium transition-colors">
                GitHub
              </a>
            )}
            {d.social.instagram && (
              <a href={d.social.instagram} target="_blank" rel="noreferrer"
                className="text-xs bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-1.5 rounded-full font-medium transition-colors">
                Instagram
              </a>
            )}
            {d.social.linkedin && (
              <a href={d.social.linkedin} target="_blank" rel="noreferrer"
                className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-1.5 rounded-full font-medium transition-colors">
                LinkedIn
              </a>
            )}
            {d.social.letterboxd && (
              <a href={d.social.letterboxd} target="_blank" rel="noreferrer"
                className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-700 px-4 py-1.5 rounded-full font-medium transition-colors">
                Letterboxd
              </a>
            )}
          </div>
        </div>

{/* TABS */}
<div className="flex bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 p-1 mb-4 gap-1">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex-1 text-xs font-semibold py-2 rounded-xl transition-all duration-200 ${
        activeTab === tab.id
          ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-sm"
          : "text-slate-500 hover:text-slate-700"
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>

        {/* TAB: ABOUT */}
        {activeTab === "about" && (
          <SectionCard title="tentang diri">
            <p className="text-sm text-slate-600 leading-relaxed">{d.about}</p>
          </SectionCard>
        )}

        {/* TAB: SKILLS */}
        {activeTab === "skills" && (
          <SectionCard title="skills & teknologi">
            {d.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </SectionCard>
        )}

        {/* TAB: PORTFOLIO */}
        {activeTab === "portfolio" && (
          <SectionCard title="portfolio uiux">
            <div className="grid grid-cols-2 gap-3">
              {portfolio.map((item) => (
                <PortfolioCard key={item.title} item={item} />
              ))}
            </div>
          </SectionCard>
        )}

        {/* TAB: FUN STUFF */}
        {activeTab === "fun" && (
          <>
            <SectionCard title="likes & dislikes">
              <p className="text-xs text-slate-400 font-medium mb-2">❤️ I LOVE</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {d.likes.map((item) => (
                  <span key={item} className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-medium mb-2">🚫 I LOVEN'T</p>
              <div className="flex flex-wrap gap-1.5">
                {d.dislikes.map((item) => (
                  <span key={item} className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-full font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </SectionCard>

            <SectionCard title="recent movies 🎬">
              <div className="flex flex-col gap-2">
                {d.movies.map((movie) => (
                  <MovieCard key={movie.title} movie={movie} />
                ))}
              </div>
            </SectionCard>
          </>
        )}

        <p className="text-center text-xs text-slate-400 mt-4">
          Made with ❤️ by Jacee
        </p>
      </div>
    </div>
  );
};

export default Jace;