import PropTypes from 'prop-types';

export const GitItem = ({ gif }) => {
    return (
        <div className="card">
            <img className="img-custom" src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    );
};

GitItem.propTypes = {
    gif: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};
