import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map((item) => (
          <Product
            key={item.id}
            item={item}
          />
        ))}
      <img
        className="md:col-span-full"
        src="http://links.papareact.com/dyz"
        alt="dyz"
      />
      <div className="md:col-span-2">
      {products
          .slice(4, 5)
          .map((item) => (
            <Product
              key={item.id}
              item={item}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map((item) => (
          <Product
            key={item.id}
            item={item}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
