import React from "react";
import data from "../../../data/index";
import colors from "../../../styles/color";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderListStyled colors={colors}>
      {data.header.map((headerItem) => (
        <li className="headerListItem" key={headerItem}>
          <a className="headerListItemLink" href="./#">
            {headerItem}
          </a>
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
