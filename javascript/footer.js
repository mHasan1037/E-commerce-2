class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <section class="footer-details">
            <div class="company-add">
                <img src="/img/logo.svg">
                <p style="margin-bottom: 40px;">Awesome grocery store website template</p>
                <div class="com-add-detail">
                    <div class="footer-icon-container"><i class="fa-solid fa-location-pin"></i></div>
                    <p><b>Address: </b> 5171 W Sometext Ave, undefined Kent, NY 50152 United States</p>
                </div>
                <div class="com-add-detail">
                    <div class="footer-icon-container"><i class="fa-solid fa-headphones"></i></div>
                    <p><b>Call Us: </b> (+91) - 540-025-124553</p>
                </div>
                <div class="com-add-detail">
                    <div class="footer-icon-container"><i class="fa-sharp fa-solid fa-paper-plane"></i></div>
                    <p><b>Email: </b> sale@Nest.com</p>
                </div>
                <div class="com-add-detail">
                    <div class="footer-icon-container"><i class="fa-solid fa-clock"></i></div>
                    <p><b>Hours: </b> 10:00 - 18:00, Mon - Sat</p>
                </div>
            </div>
            <div class="com-info">
                <h3>Company</h3>
                <a href="#/">About Us</a>
                <a href="#/">Delivery Information</a>
                <a href="#/">Privacy Policy</a>
                <a href="#/">Terms & Conditions</a>
                <a href="#/">Contact Us</a>
                <a href="#/">Support Center</a>
                <a href="#/">Careers</a>
            </div>
    
            <div class="com-info">
                <h3>Account</h3>
                <a href="#/">Sign In</a>
                <a href="#/">View Cart</a>
                <a href="#/">My Wishlist</a>
                <a href="#/">Track My Order</a>
                <a href="#/">Help Ticket</a>
                <a href="#/">Shipping Details</a>
                <a href="#/">Compare products</a>
            </div>
    
            <div class="com-info">
                <h3>Corporate</h3>
                <a href="#/">Become a Vendor</a>
                <a href="#/">Affiliate Program</a>
                <a href="#/">Farm Business</a>
                <a href="#/">Farm Careers</a>
                <a href="#/">Our Suppliers</a>
                <a href="#/">Accessibility</a>
                <a href="#/">Promotions</a>
            </div>
    
            <div class="com-info">
                <h3>Popular</h3>
                <a href="#/">Milk & Flavoured Milk</a>
                <a href="#/">Butter and Margarine</a>
                <a href="#/">Eggs Substitutes</a>
                <a href="#/">Marmalades</a>
                <a href="#/">Sour Cream and Dips</a>
                <a href="#/">Tea & Kombucha</a>
                <a href="#/">Cheese</a>
            </div>
        </section>
        <section class="install-app-sec">
            <div class="install-app-div">
                <h1>Install App</h1>
                <p>From App Store or Google Play</p>
                <a href=""><img src="/img/app-store.jpg"></a>
                <a href=""><img src="/img/google-play.jpg"></a>
            </div>
            <div class="payment-method">
                <p>Secured Payment Gateways</p>
                <a href=""><img src="/img/payment-method.png" ></a>
            </div>
        </section>
    
        <!--
            Copy right and social media section.... 
        -->
        <section class="copy-right-social">
             <div class="copy-right">
                <p>&#169;${new Date().getFullYear()}, <b style="color: var(--text-green-one)">Next</b> - HTML Ecommerce Template</p>
                <p>All rights reserved</p>
             </div>
             <div class="footer-number">
                <div class="nav-support-box">
                    <i class="fa-solid fa-phone"></i>
                    <div class="nav-support-info">
                        <h1>1900 - 585</h1>
                        <p>Working 8:00 - 22:00</p>
                    </div>
                 </div>
                 <div class="nav-support-box">
                    <i class="fa-solid fa-phone"></i>
                    <div class="nav-support-info">
                        <h1>1900 - 585</h1>
                        <p>24/7 Support Center</p>
                    </div>
                 </div>
             </div>
             <div class="footer-social">
                <div class="fotter-social-options">
                    <h3>Follow Us</h3>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <p>Up to 15% discount on your first subscribe</p>
             </div>
        </section>
    </footer>

        `
    }
}

customElements.define('my-footer', MyFooter)
