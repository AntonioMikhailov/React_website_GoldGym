import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contacts from './pages/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import Sections from "./pages/Sections/Sections";
import Coaches from "./pages/Coaches/Coaches";
import Blogs from "./pages/Blogs/Blogs";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import CoachesSingle from "./pages/CoachesSingle/CoachesSingle";
import BlogsSingle from "./pages/BlogsSingle/BlogsSingle";
import Nav from './components/Nav/Nav'
import AnchorButton from "./components/AnchorButton/AnchorButton";
import ChatPopUp from "./components/ChatPopUp/ChatPopUp";
 
  

function App() {
  const location = useLocation();
 useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);
 
  Nav();
  return (
    <>
 
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/sections" element={<Sections/>} />
        <Route path="/coaches" element={<Coaches/>} />
        <Route path="/coaches/:id" element={ <CoachesSingle/> } />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:id" element={<BlogsSingle/>} />
       
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    <SpecialOffer/>
      <Footer />
      <ChatPopUp/>
      <AnchorButton/>

    </>
  );
}
export default App;
