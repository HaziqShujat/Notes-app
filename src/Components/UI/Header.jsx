import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signup from "../FormFields/Signup";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";

function Header() {
  const [islogn, setislogin] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setislogin(true);
    navigate("/");
  };

  return (
    <div>
      {!islogn && (
        <div >
          <header className="flex items-center   justify-end gap-9 rounded-r-sm  p-4 bg-gradient-to-r from-purple-900 to-purple-800">
            <Link
              to="/home"
              className="text-gray-100 font-semibold hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="recent-notes"
              className="text-gray-100 font-semibold hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Recent Notes
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-100 font-semibold hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              About Us
            </Link>
            <motion.button
              className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={logout}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLogOut className="w-5 h-5 mr-2" />
              Logout
            </motion.button>
          </header>
          {islogn && <Signup />}
        </div>
      )}
    </div>
  );
}

export default Header;
