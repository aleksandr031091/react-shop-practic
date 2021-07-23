import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { AdvFormStyled } from "./AdvFormStyled";
import colors from "../../styles/colors";

const categories = ["phones", "laptops"];

const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

class AdvForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    this.props.addNewAdv({ ...this.state, id: uuidv4() });
    this.setState({ ...initialState });
  };

  render() {
    const { name, image, description, price, isSale, category } = this.state;

    return (
      <AdvFormStyled colors={colors}>
        <form className="advForm" onSubmit={this.onHandleSubmit}>
          <label className="labelForm">
            Имя:
            <input
              className="inputForm"
              type="text"
              name="name"
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
          <label className="labelForm">
            Описание:
            <input
              className="inputForm"
              type="text"
              name="description"
              value={description}
              onChange={this.onHandleChange}
            />
          </label>
          <label className="labelForm">
            Цена:
            <input
              className="inputForm"
              type="number"
              name="price"
              value={price}
              onChange={this.onHandleChange}
            />
          </label>
          <label className="labelForm">
            Скидка:
            <input
              type="checkbox"
              name="isSale"
              checked={isSale}
              onChange={this.onHandleChange}
            />
          </label>
          <label className="labelForm">
            Категория:
            <select
              className="selectForm"
              name="category"
              value={category}
              onChange={this.onHandleChange}
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label className="labelForm">
            Фото:
            <input
              type="file"
              name="image"
              value={image}
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit">Добавить ОбЪявление</button>
        </form>
      </AdvFormStyled>
    );
  }
}

export default AdvForm;
