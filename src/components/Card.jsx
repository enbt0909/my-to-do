import React, { useState } from 'react';
import Modal from 'react-modal';

function Card(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const timestamp = new Date(props.content.timestamp);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const confirmDelete = () => {
    props.onDelete();
    closeModal();
  };

  let message = `${props.content.text}`;
  if (message.length >= 50) {
    message = message.substring(0, 50) + '... ';
  }

  return (
    <div className={props.className}>
      <div className="paragraph__del__box">
        <div className="card__title">
          <div className='title'>{props.title}</div>
          <button className="delete__btn" onClick={handleDelete}>
            <div className="img__box">
              <img src="/images/icons8-stornieren-188.png" alt="Bild" />
            </div>
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Bestätigungsdialog"
            className="myCustomModal"
          >
            <h2 style={{ color: '#fff' }}>{/*message*/}</h2>
            <div className="button__box__modal">
              <button className="button" onClick={closeModal}>nicht löschen</button>
              <button className="button" onClick={confirmDelete}>löschen</button>
            </div>
          </Modal>
        </div>

        <p className="card__paragraph">{props.content.text}</p>

        <div className="card__title__2">
          <p className="timestamp__now">{timestamp.toLocaleString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;