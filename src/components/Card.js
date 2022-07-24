function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <div
        className="card__photo-container"
        role="img"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      >
        <button className="card__delete-btn" type="button"></button>
      </div>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className="card__like-btn" type="button"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
