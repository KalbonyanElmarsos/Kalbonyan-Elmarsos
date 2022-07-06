import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../../components/mettups/form/Form";

const NewMeetups = () => {
  const history = useHistory();
  const onNewMeetup = async (newMeetup) => {
    try {
      const res = await fetch(
        "https://react-demo-37e14-default-rtdb.firebaseio.com/meetups29.json",
        { method: "POST", body: JSON.stringify(newMeetup) }
      );

      const resJSON = await res.json();
      // console.log(resJSON);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form onNewMeetup={onNewMeetup} />
    </div>
  );
};

export default NewMeetups;
