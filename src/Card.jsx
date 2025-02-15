import PropTypes from "prop-types";
import Button from "./Button/Button";


function Card({id = 0, url = "#", title = "Title", text = "Text"}) {
    return(
        <div className="card" data-id={id}>
            <img className="card-img" src={url} alt="" />
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
            <Button />
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}
export default Card;