import React, {useState, useCallback} from 'react';
import EditListItem from './EditListIem';

const List = ({name, price, count, addOneMoreToCart, deleteOneMoreFromCart, itemId, saveItemName, deleteItemFromOptionList, admin}) => {


    const [editMode, setEditMode] = useState(false);

    const handleDeleteItem = useCallback(() => {
        deleteItemFromOptionList(itemId, price, count);
    }, [deleteItemFromOptionList, itemId, price, count]);

    let defaultListLayout = null;
    let editModeLayout = null;
    
    if(admin) {
        defaultListLayout = (
            <>
                <span name={name}>{name}</span> 
                <button onClick={() => setEditMode(true)}>Edit</button> 
                <button onClick={() => handleDeleteItem()}>Delete</button> 
            </>
        )
    } else {
        defaultListLayout = (
            <>
                <span name={name}>{name}</span>
                <button onClick={() => addOneMoreToCart(itemId, price)}>+</button> 
                <button onClick={ () => deleteOneMoreFromCart(itemId, price, count) }>-</button> 
            </>
        )
    }

    if(editMode) {
        editModeLayout = (
             <>
                <EditListItem name={name} setEditMode={setEditMode} itemId={itemId} saveItemName={saveItemName}/> 
             </>
        )

    }
    return ( 
        <li>
            {(!editMode) ? (defaultListLayout) : (editModeLayout)}
        </li>
        
     );
}
 
export default List;