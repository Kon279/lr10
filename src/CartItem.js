import React from 'react';
import { useGlobalContext } from './context';

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => remove(id)}>
          Remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increase(id)}>
          +
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => decrease(id)}>
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
