import "./Product-preview.css";
import logo_product from "../../assets/logo_products.svg";
import ProductCard from "../../components/ProductCart/ProductCart";
import { useState, useEffect } from "react";
import { API_URL } from "../../constants";

const ProductPreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="ProductPage">
      <div className="Container">
        <div className="Cards-wrapper">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
