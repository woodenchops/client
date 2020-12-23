import React, {useState, useCallback, useContext} from 'react';
import EditListItem from './EditListIem';
import classes from '../styles/Buttons/Buttons.module.css';
import { MasterContext } from '../contexts/MasterContext';

const List = ({name, price, count, stock, itemId}) => {

    const {deleteItemFromOptionList, deleteOneMoreFromCart, addOneMoreToCart, saveItemName, admin} = useContext(MasterContext);


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
                <button disabled={stock === 0} className={stock === 0 ? classes.Disabled : ''} onClick={() => addOneMoreToCart(itemId, price, stock, count)}>+</button>
                <button onClick={ () => deleteOneMoreFromCart(itemId, price, count) }>-</button> stock <span>{stock}</span> 
            </>
        )
    }

    if(editMode) {
        editModeLayout = (
             <>
                <EditListItem count={count} name={name} price={price} stock={stock} setEditMode={setEditMode} itemId={itemId} saveItemName={saveItemName}/> 
             </>
        )

    }
    return ( 
        <li className={classes.ProductLi}>
            {(!editMode) ? (defaultListLayout) : (editModeLayout)}
        </li>
        
     );
}
 
export default List;