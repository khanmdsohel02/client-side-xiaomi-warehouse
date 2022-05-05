import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact";
import MyBlog from "./components/MyBlog/MyBlog";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs"
import Inventory from "./components/Inventory/Inventory";
import ManageInventories from "./components/ManageInventories/ManageInventories";


function App() {
  return (

    <>
      <Navigation />
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/blog" element={<MyBlog/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manageInventories" element={<ManageInventories/>} />
        <Route path="/home" element={<Home/>} />
        

      </Routes>
    </>
  )
}

export default App;
