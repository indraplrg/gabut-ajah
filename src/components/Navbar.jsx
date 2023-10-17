import { FilmsContext } from "../pages/Home";
import { useContext, useState } from "react";

const Navbar = () => {
   const { requestData } = useContext(FilmsContext);
   const [film, setFilms] = useState("");

   return (
      <div className="flex p-4 rounded-md shadow-md bg-transparent items-center justify-between">
         <h1 className="text-xl font-semibold text-white">Gabut-Ajah</h1>
         <div className="border-2 p-1 rounded-md">
            <input
               type="text"
               placeholder="Films"
               className="outline-none px-1 bg-transparent"
               onChange={(e) => setFilms(e.target.value)}
            />
            <button
               className="text-white px-2 py-1 rounded-md ease-in-out transition-all"
               onClick={() => {
                  requestData(film);
               }}
            >
               Search
            </button>
         </div>
      </div>
   );
};

export default Navbar;
