import React, { Component } from 'react';
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    const { title, desc, price } = this.props.item;

    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price}$</b>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    );
  }
}

export default Order;
