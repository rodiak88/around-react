import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] =
    React.useState(false);

  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] =
    React.useState(false);

  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(undefined);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpened(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpened(false);
    setIsAddPlacePopupOpened(false);
    setIsEditAvatarPopupOpened(false);
    setSelectedCard(undefined);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="edit-popup"
          title="Edit profile"
          isOpen={isEditProfilePopupOpened}
          buttonText="Save"
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            id="name-input"
            className="popup__input"
            placeholder="Name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            type="text"
            name="about"
            id="description-input"
            className="popup__input"
            placeholder="Description"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error description-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add-popup"
          title="New place"
          isOpen={isAddPlacePopupOpened}
          buttonText="Create"
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="title"
            id="title-input"
            className="popup__input"
            placeholder="Title"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="popup__input-error title-input-error"></span>
          <input
            type="url"
            name="link"
            id="link-input"
            className="popup__input"
            placeholder="Image link"
            required
          />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit-avatar-popup"
          title="Change profile picture"
          isOpen={isEditAvatarPopupOpened}
          buttonText="Save"
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link"
            id="avatar-link-input"
            className="popup__input"
            placeholder="Image link"
            required
          />
          <span className="popup__input-error avatar-link-input-error"></span>
        </PopupWithForm>

        <PopupWithImage card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
