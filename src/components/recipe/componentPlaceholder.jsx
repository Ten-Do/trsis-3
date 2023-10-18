"use client";
import { RecipeCard } from "./component";
import styles from "./componentPlaceholder.module.css";


export const RecipesPlaceholder = ({recipes}) => {
  return (
    <>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <RecipeCard data={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
};
