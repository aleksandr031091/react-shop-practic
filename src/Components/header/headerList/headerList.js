import React from "react";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      <ul className="navigationList">
        {mainRoutes.map((item) => (
          <li key={item} className="navigationListItem">
            <a href={`${item}`} className="headerListItemLink">
              {item.name[language]}
            </a>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
