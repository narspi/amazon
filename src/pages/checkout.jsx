import React from "react";
import Header from "../components/Header";
import Image from "next/image";

const Checkout = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="http://links.papareact.com/ikj"
            alt="ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping basket</h1>
            <div>dsfs</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
