class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="main-header">
		<div class="top-header">
		   <div class="logo">
			   <a href="index.html"><img src="img/logo.svg" /></a>
		   </div>
		   <div class="search-account">
			   <div class="search-main">
				   <p class="all-category-name-box">
					   <span id="all-cat">All Categories</span> 
					   <i class="fa-solid fa-angle-down"></i>
				   </p>
				   <div class="main-search-box">
					   <span><input type="text" placeholder="Search for items..." class="main-search-bar"/></span>
					   <i class="fa-solid fa-magnifying-glass"></i>
				   </div>
				   <div class="all-category-child">
					   <input type="text" class="all-category-search-box">
					   <ul class="all-list-ul">
						   <li>All Categories</li>
						   <li>Milks and Dairies</li>
						   <li>Wines & Alcohol</li>
						   <li>Clothing & Beauty</li>
						   <li>Pet Foods & Toy</li>
						   <li>Fast food</li>
						   <li>Baking meterial</li>
						   <li>Vegitables</li>
						   <li>Fresh Seafood</li>
						   <li>Noodles & Rich</li>
						   <li>Ice cream</li>
					   </ul>
				   </div>
			   </div>
	  
	  
			   <!--
				   Location box starts here..........
			   -->
			   <div class="location-main">
				   <div class="loaction-box">
					   <i class="fa-solid fa-location-dot"></i>
					   <span class="country-box">Your Location</span>
					   <i class="fa-solid fa-angle-down"></i>
				   </div>
	  
				   <div class="country-list-box">
						<input type="text" class="country-search-box">
						<ul class="country-holder"></ul>
				   </div>
			   </div>
	  
			   <!--
				   burget menu button goes here
			   -->
	  
			   <button class="burger-menu">
				   <i class="fa-solid fa-bars"></i>
			   </button>
	  
			   <!--
				   All account details of customer goes here
			   -->
			   <div class="cart-acc-container">
				   <a href="#!" class="cart-acc compare">
					   <div class="cart-icon">
						   <span class="cart-notification">3</span>
						   <i class="fa-solid fa-code-compare"></i>
					   </div>
					   <span class="cart-acc-name big">Compare</span>
				   </a>
	  
				   <a href="#!" class="cart-acc heart small">
					   <div class="cart-icon">
						   <span class="cart-notification">6</span>
						   <i class="fa-regular fa-heart"></i>
					   </div>
					   <span class="cart-acc-name big">Wishlist</span>
				   </a>
	  
				   <div id='product-cart-details' class="cart-acc">
                       <div class="cart-click-detail">
							<div class="cart-icon">
								<span class="cart-notification cart-number">0</span>
								<i class="fa-solid fa-cart-shopping"></i>
							</div>
							<span class="cart-acc-name">Cart</span>
					   </div>
	  
					   <div class="cart-absu">
						   <div id='cart-absu-box'></div>	  
						   <div class="cart-absu-line"></div>
						   <div class="cart-amount-main">
							   <div class="cart-total">
								   <span>Total</span>
								   <span class='cart-total-price'>$<span class="cart-total-price-count"></span></span>
							   </div>
							   <div class="cart-btn">
								   <button class="cart-view-btn">View cart</button>
								   <button class="cart-checkout">Checkout</button>
							   </div>						
						   </div>
					   </div>
				   </div>
	  
				   <div href="#!" class="cart-acc small">
					   <div class="cart-icon">
						   <i class="fa-regular fa-user"></i>
					   </div>
					   <span class="cart-acc-name">Account</span>
	  
					   <div class="sub-menu">
						   <ul>
							   <li><a href="#"><i class="fa-regular fa-user"></i> My Account</a></li>
							   <li><a href="#"><i class="fa-solid fa-location-crosshairs"></i>Order Tracking</a></li>
							   <li><a href="#"><i class="fa-regular fa-clipboard"></i> My Voucher</a></li>
							   <li><a href="#"><i class="fa-regular fa-heart"></i>My Wishlist</a></li>
							   <li><a href="#"><i class="fa-solid fa-sliders"></i>Setting</a></li>
							   <li><a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i>Sign out</a></li>
						   </ul>
					   </div>
				   </div>
			   </div>
		   </div>
		</div>
	  
		<!--
		   Main navbar for desktop.
		-->
	  
		<div class="main-navbar">
		   <div class="navbar-box">
			   <div class="browse-all-cat">
				   <div class="browse-all-cat-btn">
					   <i class="fa-solid fa-table-cells-large"></i>
					   <span>Browse All Categories</span>
					   <i class="fa-solid fa-angle-down"></i>
				   </div>
	  
				   <div class="browse-all-list-box">
					   <a href="" class="all-category-list">
						   <img src="img/category-1.svg" />
						   <span>Milks and Dairies</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-6.svg" />
						   <span>Wines & Drinks</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-2.svg" />
						   <span>Clothing & beauty</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-7.svg" />
						   <span>Fresh Seafood</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-3.svg" />
						   <span>Pet Foods & Toy</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-8.svg" />
						   <span>Fast food</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-4.svg" />
						   <span>Baking material</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-9.svg" />
						   <span>Vegetables</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-5.svg" />
						   <span>Fresh Fruit</span>
					   </a>
					   <a href="" class="all-category-list">
						   <img src="img/category-10.svg" />
						   <span>Bread and Juice</span>
					   </a>
					   <span class="show-more-box">
						   <a href="" class="all-category-list">
							   <img src="img/category-9.svg" />
							   <span>Vegetables</span>
						   </a>
						   <a href="" class="all-category-list">
							   <img src="img/icon-1.svg" />
							   <span>Kitchen appliances</span>
						   </a>
						   <a href="" class="all-category-list">
							   <img src="img/icon-3.svg" />
							   <span>Fresh fish</span>
						   </a>
						   <a href="" class="all-category-list">
							   <img src="img/icon-2.svg" />
							   <span>Furniture</span>
						   </a>
					   </span>
					   <button class="category-more-btn">
						   <i class="fa-regular fa-plus"></i>
						   <i class="fa-regular fa-minus"></i>
						   <span class="category-more-btn-txt">Show More...</span>
					   </button>
				   </div>
			   </div>
			   <nav class="desktop-top-nav">
				   <ul>
					   <li class="nav-list">
						   <a href="deal.html" class="main-active-link">
							   <i class="fa-solid fa-fire" style="color: var(--text-green-one)"></i>
							   Deals
						   </a>
					   </li>
					   <li class="nav-list nav-sub-menu">
						   <a href="index.html" class="main-active-link">
							   Home
							   <i class="fa-solid fa-angle-down"></i>
						   </a>
						   <div class="dropdown-box">
							   <a href="">Home 1</a>
							   <a href="">Home 2</a>
							   <a href="">Home 3</a>
							   <a href="">Home 4</a>
							   <a href="">Home 5</a>
							   <a href="">Home 6</a>
						   </div>
					   </li>
					   <li class="nav-list">
						   <a href="about.html" class="main-active-link">
							   About
						   </a>
					   </li>
					   <li class="nav-list nav-sub-menu">
						   <a href="shop.html" class="main-active-link">
							   Shop
							   <i class="fa-solid fa-angle-down"></i>
						   </a>
						   <div class="dropdown-box">
							   <a href="">Shop Grid - Right Sidebar</a>
							   <a href="">Shop Grid - Left Sidebar</a>
							   <a href="">Shop List - Right Sidebar</a>
							   <a href="">Shop List - Left Sidebar</a>
							   <a href="">Shop - Wide</a>
							   <a href="">Single Product</a>
							   <a href="">Shop - Filter</a>
							   <a href="">Shop - Wishlist</a>
							   <a href="">Shop - Cart</a>
							   <a href="">Shop - Checkout</a>
							   <a href="">Shop - Compare</a>
							   <a href="">Shop Invoice</a>
						   </div>
					   </li>
					   <li class="nav-list nav-sub-menu">
						   <a href="vendors.html" class="main-active-link">
							   Vendors
							   <i class="fa-solid fa-angle-down"></i>
						   </a>
						   <div class="dropdown-box">
							   <a href="">Vendors Grid</a>
							   <a href="">Vendors List</a>
							   <a href="">Vendor Details 01</a>
							   <a href="">Vendor Details 02</a>
							   <a href="">Vendor Dashboard</a>
							   <a href="">Vendor Guide</a>
						   </div>
					   </li>
					   <li class="nav-list nav-mega-menu">
						   <a href="megamenu.html" class="main-active-link">
							   Mega menu
							   <i class="fa-solid fa-angle-down"></i>
						   </a>
						   <div class="mega-dropdown-box">
							   <div class="mega-menu-box">
								   <h3><a href="">Fruit & Vegetables</a></h3>
								   <ul>
									   <li><a href="">Meat & Poultry</a></li>
									   <li><a href="">Fresh Vegetables</a></li>
									   <li><a href="">Herbs & Seasonings</a></li>
									   <li><a href="">Cuts & Sprouts</a></li>
									   <li><a href="">Exotic Fruits & Veggies</a></li>
									   <li><a href="">Packaged Produce</a></li>
								   </ul>
							   </div>
							   <div class="mega-menu-box">
								   <h3><a href="">Breakfast & Diary</a></h3>
								   <ul>
									   <li><a href="">Milk & Flavoured Milk</a></li>
									   <li><a href="">Butter and Margarine</a></li>
									   <li><a href="">Eggs Substitutes</a></li>
									   <li><a href="">Marmalades</a></li>
									   <li><a href="">Sour Cream</a></li>
									   <li><a href="">Cheese</a></li>
								   </ul>
							   </div>
							   <div class="mega-menu-box">
								   <h3><a href="">Mean & Seafood</a></h3>
								   <ul>
									   <li><a href="">Breakfast Sausage</a></li>
									   <li><a href="">Dinner Sausage</a></li>
									   <li><a href="">Chicken</a></li>
									   <li><a href="">Sliced Deli Meat</a></li>
									   <li><a href="">Wild Caught Fillets</a></li>
									   <li><a href="">Crab and Shellfish</a></li>
								   </ul>
							   </div>
							   <div class="mega-menu-box">
								   <div class="mega-poster-box">
									   <h3 class="hot-deals">HOT DEALS</h3>
									   <h2 class="trending">Don't miss <br> Trending</h2>
									   <h2 class="save-fifty">Save to 50%</h2>
									   <a class="mega-shop-button">Shop now</a>
									   <div class="twinty-five">
										   <h2>25% <br>off</h2>
									   </div>
								   </div>
							   </div>
						   </div>
					   </li>
					   <li class="nav-list nav-sub-menu">
						   <a href="blog.html" class="main-active-link">
							   Blog
							   <i class="fa-solid fa-angle-down"></i>
						   </a>
						   <div class="dropdown-box">
							   <a href="">Blog Category Grid</a>
							   <a href="">Blog Category List</a>
							   <a href="">Blog Category Big</a>
							   <a href="">Blog Category Wide</a>
							   <a href="">Single Post</a>
						   </div>
					   </li>
					   <li class="nav-list nav-sub-menu">
						   <a href="pages.html" class="main-active-link">
							   Pages
							   <i class="fa-solid fa-angle-down"></i>
						   </a>
						   <div class="dropdown-box">
							   <a href="">About Us</a>
							   <a href="">Contact</a>
							   <a href="">My Account</a>
							   <a href="">Login</a>
							   <a href="">Register</a>
							   <a href="">Forgot password</a>
							   <a href="">Reset password</a>
							   <a href="">Purchase Guide</a>
							   <a href="">Privacy Policy</a>
							   <a href="">Terms of Service</a>
							   <a href="">404 page</a>
						   </div>
					   </li>
					   <li class="nav-list">
						   <a href="contact.html" class="main-active-link">
							   Contact
						   </a>
					   </li>
				   </ul>
			   </nav>
		   </div>
		   <div class="nav-support-box">
			   <i class="fa-solid fa-headphones"></i>
			   <div class="nav-support-info">
				   <h1>1900 - 585</h1>
				   <p>24/7 Support Center</p>
			   </div>
		   </div>
		</div>
	  </header> 


	  <div class="side-navBar-background">
	     <div class="side-navBar-box">
		     <div class="side-logo-box"> 
			     <a href="index.html"><img src="img/logo.svg" /></a>
				 <i class="fa-solid fa-xmark"></i>
			 </div>

			 <div class="sideNav-search-box">
                 <input type="text" class="side-nav-search" placeholder="Search for items..." />
				 <i class="fa-solid fa-magnifying-glass"></i>
			 </div>

			 <div class="sideNavBar-main">
	           <ul>
			      <li class="sidenav-dropdown">
				    <a href="">Home
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="index.html">Home 1</a></li>
					   <li><a href="">Home 2</a></li>
					   <li><a href="">Home 3</a></li>
					   <li><a href="">Home 4</a></li>
					   <li><a href="">Home 5</a></li>
					   <li><a href="">Home 6</a></li>
					</ul>
				  </li>
			      <li class="sidenav-dropdown">
				    <a href="deal.html">Shop
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="">Shop Grid- Right Sidebar</a></li>
					   <li><a href="">Shop Grid- Left Sidebar</a></li>
					   <li><a href="">Shop List - Right Sidebar</a></li>
					   <li><a href="">Shop List - Left Sidebar</a></li>
					   <li><a href="">Shop - Wide</a></li>
					   <li><a href="">Single Product</a></li>
					   <li><a href="">Shop - Filter</a></li>
					   <li><a href="">Shop - Wishlist</a></li>
					   <li><a href="">Shop - Cart</a></li>
					   <li><a href="">Shop - Checkout</a></li>
					   <li><a href="">Shop - Compare</a></li>
					   <li><a href="">Shop Invoice</a></li>
					</ul>
				  </li>
			      <li class="sidenav-dropdown">
				    <a href="">Vendors
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="">Vendors Grid</a></li>
					   <li><a href="">Vendors List</a></li>
					   <li><a href="">Vendor Details 01</a></li>
					   <li><a href="">Vendor Details 02</a></li>
					   <li><a href="">Vendor Dashboard</a></li>
					   <li><a href="">Vendor Guide</a></li>
					</ul>
				  </li>
			      <li class="sidenav-dropdown">
				    <a href="">Mega Menu
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="">Women's Fashion</a></li>
					   <li><a href="">Men's Fashion</a></li>
					   <li><a href="">Technology</a></li>
					</ul>
				  </li>
			      <li class="sidenav-dropdown">
				    <a href="">Blog
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="">Blog Category Grid</a></li>
					   <li><a href="">Blog Category List</a></li>
					   <li><a href="">Blog Category Big</a></li>
					   <li><a href="">Blog Category Wide</a></li>
					   <li><a href="">Blog Category Loyout</a></li>
					</ul>
				  </li>
			      <li class="sidenav-dropdown">
				    <a href="">Pages
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="">About Us</a></li>
					   <li><a href="">Contact</a></li>
					   <li><a href="">My Account</a></li>
					   <li><a href="">Login</a></li>
					   <li><a href="">Registe</a></li>
					   <li><a href="">Forgot Password</a></li>
					   <li><a href="">Reset Password</a></li>
					   <li><a href="">Purchase Guide</a></li>
					   <li><a href="">Privacy Policy</a></li>
					   <li><a href="">Terms Of Service</a></li>
					   <li><a href="">404 Page</a></li>
					</ul>
				  </li>
			      <li class="sidenav-dropdown">
				    <a href="">Language
					<i class="fa-solid fa-angle-down"></i>
					</a>
					<ul class="sideNav-dropbox">
					   <li><a href="">English</a></li>
					   <li><a href="">French</a></li>
					   <li><a href="">German</a></li>
					   <li><a href="">Spanish</a></li>
					</ul>
				  </li>
			   </ul>
			 </div>

			 <div class="sideNav-location-box">
			    <ul>
				   <li><a href="">
				      <i class="fa-solid fa-location-dot"></i>
					  Our location
					</a></li>
				   <li><a href="">
				      <i class="fa-regular fa-user"></i>
				      Log In/Sign Up
				   </a></li>
				   <li><a href="">
				      <i class="fa-solid fa-headphones"></i>  
					  (+01) - 2345 - 6789
				   </a></li>
				</ul>
			 </div>

			 <div class="side-follow-main">
			    <h3>Follow Us</h3>
				<div class="side-follow-box">
				   <i class="fa-brands fa-facebook-f"></i>
				   <i class="fa-brands fa-twitter"></i>
				   <i class="fa-brands fa-instagram"></i>
				   <i class="fa-brands fa-pinterest-p"></i>
				   <i class="fa-brands fa-youtube"></i>
				</div>
			 </div>

			 <div class="sidebar-copyright">
			    <p>Copyright ${new Date().getFullYear()} <i class="fa-regular fa-copyright"></i> Nest. All rights reserved. Powered by Hasan</p>
			 </div>
		 </div>
	  </div>

        `
    }
}

customElements.define('my-header', MyHeader)



const sidenavDropdowns = document.querySelectorAll('.sidenav-dropdown')

sidenavDropdowns.forEach(sidenavDropdown =>{
	sidenavDropdown.addEventListener('click', (e)=>{
		e.preventDefault()
		const sideNavDropbox = sidenavDropdown.querySelector('.sideNav-dropbox')
		sideNavDropbox.classList.toggle('active')
	})
})


//Side navbar for small screen size show hide code is here
const burgerMenu = document.querySelector('.burger-menu')
const sideNavShowBtn = document.querySelector('.side-logo-box .fa-xmark');
const sideNavBarBox = document.querySelector('.side-navBar-box');
const sideNavBarBackground = document.querySelector('.side-navBar-background')

burgerMenu.addEventListener('click', ()=>{
	sideNavBarBackground.classList.add('active')
	sideNavBarBox.classList.add('active')
})

sideNavShowBtn.addEventListener('click', ()=>{
	sideNavBarBackground.classList.remove('active')
	sideNavBarBox.classList.remove('active')
})



// countery search box at the nav bar
const countryList = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland",  
"Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"
];

const countryHolder = document.querySelector('.country-holder')

countryList.forEach(country =>{
    const countryNameHolder = document.createElement('li')
    countryNameHolder.classList.add('country-name')
    countryNameHolder.innerText = country

    countryHolder.appendChild(countryNameHolder)
})

const countryListBox = document.querySelector('.country-list-box')
const eachCountries = document.querySelectorAll('.country-holder li')
const countryBox = document.querySelector('.country-box')
const loactionBox = document.querySelector('.loaction-box')
const locatonArrow = document.querySelector('.loaction-box .fa-angle-down')

eachCountries.forEach(eachCountry =>{
    eachCountry.addEventListener('click', ()=>{
        countryBox.innerText = eachCountry.innerText
        countryListBox.classList.remove('active')
		locatonArrow.classList.toggle('active')
    })
})

loactionBox.addEventListener('click', ()=>{
    countryListBox.classList.toggle('active')
    locatonArrow.classList.toggle('active')
})

const countrySearchBox = document.querySelector('.country-search-box')

function updateName(selectedLi){
    countrySearchBox.value = ''
    selectedLi.addEventListener('click', ()=>{
        countryBox.innerText = selectedLi.innerText
        countryListBox.classList.remove('active')
		locatonArrow.classList.toggle('active')
    })
}

countrySearchBox.addEventListener('keyup',  ()=>{
    let arr = []
    let searchVal = countrySearchBox.value

    arr = countryList.filter(data =>{
        return data.toLowerCase().startsWith(searchVal)
    }).map(data => `<li onClick="updateName(this)">${data}</li>`).join('')

    countryHolder.innerHTML = arr ? arr : `<p>Oops! Country not found.<p>`;
})





const allCategoryNameBox = document.querySelector('.all-category-name-box')
const allCategoryChild = document.querySelector('.all-category-child')
const allCategoryListBoxes = document.querySelectorAll('.all-list-ul li')
const allCat = document.getElementById('all-cat')
const allCatArrow = document.querySelector('.all-category-name-box .fa-angle-down')
const allCategorySearchBox = document.querySelector('.all-category-search-box')
const allListUl = document.querySelector('.all-list-ul')
const cartNotification = document.querySelector('.cart-number')


allCategoryNameBox.addEventListener('click', ()=>{
	allCategoryChild.classList.toggle('active')
	allCatArrow.classList.toggle('active')
})

allCategoryListBoxes.forEach(allCategoryListBoxe =>{
	allCategoryListBoxe.addEventListener('click', ()=>{
		allCat.innerText = allCategoryListBoxe.innerText
		allCategoryChild.classList.remove('active')
		allCatArrow.classList.toggle('active')
	})
})




//Making the product cart in the header visible and hidden
const cartClickDetail = document.querySelector('.cart-click-detail')
cartClickDetail.addEventListener('click', updateCartDetail)
let cartAbsu = document.querySelector('.cart-absu')
const body = document.querySelector('body');

function updateCartDetail(){	
	cartAbsu.style.transform = 'scale(1)'
 }

body.addEventListener('click', function(event){
	if(!event.target.closest('.cart-acc') && !event.target.closest('.fa-xmark')){
		cartAbsu.style.transform = 'scale(0)'
	}
})



//cart inner product adding from localstorage..
const cartAbsuBox = document.getElementById('cart-absu-box')

function upgrateCartInfo(){
	let getCartDetails = localStorage.getItem('proAddToCart')
	getCartDetails = JSON.parse(getCartDetails)

	let cartPriceTotal = 0

	getCartDetails.forEach((getCartDetail, idx)=>{
		const {name, price, img, id} = getCartDetail
		const cartAbsuInnerBox = document.createElement('div')
		cartAbsuInnerBox.id = id
		cartAbsuInnerBox.classList.add('cart-absu-innerBox')
		cartAbsuInnerBox.innerHTML = `
			<a href=""><img src=${img} /></a>
			<div class="cart-absu-details">
				<div class="cart-absu-desc">
					<a href="#/" class="cart-absu-pro-name">${name}</a>
					<p>1 × $<span class="cart-indi-price">${price}</span></p>
				</div>
				<i class="fa-solid fa-xmark"></i>
			</div>
		`

		cartAbsuBox.appendChild(cartAbsuInnerBox)

		cartPriceTotal += Number(price)
		totalCart(cartPriceTotal)
	})
}

upgrateCartInfo()




//Cart box remove on click the X button
const cartAbsuInnerBoxes = document.querySelectorAll('.cart-absu-innerBox')
const ProductInLocalStore = JSON.parse(localStorage.getItem('proAddToCart'))

let cartNum = 0;
cartAbsuInnerBoxes.forEach((cartAbsuInnerBox, index) =>{
	const cartDetailsXmark = cartAbsuInnerBox.querySelector('.cart-absu-details .fa-xmark')
	cartDetailsXmark.addEventListener('click', ()=>{
		const getMainDiv = cartDetailsXmark.closest('.cart-absu-innerBox')
		getMainDiv.remove()
		cartNum++
		cartNotification.textContent = cartAbsuInnerBoxes.length - cartNum
		cartPriceCount()

		dltProStore()
	})
})

function updateCartFunc(){
	dltProStore()
}

const cardProducts = document.querySelectorAll('.cart-absu-innerBox')

function dltProStore(){
	cardProducts.forEach((cardProduct, idx)=>{
		if(cardProduct.id === ProductInLocalStore[idx].id){
			const filteredProduct = ProductInLocalStore.filter((Product) => Product.id !==  cardProduct.id)
	
			localStorage.setItem('proAddToCart', JSON.stringify(filteredProduct))
			// localStorage.removeItem(index)
			// ProductInLocalStore.splice(index, 1)
			// localStorage.setItem('proAddToCart', JSON.stringify(ProductInLocalStore))
		}
	})
}

cartNotification.textContent = cartAbsuInnerBoxes.length


//Cart box price calculation
function cartPriceCount(){
	const cartIndiPrices = document.querySelectorAll('.cart-indi-price')

	let numIs = 0

	cartIndiPrices.forEach((cartIndi)=>{

		let makeNum = +cartIndi.textContent
		numIs += makeNum
		totalCart(numIs)
	})
}


function totalCart(numIs){
	const cartTotalPriceCount = document.querySelector('.cart-total-price-count')
	cartTotalPriceCount.innerHTML = numIs
}





//navbar section start from here

const browseAllCatBtn = document.querySelector('.browse-all-cat-btn')
const browseAllCat = document.querySelector('.browse-all-cat')
const categoryMoreBtn = document.querySelector('.category-more-btn');
const categoryMoreBtnTxt = document.querySelector('.category-more-btn-txt')
const showMoreBoxes = document.querySelectorAll('.show-more-box');

browseAllCatBtn.addEventListener('click', ()=>{
	browseAllCat.classList.toggle('active')
})

categoryMoreBtn.addEventListener('click', ()=>{
	categoryMoreBtn.classList.toggle('active')
    showMoreBoxes.forEach(showMoreBoxe => showMoreBoxe.classList.toggle('active'))
	if(categoryMoreBtnTxt.innerText === `Show Less...`){
		categoryMoreBtnTxt.innerText = `Show More...`
	}else{
		categoryMoreBtnTxt.innerText = `Show Less...`
	}
})


const laastBoxes = document.querySelectorAll('.last-box');

showlaastBoxes()

window.addEventListener('scroll', ()=> showlaastBoxes())



function showlaastBoxes(){
    const windowHeight = window.innerHeight

    laastBoxes.forEach((box, idx)=>{
        const boxTop = box.getBoundingClientRect().top

        if(windowHeight > boxTop){
            
            box.classList.add('animation')
            box.style.animationDelay = `${idx * 150}ms`
        }else{
            box.classList.remove('show')
            box.classList.remove('animation')
        }
    })
}


