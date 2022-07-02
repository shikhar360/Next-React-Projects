import React, { useState } from "react";
import AddBlog from "./Components/AddBlog";
import Navbar from "./Components/Navbar";
import Blogcard from "./Components/Blogcard";
import { nanoid } from "nanoid";
import styles from "./Home.module.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(false);
  const [blogs, setBlogs] = React.useState([
    {
      id: nanoid(),
      imgUrl:
        "https://th.bing.com/th/id/R.c7257059934bdffdf8a144a7c5e78b0a?rik=7YlFfxWUlTUkhg&pid=ImgRaw&r=0",
      title: "Football",
      typeOf: "JK",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    },
  ]);

  const toggleModal = () => {
    setModal(!modal);
  };

  function addBlog(form) {
    if (form.imgUrl && form.title && form.typeOf && form.description) {
      setBlogs((prev) => {
        return [...prev, form];
      });
    } else {
      alert("Please fill all the Details");
    }
  }

  function deleteIt(id) {
    const filtered = blogs.filter((itm) => itm.id !== id);
    setBlogs(filtered);
  }

  return (
    <main className={`${darkMode && "dark"} dark:bg-[#10172a]`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setModal={setModal}
        toggleModal={toggleModal}
      />

      <div className="flex flex-wrap dark:bg-[#10172a] transition-all duration-600 ease  ">
        <div
          className={` ${
            styles.someopacity
          } dark:bg-[#10172a] fixed top-0 left-0 z-10 flex item-center justify-center  
           ${modal ? null : "hidden"}  `}
        >
          <AddBlog modal={modal} toggleModal={toggleModal} addBlog={addBlog} />
        </div>

        {blogs.map((itm) => {
          return <Blogcard key={itm.id} {...itm} deleteIt={deleteIt} />;
        })}
      </div>
    </main>
  );
};

export default Home;
