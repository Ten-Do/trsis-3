import { DeleteBtn } from "../buttons/deleteBtn/component";
import { EditBtn } from "../buttons/editBtn/component";
import styles from "./styles.module.css";

export const RecipeCard = ({
  data: { id, name, ingredients, instructions, description },
  update,
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
        <EditBtn
          update={update}
          data={{ id, name, ingredients, instructions, description }}
        />
        <DeleteBtn id={id} title={name} update={update} />
      </div>
    </div>
  );
};
