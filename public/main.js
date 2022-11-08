const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <nav class="navbar">
        <img src="i" class="brand-logo"  alt="">
           <button class="btn" id="btn1">login</button>
                <ul class="links-container">
                    <li class="link-items"><a href="#">Payments</a></li>
                    <li class="link-items"><a href="#">Commerce</a></li>
                    <li class="link-items"><a href="#">Issuing</a></li>
                    <li class="link-items"><a href="#">Capital</a></li>
                    <li class="link-items"><a href="#">Grow</a></li>
                    <li class="link-items"><a href="#">FaaS</a></li>
                </ul>
       
    </nav>

    `
}

createNav();