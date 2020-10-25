import React, {useState, useCallback} from 'react';

const AddItemForm = ({addItem, admin}) => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handleAddItem = useCallback((e) => {
        e.preventDefault(); 
        if(!itemName || !itemPrice) {
            alert('enter name and price');
            return;
        } 
        addItem(itemName, itemPrice);
        setItemName('');
        setItemPrice('');
    }, [addItem, itemPrice, itemName])

    return (
        (admin) && 
        
        <>
        <h3>Add Item</h3>
            <form>
                <label htmlFor="name">Enter item name</label>
                <input type="text" name="name" id="name" value={itemName} onChange={(e) => setItemName(e.target.value)}/><br></br>
                <label htmlFor="name">Enter item price</label>
                <input type="text" name="price" id="price" value={itemPrice} onChange={(e) => {parseFloat(setItemPrice(e.target.value));}}/><br></br>
                <button onClick={(e) => { handleAddItem(e) }}>Add item</button>
            </form>
        </>

         
     );
}
 
export default AddItemForm;