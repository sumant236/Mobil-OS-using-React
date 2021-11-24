import styles from "./style.module.css";
const ListItem = ({ item }) => {
  return (
    <>
      <li className={styles.textStyle}>{item}</li>
    </>
  );
};

export default ListItem;
