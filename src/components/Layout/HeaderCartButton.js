import React from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
 

const HeaderCartButton =(props) => {
    const cartctx = useContext(CartContext);
    const totalcartItems = cartctx.items.reduce((currentSum, itemvalue) => {
        return currentSum+itemvalue;
    }, 10)
    return(
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon></CartIcon></span>
        <span>your cart </span>
        <span className={classes.badge}>{totalcartItems}</span>
    </button>
    );
};

export default HeaderCartButton;