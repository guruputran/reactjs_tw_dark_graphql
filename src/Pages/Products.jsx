/** @format */

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { request } from "graphql-request";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const { cocktails } = await request(
        "https://api-us-east-1.graphcms.com/v2/cl4ji8xe34tjp01yrexjifxnw/master",
        `
			{ 
				cocktails {
               id
               name
               slug
               info
               ingredients
               instructions
               image {
                 url
               }
               category
             }
			}
		 `
      );

      setProducts(cocktails);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>CockTails</h1>
      </div>
      <div className="container grid grid-cols-3 p-5">
        {products.map((product) => (
          <div key={product.id} className="p-5">
            <img src={product.image.url} alt="" className="rounded-t-lg" />
            <div className="cocktail-info">
              <div className="font-bold text-lg text-gray-700 leading-snug dark:text-yellow-300">
                <h2 className="cocktail-name">{product.name}</h2>
                <span className="info">{product.info}</span>
              </div>
              <Link to={`/products/${product.slug}`}>
                <div className="text-blue-600 dark:text-yellow-300">
                  View Details
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
