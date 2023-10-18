import { useRef, useState } from "react";
import { Modal } from "../../modal/component";
import styles from "../../add_btn/styles.module.css";

export const DeleteBtn = ({ id, title, update }) => {
  const [showModal, setModal] = useState(false);
  const inputRef = useRef(null);
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setModal(true);
        }}
      >
        <img src="assets/del.svg" alt="" />
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
              if (inputRef.current.value === title) {
                fetch(window.API + id, {
                  // mode: "no-cors",
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data))
                  .catch((err) => console.log(err))
                  .finally(() => {
                    update();
                    setModal(false);
                  });
              } else {
                inputRef.current.style.border = "1px solid red";
              }
            }}
          >
            <h2>Введите <b>{title}</b> (название рецепта) в поле ниже для подтверждения удаления</h2>
            <div className="input-container">
              <input id="tt" type="text" placeholder=" " ref={inputRef}/>
              <label htmlFor="tt">{title}</label>
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: '20px' }}>
              <button type="submit" className="btn access">
                Submit
              </button>
              <p className="subtext" style={{ paddingTop: "15px" }}>
                После нажатия рецепт будет удален
              </p>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
