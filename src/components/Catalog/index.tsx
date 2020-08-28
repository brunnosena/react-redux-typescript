import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/apit';
import { addProductToCart } from '../../store/modules/cart/actions';


const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([])  

  useEffect(() => {
    api.get('/products')
    .then(res => setCatalog(res.data))
  }, [])

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span>  {'  '}

          <button 
            onClick={() => handleAddProductToCart(product)}
            type="button">Comprar</button>
        </article>
      ))}
    </main>


  );
}

export default Catalog;