export default class ProductpageComponent{
    constructor(parent) {
        this.parent = parent;
        this.render();
        // this.allService = new SabkiService();
    }
    render(){
        let ProductMarkup = `<h1>dsdss</h1>`;
        $(this.parent).html(ProductMarkup);

    }
}