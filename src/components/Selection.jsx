import React, {useContext} from 'react';
import List from '../components/List';
import {MasterContext} from '../contexts/MasterContext';


const Selection = () => {

  const {items} = useContext(MasterContext);

    return (
      <>
      <h3>Options list</h3>
      <p>log in as an admin to add or delete products from the options list</p>
        <ul>
          { (items) && (items.map((item, idx) => (
              <List 
              key={idx} 
              name={item.name} 
              price={item.price} 
              stock={item.stock}
              count={item.count} 
              itemId={idx} 
              /> 
          ))) }
        </ul>
        <hr/>
        </>
     );
}
 
export default Selection;