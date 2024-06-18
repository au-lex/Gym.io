// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


import React, { useState } from 'react';
import Modal from '../Component/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p className="text-center">Modal Content Goes Here</p>
      </Modal>
    </div>
  );
};

export default App;
