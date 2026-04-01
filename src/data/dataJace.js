import deadpoets from "../assets/deadpoets.jpg";
import lalaland from "../assets/lalaland.png";
import belle from "../assets/belle.jpg";
import lookism from "../assets/lookism.jpg";

const dataJace = {
  name: "Jace Russell",
  class: "T2A Class",
  major: "Information Technology",
  university: "Brawijaya University",
  domicile: "Malang, Jawa Timur",
  year: "2025",
  photo: "",

  about: `Halo! Aku adalah mahasiswa Teknik Informatika yang passionate di 
  bidang web development dan desain UI/UX. Aku suka banget eksplorasi 
  teknologi baru dan senang bikin hal-hal yang bisa bermanfaat buat orang 
  banyak. Di luar coding, aku juga suka nonton film, dengerin musik, dan 
  main game bareng teman-teman. Menurutku, kreativitas dan logika bisa 
  berjalan berdampingan dan justru menghasilkan karya yang lebih keren. 
  Saat ini sedang belajar ReactJS, Tailwind CSS, dan berbagai tools modern 
  lainnya untuk mengembangkan skill sebagai full-stack developer. Aku percaya 
  bahwa setiap baris kode yang ditulis dengan niat baik bisa membawa dampak 
  positif yang nyata.`,

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