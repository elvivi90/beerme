import * as React from "react";
import Image from "next/image";

import styles from "./product.module.css";

import { ProductDetail } from "./product";

import { Product, SKU } from "../../interfaces/product";

const fetchProducts = () =>
  fetch(`http://localhost:3000/api/products`).then((res) => res.json());

export default async function Page({
  params,
}: {
  params: { detailPage: string };
}) {
  const id = params.detailPage.substring(0, params.detailPage.indexOf("-"));
  const products = await fetchProducts();
  const product: Product = products.filter(
    (product: Product) => product.id == +id
  )[0];
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <div className={styles.beerContainer}>
            <h2>{product.brand}</h2>
            <div className={styles.imageContainer} id="image">
              <Image
                src={product.image}
                alt="Image"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3>
              {product.style} / {product.substyle}
            </h3>
          </div>
          <div className={styles.sizesContainer}>
            <h2>Sizes</h2>
            {product.skus.map((sku: SKU) => (
              <div key={sku.code}>
                <ProductDetail code={sku.code} name={sku.name} />
              </div>
            ))}
          </div>
          <div className={styles.informationContainer}>
            <p>{product.information}</p>
            <div className={styles.moreInfo}>
              <h4>{product.abv}</h4>
              <h4> origin : {product.origin}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
