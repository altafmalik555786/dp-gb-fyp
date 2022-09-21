import React from 'react'
import ListingHeader from './ListingHeader'
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img9 from "../Assets/images/img9.jpg"
import sketch from "../Assets/images/sketch.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import anywhere from "../Assets/images/anywhere.png"
import fillSign from "../Assets/images/fill-sign.png"
import logoBlack from "../Assets/images/logo-black.png"
import genericSmallImg from "../Assets/images/generic-small-img.jpg"
import genericSmallImg2 from "../Assets/images/generic-small-img-2.jpg"
import genericSmallImg3 from "../Assets/images/generic-small-img-3.jpg"
import genericSmallImg4 from "../Assets/images/generic-small-img-4.jpg"
import genericSmallImg5 from "../Assets/images/generic-small-img-5.jpg"
import genericSmallImg6 from "../Assets/images/generic-small-img-6.jpg"
import genericSmallImg7 from "../Assets/images/generic-small-img-7.jpg"
import { Link } from "react-router-dom"
function ListingList() {
    return (
        <div>
            <ListingHeader />
            {/* <!-- ================================
    START BREADCRUMB AREA
================================= --> */}
            <section class="breadcrumb-area bread-bg bread-overlay overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                                <div class="section-heading">
                                    <h2 class="sec__title text-white font-size-40 mb-0">Listing List</h2>
                                </div>
                                <ul class="list-items bread-list">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Listings</li>
                                    <li>Listing List</li>
                                </ul>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
                <div class="bread-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" viewBox="0 0 1200 150" preserveAspectRatio="none">
                        <g><path fill-opacity="0.2" d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"></path></g><g class="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="300"><path fill="rgba(255,255,255,0.8)" d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"></path></g><path fill="#fff" d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"></path><defs></defs>
                    </svg>
                </div>
                {/* <!-- end bread-svg --> */}
            </section>
            {/* <!-- end breadcrumb-area --> */}
            {/* <!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START CARD AREA
================================= --> */}
            <section class="card-area section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="filter-bar d-flex flex-wrap justify-content-between align-items-center margin-bottom-30px">
                                <p class="result-text font-weight-medium">Showing 1 to 10 of 30,590 entries</p>
                                <div class="filter-bar-action d-flex flex-wrap align-items-center">
                                    <a href="#" class="search-filter" data-toggle="modal" data-target="#searchFilterModal">
                                        <i class="la la-sliders mr-1"></i>Detailed Search
                                    </a>
                                    <div class="user-chosen-select-container ml-3">
                                        <select class="user-chosen-select">
                                            <option value="sort-by-default">Sort by default</option>
                                            <option value="high-rated">High Rated</option>
                                            <option value="most-reviewed">Most Reviewed</option>
                                            <option value="popular-Listing">Popular Listing</option>
                                            <option value="newest-Listing">Newest Listing</option>
                                            <option value="older-Listing">Older Listing</option>
                                            <option value="price-low-to-high">Price: low to high</option>
                                            <option value="price-high-to-low">Price: high to low</option>
                                            <option value="all-listings">Random</option>
                                        </select>
                                    </div>
                                    <ul class="filter-nav ml-1">
                                        <li><a href="listing-grid.html" data-toggle="tooltip" data-placement="top" title="Grid View"><span class="la la-th-large"></span></a></li>
                                        <li><a href="listing-list.html" data-toggle="tooltip" data-placement="top" title="List View" class="active"><span class="la la-list"></span></a></li>
                                    </ul>
                                </div>
                                {/* <!-- end filter-bar-action --> */}
                            </div>
                            {/* <!-- end filter-bar --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img4} data-src={img4} class="card__img lazy" alt="" />
                                                <span class="badge">now open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={listingLogo} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Favorite Place Food Bank</Link>
                                                <i class="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-cutlery mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Restaurant</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img5} data-src={img5} class="card__img lazy" alt="" />
                                                <span class="badge bg-10">closed</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={listingLogo2} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <a href="listing-details.html">Beach Blue Boardwalk</a>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Moderate">
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-plane mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Travel</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img6} data-src={img6} class="card__img lazy" alt="" />
                                                <span class="badge">Now Open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={listingLogo3} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Hotel Govendor</Link>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Inexpensive">
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-hotel mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Hotels</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img7} data-src={img7} class="card__img lazy" alt="" />
                                                <span class="badge">now open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={anywhere} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Sticky band party</Link>
                                                <i class="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-music mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Event</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img8} data-src={img8} class="card__img lazy" alt="" />
                                                <span class="badge bg-10">closed</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={sketch} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Sena clothing shopping mall</Link>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Ultra High">
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-shopping-cart mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Shop</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img9} data-src={img9} class="card__img lazy" alt="" />
                                                <span class="badge">Now open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={fillSign} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Hotel Govendor</Link>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Inexpensive">
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-hotel mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Hotels</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img6} data-src={img6} class="card__img lazy" alt="" />
                                                <span class="badge">Now Open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={listingLogo3} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Hotel Govendor</Link>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Inexpensive">
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-hotel mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Hotels</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img7} data-src={img7} class="card__img lazy" alt="" />
                                                <span class="badge">now open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={anywhere} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Sticky band party</Link>
                                                <i class="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-music mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Event</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img8} data-src={img8} class="card__img lazy" alt="" />
                                                <span class="badge bg-10">closed</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={sketch} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Sena clothing shopping mall</Link>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Ultra High">
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-shopping-cart mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Shop</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                                <div class="col-lg-12">
                                    <div class="card-item card-item-list">
                                        <div class="card-image">
                                            <Link to="/listing-details" class="d-block">
                                                <img src={img9} data-src={img9} class="card__img lazy" alt="" />
                                                <span class="badge">Now open</span>
                                            </Link>
                                            <span class="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                                <i class="la la-bookmark"></i>
                                            </span>
                                        </div>
                                        <div class="card-content">
                                            <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                                <img src={fillSign} alt="author-img" />
                                            </a>
                                            <h4 class="card-title pt-3">
                                                <Link to="/listing-details">Hotel Govendor</Link>
                                            </h4>
                                            <p class="card-sub"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>Bishop Avenue, New York</a></p>
                                            <ul class="listing-meta d-flex align-items-center">
                                                <li class="d-flex align-items-center">
                                                    <span class="rate flex-shrink-0">4.7</span>
                                                    <span class="rate-text">5 Ratings</span>
                                                </li>
                                                <li>
                                                    <span class="price-range" data-toggle="tooltip" data-placement="top" title="Inexpensive">
                                                        <strong class="font-weight-medium">$</strong>
                                                    </span>
                                                </li>
                                                <li class="d-flex align-items-center">
                                                    <i class="la la-hotel mr-1 listing-icon"></i><a href="#" class="listing-cat-link">Hotels</a>
                                                </li>
                                            </ul>
                                            <ul class="info-list padding-top-20px">
                                                <li><span class="la la-link icon"></span>
                                                    <a href="#"> www.techydevs.com</a>
                                                </li>
                                                <li><span class="la la-calendar-check-o icon"></span>
                                                    Opened 1 month ago
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!-- end card-item --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                            </div>
                            {/* <!-- end row --> */}
                            <div class="row">
                                <div class="col-lg-12 pt-3 text-center">
                                    <div class="pagination-wrapper d-inline-block">
                                        <div class="section-pagination">
                                            <nav aria-label="Page navigation">
                                                <ul class="pagination flex-wrap justify-content-center">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true"><i class="la la-angle-left"></i></span>
                                                            <span class="sr-only">Previous</span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                    <li class="page-item"><a class="page-link page-link-active" href="#">2</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true"><i class="la la-angle-right"></i></span>
                                                            <span class="sr-only">Next</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/* <!-- end section-pagination --> */}
                                        <ul class="pagination-simple d-flex align-items-center justify-content-center pt-3">
                                            <li class="mr-4">
                                                <a href="#" class="pagination-simple-nav first-nav"><i class="la la-long-arrow-left mr-1"></i>First</a>
                                            </li>
                                            <li>
                                                <a href="#" class="pagination-simple-nav last-nav active">Last<i class="la la-long-arrow-right ml-1"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div class="col-lg-4">
                            <div class="sidebar mb-0">
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Search</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <form action="#" class="form-box">
                                        <div class="form-group">
                                            <span class="la la-search form-icon"></span>
                                            <input class="form-control" type="search" placeholder="What are you looking for?" />
                                        </div>
                                        <div class="form-group user-chosen-select-container">
                                            <select class="user-chosen-select">
                                                <option value="0">Select a Location</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Åland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AI">Anguilla</option>
                                                <option value="AQ">Antarctica</option>
                                                <option value="AG">Antigua &amp; Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AW">Aruba</option>
                                                <option value="AC">Ascension Island</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BM">Bermuda</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BA">Bosnia &amp; Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BV">Bouvet Island</option>
                                                <option value="BR">Brazil</option>
                                                <option value="IO">British Indian Ocean Territory</option>
                                                <option value="VG">British Virgin Islands</option>
                                                <option value="BN">Brunei</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CV">Cape Verde</option>
                                                <option value="BQ">Caribbean Netherlands</option>
                                                <option value="KY">Cayman Islands</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo - Brazzaville</option>
                                                <option value="CD">Congo - Kinshasa</option>
                                                <option value="CK">Cook Islands</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Côte d’Ivoire</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CW">Curaçao</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czechia</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="SZ">Eswatini</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FK">Falkland Islands</option>
                                                <option value="FO">Faroe Islands</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GF">French Guiana</option>
                                                <option value="PF">French Polynesia</option>
                                                <option value="TF">French Southern Territories</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GI">Gibraltar</option>
                                                <option value="GR">Greece</option>
                                                <option value="GL">Greenland</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GP">Guadeloupe</option>
                                                <option value="GU">Guam</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GG">Guernsey</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HK">Hong Kong SAR China</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IM">Isle of Man</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JE">Jersey</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="XK">Kosovo</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Laos</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MO">Macao SAR China</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MQ">Martinique</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="YT">Mayotte</option>
                                                <option value="MX">Mexico</option>
                                                <option value="MD">Moldova</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MS">Montserrat</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar (Burma)</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="NC">New Caledonia</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="NU">Niue</option>
                                                <option value="MK">North Macedonia</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PS">Palestinian Territories</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PN">Pitcairn Islands</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RE">Réunion</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russia</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">São Tomé &amp; Príncipe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SX">Sint Maarten</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="GS">South Georgia &amp; South Sandwich Islands</option>
                                                <option value="KR">South Korea</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="BL">St. Barthélemy</option>
                                                <option value="SH">St. Helena</option>
                                                <option value="KN">St. Kitts &amp; Nevis</option>
                                                <option value="LC">St. Lucia</option>
                                                <option value="MF">St. Martin</option>
                                                <option value="PM">St. Pierre &amp; Miquelon</option>
                                                <option value="VC">St. Vincent &amp; Grenadines</option>
                                                <option value="SR">Suriname</option>
                                                <option value="SJ">Svalbard &amp; Jan Mayen</option>
                                                <option value="SE">Sweden</option>
                                                <option value="CH">Switzerland</option>
                                                <option value="TW">Taiwan</option>
                                                <option value="TJ">Tajikistan</option>
                                                <option value="TZ">Tanzania</option>
                                                <option value="TH">Thailand</option>
                                                <option value="TL">Timor-Leste</option>
                                                <option value="TG">Togo</option>
                                                <option value="TK">Tokelau</option>
                                                <option value="TO">Tonga</option>
                                                <option value="TT">Trinidad &amp; Tobago</option>
                                                <option value="TA">Tristan da Cunha</option>
                                                <option value="TN">Tunisia</option>
                                                <option value="TR">Turkey</option>
                                                <option value="TM">Turkmenistan</option>
                                                <option value="TC">Turks &amp; Caicos Islands</option>
                                                <option value="TV">Tuvalu</option>
                                                <option value="UG">Uganda</option>
                                                <option value="UA">Ukraine</option>
                                                <option value="AE">United Arab Emirates</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="US">United States</option>
                                                <option value="UY">Uruguay</option>
                                                <option value="UZ">Uzbekistan</option>
                                                <option value="VU">Vanuatu</option>
                                                <option value="VA">Vatican City</option>
                                                <option value="VE">Venezuela</option>
                                                <option value="VN">Vietnam</option>
                                                <option value="WF">Wallis &amp; Futuna</option>
                                                <option value="EH">Western Sahara</option>
                                                <option value="YE">Yemen</option>
                                                <option value="ZM">Zambia</option>
                                                <option value="ZW">Zimbabwe</option>
                                            </select>
                                        </div>
                                        {/* <!-- end form-group --> */}
                                        <div class="form-group user-chosen-select-container">
                                            <select class="user-chosen-select">
                                                <option value="0">Select a category</option>
                                                <option value="1">All Category</option>
                                                <option value="2">Shops</option>
                                                <option value="3">Hotels</option>
                                                <option value="4">Foods & Restaurants</option>
                                                <option value="5">Fitness</option>
                                                <option value="6">Travel</option>
                                                <option value="7">Salons</option>
                                                <option value="8">Event</option>
                                                <option value="9">Business</option>
                                                <option value="10">Jobs</option>
                                            </select>
                                        </div>
                                        {/* <!-- end form-group --> */}
                                        <div class="form-group user-chosen-select-container">
                                            <select class="user-chosen-select">
                                                <option value="0">Price Range</option>
                                                <option value="1">$ Inexpensive</option>
                                                <option value="2">$$ Moderate</option>
                                                <option value="3">$$$ Pricey</option>
                                                <option value="4">$$$$ Ultra High</option>
                                            </select>
                                        </div>
                                        {/* <!-- end form-group --> */}
                                        <div class="btn-box">
                                            <a href="#" class="btn-gray btn-gray-lg open-filter-btn w-100"><i class="la la-clock mr-2"></i>Now Open</a>
                                            <button type="submit" class="theme-btn gradient-btn border-0 w-100 mt-3">
                                                <i class="la la-search mr-2"></i>Search Now
                                            </button>
                                        </div>
                                        {/* <!-- end btn-box --> */}
                                    </form>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Filter by Features</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <div class="checkbox-wrap">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="elevatorInBuildingChb2" />
                                            <label for="elevatorInBuildingChb2">Elevator in building</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="goodForKidsChb" />
                                            <label for="goodForKidsChb">Good for Kids</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="goodForGroupsChb" />
                                            <label for="goodForGroupsChb">Good for Groups</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="likedBy-20-SomethingsChb" />
                                            <label for="likedBy-20-SomethingsChb">Liked by 20-somethings</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="likedBy-30-SomethingsChb" />
                                            <label for="likedBy-30-SomethingsChb">Liked by 30-somethings</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="likedBy-40-SomethingsChb" />
                                            <label for="likedBy-40-SomethingsChb">Liked by 40-somethings</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="wirelessInternetChb" />
                                            <label for="wirelessInternetChb">Wireless Internet</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="collapse collapse-content" id="showMoreOptionCollapse">
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="friendlyWorkspaceChb2" />
                                                <label for="friendlyWorkspaceChb2">Friendly workspace</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="instantBookChb2" />
                                                <label for="instantBookChb2">Instant Book</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="freeParkingChb2" />
                                                <label for="freeParkingChb2">Free parking</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="smokingAllowedChb2" />
                                                <label for="smokingAllowedChb2">Smoking allowed</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="eventsChb" />
                                                <label for="eventsChb">Events</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="wheelchairAccessibleChb2" />
                                                <label for="wheelchairAccessibleChb2">Wheelchair accessible</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="alarmSystemChb" />
                                                <label for="alarmSystemChb"> Alarm system</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="electricityChb" />
                                                <label for="electricityChb">Electricity</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="attachedGarageChb" />
                                                <label for="attachedGarageChb">Attached garage</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="securityCamerasChb" />
                                                <label for="securityCamerasChb">Security cameras</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                        </div>
                                        <a class="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse">
                                            <span class="collapse-btn-hide">Show More <i class="la la-plus ml-1"></i></span>
                                            <span class="collapse-btn-show">Show Less <i class="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Filter by Neighborhoods</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <div class="checkbox-wrap">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="outerSunsetChb" />
                                            <label for="outerSunsetChb">Outer Sunset</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="forestHillChb" />
                                            <label for="forestHillChb">Forest Hill</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="stonestownChb" />
                                            <label for="stonestownChb">Stonestown</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="innerRichmondChb" />
                                            <label for="innerRichmondChb">Inner Richmond</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="alamoSquareChb" />
                                            <label for="alamoSquareChb">Alamo Square</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="fisherman'sWharfChb" />
                                            <label for="fisherman'sWharfChb">Fisherman's Wharf</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="glenParkChb" />
                                            <label for="glenParkChb">Glen Park</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="civicCenterChb" />
                                            <label for="civicCenterChb">Civic Center</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="collapse collapse-content" id="showMoreOptionCollapse3">
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="coleValleyChb" />
                                                <label for="coleValleyChb">Cole Valley</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="crocker-AmazonChb" />
                                                <label for="crocker-AmazonChb">Crocker-Amazon</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="diamondHeightsChb" />
                                                <label for="diamondHeightsChb">Diamond Heights</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="duboceTriangleChb" />
                                                <label for="duboceTriangleChb">Duboce Triangle</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="fillmoreChb" />
                                                <label for="fillmoreChb">Fillmore</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="japantownChb" />
                                                <label for="japantownChb">Japantown</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="westwoodParkChb" />
                                                <label for="westwoodParkChb">Westwood Park</label>
                                            </div>
                                            {/* <!-- end custom-checkbox --> */}
                                        </div>
                                        <a class="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse3" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse3">
                                            <span class="collapse-btn-hide">Show More <i class="la la-plus ml-1"></i></span>
                                            <span class="collapse-btn-show">Show Less <i class="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Filter by Category</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <div class="category-list">
                                        <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg} data-src={genericSmallImg} alt="image" class="generic-img-card-img lazy" />
                                            <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span class="badge">Restaurants</span>
                                                <span class="generic-img-card-counter">238</span>
                                            </div>
                                        </a>
                                        <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg2} data-src={genericSmallImg2} alt="image" class="generic-img-card-img lazy" />
                                            <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span class="badge">Food</span>
                                                <span class="generic-img-card-counter">111</span>
                                            </div>
                                        </a>
                                        <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg3} data-src={genericSmallImg3} alt="image" class="generic-img-card-img lazy" />
                                            <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span class="badge">Hotel</span>
                                                <span class="generic-img-card-counter">222</span>
                                            </div>
                                        </a>
                                        <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                            <img src={genericSmallImg4} data-src={genericSmallImg4} alt="image" class="generic-img-card-img lazy" />
                                            <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                <span class="badge">Events</span>
                                                <span class="generic-img-card-counter">123</span>
                                            </div>
                                        </a>
                                        <div class="collapse collapse-content" id="showMoreOptionCollapse2">
                                            <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                                <img src={genericSmallImg5} data-src={genericSmallImg5} alt="image" class="generic-img-card-img lazy" />
                                                <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                    <span class="badge">Shopping</span>
                                                    <span class="generic-img-card-counter">321</span>
                                                </div>
                                            </a>
                                            <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                                <img src={genericSmallImg6} data-src={genericSmallImg6} alt="image" class="generic-img-card-img lazy" />
                                                <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                    <span class="badge">Travel</span>
                                                    <span class="generic-img-card-counter">12</span>
                                                </div>
                                            </a>
                                            <a href="#" class="generic-img-card d-block hover-y overflow-hidden mb-3">
                                                <img src={genericSmallImg7} data-src={genericSmallImg7} alt="image" class="generic-img-card-img lazy" />
                                                <div class="generic-img-card-content d-flex align-items-center justify-content-between">
                                                    <span class="badge">Jobs</span>
                                                    <span class="generic-img-card-counter">133</span>
                                                </div>
                                            </a>
                                        </div>
                                        <a class="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse2" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse2">
                                            <span class="collapse-btn-hide">Show More <i class="la la-plus ml-1"></i></span>
                                            <span class="collapse-btn-show">Show Less <i class="la la-minus ml-1"></i></span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Filter by Price</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <form action="#" class="form-box price-range-wrap price-range-wrap-2">
                                        <div class="input-box d-flex align-items-center">
                                            <div class="form-group mb-0">
                                                <span class="form-icon dollar-icon text-color">$</span>
                                                <input class="form-control form-control-sm padding-left-25px" type="text" name="text" placeholder="5" />
                                            </div>
                                            <span class="px-2">-</span>
                                            <div class="form-group mb-0">
                                                <span class="form-icon dollar-icon text-color">$</span>
                                                <input class="form-control form-control-sm padding-left-25px" type="text" name="text" placeholder="29" />
                                            </div>
                                            <button class="btn-gray ml-3">Apply</button>
                                        </div>
                                    </form>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Filter by Tags</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <ul class="tag-list">
                                        <li><a href="#">technology</a></li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">art</a></li>
                                        <li><a href="#">design</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">development</a></li>
                                        <li><a href="#">marketing</a></li>
                                        <li><a href="#">video</a></li>
                                        <li><a href="#">music</a></li>
                                        <li><a href="#">lifestyle</a></li>
                                        <li><a href="#">adventure</a></li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Filter by Ratings</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <ul class="custom-radio">
                                        <li class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <label class="radio-label">
                                                    <input type="radio" checked="checked" name="rating-radio" />
                                                    <span class="radio-mark"></span>
                                                </label>
                                                <div class="font-weight-medium">
                                                    Show All
                                                </div>
                                            </div>
                                            <span class="font-size-14 font-weight-medium">
                                                48,473
                                            </span>
                                        </li>
                                        <li class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <label class="radio-label">
                                                    <input type="radio" name="rating-radio" />
                                                    <span class="radio-mark"></span>
                                                </label>
                                                <div class="stars">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                </div>
                                            </div>
                                            <span class="font-size-14 font-weight-medium">
                                                23,403
                                            </span>
                                        </li>
                                        <li class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <label class="radio-label">
                                                    <input type="radio" name="rating-radio" />
                                                    <span class="radio-mark"></span>
                                                </label>
                                                <div class="stars">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                </div>
                                            </div>
                                            <span class="font-size-14 font-weight-medium">
                                                1403
                                            </span>
                                        </li>
                                        <li class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <label class="radio-label">
                                                    <input type="radio" name="rating-radio" />
                                                    <span class="radio-mark"></span>
                                                </label>
                                                <div class="stars">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                </div>
                                            </div>
                                            <span class="font-size-14 font-weight-medium">
                                                988
                                            </span>
                                        </li>
                                        <li class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <label class="radio-label">
                                                    <input type="radio" name="rating-radio" />
                                                    <span class="radio-mark"></span>
                                                </label>
                                                <div class="stars">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                </div>
                                            </div>
                                            <span class="font-size-14 font-weight-medium">
                                                200
                                            </span>
                                        </li>
                                        <li class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <label class="radio-label">
                                                    <input type="radio" name="rating-radio" />
                                                    <span class="radio-mark"></span>
                                                </label>
                                                <div class="stars">
                                                    <span class="la la-star"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                    <span class="la la-star-o text-gray"></span>
                                                </div>
                                            </div>
                                            <span class="font-size-14 font-weight-medium">
                                                100
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <h3 class="widget-title">Distance</h3>
                                    <div class="stroke-shape mb-4"></div>
                                    <div class="checkbox-wrap">
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="birdEyeViewChb" />
                                            <label for="birdEyeViewChb">Bird's-eye View</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="drivingChb" />
                                            <label for="drivingChb">Driving (5 mi.)</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="bikingChb" />
                                            <label for="bikingChb">Biking (2 mi.)</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="walkingChb" />
                                            <label for="walkingChb">Walking (1 mi.)</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                        <div class="custom-checkbox">
                                            <input type="checkbox" id="withinFourblocksChb" />
                                            <label for="withinFourblocksChb">Within 4 blocks</label>
                                        </div>
                                        {/* <!-- end custom-checkbox --> */}
                                    </div>
                                    {/* <!-- end check-box-list --> */}
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                                <div class="sidebar-widget">
                                    <div class="btn-box">
                                        <button type="submit" class="theme-btn gradient-btn w-100 border-0">
                                            Apply Filter <i class="la la-arrow-right ml-1"></i>
                                        </button>
                                        <button type="submit" class="btn-gray btn-gray-lg mt-3 w-100">
                                            <i class="la la-redo-alt mr-1"></i> Reset Filters
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- end sidebar-widget --> */}
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end card-area --> */}
            {/* <!-- ================================
    END CARD AREA
================================= --> */}



            {/* <!-- ================================
       START FOOTER AREA
================================= --> */}
            <section class="footer-area bg-gradient-gray padding-top-30px padding-bottom-30px position-relative">
                <span class="circle-bg circle-bg-3 position-absolute"></span>
                <span class="circle-bg circle-bg-4 position-absolute"></span>
                <span class="circle-bg circle-bg-5 position-absolute"></span>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cta-content d-flex align-items-center justify-content-between p-0">
                                <div class="section-heading">
                                    <h2 class="sec__title mb-0 font-size-24 line-height-30">Don't miss your monthly offer</h2>
                                    <p class="sec__desc font-size-16">Subscribe to get latest updates and information.</p>
                                </div>
                                {/* <!-- end section-heading --> */}
                                <form method="post" class="form-box">
                                    <div class="form-group mb-0">
                                        <span class="la la-envelope-o form-icon"></span>
                                        <input class="form-control form-control-styled form-control-long" type="email" placeholder="Enter your email" />
                                        <p class="font-size-12 font-weight-medium pt-1"><i class="la la-lock mr-1"></i>Your are 100% protected</p>
                                        <button class="theme-btn gradient-btn subscribe-btn input-btn-append border-0" type="submit">Subscribe <i class="la la-arrow-right ml-1"></i></button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- end cta-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div class="section-block-2 margin-top-30px margin-bottom-40px"></div>
                    <div class="row">
                        <div class="col-lg-3 responsive-column">
                            <div class="footer-item">
                                <div class="footer-logo">
                                    <a href="index.html" class="foot-logo"><img src={logoBlack} alt="logo" /></a>
                                </div>
                                {/* <!-- end footer-logo --> */}
                                <p class="footer__desc">
                                    Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros culpa officia deserunt mollit.
                                </p>
                                <p class="footer__desc">
                                    <a href="#" class="btn-text">View on the map <i class="la la-arrow-right icon"></i></a>
                                </p>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column">
                            <div class="footer-item">
                                <h4 class="footer__title">Quick Links</h4>
                                <div class="stroke-shape mb-3"></div>
                                <ul class="list-items">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#signUpModal">Sign Up</a></li>
                                    <li><a href="#" data-toggle="modal" data-target="#loginModal">Log In</a></li>
                                    <li><a href="add-listing.html">Add Listing</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column">
                            <div class="footer-item">
                                <h4 class="footer__title">Categories</h4>
                                <div class="stroke-shape mb-3"></div>
                                <ul class="list-items">
                                    <li><a href="#">Shops</a></li>
                                    <li><a href="#">Hotels</a></li>
                                    <li><a href="#">Restaurants</a></li>
                                    <li><a href="#">Bars</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Fitness</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column">
                            <div class="footer-item">
                                <h4 class="footer__title">Contact with Us</h4>
                                <div class="stroke-shape mb-3"></div>
                                <ul class="list-items contact-links">
                                    <li><span class="d-block text-color mb-1"><i class="la la-map mr-1 text-color-2"></i>Address:</span> 12345 Little Baker St, Melbourne</li>
                                    <li><span class="d-block text-color mb-1"><i class="la la-phone mr-1 text-color-2"></i>Phone:</span><a href="#">+ 61 23 8093 3400</a></li>
                                    <li><span class="d-block text-color mb-1"><i class="la la-envelope mr-1 text-color-2"></i>Email:</span><a href="#">listhub@gmail.com</a></li>
                                </ul>
                            </div>
                            {/* <!-- end footer-item --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div class="row pt-4 align-items-center footer-action-wrap">
                        <div class="col-lg-4">
                            <ul class="social-profile social-profile-colored">
                                <li><a href="#" class="facebook-bg"><i class="lab la-facebook-f"></i></a></li>
                                <li><a href="#" class="twitter-bg"><i class="lab la-twitter"></i></a></li>
                                <li><a href="#" class="instagram-bg"><i class="lab la-instagram"></i></a></li>
                                <li><a href="#" class="dribbble-bg"><i class="la la-dribbble"></i></a></li>
                                <li><a href="#" class="behance-bg"><i class="lab la-behance"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-8">
                            <ul class="list-items term-list text-right">
                                <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="section-block-2 margin-top-30px margin-bottom-30px"></div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="copy-right d-flex align-items-center justify-content-between">
                                <p class="copy__desc">
                                    &copy; Copyright Listhub <script> document.write(new Date().getFullYear()); </script>. Made with
                                    <span class="la la-heart-o"></span> by <a href="https://themeforest.net/user/techydevs/portfolio">TechyDevs</a>
                                </p>
                                <div class="footer-chosen-container user-chosen-select-container d-flex align-items-center justify-content-end">
                                    <div class="mr-2">
                                        <select class="user-chosen-select">
                                            <option value="1" selected>English</option>
                                            <option value="2">Espanol</option>
                                            <option value="3">Deutsch</option>
                                            <option value="4">Türkçe</option>
                                            <option value="5">Polski</option>
                                            <option value="6">Português</option>
                                            <option value="7">Italiano</option>
                                            <option value="8">Dansk</option>
                                            <option value="9">French</option>
                                            <option value="10">German</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select class="user-chosen-select">
                                            <option value="1">Argentina</option>
                                            <option value="2">Australia</option>
                                            <option value="3">Canada</option>
                                            <option value="4">Chile</option>
                                            <option value="5">Czech Republic</option>
                                            <option value="6">France</option>
                                            <option value="7">Germany</option>
                                            <option value="8">Italy</option>
                                            <option value="9">Japan</option>
                                            <option value="10">Mexico</option>
                                            <option value="11">New Zealand</option>
                                            <option value="12">Spain</option>
                                            <option value="13">Turkey</option>
                                            <option value="14">United Kingdom</option>
                                            <option value="15" selected>United States</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end copy-right --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end footer-area --> */}
            {/* <!-- ================================
       START FOOTER AREA
================================= --> */}

            {/* <!-- start back-to-top --> */}
            <div id="back-to-top">
                <i class="la la-arrow-up" title="Go top"></i>
            </div>
            {/* <!-- end back-to-top --> */}

            {/* <!-- Modal --> */}
            <div class="modal fade modal-container login-form" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg">
                            <h5 class="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" class="form-box">
                                <div class="input-box">
                                    <label class="label-text">Username or email</label>
                                    <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Username or email address" />
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Password</label>
                                    <div class="form-group">
                                        <span class="la la-lock form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Enter password" />
                                    </div>
                                </div>
                                <div class="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" id="keepMeSignedChb" />
                                        <label for="keepMeSignedChb" class="font-size-14">Keep me signed in</label>
                                    </div>
                                    <a href="javascript:void(0)" class="margin-bottom-10px lost-pass-btn font-size-14">Lost Password?</a>
                                </div>
                                <div class="btn-box">
                                    <button type="submit" class="theme-btn gradient-btn w-100">
                                        <i class="la la-sign-in mr-1"></i> Login to Account
                                    </button>
                                    <p class="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        New to Listhub? <a class="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
                                    </p>
                                </div>
                                <div class="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                                    OR
                                </div>
                                <div class="text-center">
                                    <p class="font-size-15 font-weight-medium">Login with your social network</p>
                                    <ul class="social-profile social-profile-colored py-3">
                                        <li>
                                            <a href="#" class="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                                                <i class="lab la-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i class="lab la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i class="lab la-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i class="lab la-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade modal-container signup-form" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg-2">
                            <h5 class="modal-title" id="signUpModalTitle">Welcome! create your listhub account</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" class="form-box">
                                <div class="input-box">
                                    <label class="label-text">Username</label>
                                    <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Username" />
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Email</label>
                                    <div class="form-group">
                                        <span class="la la-envelope form-icon"></span>
                                        <input class="form-control form-control-styled" type="email" name="text" placeholder="Email address" />
                                    </div>
                                </div>
                                <div class="input-box">
                                    <label class="label-text">Password</label>
                                    <div class="form-group">
                                        <span class="la la-lock form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Enter password" />
                                    </div>
                                    <p class="font-size-14 mt-n2">Your password must be at least 6 characters long and must contain letters, numbers and special characters. Cannot contain whitespace.</p>
                                </div>
                                <div class="input-box py-4 user-action-meta">
                                    <div class="custom-checkbox">
                                        <input type="checkbox" id="agreeChb" />
                                        <label for="agreeChb" class="font-size-14">By signing up, you agree to our <a href="privacy-policy.html" class="text-color-2">Privacy Policy.</a></label>
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="submit" class="theme-btn gradient-btn w-100">
                                        <i class="la la-user-plus mr-1"></i> Register Account
                                    </button>
                                    <p class="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        Already on Listhub? <a class="text-color-2 login-btn" href="javascript:void(0)">Log in</a>
                                    </p>
                                </div>
                                <div class="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
                                    OR
                                </div>
                                <div class="text-center">
                                    <p class="font-size-15 font-weight-medium">Connect with social network</p>
                                    <ul class="social-profile social-profile-colored py-3">
                                        <li>
                                            <a href="#" class="google-bg mx-1" data-toggle="tooltip" data-placement="top" title="Google">
                                                <i class="lab la-google"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="facebook-bg mx-1" data-toggle="tooltip" data-placement="top" title="Facebook">
                                                <i class="lab la-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="twitter-bg mx-1" data-toggle="tooltip" data-placement="top" title="Twitter">
                                                <i class="lab la-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="instagram-bg mx-1" data-toggle="tooltip" data-placement="top" title="Instagram">
                                                <i class="lab la-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="font-size-15 pb-3">Don't worry, we never any post to your social profile.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade modal-container recover-form" id="recoverModal" tabindex="-1" role="dialog" aria-labelledby="recoverModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg">
                            <h5 class="modal-title" id="recoverModalTitle">Reset password</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="font-size-15 font-weight-medium pb-3">
                                Enter your username or email to reset your password.
                                You will receive an email with instructions on how to reset your password. If you are experiencing problems
                                resetting your password <a href="contact.html" class="text-color-2">contact us</a> or <a href="#" class="text-color-2">send us an email</a>
                            </p>
                            <form method="post" class="form-box">
                                <div class="input-box">
                                    <label class="label-text">Username or email</label>
                                    <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input class="form-control form-control-styled" type="text" name="text" placeholder="Username or email address" />
                                    </div>
                                </div>
                                <div class="btn-box">
                                    <button type="submit" class="theme-btn gradient-btn w-100">
                                        Get New Password <i class="la la-arrow-right ml-1"></i>
                                    </button>
                                    <p class="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                                        Not a member? <a class="text-color-2 signup-btn" href="javascript:void(0)">Create account</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade modal-container" id="searchFilterModal" tabindex="-1" role="dialog" aria-labelledby="searchFilterModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center mh-bg">
                            <h5 class="modal-title" id="searchFilterModalTitle">Detailed search</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="la la-times-circle"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form method="post" class="form-box row">
                                <div class="col-lg-6 input-box">
                                    <label class="label-text">Keywords</label>
                                    <div class="form-group">
                                        <span class="la la-search form-icon"></span>
                                        <input class="form-control" type="search" name="text" placeholder="What are you looking for?" />
                                    </div>
                                </div>
                                <div class="col-lg-6 input-box">
                                    <label class="label-text">Where to look?</label>
                                    <div class="form-group user-chosen-select-container">
                                        <select class="user-chosen-select">
                                            <option value="0">Select a Location</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Åland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua &amp; Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AC">Ascension Island</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BA">Bosnia &amp; Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="VG">British Virgin Islands</option>
                                            <option value="BN">Brunei</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="BQ">Caribbean Netherlands</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo - Brazzaville</option>
                                            <option value="CD">Congo - Kinshasa</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="CI">Côte d’Ivoire</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CW">Curaçao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czechia</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="SZ">Eswatini</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GU">Guam</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong SAR China</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="XK">Kosovo</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Laos</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao SAR China</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="MD">Moldova</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar (Burma)</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="MK">North Macedonia</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PS">Palestinian Territories</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn Islands</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RE">Réunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russia</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="WS">Samoa</option>
                                            <option value="SM">San Marino</option>
                                            <option value="ST">São Tomé &amp; Príncipe</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SX">Sint Maarten</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia &amp; South Sandwich Islands</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="BL">St. Barthélemy</option>
                                            <option value="SH">St. Helena</option>
                                            <option value="KN">St. Kitts &amp; Nevis</option>
                                            <option value="LC">St. Lucia</option>
                                            <option value="MF">St. Martin</option>
                                            <option value="PM">St. Pierre &amp; Miquelon</option>
                                            <option value="VC">St. Vincent &amp; Grenadines</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard &amp; Jan Mayen</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="TW">Taiwan</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad &amp; Tobago</option>
                                            <option value="TA">Tristan da Cunha</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks &amp; Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VA">Vatican City</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="WF">Wallis &amp; Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 input-box">
                                    <label class="label-text">What Category?</label>
                                    <div class="form-group user-chosen-select-container">
                                        <select class="user-chosen-select">
                                            <option value="0">Select a Category</option>
                                            <option value="1">Shops</option>
                                            <option value="2">Hotels</option>
                                            <option value="3">Foods & Restaurants</option>
                                            <option value="4">Fitness</option>
                                            <option value="5">Travel</option>
                                            <option value="6">Salons</option>
                                            <option value="7">Event</option>
                                            <option value="8">Business</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-6 input-box">
                                    <label class="label-text">Filter by Price</label>
                                    <div class="form-group user-chosen-select-container">
                                        <select class="user-chosen-select">
                                            <option value="0">Price Range</option>
                                            <option value="1">$ Inexpensive</option>
                                            <option value="2">$$ Moderate</option>
                                            <option value="3">$$$ Pricey</option>
                                            <option value="4">$$$$ Ultra High</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12 more-options-box">
                                    <div class="collapse collapse-content pb-3" id="moreOptionCollapse">
                                        <div class="d-flex align-items-center pb-4">
                                            <a href="#" class="btn-gray open-filter-btn"><i class="la la-clock mr-1"></i>Now Open</a>
                                            <div class="date-form form-group mb-0 ml-3">
                                                <span class="la la-calendar form-icon form-icon-2"></span>
                                                <input class="date-dropper-input form-control form-control-sm" type="text" name="daterange" placeholder="Search by date" />
                                            </div>
                                            <div class="price-range-wrap ml-3">
                                                <div class="input-box d-flex align-items-center">
                                                    <div class="form-group mb-0">
                                                        <span class="form-icon dollar-icon text-color">$</span>
                                                        <input class="form-control form-control-sm padding-left-25px" type="text" name="text" placeholder="5" />
                                                    </div>
                                                    <span class="px-2">-</span>
                                                    <div class="form-group mb-0">
                                                        <span class="form-icon dollar-icon text-color">$</span>
                                                        <input class="form-control form-control-sm padding-left-25px" type="text" name="text" placeholder="29" />
                                                    </div>
                                                    <button class="btn-gray ml-3">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 class="font-size-16 font-weight-semi-bold">Filter by Features</h3>
                                        <div class="feature-content-box row pt-3">
                                            <div class="col-lg-3 custom-checkbox">
                                                <input type="checkbox" id="fullBarChb" />
                                                <label class="font-size-14" for="fullBarChb"> Full Bar</label>
                                            </div>
                                            <div class="col-lg-3 custom-checkbox" />
                                            <input type="checkbox" id="reservationsChb" />
                                            <label class="font-size-14" for="reservationsChb">Reservations</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="seatingChb" />
                                            <label class="font-size-14" for="seatingChb">Seating</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="servesAlcoholChb" />
                                            <label class="font-size-14" for="servesAlcoholChb">Serves Alcohol</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="valetParkingChb" />
                                            <label class="font-size-14" for="valetParkingChb">Valet Parking</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="waitstaffChb" />
                                            <label class="font-size-14" for="waitstaffChb">Waitstaff</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="elevatorInBuildingChb" />
                                            <label class="font-size-14" for="elevatorInBuildingChb">Elevator in Building</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="smokingAllowedChb" />
                                            <label class="font-size-14" for="smokingAllowedChb">Smoking Allowed</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="freeParkingChb" />
                                            <label class="font-size-14" for="freeParkingChb">Free Parking</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="freeWiFiChb" />
                                            <label class="font-size-14" for="freeWiFiChb">Free WiFi</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="instantBookChb" />
                                            <label class="font-size-14" for="instantBookChb">Instant Book</label>
                                        </div>
                                        <div class="col-lg-3 custom-checkbox">
                                            <input type="checkbox" id="friendlyWorkspaceChb" />
                                            <label class="font-size-14" for="friendlyWorkspaceChb">Friendly Workspace</label>
                                        </div>
                                    </div>
                                </div>
                                <a class="collapse-btn" data-toggle="collapse" href="#moreOptionCollapse" role="button" aria-expanded="false" aria-controls="moreOptionCollapse">
                                    <span class="collapse-btn-hide">More Options <i class="la la-plus ml-1"></i></span>
                                    <span class="collapse-btn-show">More Less <i class="la la-minus ml-1"></i></span>
                                </a>

                                <div class="col-lg-12 btn-box padding-top-30px">
                                    <button type="submit" class="theme-btn gradient-btn">
                                        Apply Filter <i class="la la-arrow-right ml-1"></i>
                                    </button>
                                    <button type="submit" class="btn-gray btn-gray-lg ml-2">
                                        <i class="la la-redo-alt mr-1"></i> Reset Filters
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ListingList