class LastSixSection extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="last-six-section">
   <div class="last-six-contaier">
        <div class="last-box">
            <img src="./img/icon-1.svg" class="last-img">
            <div class="last-desc">
                <h3>Best prices & offers</h3>
                <p>Orders $50 or more</p>
            </div>
        </div>
        <div class="last-box">
            <img src="./img/icon-2.svg" class="last-img">
            <div class="last-desc">
                <h3>Free delivery</h3>
                <p>24/7 amazing services</p>
            </div>
        </div>
        <div class="last-box">
            <img src="./img/icon-3.svg" class="last-img">
            <div class="last-desc">
                <h3>Great daily deal</h3>
                <p>When you sign up</p>
            </div>
        </div>
        <div class="last-box">
            <img src="./img/icon-4.svg" class="last-img">
            <div class="last-desc">
                <h3>Wide assortment</h3>
                <p>Mega Discounts</p>
            </div>
        </div>
        <div class="last-box">
            <img src="./img/icon-5.svg" class="last-img">
            <div class="last-desc">
                <h3>Easy returns</h3>
                <p>Within 30 days</p>
            </div>
        </div>
        <div class="last-box">
            <img src="./img/icon-6.svg" class="last-img">
            <div class="last-desc">
                <h3>Safe delivery</h3>
                <p>Within 30 days</p>
            </div>
        </div>
   </div>
</section>     
`
    };
};
customElements.define('facility-boxes', LastSixSection)