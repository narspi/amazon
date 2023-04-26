import Product from "./Product";

function ProductFeed({ products }) {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.map((product) => (
        <Product key={product.id} product={product} formatter={formatter} />
      ))}
    </div>
  );
}

export default ProductFeed;
