import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router,
  Routes,
  Route,
  }
  from "react-router-dom";


function App() {
  const user= false;
  return (
         <>
     <Router>
      <TopBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
     </Router>
         </>

 
  );
}

export default App;
