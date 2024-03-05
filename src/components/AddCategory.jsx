import { useState } from "react"
export const AddCategory = ({ onAddCategory }) => {


    const [inputValue, setinputValue] = useState('One Punch');

    // Me quede en el punto de emitir evento al padre

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

        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Buscar Gifs"
                onChange={onInputChange}

            />
        </form>
    )
}