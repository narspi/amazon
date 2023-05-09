import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Success() {
  return (
    <div className="bg-gray-100 relative">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
            <div className="flex items-center space-x-2 mb-5">
                <CheckCircleIcon className="text-green-500 h-10 w-10" />
                <h1 className="text-3xl">
                    Thank you, you order has been confirmed!
                </h1>
            </div>
            <p>
                {`Thank you for shopping us. We'll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below`}  
            </p>
            <Link href="/orders" className="button mt-8 text-center font-bold text-2xl">Go to my orders</Link>
        </div>
      </main>
    </div>
  );
}
