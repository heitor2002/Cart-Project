import "../Styles/main.scss";

const Header = (props) => {

  const {openTab} = props;

  return (
    <>
      <header>
        <div className="container">
          <h2>Cartproject</h2>
          <div className="cart-icon" onClick={openTab}>cart</div>
        </div>
        {/*container */}
      </header>
    </>
  );
};

export default Header;
