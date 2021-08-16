import React, { createContext } from "react";
import useLangugesPersistor from "../hooks/useLangugesPersistor";
import Header from "./header/Header";
import Main from "./main/Main";

export const LanguagesContext = createContext();

const App = () => {
  const [language, setLanguages] = useLangugesPersistor();
  return (
    <>
      <LanguagesContext.Provider value={{ language, setLanguages }}>
        <Header />
        <Main />
      </LanguagesContext.Provider>
    </>
  );
};

export default App;
