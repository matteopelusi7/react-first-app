// import Componente1 from "./Componente1";
import Product from "./Product";
import products from "./products";

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      {/* <Componente1 /> */}
      <div className="container-product">
        {products.map((prodotto) => {  
          return <Product key={prodotto.id} {...prodotto} />     
        })}
      </div>
    </div>
  );
}

export default App;
