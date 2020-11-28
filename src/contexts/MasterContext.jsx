
import React, { Component, createContext } from 'react';

export const MasterContext = createContext();

export class MasterProvider extends Component {


    state = {
        admin: false,
        total: 0,
        items: [
          {
            name: 'Bread',
            price: 1.90,
            edit: false,
            count: 0,
            stock: 5
          },
          {
            name: 'Milk',
            price: 1.90,
            edit: false,
            count: 0,
            stock: 5
          }
        ],
    
    
      addItemToOptionsList: (product) => {
        let isAlreadyInCart = this.state.items.find(obj => obj.name.trim().toLowerCase() === product.name.trim().toLowerCase());
    
        if(isAlreadyInCart) {
          alert('item already in cart');
          return;
        }
          this.setState(prevState => {
            return {
              items: [...prevState.items, {name: product.name, price: parseFloat(product.price), edit: false, count: 0, stock: product.stock}]
            }
          });
        
      },
    
      saveItemName: (value, id) => {
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
      },
    
      deleteItemFromOptionList: (id, price, count) => {
        
        this.setState(prevState => {
          return {
            items: [...prevState.items.filter((x, indx) =>  {
             return (indx !== id);
            })],
            total: (prevState.total - (price * count))
          }
        });
      
      },
    
      login: () => {
        this.setState(prevState => {
          return {
            admin: !prevState.admin
          }
        })
      },

      convertTotalIntoTwoDecimals: (total, price, TYPE) => {
        let updatedTotal;
        switch(TYPE){
          case 'ADD':
            updatedTotal = parseFloat(total) + parseFloat(price);
            return parseFloat(updatedTotal).toFixed(2);
          case 'SUBTRACT':
            updatedTotal = parseFloat(total) - parseFloat(price);
            return parseFloat(updatedTotal).toFixed(2);
          default:
            return parseFloat(updatedTotal).toFixed(2);
        }
      },
    
      addOneMoreToCart: (id, itemPrice) => {
        this.setState(prevState => {
          return {
            items: [...prevState.items.map((x, indx) =>  {
              return {
                ...x, 
               count: (indx === id) ? (x.count + 1) : x.count,
               stock: (indx === id) ? (x.stock - 1) : x.stock,
              }
            })],
            total: this.state.convertTotalIntoTwoDecimals(prevState.total, itemPrice, 'ADD')
          }
        });
      },
    
      deleteOneMoreFromCart: (id, itemPrice, count) => {
        this.setState(prevState => {
          if(count > 0) {
          return {
            items: [...prevState.items.map((x, indx) =>  {
              return {
                ...x, 
               count: (indx === id) ? (x.count - 1) : x.count,
               stock: (indx === id) ? (x.stock + 1) : x.stock,
              }
            })],
            total: this.state.convertTotalIntoTwoDecimals(prevState.total, itemPrice, 'SUBTRACT')
          }
        }
        });
      },
    
      setTotal: (value) => {
        this.setState(prevState => {
          return {
            total: prevState.value = value
          }
        })
      }
    }
    render() { 
        
        return ( 
            <MasterContext.Provider value={{...this.state}}>
                {this.props.children}
            </MasterContext.Provider>
         );
    }
}