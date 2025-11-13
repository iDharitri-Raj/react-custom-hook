import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const WORDS = [
  "lorem",
  "ipsum",
  "dolor",
  "amet",
  "hello",
  "world",
  "foo",
  "bar",
  "baz",
  "hook",
  "random",
  "color",
  "react",
  "tile",
  "grid",
  "api",
  "tute",
  "dude",
  "code",
  "web",
];

const getRandomWords = (n) =>
  Array.from({ length: n })
    .map(() => WORDS[Math.floor(Math.random() * WORDS.length)])
    .join(" ");

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!data) return null;

  // Limit tiles to a fixed count for scrolling
  const TILE_COUNT = 40;
  const tiles = Array.from({ length: TILE_COUNT }).map(
    (_, i) => data[i % data.length]
  );

  return (
    <div className="product-grid">
      {tiles.map((item, idx) => (
        <div className="product-card" key={item.id || idx}>
          <img
            src={item.images && item.images[0] ? item.images[0] : ""}
            alt={item.title}
            className="product-image"
          />
          <div className="product-title">{getRandomWords(5)}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
