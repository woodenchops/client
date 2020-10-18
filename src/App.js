import React, {Component} from 'react';
import './App.css';
import List from './components/List';
import EditListItem from './components/EditListIem'; 

class App extends Component {

  state = {
    editMode: false,
    items: [
      {
        name: 'Bread',
        price: 1.90
      },
      {
        name: 'Milk',
        price: 1.90
      }
    ]
  }

  saveItemName = (value, id) => {
    this.setState({
      items: [...this.state.items.map((x, indx) =>  {
        return {
          ...x, 
         name: (indx === id) ? value : x.name
        }
      })],
      editMode: false
    });
  }

  editItem = () => {
    this.setState({
      editMode: true
    })
  }

  render() {
    const {items, editMode} = this.state
    return (
      <div className="App">
        <h1>hello</h1>
        <ul>
          { (items) && (items.map((item, idx) => (
              (!editMode) ? <List key={idx} name={item.name} itemId={idx} editItem={this.editItem}/> : (<EditListItem key={idx} name={item.name} itemId={idx} saveItemName={this.saveItemName}/>)
          ))) }
        </ul>
      </div>
    );
  }
}

export default App;
