import React, {useContext} from 'react';
import AddItemForm from '../components/AddItemForm';
import ShoppingCart from '../components/ShoppingCart';
import Selection from '../components/Selection.jsx';
import { MasterContext } from '../contexts/MasterContext';



const Shop = () => {

    const {
        items,
        admin,
        saveItemName,
        deleteItemFromOptionList,
        addOneMoreToCart,
        deleteOneMoreFromCart,
        addItemToOptionsList,
        total,
        setTotal,
        login
    } = useContext(MasterContext);

    return ( 
        <>

        <button onClick={() => login()}>Log in as admin</button>
        <Selection 
          items={items}
          admin={admin} 
          saveItemName={saveItemName} 
          deleteItemFromOptionList={deleteItemFromOptionList} 
          addOneMoreToCart={addOneMoreToCart}
          deleteOneMoreFromCart={deleteOneMoreFromCart}
        />
        <AddItemForm 
          admin={admin} 
          addItemToOptionsList={addItemToOptionsList}
        />
        <ShoppingCart 
          total={total}
          items={items}
          setTotal={setTotal}
        />

        </>
     );
}
 
export default Shop;