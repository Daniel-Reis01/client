
import "./BestProduct.css";
import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../axios-Api/Api";
import React from "react";
import { FcProcess } from 'react-icons/Fc'






interface Product {
    map: any;
    lenght: number;
    image: string | undefined;
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface RootObject {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

interface MyContextType {
    posts: any[];
    setPosts: (posts: Product[]) => void;
}

const MyContext = createContext<MyContextType>({
    posts: [],
    setPosts: () => { },
});


function BestProduct() {

    const [posts, setPosts] = useState<Product[]>([]);


    const getPosts = async () => {
        try {
            const response = await productApi.get("/products");
            const data: RootObject = response.data;
            const products = data.products;
            setPosts(products.splice(0, 9));
            console.log(products)
        } catch (error) {
            console.log("error");
        }
    };
    useEffect(() => {
        getPosts();
        console.log(typeof posts);
    }, []);

    const myContextValue = {
        posts,
        setPosts,
    };


    return (
        <>
            <div className="titulo-produtos">
                <h2>Best Seller Products</h2>
                <p>speaker there many variatons passages</p>
            </div>
            <section className="produtos-exposiçao">
                <div className="exposicao">
                    {posts.length === 0 ? (
                        <FcProcess  size={100} className="loading"/>
                    ) : (
                        posts.map((post) => (
                            <div className="post" key={post.id}>

                                <Link className="lin" to={`/products/${post.id}`}>
                                    <div className="post-img">
                                        <img src={post.thumbnail} alt={post.title} />
                                    </div>
                                    <h5>{post.title}</h5>
                                    <p>${post.price}</p>

                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </section>
            <MyContext.Provider value={myContextValue}>
                {/* Renderizar componentes filhos */}
            </MyContext.Provider>
        </>
    );

};
export { MyContext, BestProduct, type Product };