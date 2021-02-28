import { LOGIN_USER, ADD_PRODUCT, LOGOUT_USER } from "./actionTypes";

const initialState = {
  login: false,
  products: [],
  products_price_range: [0, 0],
  products_quantity_range: [0, 0],
  user: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        login: true,
        user: payload,
      };
    case ADD_PRODUCT:
      const updatedProducts = [...state.products, payload];
      return {
        ...state,
        products: updatedProducts,
        products_price_range: [
          Math.min.apply(
            Math,
            updatedProducts.map((product) => product.price)
          ),
          Math.max.apply(
            Math,
            updatedProducts.map((product) => product.price)
          ),
        ],
        products_quantity_range: [
          Math.min.apply(
            Math,
            updatedProducts.map((product) => product.quantity)
          ),
          Math.max.apply(
            Math,
            updatedProducts.map((product) => product.quantity)
          ),
        ]
      };
    case LOGOUT_USER:
      return {
        products: [],
        login: false,
        user: null,
        products_price_range: [0, 0],
        products_quantity_range: [0, 0],
      };
    default:
      return state;
  }
};

export default reducer;
