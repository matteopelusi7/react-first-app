// import Componente1 from "./Componente1";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      {/* <Componente1 /> */}
      <div className="container-product">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
