import { useLocation, useNavigate, useEffect } from "react-router-dom";
import "./Product-info.css";
import lenovoImg from "../../assets/lenovo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const ProductInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state ? location.state.product : null;

  const handleClick = () => {
    navigate(`/product-preview`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div className="Product-info">
      <div className="Product-info-header">
        <IoIosArrowRoundBack size="60px" onClick={handleClick} />
        <div className="Product-info-name"> {product.name}</div>
      </div>
      <div className="Wrapper-info">
        <img src={lenovoImg} className="lenovo-info" />
        <div className="Wrapper-price">
          <div className="Wrapper-have">
            <IoCheckmarkDoneCircle color="#3CD78C" size="34px" />
            <div className="info-text"> Є в наявності</div>
          </div>
          <div className="Product-info-price"> {product.price}₴</div>
          <div className="Product-info-quantity">
            Кількість: {product.quantity}
          </div>
        </div>
      </div>
      <div className="Product-info-descr-name">Опис {product.name}</div>

      <div className="Wrapper-descr">
        <div className="info">
          <span>{product.header1}</span>
          <br />
            {product.descr1}
        </div>

        <div className="info">
          <span>{product.header2}</span>
          <br />
          {product.descr2}
        </div>

        <div className="info">
          <span>{product.header3}</span>
          <br />
          {product.descr3}
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
