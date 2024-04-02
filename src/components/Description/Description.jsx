








import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.container_description}>
      <h1 className={styles.name}>Sip Happens Café</h1>

      <p className={styles.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;