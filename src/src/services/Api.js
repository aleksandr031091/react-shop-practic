import axios from "axios";

const BASE_URL = "https://shop-71581-default-rtdb.firebaseio.com/";

export const createNewAdv = async (product) => {
  try {
    const response = await axios.post(
      BASE_URL + `/adv/${product.category}.json`,
      product
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdv = async (id, category) => {
  try {
    const response = await axios.delete(
      BASE_URL + `/adv/${category}/${id}.json`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createNewOrder = async (order) => {
  try {
    const response = await axios.post(BASE_URL + `/orders.json`, order);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdvByCategory = async (category) => {
  try {
    const response = await axios.get(BASE_URL + `/adv/${category}.json`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
