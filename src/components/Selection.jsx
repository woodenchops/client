import React from 'react';
import List from '../components/List';

const Selection = ({items, admin, saveItemName, deleteItemFromOptionList, addOneMoreToCart, deleteOneMoreFromCart}) => {
    return ( 
        <ul>
          { (items) && (items.map((item, idx) => (
              <List 
              key={idx} 
              admin={admin} 
              name={item.name} 
              price={item.price} 
              count={item.count} 
              itemId={idx} 
              saveItemName={saveItemName} 
              deleteItemFromOptionList={deleteItemFromOptionList} 
              addOneMoreToCart={addOneMoreToCart}
              deleteOneMoreFromCart={deleteOneMoreFromCart}
              /> 
          ))) }
        </ul>
     );
}
 
export default Selection;