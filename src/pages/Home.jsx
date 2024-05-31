import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold my-8">Nuestros Productos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
