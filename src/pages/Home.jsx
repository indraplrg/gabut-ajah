import { createContext, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export const FilmsContext = createContext();

const Home = () => {
   const [search, setSearch] = useState("");
   const [id, SetId] = useState("");

   function requestData(e, by) {
      fetch(`https://www.omdbapi.com/?apikey=962a66dd&${by}=${e}`)
         .then((data) => {
            return data.json();
         })
         .then((data) => {
            if (by == "s") {
               setSearch(data.Search);
            } else {
               SetId(data);
            }
         });
   }

   return (
      <>
         <FilmsContext.Provider value={{ search, requestData, id }}>
            <Navbar />
            <Card />
         </FilmsContext.Provider>
      </>
   );
};

export default Home;
