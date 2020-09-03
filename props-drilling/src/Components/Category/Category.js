import React, { useContext } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import { CategoryContext } from '../../App';

const Category = () => {
    const [category] = useContext(CategoryContext)
    
    
    return (
        <div>
            <h4>Select your Category</h4>
            <CategoryDetail count ={category}></CategoryDetail>
        </div>
    );
};

export default Category;