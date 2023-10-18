import styles from "./styles.module.css";

export const RecipeCard = ({
  data: { id, name, ingredients, instructions, description },
}) => {
  ingredients = ingredients || [];
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h2>
          {name} <span>🩶</span>
        </h2>
        <div>
          <p>
            <b>Instructions:</b>
            {" " + instructions}
          </p>
          <p>
            <b>Description:</b>
            {" " + description}
          </p>
          <div className={styles.ingredients}>
            {ingredients.map((ingredient) => (
              <div key={ingredient}>{ingredient}</div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.edit_btn}>
          <img src="assets/edit.svg" alt="" />
        </div>
        <div className={styles.del_btn}>
          <img src="assets/del.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
