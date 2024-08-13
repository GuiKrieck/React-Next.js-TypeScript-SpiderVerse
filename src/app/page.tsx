import styles from "./page.module.scss"

import { getHeroesData } from "@/services/getData";
import HeroesList from "@/components/HeroesList";

export default async function Home() {

  const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes.data} />
    </main>
  );
}
