import React, { useContext } from 'react';
import Category from '../Category/Category';
import { CategoryContext } from '../../App';

const Home = () => {
    const [category, setaCategory] = useContext(CategoryContext)
   

    return (
        <div style = {{border : '1px solid red', margin: '10px', padding: '10px'}}> 
            <h2>Home : {category}</h2>
            <Category></Category>
            
        </div>
    );
};

export default Home;