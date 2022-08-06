import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm
      name="edit-popup"
      title="Edit profile"
      isOpen={isOpen}
      buttonText="Save"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        value={name || ""}
        onChange={handleNameChange}
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
        value={description || ""}
        onChange={handleDescriptionChange}
        id="description-input"
        className="popup__input"
        placeholder="Description"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error description-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
