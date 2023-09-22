import React, { useState } from "react";
import dataContext from "./datacontext";
const ContextProvider = (props) => {
    const [books, setBooks] = useState([]);

  return (
    <div>
      <dataContext.Provider
        value={{
          books,
          setBooks
          
        }}
      >
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default ContextProvider;
