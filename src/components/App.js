import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { PopupRenderingContext } from "../contexts/PopupRenderingContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] =
    React.useState(false);

  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] =
    React.useState(false);

  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] =
    React.useState(false);

  const [cardToDelete, setCardToDelete] = React.useState(undefined);

  const [isPopupRendering, setIsPopupRendering] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(undefined);

  const [currentUser, setCurrentUser] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    setCardToDelete(undefined);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    api
      .likeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDeleteClick(card) {
    setCardToDelete(card);
  }

  function handleCardDelete(card) {
    setIsPopupRendering(true);
    api
      .deleteCardData(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
        setCardToDelete(undefined);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPopupRendering(false);
      });
  }

  function handleUpdateUser(newData) {
    setIsPopupRendering(true);
    api
      .updateUserInfo(newData)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPopupRendering(false);
      });
  }

  function handleUpdateAvatar(newData) {
    setIsPopupRendering(true);
    api
      .updateUserAvatar(newData)
      .then((user) => {
        console.log(user);
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPopupRendering(false);
      });
  }

  function handleAddPlaceSubmit(newCard) {
    setIsPopupRendering(true);
    api
      .addCardData(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPopupRendering(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <PopupRenderingContext.Provider value={isPopupRendering}>
        <div className="page">
          <div className="page__container">
            <Header />
            <Main
              onEditProfileClick={handleEditProfileClick}
              onAddPlaceClick={handleAddPlaceClick}
              onEditAvatarClick={handleEditAvatarClick}
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onDeleteCardClick={handleCardDeleteClick}
            />
            <Footer />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpened}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpened}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />

            <AddPlacePopup
              isOpen={isAddPlacePopupOpened}
              onClose={closeAllPopups}
              onAddPlaceSubmit={handleAddPlaceSubmit}
            />

            <DeleteCardPopup
              card={cardToDelete}
              onClose={closeAllPopups}
              onDeleteCard={handleCardDelete}
            />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </div>
        </div>
      </PopupRenderingContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
