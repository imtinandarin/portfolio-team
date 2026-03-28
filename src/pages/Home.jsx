import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gradient-to-b from-pink-200 via-pink-100 to-pink-50">
      
      <h1 className="text-4xl font-bold text-pink-600">
        PORTFOLIO TEAM 
      </h1>

      <p className="text-2x1">Pilih halaman anggota:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
  <Link 
    to="/imtinan-darin-huwaida"
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition text-center"
  >
    <h2 className="text-xl font-semibold mb-2">Darin</h2>
    <p className="text-gray-500">Frontend Developer</p>
  </Link>

  <Link 
    to="/jacinda-queena-clearesta"
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition text-center"
  >
    <h2 className="text-xl font-semibold mb-2">Jace</h2>
    <p className="text-gray-500">UI Designer</p>
  </Link>

  <Link 
    to="/mayla-tahmida"
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition text-center"
  >
    <h2 className="text-xl font-semibold mb-2">Mayla</h2>
    <p className="text-gray-500">Backend Developer</p>
  </Link>

</div>

    </div>
    
  );
}


export default Home;