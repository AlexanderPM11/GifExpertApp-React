export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EaIUNQXc1bakoewJI8cMIB3Yv85PDcgH&q=${category}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((gif) => ({
        id: gif.id,
        url: gif.images.fixed_height.url,
        title: gif.title
    }))
    return gifs;
}