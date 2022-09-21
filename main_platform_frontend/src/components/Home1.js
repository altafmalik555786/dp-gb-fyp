import React, { useEffect } from 'react'
import catImg from "../Assets/images/cat-img.jpg"
import catImg2 from "../Assets/images/cat-img-2.jpg"
import catImg3 from "../Assets/images/cat-img-3.jpg"
import catImg4 from "../Assets/images/cat-img-4.jpg"
import catImg5 from "../Assets/images/cat-img-5.jpg"
import catImg6 from "../Assets/images/cat-img-6.jpg"
import catImg7 from "../Assets/images/cat-img-7.jpg"
import catImg8 from "../Assets/images/cat-img-8.jpg"
import img1 from "../Assets/images/img1.jpg"
import img2 from "../Assets/images/img2.jpg"
import img3 from "../Assets/images/img3.jpg"
import img4 from "../Assets/images/img4.jpg"
import img5 from "../Assets/images/img5.jpg"
import img6 from "../Assets/images/img6.jpg"
import img7 from "../Assets/images/img7.jpg"
import img8 from "../Assets/images/img8.jpg"
import img9 from "../Assets/images/img9.jpg"
import img10 from "../Assets/images/img10.jpg"
import img11 from "../Assets/images/img11.jpg"
import img12 from "../Assets/images/img12.jpg"
import img13 from "../Assets/images/img13.jpg"
import img37 from "../Assets/images/img37.jpg"
import photoShop from "../Assets/images/photoshop.png"
import sketch from "../Assets/images/sketch.png"
import listingLogo from "../Assets/images/listing-logo.jpg"
import listingLogo2 from "../Assets/images/listing-logo2.jpg"
import listingLogo3 from "../Assets/images/listing-logo3.jpg"
import videoImg from "../Assets/images/video-img.jpg"
import heroBg from "../Assets/images/hero-bg.jpg"
import heroBg2 from "../Assets/images/hero-bg2.jpg"
import heroBg3 from "../Assets/images/hero-bg3.jpg"
import heroBg4 from "../Assets/images/hero-bg4.jpg"
import heroBg5 from "../Assets/images/hero-bg5.jpg"
import anywhere from "../Assets/images/anywhere.png"
import fillSign from "../Assets/images/fill-sign.png"
import avatarImg from "../Assets/images/avatar-img.jpg"
import avatarImg2 from "../Assets/images/avatar-img2.jpg"
import avatarImg3 from "../Assets/images/avatar-img3.jpg"
import avatarImg4 from "../Assets/images/avatar-img4.jpg"
import mapImg from "../Assets/images/map-img.png"
import smallImg from "../Assets/images/small-img.jpg"
import smallImg2 from "../Assets/images/small-img2.jpg"
import smallImg3 from "../Assets/images/small-img3.jpg"
import smallImg4 from "../Assets/images/small-img4.jpg"
import smallImg5 from "../Assets/images/small-img5.jpg"
import smallImg6 from "../Assets/images/small-img6.jpg"
import airbnb from "../Assets/images/airbnb.png"
import faceBook from "../Assets/images/facebook.png"
import microsoft from "../Assets/images/microsoft.png"
import gitHub from "../Assets/images/github.png"
import slack from "../Assets/images/slack.png"
import git from "../Assets/images/git.png"
import spotify from "../Assets/images/spotify.png"
import vimeo from "../Assets/images/vimeo.png"
import yelp from "../Assets/images/yelp.png"
import excel from "../Assets/images/excel.png"
import logoBlack from "../Assets/images/logo-black.png"
import Header from './Header'
import { Link } from "react-router-dom"
import HomeCrousal from './HomeCrousal'
import HomeCrousal2 from './HomeCrousal2'
import HomeCrousal3 from './HomeCrousal3'
import { useStore } from 'stores/root-store'
import { observer } from 'mobx-react'


const Home1 = observer(() => {
  const { userStore: { loadListings, getListings } } = useStore(null)

  useEffect(() => {
    loadListings()
  }, [])
  

  // console.log("getListings", getListings)

  return (
    <div>
      <Header />
      <section className="hero-wrapper overflow-hidden">
        <div className="overlay"></div>
        {/* end overlay  */}
        <div id="fullscreen-slide-container">
          <ul className="slides-container">
            <li>
              <img
                className="lazy"
                src={heroBg}
                data-src={heroBg}
                alt=""
              />
            </li>
            <li>
              <img
                className="lazy"
                src={heroBg2}
                data-src={heroBg2}
                alt=""
              />
            </li>
            <li>
              <img
                className="lazy"
                src={heroBg3}
                data-src={heroBg3}
                alt=""
              />
            </li>
            <li>
              <img
                className="lazy"
                src={heroBg4}
                data-src={heroBg4}
                alt=""
              />
            </li>
            <li>
              <img
                className="lazy"
                src={heroBg5}
                data-src={heroBg5}
                alt=""
              />
            </li>
          </ul>
        </div>
        {/* End fullscreen-slide-container  */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-heading text-center">
                <div className="section-heading">
                  <h2 className="sec__title cd-headline slide">
                    What are you interested in
                    <span className="cd-words-wrapper py-0">
                      <b className="is-visible">Hotels</b>
                      <b>Restaurants</b>
                      <b>Shops</b>
                      <b>Salons</b>
                      <b>Apartments</b>
                      <b>Travels</b>
                      <b>Business</b>
                      <b>Fitness</b>
                    </span>
                  </h2>
                  <p className="sec__desc">
                    Discover the best places to stay, eat, shop & visit the city
                    nearest to you.
                  </p>
                </div>
              </div>
              {/* end hero-heading  */}
              <div className="main-search-input">
                <div className="main-search-input-item">
                  <form action="#" className="form-box">
                    <div className="form-group mb-0">
                      <span className="la la-search form-icon"></span>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="What are you looking for?"
                      />
                    </div>
                  </form>
                </div>
                {/* end main-search-input-item  */}
                <div className="main-search-input-item user-chosen-select-container">
                  <select className="user-chosen-select">
                    <option value="0">Select a Country</option>
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
                    <option value="CI">Côte d'Ivoire</option>
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
                    <option value="GS">
                      South Georgia &amp; South Sandwich Islands
                    </option>
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
                {/* end main-search-input-item  */}
                <div className="main-search-input-item user-chosen-select-container">
                  <select className="user-chosen-select">
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
                {/* end main-search-input-item */}
                <div className="main-search-input-item">
                  <button
                    className="theme-btn gradient-btn border-0 w-100"
                    type="submit"
                  >
                    <i className="la la-search mr-2"></i>Search Now
                  </button>
                </div>
                {/* end main-search-input-item  */}
              </div>
              {/* end main-search-input */}
              <div className="highlighted-categories">
                <div
                  className="d-flex align-items-end justify-content-center highlight-search-desc py-5 text-center"
                >
                  <img
                    src="images/arrow-shape.png"
                    alt=""
                    className="mr-5 cat-arrow-icon"
                  />
                  <h5 className="highlighted__title">
                    Just looking around? Let us suggest you <br />
                    something hot & happening!
                  </h5>
                </div>
                <div className="highlight-lists d-flex justify-content-center mt-4">
                  <div className="hero-category-item">
                    <Link to="/listing-list" className="d-block hero-cat-link hover-y">
                      <span className="icon-element bg-1 mx-auto"
                      ><i className="la la-building-o"></i
                      ></span>
                      apartments
                    </Link>
                  </div>
                  <div className="hero-category-item">
                    <Link to="/listing-list" className="d-block hero-cat-link hover-y">
                      <span className="icon-element bg-2 mx-auto"
                      ><i className="la la-cutlery"></i
                      ></span>
                      Restaurants
                    </Link>
                  </div>
                  <div className="hero-category-item">
                    <Link to="/listing-list" className="d-block hero-cat-link hover-y">
                      <span className="icon-element bg-3 mx-auto"
                      ><i className="la la-plane"></i
                      ></span>
                      travel
                    </Link>
                  </div>
                  <div className="hero-category-item">
                    <Link to="/listing-list" className="d-block hero-cat-link hover-y">
                      <span className="icon-element bg-4 mx-auto"
                      ><i className="la la-music"></i
                      ></span>
                      Events
                    </Link>
                  </div>
                  <div className="hero-category-item">
                    <Link to="/listing-list" className="d-block hero-cat-link hover-y">
                      <span className="icon-element bg-5 mx-auto"
                      ><i className="la la-gear"></i
                      ></span>
                      fitness
                    </Link>
                  </div>
                  <div className="hero-category-item">
                    <Link to="/listing-list" className="d-block hero-cat-link hover-y">
                      <span className="icon-element bg-6 mx-auto"
                      ><i className="la la-hotel"></i
                      ></span>
                      Hotels
                    </Link>
                  </div>
                </div>
              </div>
              {/* end highlighted-categories  */}
            </div>
            {/* end col-lg-12  */}
          </div>
          {/* end row  */}
        </div>
        {/* end container  */}
        <div className="svg-bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#F5F7FC"
              className="elementor-shape-fill"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            ></path>
          </svg>
        </div>
      </section>
      {/* end hero-wrapper  */}
      {/* ================================ */}
      {/* END HERO-WRAPPER AREA */}
      {/* ================================= --> */}

      {/* <!-- ================================
    START CATEGORY AREA
================================= --> */}
      <section
        className="category-area bg-gray arrow-down-shape position-relative section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 438.891 438.891"
                  //   xml:space="preserve"
                  >
                    <defs>
                      <linearGradient id="svg-gradient">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347
                                                c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923
                                                c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045
                                                c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735
                                                c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51
                                                c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808
                                                H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645
                                                c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706
                                                c12.009,0.22,21.922,9.456,22.988,21.42V399.185z"
                      />
                      <path
                        d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,233.962,179.427,233.761,179.217,233.569z"
                      />
                      <path
                        d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z"
                      />
                      <path
                        d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,150.37,179.427,150.169,179.217,149.977z"
                      />
                      <path
                        d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z"
                      />
                      <path
                        d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,317.554,179.427,317.353,179.217,317.16z"
                      />
                      <path
                        d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="sec__title">Most Popular Categories</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* end section-heading  */}
            </div>
            {/* end col-lg-12  */}
          </div>
          {/* end row  */}
          <div className="row mt-5">
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg}
                  data-src={catImg}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-cutlery"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Restaurants</h4>
                      <span className="badge">12 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg2}
                  data-src={catImg2}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-plane"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Travels</h4>
                      <span className="badge">55 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg3}
                  data-src={catImg3}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-hotel"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Hotels</h4>
                      <span className="badge">44 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg4}
                  data-src={catImg4}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-music"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Events</h4>
                      <span className="badge">33 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg5}
                  data-src={catImg5}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-shopping-cart"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Shops</h4>
                      <span className="badge">66 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg6}
                  data-src={catImg6}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-dumbbell"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Fitness</h4>
                      <span className="badge">33 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg7}
                  data-src={catImg7}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-glass"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Food & Drink</h4>
                      <span className="badge">44 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
            <div className="col-lg-3 responsive-column">
              <div className="category-item overflow-hidden">
                <img
                  src={catImg8}
                  data-src={catImg8}
                  alt="category-image"
                  className="lazy cat-img"
                />
                <div
                  className="category-content d-flex align-items-center justify-content-center"
                >
                  <Link
                    to="/listing-list"
                    className="category-link d-flex flex-column justify-content-center w-100 h-100"
                  >
                    <div className="icon-element mb-3 mx-auto">
                      <span className="la la-paint-brush"></span>
                    </div>
                    <div className="cat-content">
                      <h4 className="cat__title mb-3">Art & Design</h4>
                      <span className="badge">11 Listings</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* end category-item  */}
            </div>
            {/* end col-lg-3  */}
          </div>
          {/* end row  */}
          <div className="more-btn-box pt-3 text-center">
            <Link to="all-categories" className="btn-gray hover-scale-2"
            >Browse All Category <i className="la la-arrow-right ml-2"></i
            ></Link>
          </div>
        </div>
        {/* end container  */}
      </section>
      {/* <!-- end category-area -->
    <!-- ================================
    END CATEGORY AREA
================================= -->

    <!-- ================================
    START CARD AREA
================================= --> */}
      <section className="card-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="svg-gradient2">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="m507.786 64.62c-.304-.286-60.445-57.641-60.445-57.641-2.299-2.206-4.677-4.486-9.117-4.486h-242.12c-7.072 0-12.826 5.753-12.826 12.825v39.383l-85.335 14.628c-6.84 1.2-11.44 7.746-10.255 14.579l4.331 25.252c-27.737 9.334-56.214 18.956-83.705 28.831-6.496 2.375-9.905 9.598-7.587 16.133l54.685 152.016c1.1 3.059 3.983 4.964 7.058 4.964.842 0 1.7-.143 2.538-.445 3.898-1.402 5.921-5.698 4.519-9.596l-53.876-149.768c25.9-9.273 52.722-18.349 78.935-27.172l25.771 150.245 29.654 173.032c1.071 6.108 6.44 10.454 12.5 10.454.686 0 1.382-.056 2.08-.171l80.316-13.783 62.76-10.758-94.391 33.927-74.435 26.763-57.808-160.789c-1.401-3.898-5.696-5.921-9.595-4.52-3.898 1.401-5.921 5.697-4.52 9.595l58.628 163.074c1.875 5.128 6.733 8.316 11.868 8.316 1.419 0 2.86-.244 4.264-.757l76.671-27.566 174.094-62.574 33.259-5.701h73.471c7.072 0 12.826-5.766 12.826-12.854v-326.985c.001-4.489-2.435-6.779-4.213-8.451zm-19.871 1.776h-37.53l-.93.004c-1.797.012-6.004.043-7.071-1.017-.246-.245-.534-1.063-.534-2.582l-.087-40.415zm9.085 331.512h-298.722v-146.167c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v148.313c0 7.087 5.754 12.854 12.826 12.854h140.812l-94.545 16.206-77.982 13.383-29.248-170.665-32.269-188.13 80.405-13.783v147.022c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-199.449h228.475l.098 45.326c0 5.494 1.671 9.938 4.966 13.21 5.063 5.027 12.22 5.377 16.663 5.377.382 0 .744-.003 1.083-.005l47.438-.003z"
                      />
                      <path
                        d="m234.43 118.949c0 4.142 3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-214.436c-4.142 0-7.5 3.358-7.5 7.5z"
                      />
                      <path
                        d="m456.366 164.731h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                      />
                      <path
                        d="m456.366 218.013h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                      />
                      <path
                        d="m456.366 271.295h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                      />
                      <path
                        d="m456.366 324.578h-214.436c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h214.436c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="sec__title">Check out Our Newest Business</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-4 responsive-column">
              <div className="card-item">
                <div className="card-image">
                  <Link to="/listing-details" className="d-block">
                    <img
                      src={img1}
                      data-src={img1}
                      className="card__img lazy"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <a
                    href="#"
                    className="user-thumb d-inline-block"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="TechyDevs"
                  >
                    <img src={photoShop} alt="author-img" />
                  </a>
                  <h4 className="card-title pt-3">
                    <Link to="/listing-details">Roma's Ristorante Italiano</Link>
                    <i
                      className="la la-check-circle ml-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Claimed"
                    ></i>
                  </h4>
                  <p className="card-sub">
                    <a href="#"
                    ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                      Avenue, New York</a
                    >
                  </p>
                  <ul className="listing-meta d-flex align-items-center">
                    <li className="d-flex align-items-center">
                      <span className="rate flex-shrink-0">4.7</span>
                      <span className="rate-text">5 reviews</span>
                    </li>
                    <li>
                      <span
                        className="price-range"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Pricey"
                      >
                        <strong className="font-weight-medium">$</strong>
                        <strong className="font-weight-medium">$</strong>
                        <strong className="font-weight-medium">$</strong>
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="la la-cutlery mr-1 listing-icon"></i
                      ><a href="#" className="listing-cat-link">Restaurant</a>
                    </li>
                  </ul>
                  <ul className="info-list padding-top-20px">
                    <li>
                      <span className="la la-calendar-check-o icon"></span>
                      Opened a few days ago
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item">
                <div className="card-image">
                  <Link to="/listing-details" className="d-block">
                    <img
                      src={img2}
                      data-src={img2}
                      className="card__img lazy"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <a
                    href="#"
                    className="user-thumb d-inline-block"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="TechyDevs"
                  >
                    <img src={sketch} alt="author-img" />
                  </a>
                  <h4 className="card-title pt-3">
                    <Link to="/listing-details">Dumpling Baby China Bistro</Link>
                  </h4>
                  <p className="card-sub">
                    <a href="#"
                    ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                      Avenue, New York</a
                    >
                  </p>
                  <ul className="listing-meta d-flex align-items-center">
                    <li className="d-flex align-items-center">
                      <span className="rate flex-shrink-0">4.7</span>
                      <span className="rate-text">5 reviews</span>
                    </li>
                    <li>
                      <span
                        className="price-range"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Moderate"
                      >
                        <strong className="font-weight-medium">$</strong>
                        <strong className="font-weight-medium">$</strong>
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="la la-cutlery mr-1 listing-icon"></i
                      ><a href="#" className="listing-cat-link">Restaurant</a>
                    </li>
                  </ul>
                  <ul className="info-list padding-top-20px">
                    <li>
                      <span className="la la-calendar-check-o icon"></span>
                      Opened 5 weeks ago
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="card-item">
                <div className="card-image">
                  <Link to="/listing-details" className="d-block">
                    <img
                      src={img3}
                      data-src={img3}
                      className="card__img lazy"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <a
                    href="#"
                    className="user-thumb d-inline-block"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="TechyDevs"
                  >
                    <img src={listingLogo} alt="author-img" />
                  </a>
                  <h4 className="card-title pt-3">
                    <Link to="/listing-details">Yerba Buena Fresh Mex</Link>
                    <i
                      className="la la-check-circle ml-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Claimed"
                    ></i>
                  </h4>
                  <p className="card-sub">
                    <a href="#"
                    ><i className="la la-map-marker mr-1 text-color-2"></i>Bishop
                      Avenue, New York</a
                    >
                  </p>
                  <ul className="listing-meta d-flex align-items-center">
                    <li className="d-flex align-items-center">
                      <span className="rate flex-shrink-0">4.7</span>
                      <span className="rate-text">5 reviews</span>
                    </li>
                    <li>
                      <span
                        className="price-range"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Pricey"
                      >
                        <strong className="font-weight-medium">$</strong>
                        <strong className="font-weight-medium">$</strong>
                        <strong className="font-weight-medium">$</strong>
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="la la-cutlery mr-1 listing-icon"></i
                      ><a href="#" className="listing-cat-link">Restaurant</a>
                    </li>
                  </ul>
                  <ul className="info-list padding-top-20px">
                    <li>
                      <span className="la la-calendar-check-o icon"></span>
                      Opened 3 weeks ago
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="more-link-wrap text-right">
            <a href="#" className="btn-text font-weight-medium"
            >View more hot and new businesses
              <i className="la la-arrow-right icon"></i
              ></a>
          </div>
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end card-area -->
    <!-- ================================
    END CARD AREA
================================= -->

    <!-- ================================
    START HIW AREA
================================= --> */}
      <section
        className="hiw-area padding-top-100px bg-gradient-gray hiw-bottom-left-round"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg
                    id="Layer_1"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="svg-gradient3">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <path
                      d="m80.075 233.13h57.425a8.752 8.752 0 0 0 8.743-8.74v-19.414a6 6 0 0 0 -12 0v16.154h-50.911v-50.83h25.455a6 6 0 0 0 0-12h-28.712a8.751 8.751 0 0 0 -8.743 8.74v57.35a8.752 8.752 0 0 0 8.743 8.74z"
                    />
                    <path
                      d="m151.2 154.933a6 6 0 0 0 -8.45.774l-28.622 34.393-9.184-7.431a6 6 0 1 0 -7.544 9.331l11.04 8.932a9.512 9.512 0 0 0 12.71-.562l.241-.231 30.584-36.754a6 6 0 0 0 -.775-8.452z"
                    />
                    <path
                      d="m442.1 162.482h-234.125a6 6 0 0 0 0 12h234.125a6 6 0 0 0 0-12z"
                    />
                    <path
                      d="m442.1 212.193h-234.125a6 6 0 0 0 0 12h234.125a6 6 0 0 0 0-12z"
                    />
                    <path
                      d="m140.243 326.144a6 6 0 0 0 -6 6v16.156h-50.911v-50.832h25.455a6 6 0 0 0 0-12h-28.712a8.752 8.752 0 0 0 -8.743 8.74v57.35a8.752 8.752 0 0 0 8.743 8.741h57.425a8.752 8.752 0 0 0 8.743-8.741v-19.414a6 6 0 0 0 -6-6z"
                    />
                    <path
                      d="m151.2 282.1a6 6 0 0 0 -8.45.775l-28.619 34.392-9.184-7.43a6 6 0 1 0 -7.548 9.328l11.04 8.932a9.513 9.513 0 0 0 12.71-.561l.241-.232 30.584-36.754a6 6 0 0 0 -.774-8.45z"
                    />
                    <path
                      d="m442.1 289.65h-48.748a6 6 0 0 0 0 12h48.748a6 6 0 1 0 0-12z"
                    />
                    <path
                      d="m284.014 289.65h-76.039a6 6 0 0 0 0 12h76.039a6 6 0 0 0 0-12z"
                    />
                    <path
                      d="m228.468 339.362h-20.493a6 6 0 1 0 0 12h20.493a6 6 0 1 0 0-12z"
                    />
                    <path
                      d="m472.364 10h-432.728a27.665 27.665 0 0 0 -27.636 27.632v358.6a27.656 27.656 0 0 0 27.594 27.631l228.837 1.619 11.592 45.552c.02.081.043.162.067.243a42.821 42.821 0 0 0 41.266 30.723h83.659a43.143 43.143 0 0 0 43.085-43.1v-33.7l24.439-1.333a27.666 27.666 0 0 0 27.461-27.632v-358.603a27.665 27.665 0 0 0 -27.636-27.632zm-432.728 12h432.728a15.651 15.651 0 0 1 15.636 15.632v60.749h-464v-60.749a15.651 15.651 0 0 1 15.636-15.632zm396.464 436.9a31.13 31.13 0 0 1 -31.085 31.1h-83.659a30.891 30.891 0 0 1 -29.736-22.051l-12.7-49.911a212.685 212.685 0 0 0 -11.938-34.3l-.982-2.33a39.484 39.484 0 0 1 32.5 17.06l10.318 14.949v22.283a6 6 0 0 0 12 0v-163.071a11.286 11.286 0 1 1 22.572 0v106.507a5.989 5.989 0 0 0 .256 1.73v24.459a6 6 0 0 0 12 0v-33.511a8.95 8.95 0 1 1 17.9 0v6.8a21.7 21.7 0 0 0 -.234 3.163v23.552a6 6 0 0 0 6 6h.117s.077 0 .117 0a6 6 0 0 0 6-6v-25.642a9.628 9.628 0 0 1 19.031 2.086v29.775a6 6 0 0 0 12 0v-20.371a9.761 9.761 0 1 1 19.521 0zm36.266-47.029c-.109 0-.218 0-.327.01l-23.939 1.3v-22a21.741 21.741 0 0 0 -33.459-18.341 21.609 21.609 0 0 0 -30.925-9.553 20.858 20.858 0 0 0 -28.324-10.267v-80.391a23.286 23.286 0 1 0 -46.572 0v119.663l-.442-.64a51.476 51.476 0 0 0 -42.378-22.244 12.043 12.043 0 0 0 -10.99 16.963l1.011 2.262a200.728 200.728 0 0 1 9.18 24.829l-225.569-1.6a15.651 15.651 0 0 1 -15.632-15.627v-285.854h464v285.854a15.651 15.651 0 0 1 -15.636 15.631z"
                    />
                    <path
                      d="m62.2 82.431a23 23 0 1 0 -23-23 23.024 23.024 0 0 0 23 23zm0-33.992a11 11 0 1 1 -11 11 11.01 11.01 0 0 1 11-11z"
                    />
                    <path
                      d="m122.833 82.431a23 23 0 1 0 -23-23 23.024 23.024 0 0 0 23 23zm0-33.992a11 11 0 1 1 -11 11 11.01 11.01 0 0 1 11-11z"
                    />
                    <path
                      d="m183.467 82.431a23 23 0 1 0 -23-23 23.024 23.024 0 0 0 23 23zm0-33.992a11 11 0 1 1 -11 11 11.01 11.01 0 0 1 11-11z"
                    />
                    <path
                      d="m273 64.3h194.933a6 6 0 0 0 0-12h-194.933a6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <h2 className="sec__title">Quick and Easy Search</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-4 responsive-column">
              <div className="info-box">
                <span className="info-number">1</span>
                <div className="info-icon">
                  <span className="la la-map-marked"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Find Great Place</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a
                    quam luctus, finibus tellus ut, convallis eros.
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="info-box">
                <span className="info-number">2</span>
                <div className="info-icon">
                  <span className="la la-list"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Choose a Category</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a
                    quam luctus, finibus tellus ut, convallis eros.
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-4 responsive-column">
              <div className="info-box">
                <span className="info-number">3</span>
                <div className="info-icon">
                  <span className="la la-thumbs-up"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Go Have Fun</h4>
                  <p className="info__desc">
                    Proin dapibus nisl ornare diam varius ecos tempus. Aenean a
                    quam luctus, finibus tellus ut, convallis eros.
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row">
            <div className="col-lg-4 mx-auto padding-top-30px">
              <div
                className="icon-element icon-element-white mx-auto shadow-sm after-none font-size-20 margin-bottom-45px"
              >
                Or
              </div>
              <a
                className="video-box video-box-negative hover-scale-2"
                href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
                data-fancybox
                title="Play Video"
              >
                <img
                  className="lazy"
                  src={videoImg}
                  data-src={videoImg}
                  alt="video image"
                />
                <div
                  className="video-content d-flex align-items-center justify-content-center"
                >
                  <span className="d-block mr-3 font-weight-semi-bold"
                  >Click to Watch How It Works</span
                  >
                  <span className="icon-element icon-element-white">
                    <i className="la la-play"></i>
                  </span>
                </div> </a
              >
              {/* <!-- end video-box --> */}
            </div>
            {/* <!-- end col-lg-8 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end hiw-area -->
    <!-- ================================
    END HIW AREA
================================= -->

    <!-- ================================
    START CARD AREA
================================= --> */}
      <section className="card-area padding-top-160px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="section-heading text-center">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  //   xml:space="preserve"
                  >
                    <defs>
                      <linearGradient id="svg-gradient4">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M444.519,17.067h-25.6V8.533c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v8.533h-102.4V8.533
                                                c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v8.533h-102.4V8.533c0-4.713-3.82-8.533-8.533-8.533
                                                s-8.533,3.82-8.533,8.533v8.533h-25.6c-14.132,0.015-25.585,11.468-25.6,25.6V204.8c0,4.713,3.82,8.533,8.533,8.533
                                                s8.533-3.821,8.533-8.533V42.667c0.006-4.71,3.823-8.527,8.533-8.533h25.6v18.639c-11.755,4.156-18.806,16.176-16.698,28.465
                                                c2.108,12.289,12.763,21.271,25.231,21.271s23.123-8.982,25.231-21.271s-4.943-24.309-16.698-28.465V34.133h102.4v18.639
                                                c-11.755,4.156-18.806,16.176-16.698,28.465s12.763,21.271,25.231,21.271s23.123-8.982,25.231-21.271
                                                s-4.943-24.309-16.698-28.465V34.133h102.4v18.639c-11.755,4.156-18.806,16.176-16.698,28.465
                                                c2.108,12.289,12.763,21.271,25.231,21.271s23.123-8.982,25.231-21.271s-4.943-24.309-16.698-28.465V34.133h25.6
                                                c4.71,0.006,8.527,3.823,8.533,8.533V486.4c-0.006,4.71-3.823,8.527-8.533,8.533h-307.2c-4.71-0.006-8.527-3.823-8.533-8.533
                                                V366.933c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533V486.4c0.015,14.132,11.468,25.585,25.6,25.6h307.2
                                                c14.132-0.015,25.585-11.468,25.6-25.6V42.667C470.104,28.535,458.651,17.082,444.519,17.067z M171.452,85.333
                                                c-4.713,0-8.533-3.82-8.533-8.533s3.82-8.533,8.533-8.533s8.533,3.82,8.533,8.533C179.98,81.51,176.163,85.327,171.452,85.333z
                                                 M290.919,85.333c-4.713,0-8.533-3.82-8.533-8.533s3.82-8.533,8.533-8.533s8.533,3.82,8.533,8.533
                                                C299.446,81.51,295.629,85.327,290.919,85.333z M410.386,85.333c-4.713,0-8.533-3.82-8.533-8.533s3.82-8.533,8.533-8.533
                                                s8.533,3.82,8.533,8.533C418.913,81.51,415.096,85.327,410.386,85.333z"
                      />
                      <path
                        d="M171.452,179.2c0.2,0,0.404-0.009,0.604-0.021c2.467-0.175,4.737-1.413,6.221-3.392l25.6-34.133
                                                c1.83-2.438,2.219-5.667,1.022-8.471c-1.197-2.804-3.799-4.756-6.825-5.121c-3.026-0.365-6.018,0.912-7.847,3.35l-19.7,26.263
                                                l-10.109-10.108c-3.341-3.281-8.701-3.256-12.012,0.054s-3.335,8.671-0.054,12.012l17.067,17.067
                                                C167.018,178.301,169.189,179.201,171.452,179.2z"
                      />
                      <path
                        d="M148.353,253.5l17.067,17.067c1.599,1.602,3.77,2.501,6.033,2.5c0.2,0,0.404-0.008,0.604-0.021
                                                c2.467-0.175,4.737-1.413,6.221-3.392l25.6-34.133c2.828-3.769,2.065-9.118-1.704-11.946c-3.769-2.828-9.118-2.065-11.946,1.704
                                                l-19.7,26.263l-10.109-10.108c-3.341-3.281-8.701-3.256-12.012,0.054C145.096,244.799,145.072,250.159,148.353,253.5z"
                      />
                      <path
                        d="M231.186,170.667h196.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H231.186
                                                c-4.713,0-8.533,3.82-8.533,8.533S226.473,170.667,231.186,170.667z"
                      />
                      <path
                        d="M231.186,264.533h196.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H231.186
                                                c-4.713,0-8.533,3.82-8.533,8.533S226.473,264.533,231.186,264.533z"
                      />
                      <path
                        d="M231.186,358.4h196.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H231.186
                                                c-4.713,0-8.533,3.82-8.533,8.533S226.473,358.4,231.186,358.4z"
                      />
                      <path
                        d="M231.186,452.267h196.267c4.713,0,8.533-3.82,8.533-8.533s-3.82-8.533-8.533-8.533H231.186
                                                c-4.713,0-8.533,3.82-8.533,8.533S226.473,452.267,231.186,452.267z"
                      />
                      <path
                        d="M167.724,349.671l6.229,6.229c2.15,2.18,5.304,3.041,8.264,2.255c2.96-0.786,5.271-3.097,6.057-6.057
                                                c0.786-2.96-0.075-6.114-2.255-8.264l-6.072-6.072c-0.173-16.55-6.488-32.446-17.719-44.603l-74.133-80.313
                                                c-4.565-4.933-10.844-7.933-17.55-8.384c-0.498-0.038-0.975-0.168-1.479-0.178h-0.004c-5.376-0.041-10.648,1.487-15.168,4.397
                                                c-1.509,0.986-2.911,2.125-4.186,3.399c-10.141,10.087-10.467,26.395-0.738,36.879l12.787,13.854l0.003,0.002l60.468,65.506
                                                C134.057,341.06,150.366,348.713,167.724,349.671z M61.511,237.383c-2.574-2.788-3.254-6.834-1.734-10.31
                                                c1.52-3.476,4.953-5.724,8.747-5.727l0.2,0.004c2.6,0.041,5.069,1.152,6.825,3.071l6.246,6.767l-13.519,13.523L61.511,237.383z
                                                 M93.382,243.737l56.304,60.996c6.981,7.542,11.453,17.062,12.8,27.25c-10.643-1.95-20.368-7.296-27.717-15.237l-54.91-59.486
                                                L93.382,243.737z"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="sec__title">Top Listings Around the World</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <HomeCrousal />
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end card-area -->
    <!-- ================================
    END CARD AREA
================================= -->

    <!-- ================================
    START FUN-FACT AREA
================================= --> */}
      <section className="funfact-area bg-gradient-gray section--padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg
                    id="_x31_px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="svg-gradient5">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <path
                      d="m21.5 24h-19c-1.379 0-2.5-1.122-2.5-2.5v-19c0-1.378 1.121-2.5 2.5-2.5h19c1.379 0 2.5 1.122 2.5 2.5v19c0 1.378-1.121 2.5-2.5 2.5zm-19-23c-.827 0-1.5.673-1.5 1.5v19c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5z"
                    />
                    <path
                      d="m23.5 18h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z"
                    />
                    <path
                      d="m20.5 21h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5z"
                    />
                    <path
                      d="m8.5 22c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .276-.224.5-.5.5z"
                    />
                    <path
                      d="m7 13c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z"
                    />
                    <path
                      d="m12 13h-3c-.276 0-.5-.224-.5-.5v-1c0-1.378 1.121-2.5 2.5-2.5.275 0 .5-.224.5-.5v-1c0-.276-.225-.5-.5-.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5s-1.5.673-1.5 1.5v.5h2.5c.276 0 .5.224.5.5s-.224.5-.5.5z"
                    />
                    <path
                      d="m16 13h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.275 0 .5-.224.5-.5v-1c0-.276-.225-.5-.5-.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5z"
                    />
                    <path
                      d="m16 10h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.275 0 .5-.224.5-.5v-1c0-.276-.225-.5-.5-.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5z"
                    />
                  </svg>
                </div>
                <h2 className="sec__title">Since 2004 & Still Counting</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-1">
                  <svg
                    className="svg-icon-color"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 438.891 438.891"
                  //   xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347
                                                c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923
                                                c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045
                                                c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735
                                                c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51
                                                c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808
                                                H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645
                                                c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706
                                                c12.009,0.22,21.922,9.456,22.988,21.42V399.185z"
                      ></path>
                      <path
                        d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,233.962,179.427,233.761,179.217,233.569z"
                      ></path>
                      <path
                        d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z"
                      ></path>
                      <path
                        d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,150.37,179.427,150.169,179.217,149.977z"
                      ></path>
                      <path
                        d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z"
                      ></path>
                      <path
                        d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629
                                                c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                                                c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                                                C179.628,317.554,179.427,317.353,179.217,317.16z"
                      ></path>
                      <path
                        d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                                                c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-3 mb-2">
                    <span className="counter">40,000</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Listings Pages</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-2">
                  <svg
                    className="svg-icon-color-2"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 490.667 490.667"
                  //   xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M245.333,85.333c-41.173,0-74.667,33.493-74.667,74.667s33.493,74.667,74.667,74.667S320,201.173,320,160
                                            C320,118.827,286.507,85.333,245.333,85.333z M245.333,213.333C215.936,213.333,192,189.397,192,160
                                            c0-29.397,23.936-53.333,53.333-53.333s53.333,23.936,53.333,53.333S274.731,213.333,245.333,213.333z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M394.667,170.667c-29.397,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333S448,253.397,448,224
                                            S424.064,170.667,394.667,170.667z M394.667,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32
                                            C426.667,241.643,412.309,256,394.667,256z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M97.515,170.667c-29.419,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333
                                            S126.933,170.667,97.515,170.667z M97.515,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32
                                            C129.515,241.643,115.157,256,97.515,256z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M245.333,256c-76.459,0-138.667,62.208-138.667,138.667c0,5.888,4.779,10.667,10.667,10.667S128,400.555,128,394.667
                                            c0-64.704,52.629-117.333,117.333-117.333s117.333,52.629,117.333,117.333c0,5.888,4.779,10.667,10.667,10.667
                                            c5.888,0,10.667-4.779,10.667-10.667C384,318.208,321.792,256,245.333,256z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M394.667,298.667c-17.557,0-34.752,4.8-49.728,13.867c-5.013,3.072-6.635,9.621-3.584,14.656
                                            c3.093,5.035,9.621,6.635,14.656,3.584C367.637,323.712,380.992,320,394.667,320c41.173,0,74.667,33.493,74.667,74.667
                                            c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C490.667,341.739,447.595,298.667,394.667,298.667z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M145.707,312.512c-14.955-9.045-32.149-13.845-49.707-13.845c-52.928,0-96,43.072-96,96
                                            c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667C21.333,353.493,54.827,320,96,320
                                            c13.675,0,27.029,3.712,38.635,10.752c5.013,3.051,11.584,1.451,14.656-3.584C152.363,322.133,150.741,315.584,145.707,312.512z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-4 mb-2">
                    <span className="counter">25,100</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Happy Clients</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-3">
                  <svg
                    className="svg-icon-color-3"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path
                          d="m475.571 189.773c-.912-.912-1.839-1.802-2.774-2.682v-28.821c0-28.659-23.316-51.975-51.975-51.975h-91.169v-26.12c0-27.886-22.687-50.572-50.572-50.572h-85.363c-27.886 0-50.572 22.686-50.572 50.572v26.12h-91.171c-28.659 0-51.975 23.316-51.975 51.975v231.351c0 28.659 23.316 51.975 51.975 51.975h108.516c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-108.516c-20.389 0-36.976-16.587-36.976-36.976v-151.3c14.686 21.784 38.844 36.677 66.519 38.728v27.306c0 15.595 12.688 28.283 28.283 28.283 15.596 0 28.284-12.688 28.284-28.283v-27.061h125.329c0 .12-.004.239-.004.359 0 25.539 7.659 49.898 21.877 70.467l-15.922 15.922c-5.56-1.573-11.79-.184-16.157 4.185l-61.159 61.159c-12.106 12.106-12.106 31.804 0 43.91 12.134 12.134 31.775 12.136 43.91 0l61.159-61.159c4.368-4.368 5.758-10.597 4.185-16.157l15.936-15.936c42.143 29.025 98.319 29.117 140.56.235v9.343c0 20.389-16.587 36.976-36.976 36.976h-118.464c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h118.463c28.659 0 51.975-23.316 51.975-51.975v-21.407c.934-.878 1.861-1.768 2.774-2.681 48.569-48.569 48.575-127.186 0-175.761zm-317.427-109.598c0-19.615 15.958-35.573 35.573-35.573h85.363c19.615 0 35.573 15.958 35.573 35.573v26.12h-15.999v-26.12c0-10.793-8.781-19.574-19.574-19.574h-85.363c-10.793 0-19.574 8.781-19.574 19.574v26.12h-15.999zm30.998 26.12v-26.12c0-2.522 2.052-4.574 4.575-4.574h85.363c2.523 0 4.575 2.052 4.575 4.574v26.12zm-66.056 175.007h-26.568v-25.248c0-7.325 5.959-13.284 13.284-13.284s13.284 5.959 13.284 13.284zm-13.284 36.337c-7.325 0-13.284-5.959-13.284-13.284v-8.054h26.568v8.054c0 7.325-5.959 13.284-13.284 13.284zm28.283-55.344v-6.241c0-15.595-12.688-28.283-28.284-28.283-15.595 0-28.283 12.688-28.283 28.283v5.931c-37.233-3.336-66.519-34.696-66.519-72.782v-30.933c0-20.389 16.587-36.976 36.976-36.976h368.847c20.389 0 36.976 16.587 36.976 36.976v16.731c-47.425-32.537-114.229-28.988-157.987 14.771-19.815 19.814-32.114 45.141-35.467 72.522h-126.259zm87.267 200.395c-6.272 6.272-16.425 6.273-22.698 0-3.032-3.032-4.701-7.062-4.701-11.349s1.669-8.318 4.701-11.349l42.369-42.369 22.698 22.698zm61.159-61.159-8.184 8.184-22.698-22.698 8.184-8.184c.288-.287.665-.431 1.042-.431s.754.144 1.041.43c.002.001.003.003.005.004l20.61 20.61c.574.575.574 1.51 0 2.085zm5.662-17.635-10.726-10.726 13.167-13.167c1.672 1.885 3.4 3.733 5.197 5.529 1.801 1.801 3.649 3.527 5.531 5.194zm18.244-28.969c-20.641-20.64-32.008-48.084-32.008-77.274s11.367-56.634 32.008-77.274c42.706-42.707 111.836-42.713 154.548 0 42.707 42.706 42.713 111.836 0 154.548-42.708 42.708-111.836 42.713-154.548 0z"
                        ></path>
                        <path
                          d="m469.969 287.951c-4.047-.88-8.043 1.686-8.922 5.735-3.052 14.034-10.06 26.848-20.268 37.055-29.341 29.34-76.832 29.343-106.176 0-29.273-29.273-29.273-76.903 0-106.176 29.341-29.341 76.832-29.344 106.176 0 10.197 10.197 17.203 22.997 20.26 37.016.882 4.047 4.879 6.616 8.925 5.73 4.047-.882 6.612-4.878 5.73-8.925-3.67-16.832-12.076-32.194-24.308-44.427-35.203-35.203-92.181-35.207-127.388 0-35.121 35.121-35.121 92.267 0 127.388 35.12 35.12 92.265 35.122 127.388 0 12.245-12.245 20.654-27.624 24.318-44.474.879-4.047-1.688-8.041-5.735-8.922z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-5 mb-2">
                    <span className="counter">12,100</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Company Joined</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="counter-item d-flex align-items-center">
                <div className="counter-icon section-icon flex-shrink-0 bg-opacity-4">
                  <svg
                    className="svg-icon-color-4"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="outline12">
                      <path
                        d="M344,273.992H320a23.865,23.865,0,0,0-5.14.585A7.919,7.919,0,0,0,312,274H280V222.641A36.684,36.684,0,0,0,243.359,186H232a8,8,0,0,0-8,8v28.562a62.323,62.323,0,0,1-8.859,32.032l-12.616,20.979-36.048,14.419H120a8,8,0,0,0-8,8v104a8,8,0,0,0,8,8h47.961c.014,0,.025.008.039.008h31.016l31.046,7.758A7.71,7.71,0,0,0,232,418h72a7.924,7.924,0,0,0,2.89-.583,23.916,23.916,0,0,0,5.11.575h24a24.026,24.026,0,0,0,24-24,23.708,23.708,0,0,0-3.211-11.766,23.767,23.767,0,0,0,4.969-36.234,23.627,23.627,0,0,0,0-32,23.9,23.9,0,0,0-17.758-40Zm-184,120H128v-88h32Zm142.242-48a23.438,23.438,0,0,0-3.031,27.767A23.948,23.948,0,0,0,288,393.992,23.7,23.7,0,0,0,289.477,402H232.984l-31.046-7.758A7.71,7.71,0,0,0,200,394H176V303.414l34.969-13.984c.105-.042.17-.133.273-.179a7.9,7.9,0,0,0,2.342-1.534c.061-.06.1-.134.158-.2a7.967,7.967,0,0,0,1.117-1.4l14.008-23.3A78.464,78.464,0,0,0,240,222.562V202h3.359A20.662,20.662,0,0,1,264,222.641v64.273a55.368,55.368,0,0,1-34.969,51.648,8,8,0,0,0,5.938,14.86A71.156,71.156,0,0,0,279.769,290h17.7a23.244,23.244,0,0,0,4.77,23.992,23.627,23.627,0,0,0,0,32Zm33.758,56H312a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm8-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Zm0-32H320a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"
                      ></path>
                      <path
                        d="M206.609,113.969l15.282,11.093-5.836,17.954a16,16,0,0,0,24.625,17.89l15.273-11.1,15.281,11.1a15.756,15.756,0,0,0,18.805.008,15.767,15.767,0,0,0,5.813-17.891l-5.836-17.961L305.3,113.969a16.006,16.006,0,0,0-9.406-28.953l-18.883.007-5.836-17.961v-.007a16,16,0,0,0-30.438.007L234.9,85.016H216.016a16.008,16.008,0,0,0-9.407,28.953ZM234.9,101.016a15.965,15.965,0,0,0,15.219-11.055l5.8-18.055a.843.843,0,0,1,.039.1l5.836,17.953a15.967,15.967,0,0,0,15.219,11.055h18.883L280.6,112.125A15.964,15.964,0,0,0,274.8,130l5.844,17.969-15.289-11.11a15.984,15.984,0,0,0-18.8.008l-15.274,11.094L237.109,130a15.968,15.968,0,0,0-5.812-17.891l-15.281-11.093Z"
                      ></path>
                      <path
                        d="M136.047,205.805l15.273,11.109a16,16,0,0,0,24.625-17.891l-5.836-17.961,15.282-11.1a16,16,0,0,0-9.407-28.945l-18.882.007-5.836-17.961v-.007a16,16,0,0,0-30.438.007l-5.836,17.954H96.109A16.006,16.006,0,0,0,86.7,169.969l15.281,11.093-5.836,17.954a15.774,15.774,0,0,0,5.813,17.9,15.756,15.756,0,0,0,18.805-.008Zm-24.656-37.7L96.109,157.016h18.883a15.967,15.967,0,0,0,15.219-11.055l5.8-18.055s.015.032.039.1l5.836,17.953A15.965,15.965,0,0,0,157.1,157.016h18.882l-15.281,11.1A15.953,15.953,0,0,0,154.891,186l5.836,17.969-15.282-11.11a15.983,15.983,0,0,0-18.8.008l-15.274,11.094L117.2,186A15.988,15.988,0,0,0,111.391,168.109Z"
                      ></path>
                      <path
                        d="M391.266,123.062v-.007a16,16,0,0,0-30.438.007l-5.836,17.954H336.109a16.006,16.006,0,0,0-9.406,28.953l15.281,11.093-5.836,17.954a15.774,15.774,0,0,0,5.813,17.9,15.756,15.756,0,0,0,18.805-.008l15.281-11.1,15.273,11.109a16,16,0,0,0,24.625-17.891l-5.836-17.961,15.282-11.1a16,16,0,0,0-9.407-28.945l-18.882.007Zm9.437,45.055A15.953,15.953,0,0,0,394.891,186l5.836,17.969-15.282-11.11a15.983,15.983,0,0,0-18.8.008l-15.274,11.094L357.2,186a15.988,15.988,0,0,0-5.812-17.891l-15.282-11.093h18.883a15.967,15.967,0,0,0,15.219-11.055l5.8-18.055s.015.032.039.1l5.836,17.953A15.965,15.965,0,0,0,397.1,157.016h18.882Z"
                      ></path>
                      <path
                        d="M256,16C123.664,16,16,123.664,16,256S123.664,496,256,496,496,388.336,496,256,388.336,16,256,16Zm0,464C132.484,480,32,379.516,32,256S132.484,32,256,32,480,132.484,480,256,379.516,480,256,480Z"
                      ></path>
                      <path
                        d="M432,256a175.64,175.64,0,0,1-25.82,91.82,8,8,0,1,0,13.64,8.36A191.6,191.6,0,0,0,448,256a193.977,193.977,0,0,0-1.625-25.031,8,8,0,1,0-15.859,2.062A179.013,179.013,0,0,1,432,256Z"
                      ></path>
                      <path
                        d="M80,256a179.013,179.013,0,0,1,1.484-22.969,8,8,0,1,0-15.859-2.062A193.977,193.977,0,0,0,64,256a190.874,190.874,0,0,0,15.258,75.133,8,8,0,0,0,14.719-6.266A175,175,0,0,1,80,256Z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="counter-content pl-3">
                  <h3 className="counter__number text-color-6 mb-2">
                    <span className="counter">18,200</span>
                    <span className="count-symbol">+</span>
                  </h3>
                  <p className="counter__title">Five Star Ratings</p>
                </div>
                {/* <!-- end counter-content --> */}
              </div>
              {/* <!-- end counter-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end funfact-area -->
    <!-- ================================
    END FUN-FACT AREA
================================= -->

    <!-- ================================
    START HIW AREA
================================= --> */}
      <section className="hiw-area section--padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="svg-gradient6">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="m203.556 345.012 70.71-212.133c2.619-7.859-1.628-16.354-9.487-18.974-7.858-2.619-16.354 1.628-18.974 9.487l-70.71 212.133c-2.619 7.859 1.628 16.354 9.487 18.974 1.573.524 3.173.773 4.745.773 6.28.001 12.133-3.974 14.229-10.26z"
                      />
                      <path
                        d="m309.533 279.203c24.813 0 45-20.187 45-45s-20.187-45-45-45-45 20.187-45 45 20.187 45 45 45zm0-60c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15z"
                      />
                      <path
                        d="m139.827 189.203c-24.813 0-45 20.187-45 45s20.187 45 45 45 45-20.187 45-45-20.186-45-45-45zm0 60c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"
                      />
                      <path
                        d="m509 186-52.307-69.743 2.041-14.283c.667-4.674-.904-9.39-4.243-12.728l-31.82-31.82 31.819-31.82c5.858-5.857 5.858-15.355 0-21.213-5.857-5.857-15.355-5.857-21.213 0l-31.819 31.82-31.82-31.82c-3.338-3.339-8.054-4.905-12.728-4.243l-148.493 21.213c-3.213.459-6.19 1.948-8.485 4.243l-183.848 183.848c-21.445 21.444-21.445 56.338 0 77.782l155.563 155.564c3.182 3.182 6.666 5.881 10.353 8.118v6.082c0 30.327 24.673 55 55 55h220c30.327 0 55-24.673 55-55v-262c0-3.245-1.053-6.404-3-9zm-471.703 80.023c-9.748-9.748-9.748-25.608 0-35.356l180.312-180.312 136.118-19.445 26.517 26.517-21.213 21.213-10.607-10.607c-5.857-5.857-15.355-5.857-21.213 0s-5.858 15.355 0 21.213l42.427 42.427c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.465 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213l-10.607-10.607 21.213-21.213 26.517 26.517-19.446 136.118-180.311 180.312c-4.722 4.722-11 7.322-17.678 7.322s-12.956-2.601-17.678-7.322zm444.703 190.977c0 13.785-11.215 25-25 25h-220c-13.164 0-23.976-10.228-24.925-23.154 13.567-.376 27.022-5.714 37.353-16.046l183.848-183.848c2.295-2.295 3.784-5.272 4.243-8.485l13.173-92.21 31.308 41.743z"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="sec__title">What We Offer</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-3 responsive-column">
              <div className="info-box info-box-layout-2">
                <div className="info-icon bg-gradient-1">
                  <span className="la la-map"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Great Places</h4>
                  <div className="stroke-shape bg-gradient-1"></div>
                  <p className="info__desc pt-3">
                    Coventry is a city with a thousand years of history that has
                    plenty
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="info-box info-box-layout-2">
                <div className="info-icon bg-gradient-2">
                  <span className="la la-cutlery"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Great Restaurants</h4>
                  <div className="stroke-shape bg-gradient-2"></div>
                  <p className="info__desc pt-3">
                    Coventry is a city with a thousand years of history that has
                    plenty
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="info-box info-box-layout-2">
                <div className="info-icon bg-gradient-3">
                  <span className="la la-hotel"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">Great Hotels</h4>
                  <div className="stroke-shape bg-gradient-3"></div>
                  <p className="info__desc pt-3">
                    Coventry is a city with a thousand years of history that has
                    plenty
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="info-box info-box-layout-2">
                <div className="info-icon bg-gradient-4">
                  <span className="la la-ellipsis-h"></span>
                </div>
                {/* <!-- end info-icon--> */}
                <div className="info-content">
                  <h4 className="info__title">And Many More...</h4>
                  <div className="stroke-shape bg-gradient-4"></div>
                  <p className="info__desc pt-3">
                    Coventry is a city with a thousand years of history that has
                    plenty
                  </p>
                </div>
                {/* <!-- end info-content --> */}
              </div>
              {/* <!-- end info-box --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end hiw-area -->
    <!-- ================================
    END HIW AREA
================================= -->

    <!-- ================================
    START CTA AREA
================================= --> */}
      <section className="cta-area padding-bottom-120px">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content-box">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="cta-img">
                      <img
                        className="lazy"
                        src={img37}
                        data-src={img37}
                        alt=""
                      />
                      <div className="cta-img-shape">
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                          <path
                            d="M627.25,-82.39 C346.22,43.91 512.69,168.25 560.66,205.75 L500.00,150.00 L500.00,0.00 Z"
                            style={{ stroke: "none", fill: "#fff" }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="cta-content">
                      <div className="section-heading">
                        <div className="gradient-icon mb-3">
                          <svg
                            viewBox="-4 0 511 511.99964"
                            width="40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id="svg-gradient10">
                                <stop offset="5%" stopColor="#ff6b6b" />
                                <stop offset="95%" stopColor="#ffbb3d" />
                              </linearGradient>
                            </defs>
                            <path
                              d="m498.429688 219.339844c-5.308594-8.015625-13.355469-13.539063-22.710938-15.632813 6.035156-11.542969 5.789062-25.945312-1.898438-37.550781-5.46875-8.261719-13.71875-13.597656-22.699218-15.617188 1.601562-3.054687 2.785156-6.351562 3.492187-9.828124 1.960938-9.667969.046875-19.519532-5.402343-27.742188-5.308594-8.019531-13.355469-13.542969-22.710938-15.632812 6.035156-11.542969 5.789062-25.945313-1.898438-37.554688-11.238281-16.972656-34.199218-21.640625-51.175781-10.398438l-36.757812 24.34375c-19.59375-9.9375-40.433594-16.988281-62.0625-21.003906-6.835938-10.378906-14.785157-20.027344-23.683594-28.652344l-15.207031-14.738281c-11.136719-10.796875-28.601563-12.417969-41.53125-3.851562-15.296875 10.128906-19.5 30.816406-9.371094 46.113281.398438.605469.789062 1.214844 1.175781 1.824219-49.847656 10.085937-95.277343 36.539062-128.902343 75.300781-36.488282 42.066406-56.585938 95.941406-56.585938 151.699219 0 10.6875.730469 21.394531 2.175781 31.816406 11.136719 81.019531 65.105469 150.839844 140.839844 182.21875 28.085937 11.640625 57.886719 17.546875 88.5625 17.546875 48.582031 0 95.085937-14.878906 134.488281-43.023438 38.546875-27.539062 67.386719-65.542968 83.40625-109.902343 1.496094-4.132813-.648437-8.699219-4.78125-10.191407-4.136718-1.492187-8.699218.648438-10.191406 4.785157-14.917969 41.308593-41.78125 76.699219-77.691406 102.351562-36.683594 26.207031-79.988282 40.058594-125.230469 40.058594-23.390625 0-46.230469-3.691406-68.089844-10.972656l64.773438-42.894531c.003906-.003907.007812-.003907.011719-.007813.003906 0 .003906-.003906.007812-.007813l53.832031-35.648437h.003907c4.832031-3.203125 8.132812-8.09375 9.289062-13.777344 1.15625-5.683593.03125-11.480469-3.171875-16.3125l-.710937-1.078125 10.457031-6.925781c7.460937-4.941406 16.433593-6.878906 25.269531-5.460937 12.792969 2.054687 25.785156-.757813 36.582031-7.910157l86.734375-57.4375c-.59375 7.523438-1.570312 15.003907-2.933594 22.359375-.804687 4.324219 2.050782 8.480469 6.375 9.28125.488282.09375.980469.136719 1.460938.136719 3.761719 0 7.105469-2.679687 7.816406-6.511719 2.207032-11.871094 3.476563-24.03125 3.804688-36.207031l24.441406-16.1875c8.222656-5.445313 13.835938-13.769531 15.796875-23.433594 1.964844-9.667969.046875-19.519531-5.398437-27.742187zm-177.21875-135.378906-24.324219 16.109374-4.789063-12.902343c-2-5.382813-4.292968-10.660157-6.832031-15.824219 12.339844 3.128906 24.355469 7.347656 35.945313 12.617188zm-252.097657 55.191406c32.316407-37.253906 76.335938-62.296875 124.492188-70.980469 7.726562 18.71875 9.578125 39.632813 4.960937 59.566406l-19.410156 83.855469c-3.050781-3.257812-7.011719-5.503906-11.472656-6.410156-5.6875-1.160156-11.480469-.03125-16.3125 3.171875l-54.980469 36.40625c-.003906 0-.003906 0-.007813.003906 0 0-.003906 0-.003906.003906l-79.296875 52.511719c-.433593-5.59375-.660156-11.230469-.660156-16.863281 0-51.921875 18.714844-102.09375 52.691406-141.265625zm207.191407 250.441406c-.308594 1.515625-1.191407 2.824219-2.484376 3.679688h.003907l-47.28125 31.308593-87.753907-130.871093c-2.449218-3.652344-7.394531-4.625-11.046874-2.175782-3.648438 2.449219-4.625 7.390625-2.175782 11.042969l87.699219 130.796875-67.496094 44.699219c-67.070312-29.335938-115.066406-91.289063-126.605469-163.378907l79.390626-52.402343 9.136718 13.632812c1.539063 2.289063 4.054688 3.527344 6.621094 3.527344 1.523438 0 3.066406-.433594 4.425781-1.347656 3.652344-2.449219 4.628907-7.394531 2.179688-11.046875l-9.074219-13.535156 48.320312-31.894532c1.285157-.855468 2.828126-1.152344 4.34375-.84375 1.515626.308594 2.824219 1.191406 3.679688 2.480469l107.273438 161.984375c.851562 1.285156 1.152343 2.828125.84375 4.34375zm211.921874-145.683594c-1.117187 5.5-4.308593 10.234375-8.988281 13.332032l-27.941406 18.503906c-.007813.003906-.015625.011718-.027344.015625l-99.730469 66.046875c-7.460937 4.941406-16.433593 6.882812-25.269531 5.460937-12.789062-2.050781-25.78125.757813-36.582031 7.910157l-10.457031 6.925781-87.859375-132.667969 22.710937-98.105469c5.847657-25.273437 2.765625-51.894531-8.375-75.085937-.101562-.242188-.210937-.476563-.335937-.707032-2.140625-4.382812-4.570313-8.636718-7.285156-12.738281-5.28125-7.976562-3.089844-18.761719 4.890624-24.046875 6.742188-4.464844 15.851563-3.621094 21.65625 2.007813l15.207032 14.742187c16.449218 15.949219 29.359375 35.730469 37.328125 57.207032l8.28125 22.308593c.015625.042969.03125.078125.046875.117188.019531.050781.042968.105469.0625.15625.058594.136719.113281.261719.171875.367187.160156.335938.335937.667969.546875.984375 2.429687 3.667969 7.367187 4.671875 11.03125 2.242188l84.910156-56.226563c9.65625-6.394531 22.714844-3.742187 29.109375 5.914063s3.742187 22.714843-5.914063 29.109375l-7.371093 4.882812s-.003907 0-.007813.003906l-16.441406 10.890626c-.023438.015624-.039062.03125-.0625.042968-.09375.066406-.183594.128906-.257812.191406-3.398438 2.496094-4.277344 7.242188-1.921876 10.796876 2.425782 3.667968 7.367188 4.671874 11.035157 2.242187l16.453125-10.898437c4.675781-3.089844 10.273437-4.179688 15.769531-3.0625 5.496094 1.117187 10.234375 4.308593 13.328125 8.988281 3.097656 4.675781 4.191406 10.28125 3.074219 15.777343-1.117188 5.5-4.308594 10.234376-8.988281 13.332032l-23.820313 15.777344c-3.667969 2.425781-4.671875 7.363281-2.242187 11.03125 1.53125 2.3125 4.0625 3.566406 6.644531 3.566406 1.507812 0 3.035156-.429688 4.386719-1.324219l3.6875-2.441406 12.757812-8.449219c9.660156-6.394531 22.714844-3.742188 29.109375 5.914062 6.394531 9.660157 3.742187 22.714844-5.914063 29.113282l-11.898437 7.878906c-.0625.039062-.125.082031-.1875.125l-11.734375 7.769531c-3.667969 2.425781-4.671875 7.367188-2.242188 11.035157 1.53125 2.3125 4.0625 3.566406 6.644532 3.566406 1.507812 0 3.035156-.429688 4.386718-1.324219l3.6875-2.441406s0-.003907.003907-.003907l12.757812-8.445312c4.675781-3.097656 10.277344-4.191406 15.777344-3.070312 5.5 1.113281 10.234375 4.308593 13.332031 8.984374 3.09375 4.675782 4.183594 10.28125 3.066406 15.777344zm0 0"
                            />
                          </svg>
                        </div>
                        <h2 className="sec__title mb-3 font-size-30 line-height-40">
                          Listhub is the best way to find & discover <br />
                          great local businesses
                        </h2>
                        <p className="sec__desc mb-4">
                          Morbi convallis bibendum urna ut viverra. Maecenas quis
                          consequat libero a feugiat
                        </p>
                      </div>
                      {/* <!-- end section-heading --> */}
                      <div className="btn-box">
                        <a
                          href="#"
                          className="theme-btn gradient-btn"
                          data-toggle="modal"
                          data-target="#signUpModal"
                        ><i className="la la-user-plus mr-2"></i>Create an
                          Account</a
                        >
                      </div>
                      {/* <!-- end btn-box --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end row --> */}
              </div>
              {/* <!-- end cta-content-box --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>


      {/* <!-- end cta-area -->
    <!-- ================================
    END CTA AREA
================================= --> */}

      <div className="section-block"></div>

      {/* <!-- ================================
       START TESTIMONIAL AREA
================================= --> */}
      <section className="testimonial-area section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  //   xml:space="preserve"
                  >
                    <defs>
                      <linearGradient id="svg-gradient7">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M123.856,71.638H105.66c2.737-20.263,13.941-21.281,19.097-21.75c5.151-0.469,9.094-4.787,9.094-9.959V10.004
                                            c0-2.749-1.132-5.378-3.13-7.267s-4.688-2.868-7.431-2.717C91.68,1.798,54,17.758,54,83.696v52.04
                                            c0,8.687,7.067,15.754,15.754,15.754h54.103c8.687,0,15.754-7.068,15.753-15.755V87.392
                                            C139.61,78.705,132.543,71.638,123.856,71.638z M119.611,131.489H74V83.696c0-46.01,20.461-58.86,39.851-62.487v10.514
                                            c-13.391,4.076-28.803,16.114-28.803,49.915c0,5.523,4.477,10,10,10h24.563V131.489z"
                      />
                    </g>
                    <g>
                      <path
                        d="M226.091,71.638h-18.197c2.737-20.263,13.941-21.281,19.097-21.75c5.151-0.469,9.094-4.787,9.094-9.959V10.004
                                                c0-2.749-1.132-5.378-3.13-7.267s-4.69-2.868-7.431-2.717c-31.61,1.778-69.29,17.738-69.29,83.676v52.04
                                                c0,8.687,7.067,15.754,15.754,15.754h54.103c8.687,0,15.755-7.068,15.754-15.756V87.392
                                                C241.845,78.705,234.778,71.638,226.091,71.638z M221.845,131.49h-45.611V83.696c0-46.01,20.461-58.86,39.851-62.487v10.514
                                                c-13.391,4.076-28.803,16.114-28.803,49.915c0,5.523,4.477,10,10,10h24.563V131.49z"
                      />
                    </g>
                    <g>
                      <path
                        d="M285.07,80.795c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                                            c1.86,1.86,4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93s2.93-4.44,2.93-7.07S286.93,82.655,285.07,80.795z"
                      />
                    </g>
                    <g>
                      <path
                        d="M334.267,77.864h-12.601c-5.523,0-10,4.477-10,10s4.477,10,10,10h12.601C421.241,97.864,492,168.623,492,255.597
                                            c0,74.232-52.648,139.152-125.187,154.365c-4.631,0.972-7.947,5.056-7.947,9.787v58.104l-61.594-61.594
                                            c-1.875-1.875-4.419-2.929-7.071-2.929H177.733C90.759,413.33,20,342.571,20,255.597c0-26.805,6.843-53.274,19.79-76.548
                                            c2.686-4.826,0.949-10.915-3.877-13.6c-4.827-2.686-10.916-0.949-13.6,3.877C7.715,195.565,0,225.397,0,255.597
                                            C0,353.6,79.73,433.33,177.733,433.33h108.326l75.736,75.736c1.913,1.913,4.47,2.929,7.073,2.929c1.288,0,2.588-0.249,3.825-0.762
                                            c3.736-1.547,6.173-5.193,6.173-9.238v-74.321c36.183-9.376,68.9-30.239,92.807-59.343C497.678,336.674,512,296.638,512,255.597
                                            C512,157.595,432.27,77.865,334.267,77.864z"
                      />
                    </g>
                    <g>
                      <path
                        d="M379.064,177.492H132.937c-5.523,0-10,4.477-10,10s4.477,10,10,10h246.126c5.523,0,10.001-4.477,10.001-10
                                            S384.587,177.492,379.064,177.492z"
                      />
                    </g>
                    <g>
                      <path
                        d="M379.064,230.825H132.937c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10h246.126c5.523,0,10.001-4.477,10.001-10
                                            C389.064,235.302,384.587,230.825,379.064,230.825z"
                      />
                    </g>
                    <g>
                      <path
                        d="M379.064,284.158H132.937c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h246.126c5.523,0,10.001-4.478,10.001-10
                                            C389.064,288.636,384.587,284.158,379.064,284.158z"
                      />
                    </g>
                    <g>
                      <path
                        d="M379.063,337.492H247.871c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h131.192c5.523,0,10-4.478,10-10
                                            C389.063,341.97,384.586,337.492,379.063,337.492z"
                      />
                    </g>
                    <g>
                      <path
                        d="M191.607,337.491h-0.161c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h0.161c5.523,0,10-4.478,10-10
                                            C201.607,341.969,197.13,337.491,191.607,337.491z"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="sec__title">
                  Don't Believe Us Check <br />
                  Client's Word.
                </h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero,<br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-12">
              <div className="testimonial-carousel owl-trigger-action">
                <HomeCrousal2 />
              </div>
              {/* <!-- end testimonial-carousel --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end testimonial-area -->
    <!-- ================================
       START TESTIMONIAL AREA
================================= --> */}

      <div className="section-block"></div>

      {/* <!-- ================================
       START BLOG AREA
================================= --> */}
      <section className="blog-area section-padding overflow-hidden">
        <div className="svg-bg svg-bg-2 gradient-bg-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="svg-gradient-2">
                <stop offset="5%" stopColor="#e8eef9" />
                <stop offset="95%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              d="M0,128L40,149.3C80,171,160,213,240,208C320,203,400,149,480,144C560,139,640,181,720,170.7C800,160,880,96,960,96C1040,96,1120,160,1200,197.3C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-icon gradient-icon mb-3 mx-auto">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="svg-gradient8">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <path d="m8 10h2v2h-2z" />
                    <path d="m12 10h2v2h-2z" />
                    <path d="m16 10h2v2h-2z" />
                    <path
                      d="m21 20h-12a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-10a1 1 0 0 0 -1-1zm-1 10h-10v-8h10z"
                    />
                    <path d="m26 20h4v2h-4z" />
                    <path d="m32 20h16v2h-16z" />
                    <path d="m26 24h22v2h-22z" />
                    <path d="m26 28h10v2h-10z" />
                    <path d="m38 28h6v2h-6z" />
                    <path d="m8 36h14v2h-14z" />
                    <path d="m8 40h14v2h-14z" />
                    <path d="m8 44h14v2h-14z" />
                    <path d="m8 48h14v2h-14z" />
                    <path
                      d="m59 19.091a4.866 4.866 0 0 0 -5 .022v-10.113a3 3 0 0 0 -3-3h-46a3 3 0 0 0 -3 3v46a3 3 0 0 0 3 3h46a3 3 0 0 0 3-3v-17.249l6.83-11.83a5.005 5.005 0 0 0 -1.83-6.83zm-20.155 28.909h-10.845v-10h14.309l-2.639 4.572a.994.994 0 0 0 -.132.564l.212 3.3zm1.289 1.768 1-1.732 1.732 1-1 1.732a1 1 0 0 1 -1.732-1zm4.135-2.232-2.538-1.465-.154-2.4 4.846 2.8zm3.329-2.7-1.732-1 7.5-12.99-1.732-1-7.5 12.99-1.732-1 8.5-14.722 5.2 3zm4.3-19.454.5-.865 5.2 3-.5.866zm-46.898-17.382h46a1 1 0 0 1 1 1v5.032h-48v-5.032a1 1 0 0 1 1-1zm47 47a1 1 0 0 1 -1 1h-46a1 1 0 0 1 -1-1v-38.968h48v5.184l-8.536 14.784h-16.464a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h11.02a3 3 0 0 0 5.58 1.768l1.348-2.336 2.96-1.464a1 1 0 0 0 .423-.4l3.669-6.353zm7.1-30.079-.5.866-5.2-3 .5-.866a3 3 0 0 1 5.2 3z"
                    />
                  </svg>
                </div>
                <h2 className="sec__title">Latest Tips & Articles</h2>
                <p className="sec__desc">
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, <br />
                  a feugiat eros. Nunc ut lacinia tortors.
                </p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-60px">
            <div className="col-lg-12">
              <HomeCrousal3 />
            </div>
          </div>
          {/* <!-- end row --> */}
          <div className="more-btn-box pt-5 text-center">
            <a href="blog-grid.html" className="theme-btn gradient-btn"
            ><i className="la la-list-alt mr-2"></i>View All Post</a
            >
          </div>
        </div>
        {/* <!-- end container --> */}
      </section>


      {/* <!-- end blog-area -->
    <!-- ================================
       START BLOG AREA
================================= -->

    <!-- ================================
    START MOBILE APP AREA
================================= --> */}
      <section className="mobile-app-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mobile-app-content">
                <div className="section-heading">
                  <div className="section-icon gradient-icon mb-3">
                    <svg
                      id="Layer_5"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="svg-gradient11">
                          <stop offset="5%" stopColor="#ff6b6b" />
                          <stop offset="95%" stopColor="#ffbb3d" />
                        </linearGradient>
                      </defs>
                      <path
                        d="m63 33c0-6.689-4.718-12.29-11-13.668v-13.332c0-2.757-2.243-5-5-5h-26c-2.757 0-5 2.243-5 5v11h-5.781l-.603 2.416-2.134-1.281-5.348 5.345 1.281 2.136-2.415.603v7.562l2.416.603-1.282 2.136 5.347 5.346 2.134-1.281.604 2.415h5.781v15c0 2.757 2.243 5 5 5h26c2.757 0 5-2.243 5-5v-11.332c6.282-1.378 11-6.979 11-13.668zm-2 0c0 1.949-.477 3.785-1.305 5.414-.555-1.527-1.832-2.728-3.482-3.141l-4.213-1.054v-.239c1.246-.939 2-2.416 2-3.979v-2c0-1.397-.591-2.741-1.622-3.687-1.03-.943-2.426-1.417-3.822-1.294-2.555.221-4.556 2.501-4.556 5.187v1.793c0 1.563.754 3.04 2 3.979v.239l-4.213 1.054c-1.65.413-2.927 1.614-3.482 3.141-.828-1.628-1.305-3.464-1.305-5.413 0-6.617 5.383-12 12-12s12 5.383 12 12zm-15-13.668c-.688.151-1.354.359-2 .607v-2.939h-20v14h11.16c-.095.655-.16 1.319-.16 2 0 6.689 4.718 12.29 11 13.668v2.332h-24v-34h24zm-10.41 9.668h-9.59v-10h16v1.894c-3.054 1.773-5.38 4.659-6.41 8.106zm-14.59-26h26c1.654 0 3 1.346 3 3v3h-32v-3c0-1.654 1.346-3 3-3zm-5 31.572c-.631.278-1.312.428-2 .428-2.757 0-5-2.243-5-5s2.243-5 5-5c.688 0 1.369.15 2 .428zm-4.219 6.428-.487-1.949-.203-.535-1.142-.464-2.158 1.296-3.138-3.139 1.296-2.159-.5-1.22-2.449-.611v-4.438l2.446-.611.503-1.22-1.296-2.159 3.138-3.139 2.158 1.296 1.22-.496.612-2.452h4.219v4.305c-.649-.195-1.321-.305-2-.305-3.86 0-7 3.141-7 7s3.14 7 7 7c.679 0 1.351-.11 2-.305v4.305zm35.219 20h-26c-1.654 0-3-1.346-3-3v-3h32v3c0 1.654-1.346 3-3 3zm3-8h-32v-42h32v8.051c-.332-.024-.662-.051-1-.051s-.668.027-1 .051v-6.051h-28v38h28v-4.051c.332.024.662.051 1 .051s.668-.027 1-.051zm-1-8c-3.585 0-6.799-1.589-9-4.089v-.788c0-1.379.935-2.576 2.272-2.911l5.728-1.431v-2.911l-.497-.289c-.941-.548-1.503-1.513-1.503-2.581v-1.793c0-1.659 1.199-3.062 2.729-3.195.858-.069 1.671.201 2.298.776.618.567.973 1.373.973 2.212v2c0 1.068-.562 2.033-1.503 2.581l-.497.289v2.911l5.728 1.431c1.337.335 2.272 1.532 2.272 2.911v.788c-2.201 2.5-5.415 4.089-9 4.089z"
                      />
                      <path d="m38 5h2v2h-2z" />
                      <path d="m28 5h8v2h-8z" />
                      <path d="m30 57h8v2h-8z" />
                      <path d="m44 57h2v2h-2z" />
                      <path d="m22 57h2v2h-2z" />
                      <path d="m24 33h9v2h-9z" />
                      <path d="m24 37h9v2h-9z" />
                      <path d="m24 41h9v2h-9z" />
                      <path d="m24 45h9v2h-9z" />
                      <path
                        d="m57 19c1.654 0 3-1.346 3-3 0-1.302-.839-2.402-2-2.816v-8.184h-2v8.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3zm0-4c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1z"
                      />
                      <path d="m56 1h2v2h-2z" />
                      <path
                        d="m11 45c-1.654 0-3 1.346-3 3 0 1.302.839 2.402 2 2.816v8.184h2v-8.184c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3zm0 4c-.551 0-1-.448-1-1s.449-1 1-1 1 .448 1 1-.449 1-1 1z"
                      />
                      <path d="m10 61h2v2h-2z" />
                    </svg>
                  </div>
                  <h2 className="sec__title mb-3">
                    Discover Amazing Things to do Everywhere You Go
                  </h2>
                  <p className="sec__desc font-size-17 margin-bottom-35px">
                    Omnis voluptas assumenda est, omnis dolor repellendus.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                  </p>
                </div>
                {/* <!-- end section-heading --> */}
                <ul className="info-list contact-links">
                  <li className="d-flex align-items-center mb-2">
                    <i className="la la-search icon"></i> Search on the go
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="la la-file-text-o icon"></i> Real Time Listing
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="la la-bell icon"></i> Get Latest Info
                  </li>
                </ul>
                <div className="btn-box margin-top-40px">
                  <a
                    href="#"
                    className="theme-btn download-btn mr-2 bg-1 text-white hover-scale-2 mb-2"
                  ><span className="la la-apple font-size-18 mr-1"></span>App
                    Store</a
                  >
                  <a
                    href="#"
                    className="theme-btn download-btn bg-2 text-white hover-scale-2 mb-2"
                  ><span className="la la-android font-size-18 mr-1"></span>Google
                    Play</a
                  >
                </div>
                {/* <!-- end btn-box --> */}
              </div>
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-6">
              <div className="mobile-img">
                <img
                  className="lazy"
                  src={mapImg}
                  data-src={mapImg}
                  alt="map-img"
                />
                <div className="map-marker map-marker-1 bounce">
                  <img src={smallImg} alt="" />
                  <div className="map-pin-bg"></div>
                </div>
                {/* <!-- end map-marker --> */}
                <div className="map-marker map-marker-2 bounce">
                  <img src={smallImg2} alt="" />
                  <div className="map-pin-bg"></div>
                </div>
                {/* <!-- end map-marker --> */}
                <div className="map-marker map-marker-3 bounce">
                  <img src={smallImg3} alt="" />
                  <div className="map-pin-bg"></div>
                </div>
                {/* <!-- end map-marker --> */}
                <div className="map-marker map-marker-4 bounce">
                  <img src={smallImg4} alt="" />
                  <div className="map-pin-bg"></div>
                </div>
                {/* <!-- end map-marker --> */}
                <div className="map-marker map-marker-5 bounce">
                  <img src={smallImg5} alt="" />
                  <div className="map-pin-bg"></div>
                </div>
                {/* <!-- end map-marker --> */}
                <div className="map-marker map-marker-6 bounce">
                  <img src={smallImg6} alt="" />
                  <div className="map-pin-bg"></div>
                </div>
                {/* <!-- end map-marker --> */}
              </div>
              {/* <!-- end mobile-img --> */}
            </div>
            {/* <!-- end col-lg-6 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>


      {/* <!-- end mobile-app-area -->
    <!-- ================================
    END MOBILE APP AREA
================================= --> */}

      <div className="section-block"></div>

      {/* <!-- ================================
       START CLIENTLOGO AREA
================================= --> */}
      <section className="clientlogo-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <div className="section-icon gradient-icon mb-4 mx-auto">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  //   xml:space="preserve"
                  >
                    <defs>
                      <linearGradient id="svg-gradient9">
                        <stop offset="5%" stopColor="#ff6b6b" />
                        <stop offset="95%" stopColor="#ffbb3d" />
                      </linearGradient>
                    </defs>
                    <g>
                      <path
                        d="M499.1,186.205l-25.765-22.266c-3.196-2.764-8.029-2.411-10.792,0.787c-2.763,3.197-2.412,8.029,0.787,10.792
                                        l25.763,22.266c9.184,7.937,10.198,21.866,2.262,31.05L324.008,422.47c-2.763,3.197-2.412,8.029,0.786,10.793
                                        c1.447,1.251,3.228,1.863,5,1.863c2.147,0,4.28-0.898,5.793-2.648L502.933,238.84C516.388,223.272,514.668,199.659,499.1,186.205z
                                        "
                      />
                    </g>
                    <g>
                      <path
                        d="M453.741,147.003L334.557,44.002c-7.542-6.518-17.172-9.705-27.112-8.985c-9.942,0.723-19.006,5.276-25.524,12.817
                                        l-11.356,13.14c-2.763,3.198-2.412,8.03,0.786,10.793c3.199,2.765,8.03,2.411,10.793-0.786l11.356-13.14
                                        c3.845-4.448,9.192-7.134,15.057-7.561c5.865-0.431,11.544,1.455,15.993,5.3l119.184,103.001c1.447,1.251,3.228,1.863,5,1.863
                                        c2.147,0,4.28-0.898,5.793-2.648C457.289,154.598,456.938,149.766,453.741,147.003z"
                      />
                    </g>
                    <g>
                      <path
                        d="M381.099,119.952L174.911,50.794c-19.511-6.544-40.704,4.005-47.247,23.513l-2.72,8.109
                                        c-1.344,4.006,0.815,8.344,4.822,9.688c4.007,1.344,8.343-0.814,9.688-4.822l2.72-8.109c3.86-11.509,16.361-17.732,27.871-13.871
                                        l206.189,69.157c11.509,3.861,17.731,16.363,13.871,27.871l-95.933,286.02c-1.344,4.006,0.815,8.343,4.822,9.688
                                        c0.807,0.27,1.627,0.399,2.434,0.399c3.198,0,6.18-2.021,7.254-5.22l95.933-286.019
                                        C411.157,147.691,400.609,126.495,381.099,119.952z"
                      />
                    </g>
                    <g>
                      <path
                        d="M254.795,100.769H37.318C16.741,100.769,0,117.509,0,138.086v301.679c0,20.577,16.741,37.318,37.318,37.318h217.478
                                        c20.577,0,37.318-16.741,37.318-37.318V138.086C292.113,117.509,275.373,100.769,254.795,100.769z M276.809,439.765
                                        c0,12.139-9.876,22.014-22.014,22.014H37.318c-12.139,0-22.014-9.876-22.014-22.014V138.086c0-12.139,9.876-22.014,22.014-22.014
                                        h217.478c12.139,0,22.014,9.876,22.014,22.014V439.765z"
                      />
                    </g>
                    <g>
                      <path
                        d="M258.778,311.96H33.336c-4.226,0-7.652,3.426-7.652,7.652c0,4.226,3.426,7.652,7.652,7.652h225.443
                                        c4.226,0,7.652-3.426,7.652-7.652C266.43,315.386,263.004,311.96,258.778,311.96z"
                      />
                    </g>
                    <g>
                      <path
                        d="M223.106,355.718h-94.754c-4.226,0-7.652,3.426-7.652,7.652c0,4.226,3.426,7.652,7.652,7.652h94.754
                                        c4.226,0,7.652-3.426,7.652-7.652C230.758,359.144,227.332,355.718,223.106,355.718z"
                      />
                    </g>
                    <g>
                      <path
                        d="M102.845,355.718H69.006c-4.226,0-7.652,3.426-7.652,7.652c0,4.226,3.426,7.652,7.652,7.652h33.839
                                        c4.226,0,7.652-3.426,7.652-7.652C110.497,359.144,107.071,355.718,102.845,355.718z"
                      />
                    </g>
                    <g>
                      <path
                        d="M223.106,384.969h-154.1c-4.226,0-7.652,3.426-7.652,7.652c0,4.226,3.426,7.652,7.652,7.652h154.1
                                        c4.226,0,7.652-3.426,7.652-7.652C230.758,388.394,227.332,384.969,223.106,384.969z"
                      />
                    </g>
                    <g>
                      <path
                        d="M223.106,414.219h-154.1c-4.226,0-7.652,3.426-7.652,7.652c0,4.226,3.426,7.652,7.652,7.652h154.1
                                        c4.226,0,7.652-3.426,7.652-7.652C230.758,417.645,227.332,414.219,223.106,414.219z"
                      />
                    </g>
                    <g>
                      <path
                        d="M230.156,189.552c-0.9-2.77-3.294-4.789-6.176-5.207l-49.103-7.135l-21.959-44.495c-1.29-2.612-3.949-4.266-6.862-4.266
                                        c-2.912,0-5.572,1.654-6.862,4.266l-21.96,44.495l-49.103,7.135c-2.882,0.418-5.277,2.437-6.176,5.207
                                        c-0.9,2.77-0.149,5.81,1.936,7.843l35.532,34.634l-8.388,48.906c-0.492,2.87,0.688,5.771,3.044,7.483
                                        c1.333,0.968,2.912,1.461,4.498,1.461c1.217,0,2.44-0.291,3.56-0.878l43.919-23.091l43.919,23.091
                                        c2.578,1.355,5.702,1.129,8.058-0.583c2.357-1.712,3.536-4.613,3.044-7.483l-8.388-48.906l35.531-34.634
                                        C230.305,195.362,231.056,192.322,230.156,189.552z M179.127,223.879c-1.804,1.758-2.627,4.291-2.201,6.773l6.447,37.589
                                        l-33.757-17.748c-2.23-1.171-4.893-1.171-7.121,0l-33.757,17.748l6.447-37.589c0.425-2.482-0.397-5.015-2.201-6.773l-27.309-26.62
                                        l37.741-5.485c2.492-0.362,4.646-1.927,5.761-4.186l16.878-34.2l16.878,34.2c1.114,2.258,3.269,3.824,5.761,4.186l37.742,5.485
                                        L179.127,223.879z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="counter-item mb-3">
                  <h3 className="counter__number text-color-2 font-size-50">
                    <span className="counter">25,100</span>
                    <span className="count-symbol">+</span>
                  </h3>
                </div>
                <h2 className="sec__title mb-5">
                  Company Choose Listhub for Their Business <br />
                  Why You not to try
                </h2>
              </div>
              {/* <!-- end section-heading --> */}
              <div
                className="client-logo-box position-relative padding-top-200px padding-bottom-140px"
              >
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Airbnd"
                >
                  <img
                    className="lazy"
                    src={airbnb}
                    data-src={airbnb}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <img
                    className="lazy"
                    src={faceBook}
                    data-src={faceBook}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Microsoft"
                >
                  <img
                    className="lazy"
                    src={microsoft}
                    data-src={microsoft}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Github"
                >
                  <img
                    className="lazy"
                    src={gitHub}
                    data-src={gitHub}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Slack"
                >
                  <img
                    className="lazy"
                    src={slack}
                    data-src={slack}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Git"
                >
                  <img
                    className="lazy"
                    src={git}
                    data-src={git}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Spotify"
                >
                  <img
                    className="lazy"
                    src={spotify}
                    data-src={spotify}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Vimeo"
                >
                  <img
                    className="lazy"
                    src={vimeo}
                    data-src={vimeo}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Yelp"
                >
                  <img
                    className="lazy"
                    src={yelp}
                    data-src={yelp}
                    alt="Website-logo"
                  />
                </a>
                <a
                  href="#"
                  className="client-logo-item bounce"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Excel"
                >
                  <img
                    className="lazy"
                    src={excel}
                    data-src={excel}
                    alt="Website-logo"
                  />
                </a>
              </div>
              {/* <!-- end client-logo-box --> */}
              <p className="font-weight-medium pt-5 text-center">
                Grow your marketing and be happy with your business
                <a
                  href="#"
                  className="btn-text"
                  data-toggle="modal"
                  data-target="#signUpModal"
                >Get Started <i className="la la-arrow-right icon"></i
                ></a>
              </p>
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>


      {/* <!-- end clientlogo-area -->
    <!-- ================================
       START CLIENTLOGO AREA
================================= -->

    <!-- ================================
    START CTA AREA
================================= --> */}
      <section className="cta-area">
        <div className="container-fluid pl-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-content-box cta-content-box-2">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="cta-img">
                      <img
                        className="lazy"
                        src={img37}
                        data-src={img37}
                        alt=""
                      />
                      <div className="cta-img-shape">
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                          <path
                            d="M627.25,-82.39 C346.22,43.91 512.69,168.25 560.66,205.75 L500.00,150.00 L500.00,0.00 Z"
                            style={{ stroke: "none", fill: "#fff" }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mr-auto">
                    <div className="cta-content">
                      <div className="section-heading">
                        <h2 className="sec__title mb-1 font-size-30 line-height-40">
                          Subscribe to Our Newsletter
                        </h2>
                        <p className="sec__desc mb-4">
                          Want to be notified about latest update? just sign up.
                        </p>
                      </div>
                      {/* <!-- end section-heading --> */}
                      <form action="#" className="form-box">
                        <div className="form-group">
                          <span className="la la-envelope form-icon"></span>
                          <input
                            className="form-control form-control-styled"
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                          />
                          <p className="font-size-12 font-weight-medium pt-1">
                            <i className="la la-lock mr-1"></i>Your are 100% protected
                            with us
                          </p>
                        </div>
                        <div className="btn-box pt-2">
                          <button
                            type="submit"
                            className="theme-btn gradient-btn border-0"
                          >
                            Subscribe Now <i className="la la-arrow-right ml-2"></i>
                          </button>
                        </div>
                      </form>
                      {/* <!-- end form-box --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- end row --> */}
              </div>
              {/* <!-- end cta-content-box --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

      {/* <!-- end cta-area -->
    <!-- ================================
    END CTA AREA
================================= -->

    <!-- ================================
       START FOOTER AREA
================================= --> */}
      <section
        className="footer-area bg-gradient-gray padding-top-100px padding-bottom-30px position-relative"
      >
        <span className="circle-bg circle-bg-1 position-absolute"></span>
        <span className="circle-bg circle-bg-2 position-absolute"></span>
        <span className="circle-bg circle-bg-3 position-absolute"></span>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <div className="footer-logo">
                  <a href="index.html" className="foot-logo"
                  ><img src={logoBlack} alt="logo"
                    /></a>
                </div>
                {/* <!-- end footer-logo --> */}
                <ul className="list-items contact-links pt-3">
                  <li>
                    <span className="d-block text-color mb-1"
                    ><i className="la la-map mr-1 text-color-2"></i>Address:</span
                    >
                    12345 Little Baker St, Melbourne
                  </li>
                  <li>
                    <span className="d-block text-color mb-1"
                    ><i className="la la-phone mr-1 text-color-2"></i>Phone:</span
                    ><a href="#">+ 61 23 8093 3400</a>
                  </li>
                  <li>
                    <span className="d-block text-color mb-1"
                    ><i className="la la-envelope mr-1 text-color-2"></i
                    >Email:</span
                    ><a href="#">listhub@gmail.com</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Company</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="career.html">Careers</a></li>
                  <li><a href="blog-grid.html">Press</a></li>
                  <li><a href="#">Investor Relations</a></li>
                  <li><a href="#">Content Guidelines</a></li>
                  <li><a href="#">Ad Choices</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Discover</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li><a href="#">Listhub Project Cost Guides</a></li>
                  <li><a href="#">The Local Listhub</a></li>
                  <li><a href="#">Collections</a></li>
                  <li><a href="#">Listhub Mobile</a></li>
                  <li><a href="blog-grid.html">Listhub Blog</a></li>
                  <li><a href="contact.html">Support</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4 className="footer__title">Listhub for Business</h4>
                <div className="stroke-shape mb-3"></div>
                <ul className="list-items">
                  <li><a href="#">Claim your Business</a></li>
                  <li><a href="#">Advertise on Listhub</a></li>
                  <li><a href="#">Add Restaurant</a></li>
                  <li><a href="#">Business Support</a></li>
                  <li><a href="#">Products for Businesses</a></li>
                  <li><a href="#">Business Success Stories</a></li>
                </ul>
              </div>
              {/* <!-- end footer-item --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row pt-4 footer-action-wrap">
            <div className="col-lg-4">
              <h4 className="font-size-17 pb-3">Follow us on</h4>
              <ul className="social-profile social-profile-styled">
                <li>
                  <a
                    href="#"
                    className="facebook-bg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  ><i className="lab la-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="twitter-bg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  ><i className="lab la-twitter"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="instagram-bg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  ><i className="lab la-instagram"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dribbble-bg"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Dribble"
                  ><i className="la la-dribbble"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div
                className="footer-chosen-container user-chosen-select-container d-flex align-items-center justify-content-end"
              >
                <div className="mr-2">
                  <h4 className="font-size-17 pb-3">Languages</h4>
                  <select className="user-chosen-select">
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
                  <h4 className="font-size-17 pb-3">Countries</h4>
                  <select className="user-chosen-select">
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
          </div>
          <div className="section-block-2 my-4"></div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="copy-right d-flex align-items-center justify-content-between"
              >
                <p className="copy__desc">
                  &copy; Copyright Listhub
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  . Made with <span className="la la-heart-o"></span> by
                  <a href="https://themeforest.net/user/techydevs/portfolio"
                  >TechyDevs</a
                  >
                </p>
                <ul className="list-items term-list text-right">
                  <li className="font-size-14">
                    <a href="terms-and-conditions.html">Terms & Conditions</a>
                  </li>
                  <li className="font-size-14">
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* <!-- end copy-right --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>


      {/* <!-- end footer-area -->
    <!-- ================================
       START FOOTER AREA
================================= --> */}

      {/* <!-- start back-to-top --> */}
      <div id="back-to-top">
        <i className="la la-arrow-up" title="Go top"></i>
      </div>
      {/* <!-- end back-to-top --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade modal-container login-form"
        id="loginModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="loginModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header align-items-center mh-bg">
              <h5 className="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="la la-times-circle"></span>
              </button>
            </div>
            <div className="modal-body">
              <form method="post" className="form-box">
                <div className="input-box">
                  <label className="label-text">Username or email</label>
                  <div className="form-group">
                    <span className="la la-user form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="text"
                      name="text"
                      placeholder="Username or email address"
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">Password</label>
                  <div className="form-group">
                    <span className="la la-lock form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="text"
                      name="text"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div
                  className="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta"
                >
                  <div className="custom-checkbox">
                    <input type="checkbox" id="keepMeSignedChb" />
                    <label for="keepMeSignedChb" className="font-size-14"
                    >Keep me signed in</label
                    >
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="margin-bottom-10px lost-pass-btn font-size-14"
                  >Lost Password?</a
                  >
                </div>
                <div className="btn-box">
                  <button type="submit" className="theme-btn gradient-btn w-100">
                    <i className="la la-sign-in mr-1"></i> Login to Account
                  </button>
                  <p
                    className="sub-text-box text-right pt-1 font-weight-medium font-size-14"
                  >
                    New to Listhub?
                    <a className="text-color-2 signup-btn" href="javascript:void(0)"
                    >Create account</a
                    >
                  </p>
                </div>
                <div
                  className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto"
                >
                  OR
                </div>
                <div className="text-center">
                  <p className="font-size-15 font-weight-medium">
                    Login with your social network
                  </p>
                  <ul className="social-profile social-profile-colored py-3">
                    <li>
                      <a
                        href="#"
                        className="google-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Google"
                      >
                        <i className="lab la-google"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="facebook-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Facebook"
                      >
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="twitter-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Twitter"
                      >
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="instagram-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Instagram"
                      >
                        <i className="lab la-instagram"></i>
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
      <div
        className="modal fade modal-container signup-form"
        id="signUpModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="signUpModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header align-items-center mh-bg-2">
              <h5 className="modal-title" id="signUpModalTitle">
                Welcome! create your listhub account
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="la la-times-circle"></span>
              </button>
            </div>
            <div className="modal-body">
              <form method="post" className="form-box">
                <div className="input-box">
                  <label className="label-text">Username</label>
                  <div className="form-group">
                    <span className="la la-user form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="text"
                      name="text"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">Email</label>
                  <div className="form-group">
                    <span className="la la-envelope form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="email"
                      name="text"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="label-text">Password</label>
                  <div className="form-group">
                    <span className="la la-lock form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="text"
                      name="text"
                      placeholder="Enter password"
                    />
                  </div>
                  <p className="font-size-14 mt-n2">
                    Your password must be at least 6 characters long and must
                    contain letters, numbers and special characters. Cannot
                    contain whitespace.
                  </p>
                </div>
                <div className="input-box py-4 user-action-meta">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="agreeChb" />
                    <label for="agreeChb" className="font-size-14"
                    >By signing up, you agree to our
                      <a href="privacy-policy.html" className="text-color-2"
                      >Privacy Policy.</a
                      ></label
                    >
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" className="theme-btn gradient-btn w-100">
                    <i className="la la-user-plus mr-1"></i> Register Account
                  </button>
                  <p
                    className="sub-text-box text-right pt-1 font-weight-medium font-size-14"
                  >
                    Already on Listhub?
                    <a className="text-color-2 login-btn" href="javascript:void(0)"
                    >Log in</a
                    >
                  </p>
                </div>
                <div
                  className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto"
                >
                  OR
                </div>
                <div className="text-center">
                  <p className="font-size-15 font-weight-medium">
                    Connect with social network
                  </p>
                  <ul className="social-profile social-profile-colored py-3">
                    <li>
                      <a
                        href="#"
                        className="google-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Google"
                      >
                        <i className="lab la-google"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="facebook-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Facebook"
                      >
                        <i className="lab la-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="twitter-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Twitter"
                      >
                        <i className="lab la-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="instagram-bg mx-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Instagram"
                      >
                        <i className="lab la-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="font-size-15 pb-3">
                    Don't worry, we never any post to your social profile.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Modal --> */}
      <div
        className="modal fade modal-container recover-form"
        id="recoverModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="recoverModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header align-items-center mh-bg">
              <h5 className="modal-title" id="recoverModalTitle">Reset password</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="la la-times-circle"></span>
              </button>
            </div>
            <div className="modal-body">
              <p className="font-size-15 font-weight-medium pb-3">
                Enter your username or email to reset your password. You will
                receive an email with instructions on how to reset your password.
                If you are experiencing problems resetting your password
                <a href="contact.html" className="text-color-2">contact us</a> or
                <a href="#" className="text-color-2">send us an email</a>
              </p>
              <form method="post" className="form-box">
                <div className="input-box">
                  <label className="label-text">Username or email</label>
                  <div className="form-group">
                    <span className="la la-user form-icon"></span>
                    <input
                      className="form-control form-control-styled"
                      type="text"
                      name="text"
                      placeholder="Username or email address"
                    />
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" className="theme-btn gradient-btn w-100">
                    Get New Password <i className="la la-arrow-right ml-1"></i>
                  </button>
                  <p
                    className="sub-text-box text-right pt-1 font-weight-medium font-size-14"
                  >
                    Not a member?
                    <a className="text-color-2 signup-btn" href="javascript:void(0)"
                    >Create account</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
})

export default Home1