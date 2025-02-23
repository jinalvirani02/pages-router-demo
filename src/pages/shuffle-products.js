import styles from "../styles/product.module.css";

export default function ProductDetails({ product }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.heading}>Product Details</h2>
        <div className={styles.card}>
          <p>
            <strong>Random Number:</strong> {product.randomNum}
          </p>
          <p>
            <strong>ID:</strong> {product.id}
          </p>
          <p>
            <strong>UID:</strong> {product.uid}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Equipment:</strong> {product.equipment}
          </p>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://random-data-api.com/api/v2/appliances`);
  const product = await res.json();
  product.randomNum = Math.floor(Math.random() * 100);
  return { props: { product } };
}
