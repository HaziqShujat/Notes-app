import { Routes, Route } from "react-router-dom";
import Signin from "./Components/FormFields/Signin";
import Signup from "./Components/FormFields/Signup";
import Notes from "./Components/UI/Notes";
import Forgetpasword from "./Components/FormFields/Forgetpasword";
import Resetpasword from "./Components/FormFields/Resetpasword";
import Protectroutes from "./Components/UI/Protectroutes";
import { useState } from "react";


function App() {


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Signin   />} />
        <Route path="/signup" element={<Signup   />} />
        <Route path="/Notes" element={    <Notes />}  />
        <Route exact path="/Forgetpasword" element={<Forgetpasword />} />
        
        <Route  exact path="/Resetpasword" element={<Resetpasword />} />
        
         <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      
    </div>
  );
}

export default App;
