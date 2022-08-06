import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      title: title,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name="add-popup"
      title="New place"
      isOpen={isOpen}
      buttonText="Create"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        id="title-input"
        value={title || ""}
        onChange={handleTitleChange}
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
        value={link || ""}
        onChange={handleLinkChange}
        className="popup__input"
        placeholder="Image link"
        required
      />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
