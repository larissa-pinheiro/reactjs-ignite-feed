import { Header } from "./components/Header";

import styles from "./styles/App.module.css";

import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>posts</main>
      </div>
    </>
  );
}
