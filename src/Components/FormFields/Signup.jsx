import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Signin from "./Signin";
import { useFormik } from "formik";
import { FormSchemea } from "./Formscheme";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showpwd, setshowpwd] = useState();
  const [togglrbtn, settogglebtn] = useState(false);

  const initialValue = {
    Username: "",
    Email: "",
    Password: "",
    CfmPassword: "",
    id: useId(),
  };

  const {
    handleSubmit,
    handleChange,
    touched,
    setTouched,
    resetForm,
    values,
    errors,

    handleBlur,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: FormSchemea,
    onSubmit: (values) => {
      console.log(values);
      setTouched({
        Username: true,
        Email: true,
        Password: true,
        CfmPassword: true,
      });

      const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
      const matchingNote = existingNotes.find(
        (note) =>
          note.Email === values.Email && note.Password === values.Password
      );

      if (matchingNote) {
        alert("choose another email and pasword");
        return;
      }
      const updatedNotes = [...existingNotes, values];

      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      resetForm();
      navigate("./Notes");
    },
  });

  const togglrBtn = () => {
    settogglebtn(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(true);
    if (showPassword) {
      setShowPassword(false);
    }
  };

  const togglepwd = () => {
    setshowpwd(true);
    if (showpwd) {
      setshowpwd(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg h-screen flex items-center justify-center">
      <div className="fixed inset-0 overflow-hidden bg h-screen">
        <img
          src="/assets/wallpaperflare.com_wallpaper.jpg"
          className="w-full  object-cover fixed inset-0 "
        />
      </div>
      {!togglrbtn && (
        <div className="bg-gradient-to-r absolute    ">
          <div className="grid justify-self-end">
            <form
              onSubmit={handleSubmit}
              className="w-96  rounded-lg shadow-md p-6 bg-gray-700  "
            >
              <h2 className="text-3xl mb-6 text-center text-white font-bold">
                Sign Up
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="Username"
                  className="block font-semibold text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="Username"
                  onBlur={handleBlur}
                  value={values.Username}
                  placeholder="Username"
                  onChange={handleChange}
                  name="Username"
                  className="w-full px-3 bg-slate-300 text-black py-2  border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.Username && touched.Username ? (
                  <span style={{ color: "red" }}>{errors.Username} </span>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Email"
                  className="block font-semibold text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  onBlur={handleBlur}
                  value={values.Email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full px-3 bg-slate-300 text-black py-2 border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.Email && touched.Email ? (
                  <span style={{ color: "red" }}>{errors.Email} </span>
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
                    type={showPassword ? "text" : "password"}
                    id="Password"
                    name="Password"
                    onBlur={handleBlur}
                    value={values.Password}
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-300 text-black border border-transparent  rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.Password && touched.Password ? (
                    <span style={{ color: "red" }}>{errors.Password} </span>
                  ) : null}
                  <span
                    className="absolute right-4 bottom-px top-2/4 transform -translate-y-2/4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FiEyeOff
                        style={{ color: values.Password ? "black" : "grey" }}
                      />
                    ) : (
                      <FiEye
                        style={{ color: values.Password ? "black" : "grey" }}
                      />
                    )}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="CfmPassword"
                  className="block font-semibold text-white"
                >
                  Confirm Password:
                </label>
                <div className="relative">
                  <input
                    type={showpwd ? "text" : "password"}
                    id="CfmPassword"
                    name="CfmPassword"
                    onBlur={handleBlur}
                    value={values.CfmPassword}
                    placeholder="CfmPassword"
                    onChange={handleChange}
                    className="w-full px-3 py-2 shadow-slate-950	 bg-slate-300 text-black border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    
                  />
                  <span style={{ background: values.CfmPassword ? "white" : "transparent" }}>

                  </span>
                  {errors.CfmPassword && touched.CfmPassword ? (
                    <span style={{ color: "red" }}>{errors.CfmPassword} </span>
                  ) : null}
                  <span
                    className="absolute right-4 bottom-px top-2/4 transform -translate-y-2/4 cursor-pointer"
                    onClick={togglepwd}
                  >
                    {showpwd ? (
                      <FiEyeOff
                        style={{
                          color: values.CfmPassword ? "black" : "grey",
                        }}
                      />
                    ) : (
                      <FiEye
                        style={{
                          color: values.CfmPassword ? "black" : "grey",
                        }}
                      />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex justify-center align-middle">
                <button
                  type="submit"
                  className="bg-slate-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded  transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Submit
                </button>
              </div>
              <div className="flex justify-center align-middle mt-2 gap-2">
                <p className="text-white "> Click to Sigin </p>
                <a
                  onClick={togglrBtn}
                  className=" hover:underline cursor-pointer text-blue-400"
                >
                  Signin
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
      {togglrbtn && (
        <span>
          <Signin />
        </span>
      )}
    </div>
  );
}

export default Signup;
