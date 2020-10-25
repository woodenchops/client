import React from 'react';
import List from '../components/List';

const Selection = ({items, admin, saveItemName, deleteItemName, addOneMore, deleteOneMore}) => {
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
              deleteItemName={deleteItemName} 
              addOneMore={addOneMore}
              deleteOneMore={deleteOneMore}
              /> 
          ))) }
        </ul>
     );
}
 
export default Selection;