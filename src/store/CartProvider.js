import CartContex from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContex = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContex.Provider value={cartContex}>{props.children}</CartContex.Provider>
  );
};



export default CartProvider