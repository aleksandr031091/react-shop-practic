import React from "react";
import LaptopListItem from "../laptopsListItem/LaptopsListItem";

const LaptopList = ({ laptops }) => {
  return (
    <ul>
      {laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} />
      ))}
    </ul>
  );
};

export default LaptopList;
