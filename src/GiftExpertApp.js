import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Full Metal']);

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