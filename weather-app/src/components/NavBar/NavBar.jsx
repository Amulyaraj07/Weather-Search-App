import React from 'react';
import logo from '../../assets/logo.png';

const NavBar = () => {
  return (
    <section className="fixed left-4 top-25 h-[70vh] w-60 bg-white/20 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-md flex flex-col justify-center items-center">
      <nav className="flex flex-col items-center gap-8 w-full">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="h-14" />
        </div>

        <ul className="flex flex-col gap-6 text-white text-lg font-bold text-center w-full">
          <li className="cursor-pointer hover:text-blue-900 transition-all py-2">Home</li>
          <li className="cursor-pointer hover:text-blue-900 transition-all py-2">Map</li>
          <li className="cursor-pointer hover:text-blue-900 transition-all py-2">History</li>
          <li className="cursor-pointer hover:text-blue-900 transition-all py-2">Trends</li>
        </ul>

        {/* Footer or Extra Section */}
        <div className="text-center text-blue text-sm opacity-70 mt-auto">
          © 2025 amulyaraj
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
