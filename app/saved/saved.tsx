"use client";

import ProductCard from "@/components/ProductCard";
import CustomFrag from "@/components/ui/CustomFrag";
import { SanityProduct } from "@/data/inventory";
import useIndexedDB from "@/lib/use-indexeddb/config";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { useEffect, useState } from "react";
import { set } from "sanity";

export default function Saved({}: propTypes) {
  const { getAll } = useIndexedDB();
  const [items, setItems] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);

  const getAllLikes = async () => {
    const items = await getAll();
    const skus = items.map((itm: any) => itm.sku);
    const params = { skus };
    const products = await client.fetch<SanityProduct[]>(
      groq`*[_type == 'product' && sku in $skus] {
        _id,
        _createdAt,
        sku,
        image,
        name,
        price,
        images,
        currency,
        description,
        "slug": slug.current,
      }
    `,
      params
    );

    if (items.length > 0) {
      setItems(products);
      setLikes(items);
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    getAllLikes();
  }, [likes]);
  return (
    <CustomFrag>
      <div className="flex flex-wrap gap-3 justify-center md:justify-normal">
        {items.length > 0 ? (
          items.map(({ name, price, image, sku, _id }, i) => (
            <ProductCard {...{ name, price, image, sku, id: _id }} key={i} />
          ))
        ) : (
          <p className="text-center">
            No items saved{" "}
            <Link
              href="/clothing"
              className="text-background-100 font-semibold hover:text-background-300"
            >
              checkout items
            </Link>
          </p>
        )}
      </div>
    </CustomFrag>
  );
}

type propTypes = {};
