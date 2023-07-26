import React from "react";
import { motion } from "framer-motion";
import { IoMdClose, IoMdCreate } from "react-icons/io";

function Mapfield({ fields, Notesdelete, handleEdit }) {
  return (
    <div
      className="grid-cols-4 grid max-w-max h-auto  gap-3 m-4 gap: 16px "
     
    >
      {fields.map((user, index) => (
        <div key={index} className="w-full max-w-xs mb-4">
          <div className="flex flex-col  p-4 bg-white rounded-lg shadow">
            <div className="overflow-auto  max-h-48 overflow-y-scroll no-scrollbar" 
            //  style={{overflow : user.Note ? "" : "revert-layer"}}
             >
              <div className="whitespace-normal  break-words" 
             >{user.Note}</div>
            </div>
            <motion.div className="overflow-hidden">{user.Cleder}</motion.div>

            <div className="flex g mt-4">
              <motion.button
                className="ml-2 bg-blue-500  hover:bg-blue-600 text-white px-2 py-1 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleEdit(index)}
              >
                <IoMdCreate />
              </motion.button>

              <motion.button
                className="ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full"
                whilehover={{ scale: 1.1 }}
                whiletap={{ scale: 0.9 }}
                onClick={() => Notesdelete(index)}
              >
                <IoMdClose />
              </motion.button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mapfield;
