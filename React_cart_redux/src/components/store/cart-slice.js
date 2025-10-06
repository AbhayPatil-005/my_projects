import { createSlice } from "@reduxjs/toolkit";

import { toggleActions } from "./toggle-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            const { items = [], totalQuantity = 0, totalAmount = 0 } = action.payload || {};
            state.items = items;
            state.totalQuantity = totalQuantity;
            state.totalAmount = totalAmount;
            state.changed = false;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.totalAmount += newItem.price;
            state.changed = true;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (!existingItem) return;
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});

export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            toggleActions.showNotification({
                status: "pending",
                title: "Fetching...",
                message: "Fetching cart data!",
            })
        );

        try {
            const response = await fetch(
                "https://react-project-fd0a2-default-rtdb.firebaseio.com/cart.json"
            );

            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();
            dispatch(
                cartActions.replaceCart({
                    items: data?.items || [],
                    totalQuantity: data?.totalQuantity || 0,
                    totalAmount: data?.totalAmount || 0,
                })
            );

            dispatch(
                toggleActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Fetched cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                toggleActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed: " + (error.message || error),
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            toggleActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        try {
            const response = await fetch(
                "https://react-project-fd0a2-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }

            dispatch(
                toggleActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );

            dispatch(cartActions.replaceCart({
                items: cart.items || [],
                totalQuantity: cart.totalQuantity || 0,
                totalAmount: cart.totalAmount || 0,
            }));
        } catch (error) {
            dispatch(
                toggleActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed: " + (error.message || error),
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice;