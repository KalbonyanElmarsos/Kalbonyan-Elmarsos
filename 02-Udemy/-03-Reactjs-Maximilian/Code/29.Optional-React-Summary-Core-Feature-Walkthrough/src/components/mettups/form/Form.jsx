import React, { useRef } from "react";
import Card from "../../../UI/card/Card";
import styles from "./NewMeetupForm.module.css";

const Form = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const titleValue = titleRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const imageValue = imageRef.current.value;
    const addressValue = addressRef.current.value;

    const newOne = {
      title: titleValue,
      description: descriptionValue,
      image: imageValue,
      address: addressValue,
    };
    props.onNewMeetup(newOne);
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="text"
            required
            id="description"
            ref={descriptionRef}
          />
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
