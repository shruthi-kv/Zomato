import mealsImage from '../../assets/Meals.jpeg';
import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = () =>{
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
           <h1></h1>
        </header>
        <div className={classes['main-image']}>
            <img src ={mealsImage} alt="table full of meals"></img>
        </div>
    </Fragment>
    )
}


export default Header;
