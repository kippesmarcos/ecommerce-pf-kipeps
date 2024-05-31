import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Alert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    setOrderNumber(randomNumber);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 right-0 bg-gray-500 text-white py-2">
          <div className="flex justify-between items-center px-4">
            <span className="text-center flex-1">{message} {orderNumber && <span>Número de orden: {orderNumber}</span>}</span>
            <button onClick={handleClose}><FaTimes /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
