import styles from "../styles/Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </div>
  );
}

/*
outra forma de fazer, mas com mais código:

export function Avatar(props) {
  const hasBorder = props.hasBorder =/= false;

  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={props.src}
      />
    </div>
  );
*/
