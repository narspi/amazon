import Image from "next/image";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  minuseFromBasket,
  removeFromBasket,
} from "@/store/slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
  count,
  formatter,
}) => {
  const dispatch = useDispatch();
  const removeProductFromBasket = () => {
    dispatch(removeFromBasket(id));
  };

  const plusProductToBasket = () => {
    dispatch(
      addToBasket({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
        hasPrime,
        count,
      })
    );
  };

  const minuseProductFromBasket = () => {
    dispatch(minuseFromBasket(id));
  };

  return (
    <div className="grid grid-cols-5">
      <div className="relative aspect-square">
        <Image
          className="m-auto object-contain object-center"
          src={image}
          fill
          alt={title}
        />
      </div>
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex text-yellow-400">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div>
          <span>{formatter.format(price * count)}</span>
          {count > 1 && (
            <span className="text-gray-500">/{formatter.format(price)}</span>
          )}
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              className="w-12"
              src="https://links.papareact.com/fdw"
              height={190}
              width={190}
              alt="prime"
            />
            <p className="text-xs">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 justify-self-end">
        <div className="flex items-center space-x-2 text-lg mb-2 justify-between">
          <button
            className={`button leading-none font-bold flex-grow ${
              count <= 1
                ? "from-gray-300 to-gray-500 border-gray-200 active:from-gray-300 active:to-gray-500 text-gray-300 cursor-not-allowed"
                : ""
            }`}
            onClick={minuseProductFromBasket}
            disabled={count <= 1}
          >
            <MinusIcon className="h-4 w-4 m-auto" />
          </button>
          <div className="w-6 text-center">{count}</div>
          <button
            className="button leading-none font-bold flex-grow"
            onClick={plusProductToBasket}
          >
            <PlusIcon className="h-4 w-4 m-auto" />
          </button>
        </div>
        <button onClick={removeProductFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
