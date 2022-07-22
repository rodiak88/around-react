function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup__active" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Close window"
          onClick={props.onClose}
        ></button>
        <form
          id={props.name}
          name={props.name}
          className="popup__form"
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          <fieldset className="popup__fieldset">{props.children}</fieldset>
          <button type="submit" className="popup__submit-btn">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
