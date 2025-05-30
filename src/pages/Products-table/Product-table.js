import "./Product-table.css";
import logo_product from "../../assets/logo_products.svg";
import ProductButton from "../../components/ProductButton/ProductButton";
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { useCsrf } from '../../../src/context/csrfContext';


const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [editId, setEditId] = useState(null); 
 const csrfToken = useCsrf();

  useEffect(() => {
    if(!isLoaded){
      getProduct();
    }
  }, [isLoaded]);

  const getProduct = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
//////////////////////////



  const addProduct = async (productData) => {
    try {
      await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify(productData)
      });

      setIsLoaded(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const deleteProduct = async (id, handleClose) => {
    try {
      const response = await fetch(`${API_URL}/posts/${id}`,{
        method: 'DELETE',
         headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken, // обов'язково
        },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      setIsLoaded(false);
      handleClose(); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const editProduct = async(id, productData) => {
    try {
      await fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify(productData)
      });

      setIsLoaded(false);
      setEditId(null);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  return (
    <div className="ProductTable">
      <img src={logo_product} className="Product-logo" />
      <div className="Product-button">
        <ProductButton addItem={addProduct}/>
      </div>
      <Table products={products} deleteItem={deleteProduct} editItem={editProduct}/>
    </div>
  );
};
export default ProductTable;
