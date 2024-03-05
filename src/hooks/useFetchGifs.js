import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifsInfo = async () => {
        const infoGifs = await getGifs(category);
        setGifs(infoGifs)
    }

    useEffect(() => {
        getGifsInfo();
        setIsLoading(false);
    }, [])

    return {
        gifs,
        isLoading
    };
};
