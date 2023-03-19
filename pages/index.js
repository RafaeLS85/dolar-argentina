import DollarInfo from "../components/DollarInfo";
import useDollarBlue from "../hooks/useDollarBlue";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { error, data, loading } = useDollarBlue();

  if (error) return <h1 style={{color: 'red'}}>Error</h1>;
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Dolar Blue Argentina</h1>
          <div>{loading && <p>Loading</p>}</div>
          {data && <DollarInfo data={data}/>}
        </main>
      </div>
    );
}
