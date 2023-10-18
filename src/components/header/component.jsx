import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={styles.header_container}
    >
      <div className={styles.header_logo}>
        <p className={styles.header_logo_title}>Global Kitchen Delights</p>
      </div>
    </div>
  );
};
