import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "../styles/Post.module.css";

export function Post({ author, content }) {
  // estado = variáveis que o componente precisa monitorar; em caso de alteração, ele irá avisar ao React para mostrar as novas informações em tela

  // \/ estado para armazenar o conteúdo de um array de comentários
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  // estado para adicionar um novo comentário
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    new Date("2022-08-26 20:00:00"),
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date("2022-08-26 20:00:00"),
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault();

    // ...comments => spread operator: copia o valor existente dentro da variável
    setComments([...comments, newCommentText]);

    // após receber o comentário, retorno para o valor original (em branco)
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    // event.target.value => obtenho o valor de dentro do evento, no caso o onChange da textarea
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          className={styles.time}
          title={publishedDateFormatted}
          dateTime="2022-08-26 20:00:00"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        {/* onChange => vou monitorar toda vez que houver uma mudança no conteúdo dessa textarea (handle = usado para chamar uma função) */}
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
