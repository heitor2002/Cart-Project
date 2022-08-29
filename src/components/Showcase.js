import Product from "./Product";

const Showcase = (props) => {
  const { products, addProduct } = props;

  return (
    <>
      <section className="showcase">
        <center>
          <h2>Produtos</h2>
        </center>
        <main>
          {products.map((product) => (
            <Product key={product.id} product={product} addProduct={addProduct}></Product>
          ))}
        </main>
      </section>
    </>
  );
};

export default Showcase;
