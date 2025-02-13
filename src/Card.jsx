import Button from "./Button/Button";

function Card() {
    return(
        <div className="card">
            <img className="card-img" src="https://images.stockcake.com/public/1/0/3/1036dc42-b815-4aa1-aec2-593734c041c4_medium/joyful-puppy-smiling-stockcake.jpg" alt="" />
            <h2 className="card-title">Laila</h2>
            <p className="card-text">Cute puppy</p>
            <Button />
        </div>
    );
}

export default Card;