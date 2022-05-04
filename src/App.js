import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact";
import MyBlog from "./components/MyBlog/MyBlog";
import Login from "./components/Login/Login";


function App() {
  return (

    <>
      <Navigation />
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<MyBlog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        

      </Routes>
    </>
  )
}

export default App;
