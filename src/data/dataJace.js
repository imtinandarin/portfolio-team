import deadpoets from "../assets/deadpoets.jpg";
import lalaland from "../assets/lalaland.png";
import belle from "../assets/belle.jpg";
import lookism from "../assets/lookism.jpg";

const dataJace = {
  name: "Jace Russell",
  class: "T2A Class (sori kalau awk jago)",
  major: "TI JAYA JAYA JAYA",
  university: "Universitas Brawijaya",
  domicile: "Malang, Jawa Timur",
  year: "2025",
  photo: "",

  about: `hlo gys aku mahasiswi ti (engineering diva) yg memamg love hate demngan 
  coding atw bhsa formalna web development dan suka ngedit di figma. aku suka 
  dubaicuwicuki karena dy teksturna samngat lembut awk suka wee. slain it aku suka 
  nonyon film, mndengarkan mucik, dan main gim brsama my teman gue saya aku. ni 
  project aku brsama my tiga trio alias jace darin mayla (klp hbaatt). 
  aku jga suka ecamm`,

  skills: [
    { 
      name: "ReactJS", 
      level: 80, 
      color: "purple" 
    },
    { 
      name: "Tailwind CSS", 
      level: 75, 
      color: "teal" 
    },
    { 
      name: "JavaScript", 
      level: 85, 
      color: "amber" 
    },
    { 
      name: "Git & GitHub", 
      level: 70, 
      color: "coral" 
    },
    { 
      name: "HTML & CSS", 
      level: 90, 
      color: "pink" 
    },
  ],

  likes: ["Ngoding", "Nonton Film", "MCR GRRRAAHH", "MICHAELEARNSTOROCK", "Esam Kalev"],
  dislikes: ["Ngoding", "Deadline", "Tugas Kuliah", " EH salah ketik"],

  portfolio: [
     { title: "Go-Chic", desc: "E-commerce outfit cewek", color: "pink", image: null },
  { title: "HollowBooth", desc: "Photobooth interaktif web", color: "purple", image: null },
  { title: "CL Canteen", desc: "Pemesanan makanan kantin", color: "amber", image: null },
  { title: "Sappy", desc: "Peternakan sapi online", color: "teal", image: null },
  ],

  movies: [
    { 
      title: "Dead Poets Society", 
      genre: "Comedy", 
      year: 1989, 
      rating: 10, 
      image: deadpoets 
    },
    { 
      title: "LA LA LAND", 
      genre: "Romance", 
      year: 2016, 
      rating: 9, 
      image: lalaland 
    },
    { 
      title: "Belle", 
      genre: "Anime/Musical", 
      year: 2021, 
      rating: 9, 
      image: belle 
    },
    { 
      title: "LOOKISM", 
      genre: "Action", 
      year: 2022, 
      rating: 9, 
      image: lookism 
    },
  ],

  social: {
    github: "https://github.com/jaceshy",
    instagram: "https://instagram.com/jacine.cl",
    linkedin: "https://linkedin.com/in/jacinda-clearesta/",
    letterboxd: "https://letterboxd.com/jaceshy/",
  },
};

export default dataJace;