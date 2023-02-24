import { useState,useEffect } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";


function Product({ product }) {
  const { id, title, price, description, category, image, rating } = product;
  const rate = Math.round(rating.rate);
  const [hasPrime,setHasPrime] = useState(false);

  useEffect(()=>{
    setHasPrime(Math.random() < 0.5);
  },[]);

  return (
    <div>
      <div>{category}</div>
      <Image src={image} height={200} width={200} alt={title} />
      <h3>{title}</h3>
      <div className="flex text-yellow-400">
        {Array(rate)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
      </div>
      <p>{description}</p>
      <div></div>
      {hasPrime && (
        <div>
          <Image src="https://links.papareact.com/fdw" height={190} width={190} alt="prime" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
