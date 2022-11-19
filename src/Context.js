import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const getSearch =()=>{

}

export const AppContext = createContext();
const apiUrl = "https://example-data.draftbit.com/books?_limit=24";
const BooksProvider = (props) => {
    const [post, setPost] = useState([]);
 useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setPost(res.data);
    //   console.log(res.data);
    });
  }, []);
// console.log(post)
return(<AppContext.Provider value={{post}}>
{props.children}
</AppContext.Provider>


)
}
export default BooksProvider;
