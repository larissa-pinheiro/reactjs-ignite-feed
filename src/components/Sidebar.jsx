import { PencilSimpleLine } from "phosphor-react"; // npm i phorphor-react > import no documento > ctrl+space dentro dos colchetes para visualizar os ícones
import { Avatar } from "./Avatar";
import styles from "../styles/Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://cdn.discordapp.com/attachments/849417858991783936/1012157495269142578/azulll.png"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/larissa-pinheiro.png" />

        <strong>Larissa May</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} weight="bold" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
