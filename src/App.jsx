import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./styles/App.module.css";

import "./styles/global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/larissa-pinheiro.png",
      name: "Larissa May",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-26 18:05:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/HenriqueMisael.png",
      name: "Henrique Misael",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "E aí, pessoal!  " },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      { type: "link", content: "testeteste.net" },
    ],
    publishedAt: new Date("2022-08-24 20:00:05"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {/* percorrendo/iterando os posts | não utilizo forEach, pois ele somente percorre o Array, mas não retorna nenhuma informação em tela */}
          {posts.map((post) => {
            return (
              <Post
                key={
                  post.id
                } /* key é necessária em componentes que preciso percorrer uma lista */
                author={post.author}
                content={post.content}
                published={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
