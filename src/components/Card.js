function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div
        className="card__photo-container"
        role="img"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      >
        <button className="card__delete-btn" type="button"></button>
      </div>
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button className="card__like-btn" type="button"></button>
          <p className="card__like-count">0</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
