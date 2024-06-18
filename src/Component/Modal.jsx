// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-lg mx-auto my-6">
          
          <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
              <h3 className="text-xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
           
            <div className="relative p-6 flex-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
