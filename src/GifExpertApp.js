import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GitGrid } from './components/GitGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory
                setCategories={setCategories}
            />
            <ol>
                {
                    categories.map(category => (
                        <GitGrid 
                        key={category} 
                        category={category} />
                        ))
                }
            </ol>
        </>
    )
}
export default GifExpertApp;
