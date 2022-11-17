// import Componente1 from "./Componente1";
import Product from "./Product";

const primaCard = {
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13085.jpg',
  prezzo: '2.16',
  name: 'bukinn',
  prezzoFinale: 14.00
}

const secondaCard = {
  img: 'https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13085.jpg',
  prezzo: '2.74',
  name: 'fran54',
  prezzoFinale: 16.00
}

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      {/* <Componente1 /> */}
      <div className="container-product">
        <Product 
          img={primaCard.img} 
          prezzo={primaCard.prezzo} 
          name={primaCard.name} 
          prezzoFinale={primaCard.prezzoFinale}/>
        <Product 
          img={secondaCard.img} 
          prezzo={secondaCard.prezzo} 
          name={secondaCard.name} 
          prezzoFinale={secondaCard.prezzoFinale}/>
      </div>
    </div>
  );
}

export default App;
