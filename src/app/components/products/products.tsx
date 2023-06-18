"use client";

import Grid from "@mui/material/Grid";
import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "../../../interfaces/product";

import styles from "./products.module.css";

interface ProductsProp {
  products: Product[];
}

const Products = ({ products }: ProductsProp) => {
  const router = useRouter();

  return (
    <Grid container spacing={2} padding={"6rem"} sx={{ zIndex: 2 }}>
      {products.map((product: Product) => (
        <Grid item xs={6} key={product.id}>
          <div className={styles.card}>
            <div className={styles.beerContainer}>
              <h2>{product.brand}</h2>
              <div className={styles.imageContainer} id="laimagen">
                <Image
                  src={product.image || "/products/genericBeer.jpg"}
                  alt="Image"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <h3>
                {product.style} / {product.substyle}
              </h3>
            </div>
            <div className={styles.rightSideCard}>
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/${product.id}-${product.brand}`
                      .toLowerCase()
                      .replace(" ", "-")
                  );
                }}
              >
                See more!
              </h3>
              <div className={styles.moreInfo}>
                <h4>{product.abv}</h4>
                <h4>{product.origin}</h4>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
