function PopupWithImage(props) {
  return (
    <div className={`popup ${props.card ? "popup__active" : ""}`}>
      <div className="popup__container popup__container_type_photoPreview">
        <button
          id="viewer-closeBtn"
          className="popup__close-btn popup__close-btn_type_place"
          type="button"
          aria-label="Close window"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__photo"
          src={props.card ? props.card.link : ""}
          alt={props.card ? props.card.name : ""}
        />
        <p className="popup__photoTitle">{props.card ? props.card.name : ""}</p>
      </div>
    </div>
  );
}

export default PopupWithImage;
