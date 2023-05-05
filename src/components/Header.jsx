import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { selectItemsLength } from "@/store/slices/basketSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const { data: session } = useSession();
  const lengthItems = useSelector(selectItemsLength);
  return (
    <header>
      <div className="bg-amazon_blue px-1 py-2 flex items-center justify-between">
        <Link href="/">
          <Image
            src="https://links.papareact.com/f90"
            width={120}
            height={44}
            alt="logo"
            className="cursor-pointer mx-2 sm:mx-6"
          />
        </Link>
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 flex-grow items-center rounded-md cursor-pointer">
          <input
            type="search"
            className="flex-grow h-12 rounded-l-md focus:outline-none p-4"
          />
          <MagnifyingGlassIcon className="w-12 h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-3 sm:space-x-6 mx-2 sm:mx-6">
          <div className="link" onClick={session ? signOut : signIn}>
            <p>{session? session.user.name: 'Hello guest'}</p>
            <p className="font-extrabold md:text-sm">{session? 'Sign out': 'Accounts & lists'}</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <Link href='/checkout' className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              {lengthItems}
            </span>
            <ShoppingCartIcon className="w-10 h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex link items-center">
          <Bars3Icon className="h-6 w-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
