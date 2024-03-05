
export const GitItem = (gif) => {
    return (
        <div className="card">
            <img className="img-custom" src={gif.gif.url} alt={gif.gif.title} />

            <p>{gif.gif.title}</p>
        </div>
    );
};
