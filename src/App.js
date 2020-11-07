import React, {Component} from 'react';
import './App.css';
import Shop from './components/Shop';
import { MasterProvider } from './contexts/MasterContext';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <MasterProvider>
            <Shop/>
        </MasterProvider>
      </div>
    );
  }
}

export default App;
