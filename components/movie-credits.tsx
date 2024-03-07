import styles from "./movie-credits.module.css";
import { API_URL } from "../app/constant";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json();
  return json;
}

export async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Credits</h2>
      <div className={styles.cards}>
        {credits.map((credit) => (
          <div className={styles['credit-wrapper']} key={credit.id}>
            <p className={styles['nick-name']}>{credit.character}</p>
            <img className={styles.img} src={credit.profile_path}></img>
            <p className={styles.name}>{credit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
