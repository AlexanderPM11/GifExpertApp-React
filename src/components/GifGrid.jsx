
// import { getGifs } from "../helpers/getGifs"
import { GitItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading ? <h2>Cargando....</h2> : null
            }
            {
                <div className="card-grid">
                    {
                        gifs.map(gif => (
                            <GitItem key={gif.id} gif={gif} />
                        ))
                    }
                </div>

            }
        </>
    );
};


