import { useEffect, useState } from "react";
import languages from "../languages/index";

const useLangugesPersistor = () => {
  const getLanguage = () => {};

  const [language, setLanguages] = useState(getLanguage());

  useEffect(() => {}, [language]);

  return [language, setLanguages];
};

export default useLangugesPersistor;
