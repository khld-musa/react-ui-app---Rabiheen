import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {


  const Example = (props) => {

    const ModalExample = (props) => {


      const CartItem = ({ product, index, handleRemove }) => {
        return (
          <body>
            <div>
              <div>
                <img className="box" src={product.imageUrl} />
              </div>
              <h1 className="my-0 fw-normal">{product.title}</h1>
              <dl>
                <dt>Price</dt>
                <dd>
                  {product.price.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                  })}
                </dd>
              </dl>

              <button className="btn btn-lg btn-danger" onClick={() => handleRemove(index)}>Remove from cart</button>
            </div>
          </body>
        );
      };

      function Store() {
        const items = useCart();
        const dispatch = useDispatchCart();
        const totalPrice = items.reduce((total, b) => total + b.price, 0);

        const handleRemove = (index) => {
          dispatch({ type: "REMOVE", index });
        };

        if (items.length === 0) {
          return (
            <main className="container">
              <p>Cart is empty</p>
            </main>
          );
        }
        return (
<body>
  <header>
  <p>
                Total price:{" "}
                {totalPrice.toLocaleString("en", {
                  style: "currency",
                  currency: "USD"
                })}
              </p>
  </header>
          
          <main>
            <div className="row row-cols-md-2 mb-3 text-center">
              {items.map((item, index) => (
                <CartItem handleRemove={handleRemove} key={index} product={item} index={index} />
              ))}
            </div>
          </main>
          </body>
        );
      }



      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

      const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

      return ( 
        <div>
          <Button className="btn btn-lg btn-primary" outline onClick={toggle}> Cart <Badge>{items.length}</Badge></Button>
          <Modal className="container" isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
            <ModalBody>
              <Store/>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </Modal>
        </div>
      );
    }





    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div color light>
        <Navbar light expand="md">
          <NavbarToggler className="m" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <Link className="m" to="/">
                Store
              </Link>
              <ModalExample />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  const items = useCart();

  return (
    <header className="d-flex flex-column flex-md-row p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Example />
    </header>
  );
};

export default Header;


