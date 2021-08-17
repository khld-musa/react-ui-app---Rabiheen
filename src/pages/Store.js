import React, { Component } from "react";
import Slider from "react-slick";
import Product from "../components/Product";
// import "../App.css";


const products = [
  {
    id: "1",
    title: "Luxury Cat",
    price: 1000,
    imageUrl: "/img/beng.png",
    desc:
      "If it fits,and touch water with paw then recoil in horror."
  },
  {
    id: "1",
    title: "Luxury Cat",
    price: 1000,
    imageUrl: "/img/beng.png",
    desc:
      "If it fits,and touch water with paw then recoil in horror."
  },
  {
    id: "1",
    title: "Luxury Cat",
    price: 1000,
    imageUrl: "/img/beng.png",
    desc:
      "If it fits,and touch water with paw then recoil in horror."
  },

  {
    id: "2",
    title: "Other Cat",
    price: 1200,
    imageUrl: "/img/beng.png",
    desc:
      "If it fits,and touch water with paw then recoil in horror."
  }
];

export default function Store() {

  class Resizable extends Component {
    render() {
      let settings_3 = {
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
  
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }]
      };
      return (
        <div>
          <Slider {...settings_3}>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </Slider>
        </div>
      );
    }
  }

  return (
    <body className="container">
      <header>
        <div className="about">
          hhhh
        </div >
      </header>
      <main className="main">
        <Resizable />
      </main>
    </body>

  );
}

