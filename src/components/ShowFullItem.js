import React, { Component } from 'react';

export class ShowFullItem extends Component {
  render() {
    const { title, desc, price } = this.props.item;

    return (
      <div className='full-item'>
        <div>
        <img
          src={"./img/" + this.props.item.img}
          alt={title}
          onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price}$</b>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
      </div>
    );
  }
}

export default ShowFullItem;


