import React, {useState, useCallback} from 'react';
import EditListItem from './EditListIem';

const List = ({name, price, count, addOneMore, deleteOneMore, itemId, saveItemName, deleteItemName, admin}) => {
    const [editMode, setEditMode] = useState(false);

    const handleDeleteItem = useCallback(() => {
        deleteItemName(itemId, price);
    }, [deleteItemName, itemId, price])

    return ( 
        <li>
            { (!editMode) ? 
            (<> <span name={name}>{name}</span> 
                <button onClick={() => addOneMore(itemId, price)}>+</button> 
                <button onClick={ () => deleteOneMore(itemId, price, count) }>-</button> 
                <span>{`(${count})`}</span>
               {(admin) &&
               <>
               <button onClick={() => setEditMode(true)}>Edit</button> 
               <button onClick={() => handleDeleteItem()}>Delete</button> 
               </>
               }
            </>) : 
            (<EditListItem name={name} setEditMode={setEditMode} itemId={itemId} saveItemName={saveItemName}/>)}  
        </li>
        
     );
}
 
export default List;