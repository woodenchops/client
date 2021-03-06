import React, {useState, useCallback, useContext} from 'react';
import { MasterContext } from '../contexts/MasterContext';

const AddItemForm = () => {

    const {admin, addItemToOptionsList} = useContext(MasterContext);
    
    const [product, setProduct] = useState({
        name: '',
        price: '',
        stock: ''
    });

    const handleInputChange = (e) => {
        e.persist();
        setProduct((prevProps) => ({
            ...prevProps,
            [e.target.name]: e.target.value
        }))
    }

    const handleAddItem = useCallback((e) => {
        e.preventDefault(); 
        if(!product.name|| !product.price) {
            alert('enter name and price');
            return;
        } 
        addItemToOptionsList(product);
        setProduct({
            name: '',
            price: '',
            stock: ''
        });
    }, [addItemToOptionsList, product]);

    return (

        (admin) && 
        
        <>
        <h3>Add Item</h3>
            <form>
                <label htmlFor="name">Enter item name</label>
                <input type="text" name="name" id="name" value={product.name} onChange={handleInputChange}/><br></br>
                <label htmlFor="price">Enter item price</label>
                <input type="number" name="price" id="price" value={product.price} onChange={handleInputChange}/><br></br>
                <label htmlFor="stock">Enter item stock qty</label>
                <input type="number" name="stock" id="stock" value={product.stock} onChange={handleInputChange}/><br></br>
                <button onClick={(e) => { handleAddItem(e) }}>Add item</button>
            </form>
        </>

         
     );
}
 
export default AddItemForm;