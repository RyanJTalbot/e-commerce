import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const slectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.cartHidden
);

export const selectCartItemsCount = createSelector(
  [slectCartItems],
  cartItems =>
    cartItems.reduce( 
      (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)