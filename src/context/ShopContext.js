import React, { createContext, useState } from "react"
import { PRODUCTS } from '../products'
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }

    return cart

}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());


    function getTotalCartAmount() {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }




        return totalAmount;
    }


    function increaseCount() {
        let count = 0;
        for (const val in cartItems) {
            if (cartItems[val] > 0) {
                count += cartItems[val]
            }
        }

        return count;
    }



    function addToCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    function removeFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    function updateCartItemCount(newAmount, itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const ContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        increaseCount
    }


    return <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>

}