import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Category = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h4>Select Count :{category} </h4>
            <h5>i need a  {category}</h5>
        </div>
    );
};

export default Category;