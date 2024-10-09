const createFooter=()=>{
    let footer=document.querySelector('footer');

    footer.innerHTML=`
     <div class="footer-content">
            <img src="img/logopic.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title"><h2>Farmer</h2></li>
                    <li><a href="#" class="footer-link">Crops</a></li>
                    <li><a href="#" class="footer-link">Locations</a></li>
                    <li><a href="#" class="footer-link">Contract Management</a></li>
                    <li><a href="#" class="footer-link">Farmer Dashboard</a></li>
                    <li><a href="#" class="footer-link"> Marketplace</a></li>
                    <li><a href="#" class="footer-link">Payment</a></li>
                    <li><a href="#" class="footer-link">Resources and Support</a></li>
                    <li><a href="#" class="footer-link">Market Insights</a></a></li>
                    <li><a href="#" class="footer-link">Delivery</a></li>
                    <li><a href="#" class="footer-link">Logistics Management</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title"><h2>Buyers</h2></li>
                    <li><a href="#" class="footer-link">Dashboard</a></li>
                    <li><a href="#" class="footer-link">Browse Farmers and Crops</a></li>
                    <li><a href="#" class="footer-link">Contract Management</a></li>
                    <li><a href="#" class="footer-link">Order Management:</a></li>
                    <li><a href="#" class="footer-link">Community Forum</a></li>
                    <li><a href="#" class="footer-link">Connect with Farmer</a></li>
                    
                    <li><a href="#" class="footer-link">Market Insights</a></li>
                    <li><a href="#" class="footer-link">Analytics and Reports</a></li>
                    <li><a href="#" class="footer-link">Legal and Compliance</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About company</p>
        <p class="info"> AgriContract is an innovative online platform designed to streamline the process of contract farming, connecting farmers with potential buyers in a secure and transparent manner. The platform aims to mitigate the uncertainties that farmers face in market access,
         offering them guaranteed buyers for their produce while giving buyers access to high-quality crops directly from trusted sources.<p/>   
        <p class="info">support emails-help@AgriContract.com, customersupport@AgriContract.com</p>
        <p class="info"> Telephone-1800 00 00 091, 1800 00 00 002</p>       
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">Privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Farmer Contractor System - AgriContract</p>
    `;
}

createFooter();