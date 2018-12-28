import HomepageComponent  from './components/HomepageComponent';
import ProductpageComponent  from './components/ProductComponent';


class MainComponent{
    constructor(){        
        this.HomePage = new HomepageComponent('.mainHome');
        this.ProductPage = new ProductpageComponent('.mainHome');
        
    }
    
}
new MainComponent();


