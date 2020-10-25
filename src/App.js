import React, {Component} from 'react';
import './App.css';
import AddItemForm from './components/AddItemForm';
import ShoppingCart from './components/ShoppingCart';
import Selection from './components/Selection.jsx';

class App extends Component {

  state = {
    admin: false,
    total: 0,
    items: [
      {
        name: 'Bread',
        price: 1.90,
        edit: false,
        count: 0
      },
      {
        name: 'Milk',
        price: 1.90,
        edit: false,
        count: 0
      }
    ]
  }


  addItem = (itemName, itemPrice) => {
    let isAlreadyInCart = this.state.items.find(obj => obj.name.trim().toLowerCase() === itemName.trim().toLowerCase());

    if(isAlreadyInCart) {
      alert('item already in cart');
      return;
    }
      this.setState(prevState => {
        return {
          items: [...prevState.items, {name: itemName, price: parseFloat(itemPrice), edit: false, count: 0}]
        }
      });
    
  }

  saveItemName = (value, id) => {
    this.setState(prevState => {
      return {
        items: [...prevState.items.map((x, indx) =>  {
          return {
            ...x, 
           name: (indx === id) ? value : x.name
          }
        })]
      }
    });
  }

  deleteItemName = (id, price) => {
    this.setState(prevState => {
      return {
        items: [...prevState.items.filter((x, indx) =>  {
         return (indx !== id);
        })],
        total: prevState.total - price
      }
    });
  }

  login = () => {
    this.setState(prevState => {
      return {
        admin: !prevState.admin
      }
    })
  }

  addOneMore = (id, itemPrice) => {
    this.setState(prevState => {
      return {
        items: [...prevState.items.map((x, indx) =>  {
          return {
            ...x, 
           count: (indx === id) ? (x.count + 1) : x.count,
          }
        })],
        total: prevState.total + itemPrice
      }
    });
  }

  deleteOneMore = (id, itemPrice, count) => {
    this.setState(prevState => {
      if(prevState.total !== 0 || count > 0) {
      return {
        items: [...prevState.items.map((x, indx) =>  {
          return {
            ...x, 
           count: (indx === id) ? (x.count - 1) : x.count,
          }
        })],
        total: prevState.total - itemPrice
      }
    }
    });
  }

  
  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <button onClick={() => this.login()}>Log in as admin</button>
        <Selection 
          items={items}
          admin={this.state.admin} 
          saveItemName={this.saveItemName} 
          deleteItemName={this.deleteItemName} 
          addOneMore={this.addOneMore}
          deleteOneMore={this.deleteOneMore}
        />
        <AddItemForm 
          admin={this.state.admin} 
          addItem={this.addItem}
        />
        <ShoppingCart 
          total={this.state.total}
        />
      </div>
    );
  }
}

export default App;
