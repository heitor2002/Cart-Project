const Product = (props) => {
  const { product, addProduct } = props;

  return (
    <>
    <div className="product">
      <div className="image_container">
        <img src={product.image} alt={product.name} />
      </div>{/*image_container */}
      <div className="info_container">
          <h2>{product.name}</h2>
          <h3>R$ {product.price.toFixed(2)}</h3>
      </div>{/*info_container */}

      <button onClick={() => addProduct(product)}>Adicionar ao carrinho</button>

    </div>{/*product */}
    </>
  );
};

export default Product;
