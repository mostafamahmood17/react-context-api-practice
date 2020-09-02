import React, { useState, createContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Header/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category , setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category , setCategory]} className="App">
      <header className="App-header">
        <h1>App: {category}</h1>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
        
      </header>
    </CategoryContext.Provider>
  );
}

export default App;
