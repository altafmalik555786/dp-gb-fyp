import React from 'react'
import ListingHeader from './ListingHeader'
import Footer from './Footer'
import { Link } from "react-router-dom"
import img31 from "../Assets/images/img31.jpg"

function ContactUs() {
    return (
        <div>
            <ListingHeader />
            {/* <!-- ================================
    START BREADCRUMB AREA
================================= --> */}
            <section className="breadcrumb-area bread-bg-3 bread-overlay overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between">
                                <div className="section-heading">
                                    <h2 className="sec__title text-white font-size-40 mb-0">Contact Us</h2>
                                </div>
                                <ul className="list-items bread-list ">
                                    <li><Link to="/">Home</Link></li>
                                    <li>Pages</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            {/* <!-- end breadcrumb-content --> */}
                        </div>
                        {/* <!-- end col-lg-12 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
                <div className="bread-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50px" viewBox="0 0 1200 150" preserveAspectRatio="none">
                        <g><path fill-opacity="0.2" d="M0,150 C600,100 1000,50 1200,-1.13686838e-13 C1200,6.8027294 1200,56.8027294 1200,150 L0,150 Z"></path></g><g className="pix-waiting animated" data-anim-type="fade-in-up" data-anim-delay="300"><path fill="rgba(255,255,255,0.8)" d="M0,150 C600,120 1000,80 1200,30 C1200,36.8027294 1200,76.8027294 1200,150 L0,150 Z"></path></g><path fill="#fff" d="M0,150 C600,136.666667 1000,106.666667 1200,60 C1200,74 1200,104 1200,150 L0,150 Z"></path><defs></defs>
                    </svg>
                </div>
                {/* <!-- end bread-svg --> */}
            </section>
            {/* <!-- end breadcrumb-area --> */}
            {/* <!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START CONTACT AREA
================================= --> */}
            <section className="contact-area section-padding position-relative">
                <span className="circle-bg circle-bg-1 position-absolute"></span>
                <span className="circle-bg circle-bg-2 position-absolute"></span>
                <span className="circle-bg circle-bg-3 position-absolute"></span>
                <span className="circle-bg circle-bg-4 position-absolute"></span>
                <span className="circle-bg circle-bg-5 position-absolute"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.076 512.076" >
                                        <defs>
                                            <linearGradient id="svg-gradient">
                                                <stop offset="5%" stop-color="#ff6b6b"></stop>
                                                <stop offset="95%" stop-color="#ffbb3d"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g transform="translate(-1 -1)">
                                            <g>
                                                <g>
                                                    <path d="M499.639,396.039l-103.646-69.12c-13.153-8.701-30.784-5.838-40.508,6.579l-30.191,38.818
                                                c-3.88,5.116-10.933,6.6-16.546,3.482l-5.743-3.166c-19.038-10.377-42.726-23.296-90.453-71.04s-60.672-71.45-71.049-90.453
                                                l-3.149-5.743c-3.161-5.612-1.705-12.695,3.413-16.606l38.792-30.182c12.412-9.725,15.279-27.351,6.588-40.508l-69.12-103.646
                                                C109.12,1.056,91.25-2.966,77.461,5.323L34.12,31.358C20.502,39.364,10.511,52.33,6.242,67.539
                                                c-15.607,56.866-3.866,155.008,140.706,299.597c115.004,114.995,200.619,145.92,259.465,145.92
                                                c13.543,0.058,27.033-1.704,40.107-5.239c15.212-4.264,28.18-14.256,36.181-27.878l26.061-43.315
                                                C517.063,422.832,513.043,404.951,499.639,396.039z M494.058,427.868l-26.001,43.341c-5.745,9.832-15.072,17.061-26.027,20.173
                                                c-52.497,14.413-144.213,2.475-283.008-136.32S8.29,124.559,22.703,72.054c3.116-10.968,10.354-20.307,20.198-26.061
                                                l43.341-26.001c5.983-3.6,13.739-1.855,17.604,3.959l37.547,56.371l31.514,47.266c3.774,5.707,2.534,13.356-2.85,17.579
                                                l-38.801,30.182c-11.808,9.029-15.18,25.366-7.91,38.332l3.081,5.598c10.906,20.002,24.465,44.885,73.967,94.379
                                                c49.502,49.493,74.377,63.053,94.37,73.958l5.606,3.089c12.965,7.269,29.303,3.898,38.332-7.91l30.182-38.801
                                                c4.224-5.381,11.87-6.62,17.579-2.85l103.637,69.12C495.918,414.126,497.663,421.886,494.058,427.868z"/>
                                                    <path d="M291.161,86.39c80.081,0.089,144.977,64.986,145.067,145.067c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533
                                                c-0.099-89.503-72.63-162.035-162.133-162.133c-4.713,0-8.533,3.82-8.533,8.533S286.448,86.39,291.161,86.39z"/>
                                                    <path d="M291.161,137.59c51.816,0.061,93.806,42.051,93.867,93.867c0,4.713,3.821,8.533,8.533,8.533
                                                c4.713,0,8.533-3.82,8.533-8.533c-0.071-61.238-49.696-110.863-110.933-110.933c-4.713,0-8.533,3.82-8.533,8.533
                                                S286.448,137.59,291.161,137.59z"/>
                                                    <path d="M291.161,188.79c23.552,0.028,42.638,19.114,42.667,42.667c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533
                                                c-0.038-32.974-26.759-59.696-59.733-59.733c-4.713,0-8.533,3.82-8.533,8.533S286.448,188.79,291.161,188.79z"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title mb-2">Call Us Today</h4>
                                    <p className="info__desc"><a href="tel:+1811864592" className="btn-text">+1 (811) 86 45 92</a></p>
                                </div>
                                {/* <!-- end info-content --> */}
                            </div>
                            {/* <!-- end info-box --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" >
                                        <defs>
                                            <linearGradient id="svg-gradient2">
                                                <stop offset="5%" stop-color="#ff6b6b"></stop>
                                                <stop offset="95%" stop-color="#ffbb3d"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <g>
                                                <path d="M469.333,64H42.667C19.135,64,0,83.135,0,106.667v298.667C0,428.865,19.135,448,42.667,448h426.667
                                        C492.865,448,512,428.865,512,405.333V106.667C512,83.135,492.865,64,469.333,64z M42.667,85.333h426.667
                                        c1.572,0,2.957,0.573,4.432,0.897c-36.939,33.807-159.423,145.859-202.286,184.478c-3.354,3.021-8.76,6.625-15.479,6.625
                                        s-12.125-3.604-15.49-6.635C197.652,232.085,75.161,120.027,38.228,86.232C39.706,85.908,41.094,85.333,42.667,85.333z
                                         M21.333,405.333V106.667c0-2.09,0.63-3.986,1.194-5.896c28.272,25.876,113.736,104.06,169.152,154.453
                                        C136.443,302.671,50.957,383.719,22.46,410.893C21.957,409.079,21.333,407.305,21.333,405.333z M469.333,426.667H42.667
                                        c-1.704,0-3.219-0.594-4.81-0.974c29.447-28.072,115.477-109.586,169.742-156.009c7.074,6.417,13.536,12.268,18.63,16.858
                                        c8.792,7.938,19.083,12.125,29.771,12.125s20.979-4.188,29.76-12.115c5.096-4.592,11.563-10.448,18.641-16.868
                                        c54.268,46.418,140.286,127.926,169.742,156.009C472.552,426.073,471.039,426.667,469.333,426.667z M490.667,405.333
                                        c0,1.971-0.624,3.746-1.126,5.56c-28.508-27.188-113.984-108.227-169.219-155.668c55.418-50.393,140.869-128.57,169.151-154.456
                                        c0.564,1.91,1.194,3.807,1.194,5.897V405.333z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title mb-2">Send Us Email</h4>
                                    <p className="info__desc"><a href="mailto:dirto@gamil.com" className="btn-text">DPGB@gmail.com</a></p>
                                </div>
                                {/* <!-- end info-content --> */}
                            </div>
                            {/* <!-- end info-box --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div className="col-lg-4 responsive-column">
                            <div className="info-box info--box">
                                <div className="info-icon gradient-icon">
                                    <svg width="40" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" >
                                        <defs>
                                            <linearGradient id="svg-gradient3">
                                                <stop offset="5%" stop-color="#ff6b6b"></stop>
                                                <stop offset="95%" stop-color="#ffbb3d"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g>
                                            <path d="M240,0C156.053,0,88,68.053,88,152c0,40.448,26.16,102.096,77.744,183.2l67.504,106.184
                                        c2.37,3.729,7.314,4.831,11.043,2.461c0.991-0.63,1.831-1.47,2.461-2.461L314.256,335.2C365.84,254.096,392,192.448,392,152
                                        C392,68.053,323.947,0,240,0z M300.76,326.632L240,422.184l-60.76-95.552C129.312,248.112,104,189.36,104,152
                                        c0.084-75.076,60.924-135.916,136-136c75.076,0.084,135.916,60.924,136,136C376,189.36,350.688,248.112,300.76,326.632z"></path>
                                        </g>
                                        <g>
                                            <path d="M240,80c-39.764,0-72,32.235-72,72c0,36.616,58.568,129.792,65.248,140.296c1.469,2.308,4.016,3.705,6.752,3.704
                                        c2.736,0.001,5.283-1.396,6.752-3.704C253.432,281.792,312,188.616,312,152C312,112.235,279.765,80,240,80z M240,272.848
                                        c-20.208-33.128-56-96.8-56-120.848c0.035-30.913,25.087-55.965,56-56c30.913,0.035,55.965,25.087,56,56
                                        C296,176.064,260.208,239.72,240,272.848z"></path>
                                        </g>
                                        <g>
                                            <path d="M272.48,408.896l-0.912,16c59.112,3.328,84.656,14.16,88.224,19.136C354.776,451.448,312.104,464,240,464
                                        s-114.776-12.544-119.792-20c3.568-4.968,29.08-15.792,88.104-19.128l-0.904-16C176.312,410.664,104,417.6,104,444
                                        c0,28.416,85.488,36,136,36c50.512,0,136-7.584,136-36C376,417.6,303.6,410.648,272.48,408.896z"></path>
                                        </g>
                                        <g>
                                            <path d="M240,112c-22.091,0-40,17.909-40,40s17.909,40,40,40c22.08-0.026,39.974-17.92,40-40C280,129.909,262.091,112,240,112z
                                         M240,176c-13.255,0-24-10.745-24-24s10.745-24,24-24s24,10.745,24,24S253.255,176,240,176z"></path>
                                        </g>
                                    </svg>
                                </div>
                                {/* <!-- end info-icon--> */}
                                <div className="info-content">
                                    <h4 className="info__title mb-2">Visit Our HQ</h4>
                                    <p className="info__desc">Las Vegas, USA</p>
                                </div>
                                {/* <!-- end info-content --> */}
                            </div>
                            {/* <!-- end info-box --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="block-card">
                                <div className="block-card-header">
                                    <h3 className="widget-title pb-0">Send us a message</h3>
                                    <p className="pt-1">Contact us today using this form and our support team will reach out as soon as possible.</p>
                                </div>
                                {/* <!-- block-card-header --> */}
                                <div className="block-card-body">
                                    <form method="post" className="form-box row">
                                        <div className="col-lg-6">
                                            <div className="input-box">
                                                <label className="label-text">Your Name</label>
                                                <div className="form-group">
                                                    <span className="la la-user form-icon"></span>
                                                    <input className="form-control form-control-styled" type="text" name="text" placeholder="Name" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-6 --> */}
                                        <div className="col-lg-6">
                                            <div className="input-box">
                                                <label className="label-text">Your Email</label>
                                                <div className="form-group">
                                                    <span className="la la-envelope-o form-icon"></span>
                                                    <input className="form-control form-control-styled" type="email" name="email" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-6 --> */}
                                        <div className="col-lg-12">
                                            <div className="input-box">
                                                <label className="label-text">Subject</label>
                                                <div className="form-group">
                                                    <span className="la la-pencil form-icon"></span>
                                                    <input className="form-control form-control-styled" type="text" name="text" placeholder="Subject" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-12 --> */}
                                        <div className="col-lg-12">
                                            <div className="input-box">
                                                <label className="label-text">Your Message</label>
                                                <div className="form-group">
                                                    <span className="la la-pencil form-icon"></span>
                                                    <textarea className="message-control form-control" name="message" placeholder="Write message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-12 --> */}
                                        <div className="col-lg-12">
                                            <div className="btn-box">
                                                <button type="submit" className="theme-btn gradient-btn border-0">Send Message <i className="la la-arrow-right ml-1"></i></button>
                                                <p className="font-size-14 pt-1">*We'll never share your email with anyone else.</p>
                                            </div>
                                        </div>
                                        {/* <!-- end col-lg-12 --> */}
                                    </form>
                                </div>
                                {/* <!-- end block-card-body --> */}
                            </div>
                            {/* <!-- end block-card --> */}
                        </div>
                        {/* <!-- end col-lg-8 --> */}
                        <div className="col-lg-4">
                            <div className="block-card">
                                <div className="block-card-header">
                                    <h3 className="widget-title">Our Office</h3>
                                    <div className="stroke-shape"></div>
                                </div>
                                {/* <!-- block-card-header --> */}
                                <div className="block-card-body">
                                    <img src={img31} data-src={img31} alt="group-img" className="w-100 radius-round lazy" />
                                    <ul className="list-items list--items list-items-style-2 py-4">
                                        <li><span className="text-color"><i className="la la-map mr-2 text-color-2 font-size-18"></i>Address:</span> 123 Little Baker St, NY</li>
                                        <li><span className="text-color"><i className="la la-phone mr-2 text-color-2 font-size-18"></i>Phone:</span><a href="#">923013109562</a></li>
                                        <li><span className="text-color"><i className="la la-envelope mr-2 text-color-2 font-size-18"></i>Email:</span><a href="#">DPGB@gmail.com</a></li>
                                    </ul>
                                    <div className="section-block-2"></div>
                                    <h3 className="widget-title font-size-16 pt-4">Working Hours</h3>
                                    <ul className="list-items pb-4">
                                        <li className="d-flex align-items-center justify-content-between"><span>Monday To Friday</span> <span className="text-success">9am - 7pm</span></li>
                                        <li className="d-flex align-items-center justify-content-between"><span>Saturday To Sunday</span> <span className="text-color-2">Closed</span></li>
                                    </ul>
                                    <ul className="social-profile social-profile-styled">
                                        <li><a href="#" className="facebook-bg" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="lab la-facebook-f"></i></a></li>
                                        <li><a href="#" className="twitter-bg" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="lab la-twitter"></i></a></li>
                                        <li><a href="#" className="instagram-bg" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="lab la-instagram"></i></a></li>
                                        <li><a href="#" className="youtube-bg" data-toggle="tooltip" data-placement="top" title="Youtube"><i className="la la-youtube"></i></a></li>
                                        <li><a href="#" className="behance-bg" data-toggle="tooltip" data-placement="top" title="Behance"><i className="la la-behance"></i></a></li>
                                        <li><a href="#" className="dribbble-bg" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="la la-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- end block-card-body --> */}
                            </div>
                            {/* <!-- end block-card --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end contact-area --> */}
            {/* <!-- ================================
    END CONTACT AREA
================================= --> */}

            {/* <!--========= start google map ===========--> */}
            <div className="map-container height-500">
                <div id="map"></div>
            </div>
            {/* <!--========= end google map ===========--> */}
            <Footer />
        </div>
    )
}

export default ContactUs