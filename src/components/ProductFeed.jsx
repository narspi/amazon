import Product from "./Product";
import Image from "next/image";

function ProductFeed({ products }) {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0,4).map((product) => (
        <Product key={product.id} product={product} formatter={formatter} />
      ))}
      <Image className="md:col-span-2 lg:col-span-3 xl:col-span-4" src="https://links.papareact.com/dyz" width={1500} height={300} alt="product feed banner" />
      <div className="md:col-span-2">
      {products.slice(4,5).map((product) => (
        <Product key={product.id} product={product} formatter={formatter} />
      ))}
      </div>
      {products.slice(5,products.length).map((product) => (
        <Product key={product.id} product={product} formatter={formatter} />
      ))}
    </div>
  );
}

export default ProductFeed;
