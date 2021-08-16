import { useEffect, useState } from "react";
import languages from "../languages/index";

const useLangugesPersistor = () => {
  const getLanguage = () => {
    const lang = JSON.parse(localStorage.getItem("language"));
    return lang || languages.english;
  };

  const [language, setLanguages] = useState(getLanguage());

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return [language, setLanguages];
};

export default useLangugesPersistor;
