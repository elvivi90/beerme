import styles from "./page.module.css";
import Products from "./components/products/products";

const fetchProducts = () =>
  fetch(`http://localhost:3000/api/products`).then((res) => res.json());

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className={styles.main}>
      <Products products={products} />
    </main>
  );
}
