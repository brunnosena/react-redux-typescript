import React, {} from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

const styles = {
  tabela: {    
    border: '1px solid black'
  }
}

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  return (
    <table>
      <thead>
        <tr style={styles.tabela}>
          <th style={styles.tabela}>Produto</th>
          <th style={styles.tabela}>Preço</th>
          <th style={styles.tabela}>Quantidade</th>
          <th style={styles.tabela}>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3}>Total</td>
          <td>$180</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Cart;