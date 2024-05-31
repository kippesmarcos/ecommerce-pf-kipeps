import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import Alert from '../components/Alert/Alert';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta

  const handleConfirmPurchase = () => {
    clearCart();
    setShowAlert(true);
  };

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Productos ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className=' flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> ${' '}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'
            onClick={clearCart}>
            <FiTrash2 />
          </div>
        </div>
        <button
          className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'
          onClick={handleConfirmPurchase}>
          Confirmar Compra
        </button>
        <Link
          to={'/'}
          className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>
          Volver
        </Link>
      </div>
      {showAlert && <Alert message="Tu compra fue realizada. Este es tu número de orden." />}
    </div>
  );
};

export default Sidebar;