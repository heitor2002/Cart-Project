const Cart = (props) => {
  const { cartItems, closeTab, addProduct, removeProduct } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  
  return (
    <>
      <div className="cart_tab">
        <div className="close_buttom" onClick={closeTab}>
          x
        </div>
        {cartItems.length === 0 && <div>Sem produtos no carrinho</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="item_cart">
            <h2>{item.name}</h2>
            <div className="buttons">
              <button onClick={() => addProduct(item)}>+</button>
              <div>{item.qty}</div>
              <button onClick={() => removeProduct(item)}>-</button>
            </div>
            <div>
              x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        <div className="total_price">Total R$ {totalPrice.toFixed(2)}</div>
      </div>
      {/*cart_tab */}
    </>
  );
};

export default Cart;
