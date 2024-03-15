import { useState } from "react"
import PropTypes from 'prop-types';
export const AddCategory = ({ onAddCategory }) => {


    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length === 0) return
        onAddCategory(inputValue.trim())
        setinputValue('')
    }
    return (

        <form onSubmit={onSubmit} aria-label="formua">
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar Gifs"
                onChange={onInputChange}

            />
        </form>
    )
}


AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}