import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function ImageModal({ isOpen, onRequestClose, selectedImage }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selected Image"
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <div className="flex justify-end absolute top-0 right-0 mt-2 mr-2">
        <button className="text-white text-xl" onClick={onRequestClose}>
          &times;
        </button>
      </div>
      <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
    </Modal>
  );
}

export default ImageModal;
