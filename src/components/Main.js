import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [initialCards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    api
      .processInitialRequests([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setInitialCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <div className="avatar__overlay">
            <button
              className="avatar__editBtn"
              onClick={props.onEditAvatarClick}
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name">
            <h1 className="profile__name-title">{userName}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              aria-label="Edit button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add-btn"
          type="button"
          aria-label="Add photo"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          {initialCards.map((card) => (
            <Card card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
