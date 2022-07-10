import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GiftExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState( defaultCategories );

    // const handleAdd = () => {
    //     setCategories( [ ...categories, 'Dead Note' ] );
    //     // setCategories(cats => [ ...cats, 'Deadth Note' ]);
    // };

    return (
        <main>
            <h2>GiftExpertApp</h2>
                <AddCategory setCategories={ setCategories } />
            <hr />
            
            <div>
                {
                    categories.map(category => {
                        return <GifGrid category={ category } key={ category }/>
                    })
                }

            </div>

        </main>
    )
}

export default GiftExpertApp;