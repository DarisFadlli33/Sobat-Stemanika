import React from 'react';
import { MapPin, Phone, Mail, Mountain, ChevronRight } from 'lucide-react';

const SMKNWebsite = () => {

  const facilities = [
    { name: 'Gedung Utama', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop' },
    { name: 'Ruang Kelas', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop' },
    { name: 'Kantin', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop' }
  ];

  const news = [
    {
      title: 'Kegiatan MPLS SMKN 1 Majalengka 2025',
      desc: 'Siswa baru mengikuti kegiatan pengenalan lingkungan sekolah dengan semangat tinggi untuk mengenal budaya dan tata tertib sekolah.',
    },
    {
      title: 'Prestasi Siswa Jurusan RPL',
      desc: 'Tim RPL berhasil meraih juara 1 lomba Web Development tingkat Provinsi Jawa Barat dengan proyek sistem informasi sekolah.',
    },
    {
      title: 'Kegiatan Prakerin Siswa TKJ',
      desc: 'Siswa jurusan TKJ mulai menjalankan praktik kerja industri di berbagai perusahaan IT dan jaringan di wilayah Majalengka.',
    },
    {
      title: 'Penerimaan Peserta Didik Baru 2026',
      desc: 'Pendaftaran siswa baru SMKN 1 Majalengka dibuka bulan Mei 2026. Siapkan berkas dan pantau informasi resmi dari sekolah.',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-poppins">
      
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-purple-700 to-blue-500 px-6 py-4 shadow-lg fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Logo_SMK.png" alt="Logo" className="w-8 h-8 bg-white rounded-full p-1" />
            <span className="font-semibold text-white text-lg">SMKN 1 Majalengka</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-gray-200 transition">Home</a>
            <a href="#about" className="hover:text-gray-200 transition">About</a>
            <a href="#jurusan" className="hover:text-gray-200 transition">Jurusan</a>
            <a href="#ekskul" className="hover:text-gray-200 transition">Ekstrakurikuler</a>
            <a href="#pilketos" className="hover:text-gray-200 transition">Pilketos</a>
            <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center mt-[64px]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop)'
        }}
      >
        <div className="text-center px-4">
          <p className="text-purple-300 mb-2">Selamat Datang Di</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">SMKN 1 Majalengka</h1>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            Sekolah Menengah Kejuruan yang menghasilkan lulusan berkualitas dan siap kerja
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition">
              Mulai Sekarang
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition">
              Pelajari Selanjutnya
            </button>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-purple-400">Visi</h2>
            <p className="text-gray-300 leading-relaxed">
              Menjadi sekolah kejuruan unggulan yang menghasilkan lulusan berkarakter, berkompeten, dan berdaya saing global.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center text-purple-400">Misi</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Meningkatkan kualitas pembelajaran berbasis teknologi.</li>
              <li>Menumbuhkan karakter disiplin, tanggung jawab, dan kerja keras.</li>
              <li>Menjalin kerja sama dengan dunia usaha dan industri.</li>
              <li>Meningkatkan kemampuan berwirausaha siswa.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Berita */}
      <section id="berita" className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">Berita Terbaru</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-xl hover:scale-105 transition">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Mountain className="text-white" size={32} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-purple-400">Fasilitas</h2>
          <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            Selengkapnya <ChevronRight size={20} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <div key={i} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
              <img src={f.image} alt={f.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{f.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 py-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Jangan biarkan mimpi kamu berhenti karena biaya</h2>
          <p className="text-white/90 mb-6">
            Login atau buat akun sekarang dan nikmati berbagai fitur menarik. Informasi pendaftaran dan program baru segera hadir.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Mulai Tur
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                <span className="font-bold">SMKN 1 Majalengka</span>
              </div>
              <p className="text-gray-400 text-sm">
                SMKN 1 Majalengka adalah sekolah kejuruan unggulan di Lembah Cimanuk yang berfokus pada pembentukan lulusan profesional dan siap kerja.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Peta</h3>
              <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center">
                <MapPin size={48} className="text-gray-600" />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-white">Informasi Kontak</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={20} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Jl. Rd. H. Tb. Ahmad Syah No. 213, Majalengka, Jawa Barat 45418</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={20} className="text-purple-400" />
                  <span className="text-gray-400">(0233) 281118</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={20} className="text-purple-400" />
                  <span className="text-gray-400">info@smkn1mjl.sch.id</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            © 2025 | SMKN 1 Majalengka
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SMKNWebsite;
