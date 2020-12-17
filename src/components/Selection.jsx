import React from 'react';
import List from '../components/List';

const Selection = ({items, admin, saveItemName, deleteItemFromOptionList, addOneMoreToCart, deleteOneMoreFromCart}) => {

    return (
      <>
      <h3>Options list</h3>
      <p>log in as an admin to add or delete products from the options list</p>
        <ul>
          { (items) && (items.map((item, idx) => (
              <List 
              key={idx} 
              admin={admin} 
              name={item.name} 
              price={item.price} 
              stock={item.stock}
              count={item.count} 
              itemId={idx} 
              saveItemName={saveItemName} 
              deleteItemFromOptionList={deleteItemFromOptionList} 
              addOneMoreToCart={addOneMoreToCart}
              deleteOneMoreFromCart={deleteOneMoreFromCart}
              /> 
          ))) }
        </ul>
        <hr/>
        </>
     );
}
 
export default Selection;