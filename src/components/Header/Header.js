import React, { useEffect, useState } from 'react';
import Logo from '../../img/logo.svg';
import axios from 'axios';
import {axiosConfig} from '../../config'

const cacheCats = [
	{
	  "id": 2,
	  "title": "Aesthetic",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/2.jpeg",
	  "image_alt": "The beauty of some are beyond description"
	},
	{
	  "id": 3,
	  "title": "Anime",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/3.jpeg",
	  "image_alt": "Dedicated to those wanting to escape reality"
	},
	{
	  "id": 4,
	  "title": "Harry Potter",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/4.jpeg",
	  "image_alt": "Always."
	},
	{
	  "id": 5,
	  "title": "Diecast",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/5.jpeg",
	  "image_alt": "For your miniature garage"
	},
	{
	  "id": 6,
	  "title": "Games",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/6.jpeg",
	  "image_alt": "Gaming merchandise"
	},
	{
	  "id": 7,
	  "title": "Marvel and DC",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/7.jpeg",
	  "image_alt": "Marvel and DC merch"
	},
	{
	  "id": 8,
	  "title": "Movies",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/8.jpeg",
	  "image_alt": "Movie merch"
	},
	{
	  "id": 9,
	  "title": "Music",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/9.jpeg",
	  "image_alt": "Music merch"
	},
	{
	  "id": 10,
	  "title": "TV Shows",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/10.jpeg",
	  "image_alt": "tv show merchandise"
	},
	{
	  "id": 11,
	  "title": "Van Gough Collections",
	  "thumbnail": "https://fansthetic.b-cdn.net/media/categories/11.jpeg",
	  "image_alt": "Van gough art based merch"
	}
  ] 

const Header = () => {
	const [categories, update_categories] = useState(cacheCats);
	// useEffect(() => {
	// 	window.axios = axios;
	// 	window.axiosConfig = axiosConfig;
	// 	axios({url: '/products/category/', ...axiosConfig})
	// 	.then(d => {
	// 		console.log(d.data.response.categories)
	// 		update_categories(d.data.response.categories)
	// 	}).catch(err => {
	// 		console.log(err);
	// 	})
	// }, []);
	return (
	<header className="version_1">
      	<div className="gg" />
		<div className="layer"></div>{/*<!-- Mobile menu overlay mask -->*/}
		<div className="main_header">
			<div className="container">
				<div className="row small-gutters">
					<div className="col-xl-3 col-lg-3 d-lg-flex align-items-center">
						<div id="logo">
							<a href="index.html"><img src={Logo} alt="" width="100" height="35"/></a>
						</div>
					</div>
					<nav className="col-xl-6 col-lg-7">
						<a className="open_close" href="javascript:void(0);">
							<div className="hamburger hamburger--spin">
								<div className="hamburger-box">
									<div className="hamburger-inner"></div>
								</div>
							</div>
						</a>
						{/* <!-- Mobile menu button --> */}
						<div className="main-menu">
							<div id="header_menu">
								<a href="index.html"><img src={Logo} alt="" width="100" height="35"/></a>
								<a href="#" className="open_close" id="close_in"><i className="ti-close"></i></a>
							</div>
							<ul>
								<li className="header-menu">
									<a href="javascript:void(0);" className="show-submenu">About</a>
									{/* <ul>
										<li><a href="index.html">Slider</a></li>
										<li><a href="index-2.html">Video Background</a></li>
										<li><a href="index-3.html">Vertical Slider</a></li>
										<li><a href="index-4.html">GDPR Cookie Bar</a></li>
									</ul> */}
								</li>
								<li className="header-menu">
									<a href="/contact" > Contact us </a>
								</li>
							</ul>
						</div>
						{/* <!--/main-menu --> */}
					</nav>
					<div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-right">
						<a className="phone_top" href="tel://9438843343"><strong><span>Need Help?</span>+880 1848333385</strong></a>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
		</div>
		{/* <!-- /main_header --> */}

		<div className="main_nav Sticky">
			<div className="container">
				<div className="row small-gutters">
					<div className="col-xl-3 col-lg-3 col-md-3">
						<nav className="categories">
							<ul className="clearfix">
								<li><span>
										<a href="#">
											<span className="hamburger hamburger--spin">
												<span className="hamburger-box">
													<span className="hamburger-inner"></span>
												</span>
											</span>
											Categories
										</a>
									</span>
									<div id="menu">
										<ul>
											{categories.length && categories.map( cat => 
												<li className="w-100 ">
													<div className="d-flex w-100 p-2">
														<img className="border rounded" src={cat.thumbnail} width="50" height="50"/>
														<a className="flex-grow-1" href="#0">{cat.title}</a>
													</div>
												</li>
											)}
										</ul>
									</div>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-xl-6 col-lg-7 col-md-6 d-none d-md-block">
						<div className="custom-search-input">
							<input type="text" placeholder="Search over 10.000 products"/>
							<button type="submit"><i className="header-icon_search_custom"/></button>
						</div>
					</div>
					<div className="col-xl-3 col-lg-2 col-md-3">
						<ul className="top_tools">
							<li>
								<div className="dropdown dropdown-cart">
									<a href="cart.html" className="cart_bt"><strong>2</strong></a>
									<div className="dropdown-menu">
										<ul>
											<li>
												<a href="product-detail-1.html">
													<figure><img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/thumb/1.jpg" alt="" width="50" height="50" className="lazy"/></figure>
													<strong><span>1x Armor Air x Fear</span>$90.00</strong>
												</a>
												<a href="#0" className="action"><i className="ti-trash"></i></a>
											</li>
											<li>
												<a href="product-detail-1.html">
													<figure><img src="img/products/product_placeholder_square_small.jpg" data-src="img/products/shoes/thumb/2.jpg" alt="" width="50" height="50" className="lazy"/></figure>
													<strong><span>1x Armor Okwahn II</span>$110.00</strong>
												</a>
												<a href="0" className="action"><i className="ti-trash"></i></a>
											</li>
										</ul>
										<div className="total_drop">
											<div className="clearfix"><strong>Total</strong><span>$200.00</span></div>
											<a href="cart.html" className="btn_1 outline">View Cart</a><a href="checkout.html" className="btn_1">Checkout</a>
										</div>
									</div>
								</div>
								{/* <!-- /dropdown-cart--> */}
							</li>
							<li>
								<a href="#0" className="wishlist"><span>Wishlist</span></a>
							</li>
							<li>
								<div className="dropdown dropdown-access">
									<a href="account.html" className="access_link"><span>Account</span></a>
									<div className="dropdown-menu">
										<a href="account.html" className="btn_1">Sign In or Sign Up</a>
										<ul>
											<li>
												<a href="track-order.html"><i className="ti-truck"></i>Track your Order</a>
											</li>
											<li>
												<a href="account.html"><i className="ti-package"></i>My Orders</a>
											</li>
											<li>
												<a href="account.html"><i className="ti-user"></i>My Profile</a>
											</li>
											<li>
												<a href="help.html"><i className="ti-help-alt"></i>Help and Faq</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- /dropdown-access--> */}
							</li>
							<li>
								<a href="javascript:void(0);" className="btn_search_mob"><span>Search</span></a>
							</li>
							<li>
								<a href="#menu" className="btn_cat_mob">
									<div className="hamburger hamburger--spin" id="hamburger">
										<div className="hamburger-box">
											<div className="hamburger-inner"></div>
										</div>
									</div>
									Categories
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			<div className="search_mob_wp">
				<input type="text" className="form-control" placeholder="Search over 10.000 products"/>
				<input type="submit" className="btn_1 full-width" value="Search"/>
			</div>
			{/* <!-- /search_mobile --> */}
		</div>
		{/* <!-- /main_nav --> */}
	</header>
  );
}

export default Header;