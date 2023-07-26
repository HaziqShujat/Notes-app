import React, { useState } from "react";
import Signin from "./Signin";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Forgetpasword() {
  const [resetpwd, setResetpwd] = useState(false);
  const [email, setmail] = useState("");
  const navigate = useNavigate();

  function REsetpsd() {
    setResetpwd(true);
  }

  function handleChange(e) {
    setmail(e.target.value);
  }

  function generatePassword(passwordLength) {
let password = '';
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
    return password
  }

  async function resetemail(e) {
    e.preventDefault();
   
    const password = generatePassword(12);
    console.log(password)

    emailjs.init("service_4tldoj2");

    const emailTemplateParams = {
      from_name :"Notes App",
      to_email: email,
      new_password: password,
    };

    try {
      const result = await emailjs.send(
        "service_4tldoj2", 
        "template_t2i6zrp",   
        emailTemplateParams,
        "2gFwNzizmM_leHr5h"  
      );

      alert("Email sent:", result);
    } catch (error) {
      alert("Email sending error:", error);
    }
    navigate("./");
   

  

    const existingNotes = JSON.parse(localStorage.getItem("notes"));
    const matchingNote = existingNotes.find((note) => note.Email === email);

    if (!matchingNote) {
      alert("Email does not exist.");
      return;
    }
    if(matchingNote){
      setmail("");
      
    }

   
    

    REsetpsd();
    
  }

  return (
    <div>
      {!resetpwd && (
        <div className="min-h-screen flex items-center justify-center">
          <form
            className="bg-gradient-to-r from-purple-200 to-indigo-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={resetemail}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                name="Email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {resetpwd && <Signin />}
    </div>
  );
}

export default Forgetpasword;
