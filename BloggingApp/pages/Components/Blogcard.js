import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Blogcard = ({
  imgUrl,
  title,
  typeOf,
  description,
  id,
  deleteIt,
  editIt,
  toggleModal2,
}) => {
  function handleDelete(id) {
    deleteIt(id);
  }
  function handleEdit(id) {
    editIt(id);
    toggleModal2;
  }

  return (
    <div className="bg-cyan-900 bg-white dark:bg-white dark:text-black max-w-sm m-6 mx-auto flex flex-col rounded py-2 px-3  sm:max-w-sm sm:mx-3 sm:mx-auto ">
      <div className="flex justify-end mb-4">
        <FaTrash
          onClick={() => handleDelete(id)}
          className="text-red-500 text-2xl cursor-pointer"
        />
      </div>

      <img src={imgUrl} className="w-full border-2 border-sky-300" />

      <h1 className="mt-5 mb-3 text-xl">{title}</h1>
      <p className="mb-4">{description}</p>
      <div>
        <span className="mb-4 bg-blue-500 text-white text-xl bold rounded inline px-2 mb-2">
          {typeOf}
        </span>
        <hr />
        <button className="bg-white border-2 bg-violet-500 text-white rounded p-2 float-right">
          Open Blog
        </button>
      </div>
    </div>
  );
};

export default Blogcard;
