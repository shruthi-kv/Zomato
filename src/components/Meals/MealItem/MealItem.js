import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Cart from '../../Cart/Cart';
const MealItem =(props) => {
   // const price = `$${props.price.toFix(2)}`
const Cartctx = useContext(CartContext);

   const addToCartHandler = amount => {
    Cartctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.id
    })
   };



    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
}

export default MealItem;