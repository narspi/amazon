import { useState,useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";


function Product({ product,formatter }) {
  const { id, title, price, description, category, image, rating } = product;
  const rate = Math.round(rating.rate);
  const [hasPrime,setHasPrime] = useState(false);

  useEffect(()=>{
    setHasPrime(Math.random() < 0.5);
  },[]);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <div className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</div>
      <div className="relative w-full h-48 mb-2">
        <Image className="m-auto object-contain object-center" src={image} fill alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="flex text-yellow-400">
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 w-5" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">{formatter.format(price)}</div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image className="w-12" src="https://links.papareact.com/fdw" height={190} width={190} alt="prime" />
          <p className="text-xs">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
