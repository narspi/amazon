import moment from "moment";
import Image from "next/image";

export function Order({
  id,
  amount,
  amountShipping,
  images,
  items,
  timestamp,
  formatter,
}) {
  const itemsLenght = items.reduce((count, item) => count + item.quantity, 0);
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>
            {formatter.format(amount)}-Next Day Delivery{" "}
            {formatter.format(amountShipping)}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl flex-1 text-right self-end text-blue-500">{itemsLenght} items</p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">ORDER # {id}</p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
            {images.map((image,index)=><div key={index} className="w-20 aspect-square relative">
                <Image src={image} fill alt={items[index].description} className="object-contain"/>
                <span className="absolute bottom-0 right-0 w-5 h-5 text-sm bg-yellow-400 flex items-center justify-center rounded-full">{items[index].quantity}</span>
            </div>)}
        </div>
      </div>
    </div>
  );
}

export default Order;
