import React, { Component } from 'react';

export class Item extends Component {
  render() {
    const { title, desc, price } = this.props.item;

    return (
      <div className='item'>
        <img
          src={"./img/" + this.props.item.img}
          alt={this.props.item.title}
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price}$</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    );
  }
}

export default Item;
