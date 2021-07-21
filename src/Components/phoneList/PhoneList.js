import React from "react";
import PhoneListItem from "../phoneListItem/PhoneListItem";
import { PhoneListStyle } from "./PhoneListStyled";

const PhoneList = ({ phones }) => {
  return (
    <PhoneListStyle>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} />
      ))}
    </PhoneListStyle>
  );
};

export default PhoneList;
