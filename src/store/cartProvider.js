import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultcart = {
    items: [],
    totalAmount:0,
}

const cartManipulations = (state,action) => {
    if(action.type === 'ADD'){
        const updateditems = state.items.concate(action.item);
        const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items:updateditems,
            totalAmount:updatedtotalAmount
        };
    }
    return defaultcart;
}



const CartProvider = (props) => {
    const [cartState, cartStateUpdated] = useReducer(cartManipulations, defaultcart)
    
    const addItemtoCart = item => {
        cartStateUpdated({type:'ADD', item:item})
    };
    const removeItemfromCart = id => {
        cartStateUpdated({type:'REMOVE', id:id})
    };
   
    const myCartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem : addItemtoCart,
        removeItem : removeItemfromCart,
    }

    return <CartContext.Provider value={myCartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;