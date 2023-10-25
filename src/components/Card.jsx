import { FilmsContext } from "../pages/Home";
import { useContext, useState } from "react";

const Card = () => {
   const [poster, setPoster] = useState("")
   const { search } = useContext(FilmsContext);

   return (
      <>
         <div className="w-full">
            <div className="w-full flex p-5 text-white">
            <img
               src={poster? poster : null}
               alt=""
               className="max-h-min"
            />
            <div>
               <table>
               </table>
            </div>
            </div>
            <div className="px-2 flex gap-x-5 w-full overflow-x-hidden flex-nowrap">
               {search &&
                  search.map &&
                  search.map((e) => {
                     return (
                        <div
                           className="w-[200px] rounded-md shadow-lg overflow-hidden bg-transparent cursor-pointer"
                           key={e.imdbID}
                           onClick={() => {setPoster(e.Poster)}}
                        >
                           <img
                              src={e.Poster}
                              alt={`Gambar ${e.Title}`}
                              className="w-full hover:scale-105 transition-all ease-in-out"
                           />
                           <h3 className="p-2 text-white">{e.Title}</h3>
                        </div>
                     );
                  })}
            </div>
         </div>
      </>
   );
};

export default Card;
