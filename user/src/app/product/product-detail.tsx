// /pages/product/product-detail.tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from './data.json';

export default function ProductDetail() {
  const router = useRouter();
  const { name } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (name) {
      const foundProduct = data.categories
        .flatMap(category => category.products)
        .find(product => product.name === name);
      setProduct(foundProduct);
    }
  }, [name]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{product.name}</h2>
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80"
        />
        <p className="mt-4 text-sm text-gray-500">{product.description}</p>
        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
}