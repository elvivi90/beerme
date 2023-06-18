import styles from "./product.module.css";

const fetchProduct = (id: string) =>
  fetch(`http://localhost:3000/api/stock-price/${id}`, {
    next: { revalidate: 5 },
  }).then((res) => res.json());

interface ProductDetailsProps {
  code: string;
  name: string;
}

export async function ProductDetail({ code, name }: ProductDetailsProps) {
  const product = await fetchProduct(code);

  const formatPrice = `$ ${(product.price / 100).toFixed(2)}`;
  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.nameAndPriceContainer}>
          <h5>{name}</h5>
          <h4>{formatPrice}</h4>
        </div>
        <h5 className={styles.stock}>stock : {product.stock}</h5>
      </div>
    </>
  );
}
