import React, {useContext, useMemo, useEffect} from 'react';
import { MasterContext } from '../contexts/MasterContext';
import classes from '../styles/ShoppingCart/ShoppingCart.module.css';


const ShoppingCart = () => {

const {total, items, setTotal} = useContext(MasterContext);

return ( 
    <div>
        <h3>In Cart:</h3>
        <ul>
            {useMemo(() => items && items.length > 0 && items.map((item, idx) => (
              
                <li key={idx}>
                    {item.count > 0 && `${item.name}  (${item.count})`} {(item.stock === 0 && <span className={classes.NoStock}> - None left in stock</span>)}
                </li> 
                
            )), [items])}
        </ul>
        <span>{useMemo(() => `total: ${(total < 0 ? setTotal(0) : parseFloat(total).toFixed(2))}`, [total, setTotal])}</span>
    </div>
);
}
 
export default ShoppingCart;