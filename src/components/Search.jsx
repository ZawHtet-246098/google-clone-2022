import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Links } from "./Links";
import { useResultContext } from "../contexts/ResultsContextProvider";

export const Search = () => {
  const [text, setText] = useState("Elon Musk");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div className="relative sm:ml-48 md:ml-62 md:-mt-10 -mt-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Google or type URL"
        className="sm:w-80 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg "
      />
      {text && (
        <button
          type="button"
          onClick={() => setText("")}
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { Links } from "./Links";
// import { useDebounce } from "use-debounce";
// import { useResultContext } from "../contexts/ResultsContextProvider";

// export const Search = () => {
//   const [text, setText] = useState("Elon Musk");
//   const { setSearchTerm } = useResultContext();
//   const [debounceValue] = useDebounce(text, 300);

//   useEffect(() => {
//     if (debounceValue) setSearchTerm(debounceValue);
//   }, [debounceValue]);
//   return (
//     <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 -mt-3">
//       <input
//         type="text"
//         value={text}
//         className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
//         placeholder="Search Goggl or type URL"
//         onChange={(e) => setText(e.target.value)}
//       />
//       {!text && (
//         <button
//           className="absolue top-1 5 right-4 text-2xl text-gray-500"
//           onClick={() => setSearchTerm("")}
//         >
//           X
//         </button>
//       )}
//       <Links />
//     </div>
//   );
// };
