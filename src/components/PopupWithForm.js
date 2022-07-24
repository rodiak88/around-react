function PopupWithForm({ isOpen, onClose, name, title, buttonText, children }) {
  return (
    <div className={`popup ${isOpen ? "popup__active" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Close window"
          onClick={onClose}
        ></button>
        <form id={name} name={name} className="popup__form">
          <h2 className="popup__title">{title}</h2>
          <fieldset className="popup__fieldset">{children}</fieldset>
          <button type="submit" className="popup__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
