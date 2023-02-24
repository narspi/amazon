import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Amazon</title>
      </Head>
      <div className="bg-gray-100 relative">
        <Header />
        <main className="max-w-screen-2xl mx-auto">
          <Banner />
          <ProductFeed products={props.products} />
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    return {
      props: {
        products: products,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        products: [],
      },
    };
  }
}
