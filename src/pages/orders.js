import Header from "../components/Header";
import { getSession, useSession } from "next-auth/react";
import getOrders from "../../firebase";

export default function Orders({orders}) {
  console.log(orders)
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100 relative">
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your orders
        </h1>
        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
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
      })).data,
    }))
  );

  return {
    props: {
      orders
    },
  };
}
