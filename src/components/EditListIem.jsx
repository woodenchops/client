import React, {useState} from 'react';

const EditListItem = ({name, saveItemName, itemId, setEditMode}) => {

    const [val, setVal] = useState(name);

    const saveHandler = () => {
      if(val.length <= 0) {
         alert('no text');
         return;
      }
      saveItemName(val, itemId); 
      setEditMode(false);
    };

    return ( 
        <li>
           <input type="text" name={name} value={val} onChange={(e) => {setVal(e.target.value);}}/>
           <button onClick={() => { saveHandler() }}>save</button>
        </li>
     );
}
 
export default EditListItem;