const axios = require('axios');

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/react";

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
    const session = await getSession(ctx);
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    return {
      props: {
        products: products,
        session
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



