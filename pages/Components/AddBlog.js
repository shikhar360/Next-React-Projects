import React from "react";
import { nanoid } from "nanoid";
const AddBlog = (props) => {
  const { modal, toggleModal, addBlog } = props;

  const [form, setForm] = React.useState({
    id: nanoid(),
    imgUrl: "",
    title: "",
    typeOf: "",
    description: "",
  });

  function handleChange(e) {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSave(form) {
    setForm({
      id: nanoid(),
      imgUrl: "",
      title: "",
      typeOf: "",
      description: "",
    });

    addBlog(form);
  }
  return (
    <>
      <div
        className={`flex items-center flex-col bg-lime-50 mx-auto w-6/12 rounded px-5 mt-20 pb-10 h-4/5 sm:w-6/12 px-7 dark:bg-white dark:text-black dark:mt-0  `}
      >
        <span className="border-b-2 text-2xl py-2 my-4">Add new Task</span>

        <span className="text-2xl py-1 w-full">Image URL</span>
        <input
          className="bg-blue-300 w-full py-1 rounded px-1 text-xl"
          type="text"
          name="imgUrl"
          value={form.imgUrl}
          onChange={handleChange}
        />
        <h1 className="text-2xl py-1 w-full">Title</h1>
        <input
          className="bg-red-300 w-full py-1 rounded px-1 text-xl"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <h1 className="text-2xl py-1 w-full">Type</h1>
        <input
          className="bg-fuchsia-300 w-full py-1 rounded px-1 text-xl"
          type="text"
          name="typeOf"
          value={form.typeOf}
          onChange={handleChange}
        />

        <h1 className="text-2xl py-1 w-full">Description</h1>
        <textarea
          className="w-full pb-20 border-b-2 text-xl dark:text-black dark:bg-red-100"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <div className="flex items-center justify-end w-full mt-1.5">
          <button
            className="bg-violet-300 px-3 py-2 rounded mr-5 text-lg"
            onClick={toggleModal}
          >
            Close
          </button>
          <button
            className="bg-violet-300 px-3 py-2 rounded text-lg"
            onClick={() => handleSave(form)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
