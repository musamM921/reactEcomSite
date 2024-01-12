import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'grey-chair.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table2.jpeg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa2.avif',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'sofa',
          price: '49.99'
        },
        {
          id: 1,
          title: 'Лампа',
          img: 'wall-lamp2.avif',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'light',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стул белый',
          img: 'chair-white.webp',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    };

    // Перемещение этой строки в метод componentDidMount
    // this.state.currentItems = this.state.items; 
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategoriy = this.chooseCategoriy.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  componentDidMount() {
    // Переместить установку currentItems сюда
    this.setState({ currentItems: this.state.items });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategoriy={this.chooseCategoriy} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategoriy(category) {
    if (category === 'all') {
      // Используйте this.setState, а не this.state
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
