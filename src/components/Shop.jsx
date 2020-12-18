import React, {useContext} from 'react';
import AddItemForm from '../components/AddItemForm';
import ShoppingCart from '../components/ShoppingCart';
import Selection from '../components/Selection.jsx';
import { MasterContext } from '../contexts/MasterContext';



const Shop = () => {

    const {
        admin,
        login
    } = useContext(MasterContext);

    return ( 
        <>
          <button onClick={() => login()}>{admin ? 'log out as admin' : 'log in as admin'}</button>
          <Selection/>
          <AddItemForm/>
          <ShoppingCart/>
        </>
     );
}
 
export default Shop;