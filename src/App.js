import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact";
import MyBlog from "./components/MyBlog/MyBlog";
import Login from "./components/User/LogIn";
import AboutUs from "./components/AboutUs/AboutUs"
import Inventory from "./components/Inventory/Inventory";
import SignUp from "./components/User/SignUp";
import RequireAuth from "./components/RequireAuth/RequireAuth"
import MyItems from "./components/MyItems/MyItems";
import AddItem from "./components/AddItem/AddItem";
import SingleItemUpdate from "./components/SingleItemUpdate/SingleItemUpdate";
import NotFound from "./components/Notfound/NotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (

    <>
      <Navigation />
      <Toaster/>
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/manageInventories" element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        } />
        <Route path="/blog" element={<MyBlog/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/additem" element={<AddItem/>} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/detailupdate/:id" element={
          <RequireAuth>
            <SingleItemUpdate/>
          </RequireAuth>

        } />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </>
  )
}

export default App;
