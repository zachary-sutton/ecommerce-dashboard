import React from 'react';
import './css/style.css';
import Header from './components/Header';
import Orders from './components/Orders';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      secondDropDisabled: true
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Orders />
      </div>
    );
  }

}

export default App;
