import { useState } from "react"
import { AddCategory, GifGrid } from "./components/Components"



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch',]);

    const onAddCategory = (value) => {
        if (categories.find(x => x.toLocaleLowerCase() === value.toLocaleLowerCase())) return;
        setCategories([value, ...categories])
    }


    return (
        <>
            <h3>GifExpertApp</h3>

            < AddCategory onAddCategory={(value) => onAddCategory(value)} />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                )
                )
            }

        </>
    )
}