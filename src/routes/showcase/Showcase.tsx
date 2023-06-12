import "./Showcase.css";
import { BsCart4 } from 'react-icons/Bs'
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
    return <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>;
  }


  return (
    <><Navbar />
      <section className="show-box">
         <div className="img-card">

        <img id="susu" src={product.images[currentIndex]} alt={product.title} />
         </div>

        <div className="card">

          <h1>{product.title}</h1>
          <p><b>details:</b> <br />
            <br /> {product.description}</p>
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

        <hr className="hr3" />
        <div className="buy-buttons">
          <button onClick={decrementCount} className="more-cart"> - </button>
          <h3>{count}</h3>
          <button className="less-cart" onClick={incrementCount}>+</button>
          <button className="buy-show">buy now</button>
          <button className="add-gift">add to cart<BsCart4 /></button>
        </div>
      </section>

      {/*Reformula o css para que as imagens fiquen no mesmo anbiente que o html e css
 de forma a deixar o site mais otimizado //ver tag main para o a pagina ver tbm dois escopos onde irao ficar a descriçao ao lado de imaagen uma do lado da outro* centralizando */}
    </>
  );
}

export default Showcase

