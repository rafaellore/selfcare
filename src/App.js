import './App.css';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Product } from './components/Product';

import product1 from './img/product-1.jpg';
import product2 from './img/product-2.jpg';
import product3 from './img/product-3.jpg';
import product4 from './img/product-4.jpg';
import product5 from './img/product-5.jpg';
import product6 from './img/product-6.jpg';
import product7 from './img/product-7.jpg';
import product8 from './img/product-8.jpg';
import product9 from './img/product-9.jpg';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Banner/>
      
      <div className="promotion">
        <p className="promotion-text">PROMOÇÃO</p>
        <p className="promotion-counter">9 produtos</p>
      </div>

      <section className="container-products">
        <Product img={product1}/>
        <Product img={product2}/>
        <Product img={product3}/>
        <Product img={product4}/>
        <Product img={product5}/>
        <Product img={product6}/>
        <Product img={product7}/>
        <Product img={product8}/>
        <Product img={product9}/>
      </section>
    <Footer/>
    </div>
  );
}

export default App;
