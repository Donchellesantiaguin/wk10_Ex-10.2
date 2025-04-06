import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function Song({ data }) {
    const { slug } = useParams();
    console.log("slug", slug);

    const selectedSong = data.find((song) => song.slug === slug);
    console.log("selectedSong", selectedSong);

    if (!selectedSong) {
        return <h1>Song not found</h1>;
    }

    return (
        <>   
            <nav>
                <Link to="/">Go Back Home</Link>
            </nav>
            <h1>{selectedSong.title}</h1>
            <p>{selectedSong.artist}</p>
            <img src={selectedSong.cover} alt={selectedSong.title} />
        </>
    );
}

Song.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
};