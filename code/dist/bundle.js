!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);class a{constructor(e){this.parent=e,this.render()}render(){$(this.parent).html('<header class="header">\n\n        <article class="logo">\n            <img src="static/images/logo.png" id="logoimg"/>\n        </article>\n\n        <article>\n                <nav>\n                    <ul>\n                        <li>Home</li>\n                        <li>Products</li>\n                    </ul>\n                </nav>\n        </article>    \n        \n        <section class="topRight">\n            <article class="login">\n                <span>SignIn</span>\n                <span>Register</span>\n            </article>\n            <article class="cart">\n                <span class="cartImage">\n                    <img src="static/images/cart.svg" />\n                    <span>0 items</span>\n                </span>\n                \n            </article>\n        </section>\n</header>\n<main class="mainHome">\n    <section class="slider">\n        <img src="static/images/offers/offer5.jpg"/>\n    </section>\n    <section class="category-containner">\n        <section class="category">\n            <article class="menu-items">\n                <img src="static/images/category/fruits.png"/>\n            </article>\n            <article class="description">\n                <h2>Fruits & Vegetables</h2>\n                <p>A variety of fresh fruits and vegetables.</p>\n                <a href="">Explore friut-and-veg</a>\n            </article>\n        </section>\n        \n\n        <section class="category">\n                <article class="menu-items">\n                    <img src="static/images/category/bakery.png"/>\n                </article>\n                <article class="description">\n                    <h2>Bakery Cakes and Diary</h2>\n                    <p>The best cupcakes, cookies, cakes, pies, cheesecakes, frsh bread, biscotti, muffins, bagels, fresh coffee, milk and more.</p>\n                    <a href="">Explore friut-and-veg</a>\n                </article>\n        </section>\n\n        <section class="category">\n                <article class="menu-items">\n                    <img src="static/images/category/beverages.png"/>\n                </article>\n                <article class="description">\n                    <h2>Fruits & Vegetables</h2>\n                    <p>A variety of fresh fruits and vegetables.</p>\n                    <a href="">Explore friut-and-veg</a>\n                </article>\n        </section>\n\n        <section class="category">\n                <article class="menu-items">\n                    <img src="static/images/category/beauty.png"/>\n                </article>\n                <article class="description">\n                    <h2>Beauty and Hygine</h2>\n                    <p>A variety of fresh fruits and vegetables.</p>\n                    <a href="">Explore beauty-hygine</a>\n                </article>\n        </section>\n\n        <section class="category">\n                <article class="menu-items">\n                    <img src="static/images/category/baby.png"/>\n                </article>\n                <article class="description">\n                    <h2>Baby Care</h2>\n                    <p>Shop online for Baby Products, Diapers, Skin Care Products,etc</p>\n                    <a href="">Explore Baby</a>\n                </article>\n        </section>\n    </section>\n</main>\n<footer class="footer">\n    Copyright &#9400; 2011-2018 Sabka Bazzar Grocery Supplies Pvt Ltd\n</footer>')}}new class{constructor(){this.HomePage=new a(".mainContainer")}}}]);