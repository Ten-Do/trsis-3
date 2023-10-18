"use client";
import { RecipeCard } from "./component";
import styles from "./componentPlaceholder.module.css";


export const RecipesPlaceholder = ({recipes, update}) => {
  return (
    <>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <RecipeCard data={recipe} key={recipe.id} update={update} />
        ))}
      </div>
    </>
  );
};
