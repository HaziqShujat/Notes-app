import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Resetpasword() {

    const navigate = useNavigate()

        const [showPassword, setShowPassword] = useState(false);
        const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (password === confirmPassword) {
       
     
    } else {
     
     alert('Pasword not matched')
    }
    navigate("./Notes");
  };
      
        const togglePasswordVisibility = () => {
          setShowPassword((prevShowPassword) => !prevShowPassword);
        };
  return (
    
    <div className="min-h-screen flex items-center justify-center">
    <form className="bg-white shadow-md rounded p-8" onSubmit={handleSubmit} >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
          New Password
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="new-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            className="absolute top-2 right-3 text-gray-500 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
          Confirm Password
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            className="absolute top-2 right-3 text-gray-500 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  );
}

export default Resetpasword;
