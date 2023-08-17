"use client";
import Image from "next/image";
import Link from "next/link";
//   import { urlForImage } from '@/sanity/lib/image'
// import { Clock, X } from 'lucide-react'

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import { CartItemsEmpty } from "./CartEmpty";
import { urlFor } from "@/sanity/lib/client";

export default function CartItems({}: propTypes) {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product);

  if (cartItems.length === 0) return <CartItemsEmpty />;

  function removeCartItem(product: Product) {
    removeItem(product.id);
  }

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
    >
      {cartItems.map((product: any, productIdx) => (
        <li
          key={"key"}
          className="flex py-6 sm:py-10 shadow-md rounded-md my-3"
        >
          <div className="shrink-0">
            <Image
              src={
                urlFor(product.image).options.source
                  ? urlFor(product.image).url()
                  : "/images/broken.png"
              }
              alt={"alt"}
              width={96}
              height={96}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center dark:border-gray-800 sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link href={`/products/slug`} className="font-medium">
                      Name
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">Price</p>
                <p className="mt-1 text-sm font-medium">
                  Size: {/* @ts-ignore */}
                  <strong>Size</strong>
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, Name
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  min={1}
                  value={product.quantity}
                  onChange={(event) =>
                    setItemQuantity(product.id, Number(event.target.value))
                  }
                />
                <Button
                  onClick={() => removeCartItem(product)}
                  type="button"
                  className="-mr-2 inline-flex p-2"
                >
                  <span>Remove</span>
                  {/* <X className='h-5 w-5' aria-hidden='true' /> */}
                </Button>
              </div>
            </div>

            <p className="my-4 flex space-x-2 text-sm">
              {/* <Clock className='h-5 w-5 shrink-0' aria-hidden='true' /> */}
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

type propTypes = {};
