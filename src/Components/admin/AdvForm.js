import React, { useState, Component } from "react";
import { createNewAdv } from "../../services/Api";
import { AdvFormStyled } from "./AdvFormStyled";

const categories = ["phones", "laptops"];
const initialState = {
  name: "",
  image: "",
  description: "",
  price: "",
  isSale: false,
  category: categories[0],
};

const AdvForm = () => {
  const [state, setState] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setState((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await createNewAdv(state);
    this.props.addNewAdv({ ...state, id: response.data.name });
    this.setState({ ...initialState });
  };
  return (
    <AdvFormStyled onSubmit={onHandleSubmit} className="formAdv">
      <label>
        name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={onHandleChange}
        />
      </label>
      <label>
        image:
        <input
          type="text"
          name="image"
          value={state.image}
          onChange={onHandleChange}
        />
      </label>
      <label>
        description:
        <input
          type="text"
          name="description"
          value={state.description}
          onChange={onHandleChange}
        />
      </label>
      <label>
        price:
        <input
          type="text"
          name="price"
          value={state.price}
          onChange={onHandleChange}
        />
      </label>
      <label>
        isSale:
        <input
          type="checkbox"
          name="isSale"
          checked={state.isSale}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Категория:
        <select
          name="category"
          value={state.category}
          onChange={onHandleChange}
        >
          {state.categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Adv</button>
    </AdvFormStyled>
  );
};

export default AdvForm;
