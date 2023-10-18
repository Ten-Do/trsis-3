import { useState } from "react";
import { Modal } from "../../modal/component";
import styles from "../../add_btn/styles.module.css";

export const EditBtn = ({ data, update }) => {
  const [fieldCount, setFieldCount] = useState(data.ingredients?.length || 1);
  const [ingredients, setingredients] = useState(data.ingredients || [""]);
  const [name, setname] = useState(data.name || "");
  const [description, setdescription] = useState(data.description || "");
  const [instructions, setinstructions] = useState(data.instructions || "");
  const [showModal, setModal] = useState(false);
  const addTextField = () => {
    setFieldCount(fieldCount + 1);
    setingredients([...ingredients, ""]);
  };

  const handleFieldChange = (index, value) => {
    const updatedValues = [...ingredients];
    updatedValues[index] = value;
    setingredients(updatedValues);
  };
  const textFieldElements = [];
  for (let i = 0; i < fieldCount; i++) {
    textFieldElements.push(
      <div className="input-container" key={i}>
        <input
          id={i}
          type="text"
          value={ingredients[i]}
          onChange={(e) => handleFieldChange(i, e.target.value)}
          placeholder=" "
        />
        <label htmlFor={i}>Ингридиент {1 + i}</label>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setModal(true);
        }}
      >
        <img src="assets/edit.svg" alt="" />
      </div>
      {showModal && (
        <Modal
          hide={() => {
            setModal(false);
          }}
        >
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();

              fetch(
                window.API +
                  data.id,
                {
                  // mode: "no-cors",
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: data.id,
                    name: name,
                    description: description,
                    instructions: instructions,
                    ingredients: ingredients,
                  }),
                }
              )
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
                .finally(() => {
                  update();
                  setModal(false);
                });
            }}
          >
            <div className="input-container">
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder=" "
              />
              <label htmlFor="name">Название</label>
            </div>
            <div className="input-container">
              <textarea
                id="des"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                placeholder=" "
              ></textarea>
              <label id="des">Описание</label>
            </div>
            <div className="input-container">
              <textarea
                id="instr"
                value={instructions}
                onChange={(e) => setinstructions(e.target.value)}
                placeholder=" "
              ></textarea>
              <label htmlFor="instr">Инструкция</label>
            </div>

            {textFieldElements}
            <div className={styles.buttons}>
              <button
                type="button"
                className="btn accent"
                onClick={addTextField}
              >
                Add Ingredient Field
              </button>
              <button type="submit" className="btn access">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
