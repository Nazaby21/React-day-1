import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  const lstProducts = products.map((product) => (
    <div className="col-md-3 mb-4" key={product.id}>
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h6 className="card-title">{product.title}</h6>
          <p className="text-success fw-bold">${product.price}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-4">
      <div className="row">{lstProducts}</div>
    </div>
  );
}

export default Product;
