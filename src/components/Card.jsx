import { FilmsContext } from "../pages/Home";
import { useContext, useState } from "react";

const Card = () => {
   const { search, requestData, id } = useContext(FilmsContext);

   return (
      <>
         <div className="w-full">
            <div className="w-full flex p-5 text-white">
               <img src={id ? id.Poster : null} alt="" className="max-h-min" />
               <div className="ml-3 text-lg">
                  {id && (
                     <table>
                        <tbody>
                           <tr>
                              <td>Title</td>
                              <td>: {id.Title}</td>
                           </tr>
                           <tr>
                              <td>Type</td>
                              <td>: {id.Type}</td>
                           </tr>
                           <tr>
                              <td>Genre</td>
                              <td>: {id.Genre}</td>
                           </tr>
                           <tr>
                              <td>Released</td>
                              <td>: {id.Released}</td>
                           </tr>
                           <tr>
                              <td>Actors</td>
                              <td>: {id.Actors}</td>
                           </tr>
                           <tr>
                              <td>Rating</td>
                              <td>: {id.imdbRating}</td>
                           </tr>
                           <tr>
                              <td>Plot</td>
                              <td>: {id.Plot}</td>
                           </tr>
                        </tbody>
                     </table>
                  )}
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
                           onClick={() => {
                              requestData(e.imdbID, "i");
                           }}
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
