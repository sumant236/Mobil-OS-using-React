import styles from "./style.module.css";
const ListHeading = ({ heading }) => {
  return (
    <>
      <h3 className={styles.textStyle}>{heading}</h3>
    </>
  );
};

export default ListHeading;
