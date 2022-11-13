class BigSingleBanner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <section class="big-single-banner" style="background-image: url('./img/banner-10.png');">
            <img src="./img/banner-9.png" class="big-man-img">
    
            <div class="big-section-container">
            <h1>Stay home & get your daily needs from our shop</h1>
            <p>Start You'r Daily Shopping with <a href=''>Nest Mart</a></p>
            <div class="big-sub-box">
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
                <input type="email" placeholder="Your email address" >
                <button>Subscribe</button>
            </div>
            </div>
        </section>

        `
    }
}

customElements.define('big-single-banner', BigSingleBanner)