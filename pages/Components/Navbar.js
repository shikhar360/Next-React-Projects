import Head from "next/head";
import React from "react";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
const Navbar = (props) => {
  const { darkMode, setDarkMode, toggleModal } = props;

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className="bg-white py-3 shadow-lg shadow-black-500/50 dark:bg-[#10172a]">
      <Head>
        <title>Blog Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Lato&family=Poppins:ital,wght@0,400;1,500&family=Roboto:wght@300;900&display=swap');
        </style>
      </Head>
      <section className="flex items-center justify-between px-3">
        <div className="flex items-center">
          <h className="text-2xl mr-6 text-blue-700 bold cursor-pointer dark:text-sky-400">
            Blog
          </h>
          <h className="text-xl cursor-pointer dark:text-white">Home</h>
        </div>

        <div className="flex px-4 ">
          {darkMode === false ? (
            <FiSun
              className="text-4xl cursor-pointer"
              onClick={toggleDarkMode}
            />
          ) : (
            <IoMdMoon
              className="text-4xl cursor-pointer text-white"
              onClick={toggleDarkMode}
            />
          )}

          <button
            className="bg-blue-500 cursor-pointer rounded-2xl px-3 mx-0 text-white ml-8"
            onClick={toggleModal}
          >
            + Add New
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
