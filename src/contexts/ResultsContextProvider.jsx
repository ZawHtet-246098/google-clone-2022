import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");

  //   /videos, /search, /images, /news
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "fe8d6e6d52msh5a8b7aae978daa6p1479b0jsnfef4e6764d77",
      },
    });
    const data = await response.json();

    // if (type === `/news/q=${searchTerm}&num=40`) {
    //   //       console.log(true);
    //   let newData = data.entries;
    //   setResults(newData);
    //   // } else if (type.includes("/images")) {
    //   //   console.log(true);
    //   //   setResults(data.image_results);
    // } else {
    //   setResults(data);
    // }
    setResults(data);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);

// import React, { createContext, useContext, useState } from "react";

// const ResultContext = createContext();

// const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

// export const ResultContextProvider = ({ children }) => {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("Elon Musk");

//   //videos, search, images,
//   const getResults = async (type) => {
//     setIsLoading(true);
//     const response = await fetch(`${baseUrl}${type}`, {
//       // const response = await fetch(`${baseUrl}/image/q=JS%20Mastery&num=40`, {
//       method: "GET",
//       headers: {
//         "X-User-Agent": "desktop",
//         "X-Proxy-Location": "EU",
//         "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
//         "X-RapidAPI-Key": "fe8d6e6d52msh5a8b7aae978daa6p1479b0jsnfef4e6764d77",
//       },
//     });

//     const data = await response.json();
//     // console.log(type);

//     if (type === `/news/q=${searchTerm}&num=40`) {
//       console.log(true);
//       let newData = data.entries;
//       setResults(newData);
//       // }
//       // else if (type.includes("/images")) {
//       //   console.log(true);
//       //   setResults(data.image_results);
//     } else {
//       setResults(data);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <ResultContext.Provider
//       value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
//     >
//       {children}
//     </ResultContext.Provider>
//   );
// };

// export const useResultContext = () => useContext(ResultContext);
