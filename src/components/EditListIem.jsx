import React, {useState, useEffect, useContext} from 'react';
import {MasterContext} from '../contexts/MasterContext';

const EditListItem = ({name, price, stock, count, saveItemName, itemId, setEditMode}) => {

const {admin, calcTotal} = useContext(MasterContext);

const [product, setProduct] = useState({
      name: name,
      price: price,
      stock: stock
  });

  const handleInputChange = (e) => {
   e.persist();
   setProduct((prevProps) => ({
       ...prevProps,
       [e.target.name]: e.target.value
   }));
};

    const saveHandler = () => {
      if(product.name.length <= 0) {
         alert('no text');
         return;
      }
      saveItemName(product, itemId);
      calcTotal(itemId, count);
      setEditMode(false);
    };

    const cancelHandler = () => {
      setEditMode(false);
    };

    useEffect(() => {
      if(!admin) {
         setEditMode(false);
      }
    }, [admin, setEditMode])

    return ( 
        <>
           <label htmlFor="name">Enter item name</label>
           <input type="text" name='name' value={product.name} onChange={(e) => {handleInputChange(e);}}/><br></br>
           <label htmlFor="name">Enter item price</label>
           <input type="number" name='price' value={product.price} onChange={(e) => {handleInputChange(e);}}/><br></br>
           <label htmlFor="name">Enter item stock</label>
           <input type="number" name='stock' value={product.stock} onChange={(e) => {handleInputChange(e);}}/><br></br>
           <button onClick={() => { saveHandler() }}>save</button>
           <button onClick={() => { cancelHandler() }}>cancel</button>
        </>
     );
}
 
export default EditListItem;