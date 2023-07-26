import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Header from "./Header";
import Mapfield from "./Mapfield";
import Errormodel from "./Errormodel";

function Notes() {
  const [open, setOpen] = useState();
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [fields, setFields] = useState([]);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);

  const Adduser = (Utext, Udate) => {
    if (edit !== false) {
      setFields((prevuserlist) => {
        const updatedFields = [...prevuserlist];
        const editedIndex = prevuserlist.findIndex((task) => task === edit);
        updatedFields[editedIndex] = { Note: Utext, Cleder: Udate };
        return updatedFields;
      });
      setEdit(false);
    } else {
      setFields((prevuserlist) => [
        ...prevuserlist,
        { Note: Utext, Cleder: Udate },
      ]);
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const openToggle = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0 || date.trim().length === 0) {
      setError({
        title: "Input Field is Empty",
        message: "Please enter some text and date",
      });
      return;
    }

    Adduser(text, date);
    setText("");
    setDate("");
    closeForm();
  };

  const handleError = () => {
    setError(null);
  };

  function Notesdelete(index) {
    fields.splice(index);
    setFields([...fields]);
  }

  function handleEdit(indexx) {
    const editedTask = fields.find((task, index) => index === indexx);
    setEdit(editedTask);
    setText(editedTask.Note);
    setOpen(false);
  }

  return (
    <div className=" bg-gradient-to-r from-red-800 via-purple-900 to-pink-900 min-h-screen">
      <Header />

      {error && (
        <Errormodel
          title={error.title}
          message={error.message}
          handleError={handleError}
        />
      )}

      <div>
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-4">
            <form onSubmit={handleFormSubmit}>
              <div className="bg-white w-96 max-w-md p-6 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
                <motion.label
                  className="block font-semibold mb-1 text-xl text-gray-700"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Text
                </motion.label>
                <textarea
                  type="text"
                  id="text"
                  value={text}
                  onChange={handleChange}
                  className="w-full h-72 overflow-y-scroll no-scrollbar px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="mt-4">
                  <motion.label
                    className="block font-semibold text-gray-800 mb-1 text-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Date
                  </motion.label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDate}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    as={motion.input}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </div>

                <div className="flex justify-between mt-4">
                  {!edit ? (
                    <motion.button
                      type="submit"
                      className="max-w-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mr-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Add Note
                    </motion.button>
                  ) : (
                    <motion.button
                      className="max-w-sm bg-purple-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      update
                    </motion.button>
                  )}
                  <motion.button
                    className="max-w-sm bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                    onClick={closeForm}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IoMdClose className="mr-1" />
                    Discard
                  </motion.button>
                </div>
              </div>
            </form>
          </div>
        ) }
          <div className="  absolute right-0 w-fit  m-2">
            <motion.button
              className="bg-purple-300 mt-2 justify-end text-end  flex gap-2 hover:bg-red-600 text-white font-bold py-3 px-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={openToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Thoughts
              <FaEdit className="mr-2 " size={24} />
            </motion.button>
          </div>
        
      </div>
      <Mapfield
        fields={fields}
        Notesdelete={Notesdelete}
        handleEdit={handleEdit}
        edit={edit}
      />
    </div>
  );
}

export default Notes;
