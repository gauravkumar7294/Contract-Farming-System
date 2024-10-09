const createNav=()=>{
    let nav=document.querySelector('.navbar');

    nav.innerHTML=`
    <div class="nav">
            <img src="img/logopic.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/profile.png" alt=""></a>
                <a href="#"><img src="img/wallet.png" alt=""></a>
                <a href="#"><img src="img/conversation.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Farmers</a></li>
            <li class="link-item"><a href="#" class="link">Buyers</a></li>
            <li class="link-item"><a href="#" class="link">Marketplace</a></li>
            <li class="link-item"><a href="#" class="link">Payments</a></li>
            <li class="link-item"><a href="#" class="link">Contracts</a></li>
            <li class="link-item"><a href="#" class="link">How it Works</a></li>
        </ul>
    `;
}

createNav();