import React, { useContext } from "react";
import languages from "../../languages";
import { LanguagesContext } from "../App";

const LenguagesSwitcher = () => {
  const { language, setLanguages } = useContext(LanguagesContext);

  const onSelectorChange = (e) => {
    const lang = e.target.value;
    setLanguages(lang);
  };
  return (
    <>
      <select value={language} onChange={onSelectorChange}>
        {languages.list.map((lang) => (
          <option value={lang} key={lang}>
            {lang}
          </option>
        ))}
      </select>
    </>
  );
};

export default LenguagesSwitcher;
