import React, { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import Signup from "./Signup";
import { Formsigninscheme } from "./Formsigninscheme";
import { useFormik } from "formik";
import {  useNavigate } from "react-router-dom";
import Forgetpasword from "./Forgetpasword";


const Signin = ({ handled }) => {
  const [showpswd, setshowpswd] = useState();
  const [btntogle, setbtntoggle] = useState(false);
  const [forgrtpd, setForgetpd] = useState(false);

  function forgetpwd() {
    setForgetpd(true);
  }
  const navigate = useNavigate();
  const toggle = () => {
    setshowpswd(true);
    if (showpswd) {
      setshowpswd(false);
    }
  };

  const togglebtn = () => {
    setbtntoggle(true);
  };

  const initialValue = {
    Email: "",
    Password: "",
    RememberMe: false,
  };

  const {
    handleSubmit,
    handleChange,
    touched,
    resetForm,
    values,
    errors,
    handleBlur,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: Formsigninscheme,
    onSubmit: (values) => {
      const existingNotes = JSON.parse(localStorage.getItem("notes"));
      const matchingNote = existingNotes.find(
        (note) =>
          note.Email === values.Email && note.Password === values.Password
      );

      if (!matchingNote) {
        alert("Email and password do not match.");
        return;
      }
      if (values.RememberMe == true) {
        sessionStorage.setItem("savedEmail", values.Email);
        sessionStorage.setItem("savedPassword", values.Password);
      } else {
        sessionStorage.removeItem("savedEmail");
        sessionStorage.removeItem("savedPassword");
      }
      resetForm();
      navigate("./Notes");
    },
  });

  return (
    <div className="flex items-center justify-center h-screen relative">
      <img
        src="/assets/wallpaperflare.com_wallpaper.jpg"
        className="w-full  fixed inset-0"
      />

      {!btntogle ? (
        <div className="bg-transparent relative flex  items-center justify-between">
          <div className="flex justify-between gap-20">
            <div className="flex flex-col justify-center bg-transparent text-white text-center">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to our website
              </h1>
              <p className="text-lg max-w-md">
                {" "}
                This is our new website for notes. Here, you will find a wide
                range of informative and insightful blog posts about various
                topics, including study notes, academic resources, productivity
              </p>
              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFacebook className="text-white text-2xl hover:text-blue-500" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiInstagram className="text-white text-2xl hover:text-red-500" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiTwitter className="text-white text-2xl hover:text-blue-500" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="text-white text-2xl hover:text-blue-700" />
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-96 bg-gray-700    rounded-lg shadow-md p-6"
            >
              <h2 className="text-3xl mb-6 text-center text-white font-bold">
                Sign In
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="Email"
                  className="block font-semibold text-white"
                >
                  Email
                </label>
                <div className="relative">
                  <span className="flex items-center   border-gray-300 text-right">
                    <input
                      type="text"
                      id="Email"
                      onBlur={handleBlur}
                      value={values.Email}
                      placeholder="Email"
                      onChange={handleChange}
                      name="Email"
                      className="w-full px-3 bg-slate-300 py-2 text-black  border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                 
                  </span>
                </div>

                {errors.Email && touched.Email ? (
                  <span style={{ color: "red" }} className="text-red-500">
                    {errors.Email}
                  </span>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Password"
                  className="block font-semibold text-white"
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={showpswd ? "text" : "password"}
                    id="Password"
                    name="Password"
                    onBlur={handleBlur}
                    placeholder="Password"
                    value={values.Password}
                    onChange={handleChange}
                    className="w-full px-3 bg-slate-300 text-black py-2 border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.Password && touched.Password ? (
                    <span style={{ color: "red" }} className="text-red-500">
                      {errors.Password}
                    </span>
                  ) : null}
                  <span
                    className="absolute right-1 bottom-px top-2/4 transform -translate-y-2/4 cursor-pointer"
                    onClick={toggle}
                  >
                    {showpswd ? (
                      <FiEyeOff
                      style={ {color: values.Password ? "black": "grey"}}
                      />
                    ) : (
                      <FiEye
                      style={ {color: values.Password ? "black": "grey"}}
                      />
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2">
                  <label className="font-bold text-white">Remember Me</label>
                  <input
                    type="checkbox"
                    name="RememberMe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.RememberMe}
                  />
                </div>
                {!forgrtpd && (
                  <span>
                    <p>
                      <a
                        href="./Forgetpasword"
                        className="text-blue-400 hover:underline "
                        onClick={forgetpwd}
                      >
                        Forgetpasword
                      </a>
                    </p>
                  </span>
                )}
                {forgrtpd && <Forgetpasword />}
              </div>

              <div className="flex justify-center align-middle mt-2">
                <button
                  type="submit"
                  className="bg-slate-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mt-2"
                  onClick={handled}
                >
                  Submit
                </button>
              </div>

              <div className="flex justify-center align-middle mt-2 gap-2">
                <p className="text-white  ">Don't have an Account ? </p>
                <a
               
                  onClick={togglebtn}
                  className="   hover:underline cursor-pointer text-blue-400
                    "
                >
                  Signup
                </a>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <span>
          <Signup />
        </span>
      )}
    </div>
  );
};

export default Signin;
