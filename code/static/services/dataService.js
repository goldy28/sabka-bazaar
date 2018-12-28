export default class SabkiService{
    constructor(){
        this.bannerURL='http://localhost:5000/banners';
        this.categoryURL = 'http://localhost:5000/categories';
        this.productUrl = 'http://localhost:5000/products';
        this.addToCart = 'http://localhost:5000/addToCart';
    }
    async getBanners(){
        try{
            const res = await fetch(this.bannerURL);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }

    async getCategory(){
        try{
            const res = await fetch(this.categoryURL);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
    async getProducts(){
        try{
            const res = await fetch(this.productUrl);
            return  res.json();
        }catch(err){
            console.log(err);
        }
    }
    // async addToCart(){
    //     try{
    //         const res = await fetch(this.addToCart);
    //         return  res.json();
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // async getDataShoppingCartById(id){
    //     try{
    //         const res = await fetch(`${this.shoppingUrl}?id=${id}`);
    //         return  res.json();
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
}
