import { Avatar } from "./Avatar";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";

import { useState } from "react";

import styles from "../styles/Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  // o valor inicial do número de likes é 0; é sempre importante iniciar o estado com alguma informação que seja do mesmo tipo que a informação que será armazenada.
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // sempre que for atualizar uma informação e essa informação depende do valor que ela tinha anteriormente, é sempre importante fazer a atualização usando o padrão de função; o state aqui atua fazendo uma "fila" de atualizações, retornando o valor mais atual.
    setLikeCount((state) => {
      return state + 1;
    });
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          {/* qualquer evento no React deve receber como valor uma função; caso ele receba a execução da função, o código entrará em loop */}
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} weight="bold" />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
