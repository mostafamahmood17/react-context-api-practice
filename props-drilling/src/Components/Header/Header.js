import React, { useState, useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext)
  
    return (
        
        <div>
            <h1>Header : {category}</h1>
            <button onClick={() => setCategory(category+1)}>Increment</button>
            <button onClick={() => setCategory(category-1)}>decrement</button>
            
        </div>
    );
};

export default Header;