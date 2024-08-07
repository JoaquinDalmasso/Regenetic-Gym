import Navbar from "@/scenes/navbar";
import Inicio from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import ContactUs from "@/scenes/contactUs";
import Benefits from "@/scenes/benefits";
import Footer from "@/scenes/footer";
import OurClasses from "@/scenes/ourClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Inicio);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(() => {
  const handleScroll = () => {

    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Inicio);
    } 
    if (window.scrollY !== 0) {
      setIsTopOfPage(false);
    }
  };

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll);
}, [])

  return (
      <div className='app bg-gray-20'>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Inicio setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
        </div>
  );
}

export default App
