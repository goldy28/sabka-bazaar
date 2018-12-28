import SabkiService from '../services/dataService';
export default class HomepageComponent {
    constructor(parent) {
        this.parent = parent;
        this.render();
        this.allService = new SabkiService();
    }

    render() {
        // this.allService.bannerURL(result) => {

        // }
        let markup = `<section class="slider">
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
                    <a id="fruit" href="">Explore friut-and-veg</a>
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
    </section>`;
        $(this.parent).html(markup);
    }
}