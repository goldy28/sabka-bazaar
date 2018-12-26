export default class HomepageComponent {
    constructor(parent) {
        this.parent = parent;
        this.render();
    }

    render() {
        let markup = `<header class="header">

        <article class="logo">
            <img src="static/images/logo.png" id="logoimg"/>
        </article>

        <article>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                    </ul>
                </nav>
        </article>    
        
        <section class="topRight">
            <article class="login">
                <span>SignIn</span>
                <span>Register</span>
            </article>
            <article class="cart">
                <span class="cartImage">
                    <img src="static/images/cart.svg" />
                    <span>0 items</span>
                </span>
                
            </article>
        </section>
</header>
<main class="mainHome">
    <section class="slider">
        <img src="static/images/offers/offer5.jpg"/>
    </section>
    <section class="category-containner">
        <section class="category">
            <article class="menu-items">
                <img src="static/images/category/fruits.png"/>
            </article>
            <article class="description">
                <h2>Fruits & Vegetables</h2>
                <p>A variety of fresh fruits and vegetables.</p>
                <a href="">Explore friut-and-veg</a>
            </article>
        </section>
        

        <section class="category">
                <article class="menu-items">
                    <img src="static/images/category/bakery.png"/>
                </article>
                <article class="description">
                    <h2>Bakery Cakes and Diary</h2>
                    <p>The best cupcakes, cookies, cakes, pies, cheesecakes, frsh bread, biscotti, muffins, bagels, fresh coffee, milk and more.</p>
                    <a href="">Explore friut-and-veg</a>
                </article>
        </section>

        <section class="category">
                <article class="menu-items">
                    <img src="static/images/category/beverages.png"/>
                </article>
                <article class="description">
                    <h2>Fruits & Vegetables</h2>
                    <p>A variety of fresh fruits and vegetables.</p>
                    <a href="">Explore friut-and-veg</a>
                </article>
        </section>

        <section class="category">
                <article class="menu-items">
                    <img src="static/images/category/beauty.png"/>
                </article>
                <article class="description">
                    <h2>Beauty and Hygine</h2>
                    <p>A variety of fresh fruits and vegetables.</p>
                    <a href="">Explore beauty-hygine</a>
                </article>
        </section>

        <section class="category">
                <article class="menu-items">
                    <img src="static/images/category/baby.png"/>
                </article>
                <article class="description">
                    <h2>Baby Care</h2>
                    <p>Shop online for Baby Products, Diapers, Skin Care Products,etc</p>
                    <a href="">Explore Baby</a>
                </article>
        </section>
    </section>
</main>
<footer class="footer">
    Copyright &#9400; 2011-2018 Sabka Bazzar Grocery Supplies Pvt Ltd
</footer>`;
        $(this.parent).html(markup);
    }
}