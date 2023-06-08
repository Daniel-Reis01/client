import "./Showcase.css";
import { AiOutlineGift } from 'react-icons/Ai'
import { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../components/BestProduct/BestProduct";
import productApi from "../../axios-Api/Api";
import { Navbar } from "../../components/Navbar";


function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await productApi.get(`/products/${id}`);
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, [id]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (product?.images.length || 0));
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (product?.images.length || 0) - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const incrementCount = () => {
    setCount(prevCount => {
      const newCount = prevCount >= 0 ? prevCount + 1 : prevCount;
      console.log('Incremented count:', newCount);
      return newCount;
    });
  };

  const decrementCount = () => {
    setCount(prevCount => {
      const newCount = prevCount > 0 ? prevCount - 1 : prevCount;
      console.log('Decremented count:', newCount);
      return newCount;
    });
  };
  if (!product) {
    return <p>Loading...</p>;
  }


  return (
    <><Navbar />
      <section className="show-box">

        <img id="susu" src={product.images[currentIndex]} alt={product.title} />

        <div className="show-description">
          <h1>{product.title}</h1>
          <p><b>details:</b> <br /> {product.description}</p>
          <p className="price"><b>${product.price}</b></p>
        </div>

      </section>
      <section className="sec-buy">

        <div className="show-img">
          <button className="btn" onClick={handlePrevClick}> &lt; </button>
          {product.images.map((valorImage, index) => (
            <img
              key={index}
              className="secondary-img"
              src={valorImage}
              alt={`Image ${index}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
          <button className="btn" onClick={handleNextClick}> &gt; </button>
        </div>

        <div className="buy-buttons">
          <p onClick={decrementCount}>-</p>
          <h3>{count}</h3>
          <p onClick={incrementCount}>+</p>
          <button className="buy-show">buy now</button>
          <button className="add-gift">add to cart<AiOutlineGift /></button>
        </div>
      </section>

      {/*Reformula o css para que as imagens fiquen no mesmo anbiente que o html e css
 de forma a deixar o site mais otimizado //ver tag main para o a pagina ver tbm dois escopos onde irao ficar a descriçao ao lado de imaagen uma do lado da outro* centralizando */}
    </>
  );
}

export default Showcase

