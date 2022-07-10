import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 2) {
            setCategories((cat => [  inputValue, ...cat ]));
            setInputValue( '' );
        }       
        // console.log( 'Disparando handleSubmit()' );
    }

    const handleChangeInput = (e) => {        
        setInputValue( e.target.value );
        // console.log( 'HandleInputChange llamdo' );
    }


    return(
        <form onSubmit={ handleSubmit }>
            <span>{ inputValue }</span>
            <br/>
            <input            
                value={ inputValue }
                onChange={ handleChangeInput }                
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;