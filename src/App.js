import React, { useState } from 'react';
import { MapPin, Phone, Mail, Mountain, ChevronRight } from 'lucide-react';

const SMKNWebsite = () => {

  const facilities = [
    { name: 'Gedung Utama', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop' },
    { name: 'Ruang Kelas', image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop' },
    { name: 'Kantin', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop' }
  ];

  const news = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur...',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
      icon: '📊'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur...',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
      icon: '📊'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur...',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
      icon: '📊'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur...',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Navbar */}
      <nav className="bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">S1</span>
            </div>
            <span className="font-bold text-lg">SMKN 1 Majalengka</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-purple-200 transition">HOME</a>
            <a href="#about" className="hover:text-purple-200 transition">ABOUT</a>
            <a href="#jurusan" className="hover:text-purple-200 transition">JURUSAN</a>
            <a href="#tentang" className="hover:text-purple-200 transition">TENTANG SMKN 1</a>
            <a href="#berita" className="hover:text-purple-200 transition">BERITA</a>
            <a href="#contact" className="hover:text-purple-200 transition">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=600&fit=crop)',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center z-10 px-4">
          <p className="text-sm mb-2 text-purple-300">Selamat Datang di</p>
          <h1 className="text-5xl font-bold mb-4">SMKN 1 Majalengka</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Sekolah Menengah Kejuruan yang menghasilkan lulusan dan tenaga ahli yang hebat
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition font-semibold">
              Mulai Sekarang
            </button>
            <button className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition font-semibold">
              Pelajari Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">VISI</h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">MISI</h2>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Berita Terbaru</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg hover:scale-105 transition transform">
                <div className="text-4xl mb-4 bg-white bg-opacity-20 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Mountain className="text-white" size={32} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Fasilitas</h2>
          <a href="#facilities" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            Selengkapnya <ChevronRight size={20} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
              <img 
                src={facility.image} 
                alt={facility.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{facility.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">
            Jangan biarkan mimpi anda terhenti karna biaya
          </h2>
          <p className="mb-6">
            Login atau buat akun sekarang. Fitur yang menarik dan pendaftaran yang berbayar, dan banyak lainnya akan datang dalam peluncuran versi resminya nanti.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Mulai Tur
          </button>
        </div>
      </div>

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
                SMKN 1 Majalengka adalah sekolah terbaik jurusan teknik di Lembah Cimanuk. Menjadi Rujukan SMK Rujukan di Kecamatan Majalengka, Provinsi Jawa Barat
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">PETA</h3>
              <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center">
                <MapPin size={48} className="text-gray-600" />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">INFORMASI KONTAK</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={20} className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400">Jl. Rd. H. Tb. Ahmad Syah No. 213, Majalengka Kulon, Kec. Majalengka, Kabupaten Majalengka, Jawa Barat 45418</span>
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
            © 2023 | SMKN 1 Majalengka
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SMKNWebsite;