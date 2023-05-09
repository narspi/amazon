import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import getOrders from "../../firebase";
import Order from "@/components/Order";

export default function Orders({ orders }) {
  const { data: session } = useSession();
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  //console.log(orders)
  return (
    <div className="bg-gray-100 relative">
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        {orders && (
          <div className="mt-5 space-y-4">
            {orders.map(
              ({ id, amount, amount_shipping, images, items, timestamp }) => (
                <Order
                  key={id}
                  id={id}
                  amount={amount}
                  amountShipping={amount_shipping}
                  images={images}
                  items={items}
                  timestamp={timestamp}
                  formatter={formatter}
                />
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(ctx);

  if (!session) {
    return {
      props: {},
    };
  }

  const firebaseOrders = await getOrders(session.user.email);

  const orders = await Promise.all(
    firebaseOrders.map(async (order) => ({
      ...order,
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
