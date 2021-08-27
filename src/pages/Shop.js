import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaMailBulk, FaPhoneAlt, FaLink, FaCode, FaLaptop } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './nav/NavBar';


function Shop(params) {


    return (
        <body>

            <header class="fixed-top">
                <Navbar />
            </header>


            <section id="hero" class="hero d-flex align-items-center">
                <div class="container">
                    <h1>Welcome</h1>
                    <h2 className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta perferendis dolores iure amet expedita libero delectus molestias adipisci soluta ratione veniam ipsam itaque consequatur veritatis eligendi, rerum similique aliquam blanditiis!</h2>
                    <a href="#about" class="btn-get-started scrollto bg-success">Get Started</a>
                </div>
            </section>

            <section id="why-us" class="why-us">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="content bg-dark">
                                <h3 className="text-warning">Why Choose Us?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div class="text-center">
                                    <a href="#" class="more-btn bg-success">Learn More <i class="bx bx-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 d-flex align-items-stretch">
                            <div class="icon-boxes d-flex flex-column justify-content-center">
                                <div class="row">
                                    <div class="col-xl-4 d-flex align-items-stretch">
                                        <div class="icon-box mt-4 mt-xl-0">
                                            <i class="bx bx-receipt"></i>
                                            <h4 className="text-success">Corporis voluptates sit</h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 d-flex align-items-stretch">
                                        <div class="icon-box mt-4 mt-xl-0">
                                            <i class="bx bx-cube-alt"></i>
                                            <h4 className="text-success">Ullamco laboris ladore pan</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 d-flex align-items-stretch">
                                        <div class="icon-box mt-4 mt-xl-0">
                                            <i class="bx bx-images"></i>
                                            <h4 className="text-success">Labore consequatur</h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3 className="text-success">Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                            <div class="icon-box">
                                <div class="icon"></div>
                                <h4 class="title"><a className="text-warning" href="">Lorem Ipsum</a></h4>
                                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>

                            <div class="icon-box">
                                <div class="icon"></div>
                                <h4 class="title"><a className="text-warning" href="">Nemo Enim</a></h4>
                                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>

                            <div class="icon-box">
                                <div class="icon"></div>
                                <h4 class="title"><a className="text-warning" href="">Dine Pad</a></h4>
                                <p class="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery" class="gallery">
                <div class="container">

                    <div class="section-title">
                        <h2>Gallery</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row no-gutters">

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/gallery-1.jpg" class="venobox" data-gall="gallery-item">
                                    <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/gallery-2.jpg" class="venobox" data-gall="gallery-item">
                                    <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/gallery-3.jpg" class="venobox" data-gall="gallery-item">
                                    <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/gallery-4.jpg" class="venobox" data-gall="gallery-item">
                                    <img src="assets/img/gallery/gallery-4.jpg" alt="" class="img-fluid" />
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <a href="assets/img/gallery/gallery-5.jpg" class="venobox" data-gall="gallery-item">
                                    <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid" />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section id="team" class="doctors">
                <div class="container">
                    <div class="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/k.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>kzoz</h4>
                                    <span>bla bla bla</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"><FaTwitter /></i></a>
                                        <a href=""><i class="ri-facebook-fill"><FaFacebookF /></i></a>
                                        <a href=""><i class="ri-instagram-fill"><FaInstagram /></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"><FaLinkedinIn /></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/k.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>kzoz</h4>
                                    <span>bla bla bla</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"><FaTwitter /></i></a>
                                        <a href=""><i class="ri-facebook-fill"><FaFacebookF /></i></a>
                                        <a href=""><i class="ri-instagram-fill"><FaInstagram /></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"><FaLinkedinIn /></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/k.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>kzoz</h4>
                                    <span>bla bla bla</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"><FaTwitter /></i></a>
                                        <a href=""><i class="ri-facebook-fill"><FaFacebookF /></i></a>
                                        <a href=""><i class="ri-instagram-fill"><FaInstagram /></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"><FaLinkedinIn /></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start">
                                <div class="pic"><img src="assets/img/k.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>kzoz</h4>
                                    <span>bla bla bla</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div class="social">
                                        <a href=""><i class="ri-twitter-fill"><FaTwitter /></i></a>
                                        <a href=""><i class="ri-facebook-fill"><FaFacebookF /></i></a>
                                        <a href=""><i class="ri-instagram-fill"><FaInstagram /></i></a>
                                        <a href=""> <i class="ri-linkedin-box-fill"><FaLinkedinIn /></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <div class="container">
                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>


                <div class="container">
                    <div class="row mt-5">
                        <div class="col-lg-4">
                            <div class="info">
                                <div class="address">
                                    <i class="icofont-google-map"><ImLocation /></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div class="email">
                                    <i class="icofont-envelope"><FaMailBulk /></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div class="phone">
                                    <i class="icofont-phone"><FaPhoneAlt /></i>
                                    <h4>Call:</h4>
                                    <p>+249 5589 55488 55</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-lg-6 text-lg-left text-center text-light">
                            <div class="copyright">
                                &copy; 2021 .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </body>
    )
}
export default Shop;