import { Avatar } from "./Avatar";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";

import styles from "../styles/Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/larissa-pinheiro.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Larissa May</strong>
              <time
                className={styles.time}
                title="24 de Agosto às 20:50h"
                dateTime="2022-08-24 20:50:02"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} weight="bold" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
