import useDollarBlue from "../hooks/useDollarBlue";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { error, data, loading } = useDollarBlue();

  if (error) return <h1>Error</h1>;
  if (data)
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Dolar Blue Argentina</h1>
          <div>{loading && <p>Loading</p>}</div>
          <div>{data && <div>{JSON.stringify(data)}</div>}</div>
        </main>
      </div>
    );
}
