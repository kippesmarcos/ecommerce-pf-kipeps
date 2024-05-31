import React from 'react';
import WomanImg from '../img/jordan.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase text-white'>
            <div className='w-10 h-[3px] bg-gray-500 mr-3'></div>
            Nueva Coleccion
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4 text-white'>
            NIKE <br />
            <span className='font-semibold'>HOMBRES</span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary text-white'>
            Ver Productos
          </Link>
        </div>

        {/* img */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
