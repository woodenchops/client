import React, {useMemo} from 'react';

const ShoppingCart = ({total}) => {

return ( 
    <>
        <span>{useMemo(() => total.toFixed(2), [total])}</span>
    </>
);
}
 
export default ShoppingCart;