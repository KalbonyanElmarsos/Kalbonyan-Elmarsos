import { useState } from "react";
import useRequest from "../../custom-hooks/useRequest";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, AJAXRequest: postTask } = useRequest();

  const dataTransform = (taskText, requestedData) => {
    const generatedId = requestedData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    //  1) solution
    // const dataTransform = (requestedData) => {
    //   const generatedId = requestedData.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    // };
    postTask(
      {
        URL: "https://react-demo-37e14-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      }, // 2) solution
      dataTransform.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
