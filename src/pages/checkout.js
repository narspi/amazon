import Header from "@/components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "@/store/slices/basketSlice";
import CheckoutProduct from "@/components/CheckoutProduct";
import {
  selectItemsLength,
  selectTotalPrice,
} from "@/store/slices/basketSlice";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

export default function Checkout() {
  const items = useSelector(selectItems);
  const lengthItems = useSelector(selectItemsLength);
  const totalPrice = useSelector(selectTotalPrice);
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  const { data: session } = useSession();

  const stripePromise = loadStripe(process.env.stripe_public_key);

  const createCheckoutSesion = async () => {
    const stripe = await stripePromise;
    const res = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: res.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="decor"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length !== 0
                ? "Your Shopping Basket"
                : "Your Amazon Basket is Empty"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
                count={item.count}
                formatter={formatter}
              />
            ))}
          </div>
        </div>
        {lengthItems > 0 && (
          <div className="flex flex-col p-10 lg:w-72">
            <h2 className="whitespace-nowrap">
              Subtotal ({lengthItems} items):
              <span className="font-bold">{` ${formatter.format(
                totalPrice
              )}`}</span>
            </h2>
            <button
              className={`button mt-2 ${
                !session
                  ? "from-gray-300 to-gray-500 border-gray-200 active:from-gray-300 active:to-gray-500 text-gray-300 cursor-not-allowed"
                  : ""
              }`}
              disabled={!session}
              onClick={createCheckoutSesion}
            >
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
