import "./Showcase.css";
import{ AiOutlineGift } from 'react-icons/Ai'
import { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../components/BestProduct/BestProduct";
import productApi from "../../axios-Api/Api";
import { Navbar } from "../../components/Navbar";


function Showcase() {
  const [count, setCount] = useState(0);
  
    function incrementCount() {
      if(count >= 0)
      setCount(count + 1);
    }  
    function decrementCount(){
        if(count > 0)
      setCount(count - 1 );
    }; 

  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await productApi.get(`/products/${id}`);
      const data = response.data;
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  };

  return (
    <><Navbar/>
    <section className="show-box">
      <img src={product.thumbnail} alt={product.title} />
      <div className="show-description">
        <h1>{product.title}</h1>
        <p><b>details:</b> <br /> {product.description}</p>
        <p className="price"><b>${product.price}</b></p>

      </div>
    </section>
    <div className="show-img">
    {product.images.map((valorImage, index) => (
  <img key={index} className="secondary-img" src={valorImage} />
))}
      </div>
      <div className="buy-buttons">
        <p onClick={decrementCount}>-</p>
        <h3>{count}</h3>
        <p onClick={incrementCount}>+</p>
        <button className="buy-show">buy now</button>
        <button className="add-gift">add to cart<AiOutlineGift/></button>
      </div>
      </>
  );
}

export default Showcase