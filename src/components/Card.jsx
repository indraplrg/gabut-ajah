import { FilmsContext } from "../pages/Home";
import { useContext } from "react";

const Card = () => {
   const { search } = useContext(FilmsContext);

   return (
      <>
         <div className="w-full relative">
            <img
               src="https://source.unsplash.com/1550x450"
               alt=""
               className="max-h-min"
            />
            <div className="absolute -bottom-52 px-2 flex gap-x-5 border border-red-700 w-full overflow-x-hidden flex-nowrap">
               {search &&
                  search.map &&
                  search.map((e) => {
                     return (
                        <div
                           className="w-[200px] rounded-md shadow-lg overflow-hidden bg-transparent"
                           key={e.imdbID}
                        >
                           <img
                              src={e.Poster}
                              alt={`Gambar ${e.Title}`}
                              className="w-full"
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
