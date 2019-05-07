import React from 'react';
import CartItem, {parseCost} from './CartItem';
import {NavLink} from 'react-router-dom';

const Cart = () => {
  const items = [
    {
      id: 1,
      name: 'Butterfly Ring',
      material: 'Sterling Silver, Rose Gold, Blue Topaz',
      description:
        'Drawing inspiration from an urban garden, the Return to Tiffany® Love Bugs collection transforms an icon into something unexpected and modern. A radiant blue topaz adds a pop of color of this striking butterfly ring.',
      imageName: 'butterfly_ring.jpg',
      unitCost: 1400.99,
      createdAt: '2019-04-28T00:11:55.365Z',
      updatedAt: '2019-04-28T00:11:55.402Z',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'JUSTE UN CLOU Bracelet',
      material: 'Pink Gold, Diamonds',
      description:
        'A nail becomes jewelry. Designed in 1970s New York, the first Juste un Clou bracelet reflected a wild, freewheeling era. Bold, modern, and innovative, Juste un Clou is a creative twist on a familiar object. This jewelry collection transcends the everyday, making the ordinary exquisite, for him and for her.',
      imageName: 'juste-un-clou-bracelet.jpg',
      unitCost: 43600,
      createdAt: '2019-04-28T00:11:55.365Z',
      updatedAt: '2019-04-28T00:11:55.405Z',
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Trinity Ring',
      material: 'White Gold, Yellow Gold, Pink Gold',
      description:
        "Designed by Louis Cartier in 1924, the Trinity ring is a signature design of the Cartier Maison. The three interlaced bands in pink, yellow and white gold symbolize love, fidelity and friendship. The ring has inspired the full Trinity collection, a timeless testament to life's most memorable loves.",
      imageName: 'trinity_ring.jpg',
      unitCost: 1140,
      createdAt: '2019-04-28T00:11:55.364Z',
      updatedAt: '2019-04-28T00:11:55.402Z',
      categoryId: 1,
    },
  ];
  const totalCost = items.reduce((acc, next) => acc + next.unitCost, 0);
  return (
    <div className="cart-container">
      <div className="row d-flex flex-row">
        {/*
        ------------------
        Shopping cart list
        ------------------
        */}
        <div className="col-md-8">
          <h3 className="shopping-cart-title">Shopping Cart</h3>
          <div className="black-divider-thin" style={{margin: '2em 1.5em 0'}} />
          {items.map((item, index) => (
            <CartItem
              key={item.id}
              item={item}
              displayTopBorder={index === 0 ? false : true}
            />
          ))}
          <div
            className="black-divider-thick"
            style={{margin: '2em 1.5em 0'}}
          />
          {/*
          -------------
          Total section
          -------------
          */}
          <div className="container">
            <div className="row d-flex flex-row">
              <div className="col-md-9">
                <h3 className="shopping-cart-title">Total</h3>
              </div>
              <div
                className="col-md-2 d-flex flex-row-reverse"
                style={{marginLeft: '19px'}}
              >
                <h5 className="shopping-cart-title">{`${parseCost(
                  totalCost
                )}`}</h5>
              </div>
            </div>
          </div>
        </div>
        {/*
        ----------------
        Checkout section
        ----------------
        */}
        <div className="col-md-4">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-md-12">
                <h3 className="shopping-cart-title">Checkout</h3>
                <div className="black-divider-thin" style={{margin: '2em 0'}} />
              </div>
              <div className="row justify-content-md-center">
                <div className="col">
                  <button className="btn btn-success"><NavLink to ='/checkout'>Checkout</NavLink></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart.propTypes = {
//   items: PropTypes.array
// };

export default Cart;
