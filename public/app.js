const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav">
            <img src="img/prism.png" class="brand-logo"  alt="">
            <div class="nav-items">
                <button class="btn">login</button>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-items"><a href="#">Payments</a></li>
            <li class="link-items"><a href="#">Commerce</a></li>
            <li class="link-items"><a href="#">Issuing</a></li>
            <li class="link-items"><a href="#">Capital</a></li>
            <li class="link-items"><a href="#">Grow</a></li>
            <li class="link-items"><a href="#">FaaS</a></li>
        </ul>
    `
}

createNav();