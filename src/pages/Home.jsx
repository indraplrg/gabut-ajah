import { createContext, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export const FilmsContext = createContext();

const Home = () => {
   const [search, setSearch] = useState("");

   function requestData(e) {
      fetch(`https://www.omdbapi.com/?apikey=962a66dd&s=${e}`)
         .then((data) => {
            return data.json();
         })
         .then((data) => {
            setSearch(data.Search);
            console.log(data.Search);
         });
   }

   return (
      <>
         <FilmsContext.Provider value={{ search, requestData }}>
            <Navbar />
            <Card />
         </FilmsContext.Provider>
      </>
   );
};

export default Home;
