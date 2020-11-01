import React, {useMemo} from 'react';

const ShoppingCart = ({total, items, setTotal}) => {

return ( 
    <>
        <h3>In Cart:</h3>
        <ul>
            {useMemo(() => items && items.length > 0 && items.map((item, idx) => (
                <>
                <li>
                    {item.count > 0 && `${item.name}  (${item.count})`}
                </li> 
                </>
            )), [items])}
        </ul>
        <span>{useMemo(() => `total: ${(total < 0 ? setTotal(0) : parseFloat(total).toFixed(2))}`, [total, setTotal])}</span>
    </>
);
}
 
export default ShoppingCart;