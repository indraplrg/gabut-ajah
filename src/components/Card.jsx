import { FilmsContext } from "../pages/Home";
import { useContext } from "react";

const Card = () => {
   const { search } = useContext(FilmsContext);

   return (
      <>
         {search.map((e) => {
            <div className="w-full relative" key={e.imdbID}>
               <img
                  src="https://source.unsplash.com/1550x450"
                  alt=""
                  className="max-h-min"
               />
               <div className="absolute -bottom-52 px-2 flex gap-x-5">
                  <div className="w-[200px] rounded-md shadow-lg overflow-hidden bg-transparent">
                     <img
                        src="https://source.unsplash.com/200x200"
                        alt=""
                        className="w-full"
                     />
                     <h3 className="p-2 text-white">Title</h3>
                  </div>
               </div>
            </div>;
         })}
      </>
   );
};

export default Card;
