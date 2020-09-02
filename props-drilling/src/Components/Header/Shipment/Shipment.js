import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    
    return (
        <div>
            <h1>shipment : {category}</h1>
            <button onClick = {()=>setCategory(category+1)}>increment</button>
            <button onClick = {()=>setCategory(category-1)}>increment</button>
        </div>
    );
};

export default Shipment;